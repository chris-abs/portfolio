import Heading from '@/components/Heading'
import Project from '@/components/Project'

const PortfolioSection = () => {
  return (
    <div>
      <main className="bg-light px-10 pb-32 md:px-20 lg:px-40 section scrollspy">
        <section id="portfolio">
          <nav className="pt-32 flex justify-center">
            <Heading title="Portfolio" />
          </nav>
          <div>
            <p className="text-md py-10 leading-8 text-description">
              Since the beginning of my journey as a developer, I&apos;ve done
              remote work for
              <span className="text-amber_400"> companies </span>
              and collaborated with talanted people to create digital products
              for all kinds of business use. As well as this, I have designed
              and created many of my own personal
              <span className="text-amber_400"> projects, </span>some of which,
              are listed below!
            </p>
          </div>
          <div className="portfolio">
            <Project
              title="Meal-Planner"
              description="A project created to minimalise the burden of meal-planning. Offering a wide variety of meals available any day of the week."
              src=""
              alt="meal-planner"
            />
            <Project
              title="Quibbler"
              description="A chat messaging service providing instant message updates, group chatting and image sharing."
              src="/avatar.jpeg"
              alt="quibbler"
            />
            {/* <Project
              title="Webspiration"
              description="A chat messaging service providing instant message updates, group chatting and image sharing."
              src="/avatar.jpeg"
              alt="quibbler"
            /> */}
          </div>
        </section>

        <section className="container">
          <div className="card">
            <div className="img-box">
              <img src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80" />
            </div>
            <div className="content">
              <h2>Meal-Planner</h2>
              <p>
                A project created to minimalise the burden of meal-planning.
                Offering a wide variety of meals available any day of the week.
              </p>
              <a href="">Read More</a>
            </div>
          </div>
          <div className="card">
            <div className="img-box">
              <img src="https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80" />
            </div>
            <div className="content">
              <h2>Quibbler</h2>
              <p>
                A chat messaging service providing instant message updates,
                group chatting and image sharing.
              </p>
              <a href="">Read More</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default PortfolioSection
