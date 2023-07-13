import Image from 'next/image';

const HomeSection = () => {
	return (
		<div>
			<main>
				<section id="home" className="min-h-screen overflow-x-hidden">
					<div className="flex flex-col items-center justify-center h-screen z-1">
						<h2 className="heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl md:py-1 lg:py-2 z-10 ">
							Chris Abbott
						</h2>
						<Image
							fill
							src="/belossom.jpg"
							alt="belossom tree"
							className="object-cover"
						/>
						<div className="overflow-x-none background z-10 relative">
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
							<span></span>
							<span></span>
						</div>
						<h3 className="heading text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl z-10">
							I build things for the web.
						</h3>
					</div>
				</section>
			</main>
		</div>
	);
};

export default HomeSection;
