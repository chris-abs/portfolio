import { useState, useEffect, useCallback } from 'react'
import { IoMdClose } from 'react-icons/io'
import Button from '../Button'

interface ModalProps {
  isOpen?: boolean
  onClose: () => void
  onSubmit: any
  title?: string
  body?: React.ReactElement
  footer?: React.ReactElement
  label: string
  disabled?: boolean
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  label,
  disabled,
}) => {
  const [showModal, setShowModal] = useState(isOpen)

  useEffect(() => {
    setShowModal(isOpen)
  }, [isOpen])

  const handleClose = useCallback(() => {
    if (disabled) {
      return
    }

    setShowModal(false)
    setTimeout(() => {
      onClose()
    }, 300)
  }, [disabled, onClose])

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return
    }

    onSubmit()
  }, [disabled, onSubmit])

  if (!isOpen) {
    return null
  }
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-scroll overflow-x-hidden bg-neutral-800/70 outline-none focus:outline-none">
        <div className="relative mx-auto my-6 h-auto w-full md:w-5/6 lg:w-4/6 xl:w-4/5 2xl:w-3/5 ">
          <div
            className={`translate h-full duration-300 
                  ${showModal ? 'translate-y-0' : 'translate-y-full'} 
                  ${showModal ? 'opacity-100' : 'opacity-0'}
                  `}
          >
            <div className="translate relative flex h-full  flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none md:h-auto lg:h-auto">
              <div className="border-b[1px] mt-[50px] md:mt-0 relative flex items-center justify-center rounded-t p-6">
                <button
                  onClick={handleClose}
                  className="p-d absolute left-9 border-0 transition hover:opacity-70"
                >
                  <IoMdClose size={18} />
                </button>
                <div className="text-lg font-semibold">{title}</div>
              </div>
              <div className="relative p-6 flex-auto ">{body}</div>
              <div className="flex flex-col gap-2 px-6 py-2">
                <div className="flex flex-row items-center gap-4 w-full">
                  <Button
                    onClick={handleSubmit}
                    label={label}
                    disabled={disabled}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
