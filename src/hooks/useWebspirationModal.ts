import { create } from 'zustand'

interface WebspirationModalStore {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

const useWebspirationModal = create<WebspirationModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))

export default useWebspirationModal
