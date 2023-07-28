import Button from '@/components/Button'
import Card from '@/components/Card'
import Heading from '@/components/Heading'
import Modal from '@/components/modal/Modal'
import Section from '@/components/Section'
import useQuibblerModal from '@/hooks/useQuibblerModal'

const PortfolioSection = () => {
  const quibblerModal = useQuibblerModal()
  return (
    <>
      <Section id="portfolio" title="Portfolio" grey>
        <p className="text-md leading-8 text-description">
          Since the beginning of my journey as a developer, I&apos;ve done
          remote work for
          <span className="text-amber_400"> companies </span>
          and collaborated with talanted people to create digital products for
          all kinds of business use. As well as this, I have designed and
          created many of my own personal
          <span className="text-amber_400"> projects, </span>some of which, are
          listed below!
        </p>
        <div className="container grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 relative grid justify-center place-items-center lg:mx-auto flex-wrap gap-6 pb-24 md:pb-0">
          <div className="h-[400px]">
            <Card
              title="Meal-Planner"
              description="A project created to minimalise the burden of meal-planning.
              Offering a wide variety of meals available any day of the week."
              src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80"
              onClick={() => {}}
            />
          </div>
          <div className="h-[400px]">
            <Card
              title="Quibbler"
              description="A chat messaging service providing instant message updates,
              group chatting and image sharing."
              src="/images/quibbler/messages.png"
              onClick={quibblerModal.onOpen}
            />
          </div>

          <div className="h-[400px]">
            <Card
              title="Webspiration"
              description="A project dedicated to taking contentious UI/UX designs from all across the web and creating something better."
              src="https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
              onClick={() => {}}
            />
          </div>
        </div>
      </Section>
    </>
  )
}

export default PortfolioSection
