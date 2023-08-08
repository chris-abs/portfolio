import useMPModal from '@/hooks/useMPModal'
import Modal from './Modal'
import Heading from '../Heading'
import Carousel from '../carousel/Carousel'

interface MPModalProps {}

const MPModal: React.FC<MPModalProps> = () => {
  const mpModal = useMPModal()
  const onSubmit = () => {
    window.open('https://mp.chrisabbott.dev/')
  }

  const slides = [
    {
      src: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80',
      alt: 'Meal-Planner login page',
    },
    {
      src: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80',
      alt: 'Meal-Planner',
    },
    {
      src: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80',
      alt: 'Meal-Planner ',
    },
  ]

  const bodyContent = (
    <section>
      <article className="border-b border-gray-200 pb-4 flex justify-center">
        <Carousel data={slides} />
      </article>
      <article className="py-4">
        <p className="text-description">
          Meal-planner description
          {/* <span className="text-amber_400">
            &apos;VISIT Meal-Planner&apos;
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
            <span className="font-semibold text-amber_400">Vercel</span> -
            website deployment
          </li>
        </ul>
      </article>
    </section>
  )

  return (
    <Modal
      isOpen={mpModal.isOpen}
      onClose={mpModal.onClose}
      onSubmit={onSubmit}
      title="Meal-Planner"
      label="visit Meal-Planner"
      body={bodyContent}
      disabled
    />
  )
}

export default MPModal
