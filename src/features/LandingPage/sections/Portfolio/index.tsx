import Heading from '@/components/Heading';
import Project from '@/components/Project';

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
						<Project title="Meal-Planner" />
						<Project title="Quibbler" />
						<Project title="Webspiration" />
					</div>
				</section>
			</main>
		</div>
	);
};

export default PortfolioSection;
