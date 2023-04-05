import { ModalStore } from "../../typings"
import { create } from "zustand"

const useRentModal = create<ModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}))

export default useRentModal;