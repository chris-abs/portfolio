import { create } from 'zustand'

interface MPModalStore {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

const useMPModal = create<MPModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))

export default useMPModal
