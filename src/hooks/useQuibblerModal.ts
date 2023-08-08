import { create } from 'zustand'

interface QuibblerModalStore {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

const useQuibblerModal = create<QuibblerModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))

export default useQuibblerModal
