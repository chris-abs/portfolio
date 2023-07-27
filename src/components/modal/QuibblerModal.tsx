import useProjectModal from '@/hooks/useQuibblerModal'
import { useCallback, useState } from 'react'
import Modal from './Modal'
import Heading from '../Heading'
import Carousel from '../carousel/Carousel'

interface QuibblerModalProps {}

const QuibblerModal: React.FC<QuibblerModalProps> = () => {
  const projectModal = useProjectModal()
  const onSubmit = () => {
    window.open('https://quibbler.chrisabbott.dev/')
  }

  const slides = [
    {
      src: '/images/quibbler/login.png',
      alt: 'Quibbler login page',
    },
    {
      src: '/images/quibbler/users.png',
      alt: 'Quibbler users page',
    },
    {
      src: '/images/quibbler/full-messages.png',
      alt: 'Quibbler active conversation',
    },
  ]

  const bodyContent = (
    <section>
      <article className="border-b border-gray-200 pb-4 flex justify-center">
        <Carousel data={slides} />
      </article>
      <article className="py-4">
        <p className="text-description">
          Introducing Quibbler, a dynamic messaging service. Offering real-time
          updates and notifications, for instant communication. Share images
          effortlessly, engage in dynamic group or private chats and customise
          your profile. All secured by end to end authentication. Deployed and
          ready for your seamless and immersive messaging experience,{' '}
          <span className="text-amber_400">&apos;VISIT QUIBBLER&apos;</span>{' '}
          below.
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
            <span className="font-semibold text-amber_400">
              Prisma (MongoDB)
            </span>{' '}
            - an efficient and scaleable database solution
          </li>
          <li>
            <span className="font-semibold text-amber_400">NextAuth</span> -
            managing user authentication and protecting sensitive data
          </li>
          <li>
            <span className="font-semibold text-amber_400">Pusher</span> - used
            for real time messaging and notifications
          </li>
          <li>
            <span className="font-semibold text-amber_400">Cloudinary</span> -
            for image uploading{' '}
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
      title="Quibbler"
      label="visit quibbler"
      body={bodyContent}
    />
  )
}

export default QuibblerModal
