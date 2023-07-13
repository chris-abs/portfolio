import Image from 'next/image';

const HomeSection = () => {
	return (
		<div>
			<main>
				<section id="home" className="min-h-screen overflow-x-hidden">
					<div className="flex flex-col items-center justify-center h-screen z-1">
						<h2 className="heading text-5xl py-2 md:text-6xl z-10 ">
							Chris Abbott
						</h2>
						<div className="overflow-x-hidden">
							<Image
								fill
								src="/belossom.jpg"
								alt="belossom tree"
								className="background z-0 object-cover"
							/>
							{/* <span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span> */}
						</div>
						<h3 className="heading text-2xl py-2  md:text-3xl z-10">
							I build things for the web.
						</h3>
					</div>
				</section>
			</main>
		</div>
	);
};

export default HomeSection;
