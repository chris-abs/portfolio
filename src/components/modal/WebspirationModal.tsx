import useProjectModal from '@/hooks/useWebspirationModal'
import Modal from './Modal'
import Heading from '../Heading'
import Carousel from '../carousel/Carousel'

interface WebspirationModalProps {}

const WebspirationModal: React.FC<WebspirationModalProps> = () => {
  const projectModal = useProjectModal()
  const onSubmit = () => {
    window.open('https://webspiration.chrisabbott.dev/')
  }

  const slides = [
    {
      src: 'https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80',
      alt: 'Webspiration login page',
    },
    {
      src: 'https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80',
      alt: 'Webspiration users page',
    },
    {
      src: 'https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80',
      alt: 'Webspiration active conversation',
    },
  ]

  const bodyContent = (
    <section>
      <article className="border-b border-gray-200 pb-4 flex justify-center">
        <Carousel data={slides} />
      </article>
      <article className="py-4">
        <p className="text-description">
          Webspiration description
          {/* <span className="text-amber_400">
            &apos;VISIT Webspiration&apos;
          </span>{' '}
          below. */}
        </p>
      </article>
      <article>
        <Heading title="Tech Stack" />
        <ul className="text-description">
          <li>
            <span className="font-semibold text-amber_400">NextJS 13</span> -
            utilising the app router and dynamic page rendering
          </li>
          <li>
            <span className="font-semibold text-amber_400">React</span> -
            creating reusable components for the backbone of the application
          </li>
          <li>
            <span className="font-semibold text-amber_400">Tailwindcss</span> -
            for creating a modern interface and a polished UI
          </li>
          <li>
            <span className="font-semibold text-amber_400">Vercel</span> -
            website deployment
          </li>
        </ul>
      </article>
    </section>
  )

  return (
    <Modal
      isOpen={projectModal.isOpen}
      onClose={projectModal.onClose}
      onSubmit={onSubmit}
      title="Webspiration"
      label="visit Webspiration"
      body={bodyContent}
      disabled
    />
  )
}

export default WebspirationModal
