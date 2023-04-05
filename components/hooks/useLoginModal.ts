import { LoginModalStore } from "../../typings"
import { create } from "zustand"

const useLoginModal = create<LoginModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}))

export default useLoginModal;