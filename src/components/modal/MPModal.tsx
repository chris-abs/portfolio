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
      src: '/images/mp/register.png',
      alt: 'Meal-Planner register modal',
    },
    {
      src: '/images/mp/login.png',
      alt: 'Meal-Planner login modal',
    },
    {
      src: '/images/mp/menu.png',
      alt: 'Meal-Planner menu',
    },
    {
      src: '/images/mp/menu-mobile.png',
      alt: 'Meal-Planner menu mobile view',
    },
    {
      src: '/images/mp/favourites.png',
      alt: 'Meal-Planner favourites filter',
    },
    {
      src: '/images/mp/shopping-list.png',
      alt: 'Meal-Planner favourites filter',
    },
  ]

  const bodyContent = (
    <section>
      <article className="border-b border-gray-200 pb-4 flex justify-center">
        <Carousel data={slides} />
      </article>
      <article className="py-4">
        <p className="text-description pb-2">
          Meal-Planner is the go-to application for simplifying meal planning
          and grocery shopping. With seamless authentication and authorisation,
          users can create households to collaborate with family members or
          roommates. Together, users can easily create and customize meal plans,
          selecting dishes for each day of the week. One of Meal-Planner&apos;s
          standout features is its automatic generation of shopping lists. Once
          a meal plan is finalised, the app compiles a comprehensive list of
          ingredients needed for selected meals, streamlining the shopping
          process. Accessible across multiple devices, Meal-Planner ensures that
          users can manage their meal plans and shopping lists anytime,
          anywhere.
          {/* <span className="text-amber_400">
            &apos;VISIT Meal-Planner&apos;
          </span>{' '}
          below. */}
        </p>
        <p className="text-description">
          Meal-Planner is currently undergoing a comprehensive backend rewrite,
          transitioning away from using Prisma as an ORM to manage MongoDB and
          instead using a native MongoDB interaction with Go. Check back soon to
          keep up with the latest!
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
