import { ModalStore } from "../../typings"
import { create } from "zustand"

const useRegisterModal = create<ModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}))

export default useRegisterModal