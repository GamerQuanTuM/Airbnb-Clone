import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";
import { SafeUser } from "@/typings"
import useLoginModal from "./useLoginModal";


type Props = {
    listingId: string;
    currentUser?: SafeUser | null
}


const useFavourite = ({ listingId, currentUser }: Props) => {
    const router = useRouter()
    const loginModal = useLoginModal()

    const hasFavourited = useMemo(() => {
        const list = currentUser?.favoriteIds || []
        return list.includes(listingId)
    }, [currentUser, listingId])

    const toggleFavourite = useCallback(
        async (e: React.MouseEvent<HTMLDivElement>) => {
            e.stopPropagation()

            if (!currentUser) return loginModal.onOpen()

            try {
                let request;

                if (hasFavourited) {
                    request = () => axios.delete(`/api/favorites/${listingId}`)
                } else {
                    request = () => axios.post(`/api/favorites/${listingId}`)
                }

                const requestAxios = await request();
                router.refresh()
                if (requestAxios.config.method === "post") {
                    toast.success('Liked')
                } else if (requestAxios.config.method === "delete") {
                    toast.success("Disliked")
                } else {
                    toast.error("Something went wrong")
                }

            } catch (error: any) {
                toast.error(error.message)
            }
        },
        [currentUser, hasFavourited, listingId, loginModal, router],
    )
    return { hasFavourited, toggleFavourite }
}

export default useFavourite