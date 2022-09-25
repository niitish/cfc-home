import Image from "next/image";
import { hero } from "../../types/types";

const Hero: React.FC<hero> = ({
	title,
	desc,
	children,
	bgSrc,
	imgDesc,
	className,
}) => {
	return (
		<div className={`hero min-h-screen relative ${className}`}>
			<Image
				src={bgSrc}
				alt="hero"
				layout="fill"
				objectFit="cover"
				objectPosition="center"
			/>
			<div className="hero-overlay z-10 bg-hero">
				<div className="hero-content flex-col text-center px-3 mx-auto h-full">
					<h1 className="xl:text-7xl lg:text-6xl text-5xl font-bold text-gray-200">
						{title}
					</h1>
					<p className="lg:text-3xl text-2xl font-normal text-gray-300">
						{desc}
					</p>
					{children}
				</div>
				<p className="absolute bottom-5 right-3 glass w-fit px-2 py-1 rounded-md">
					{imgDesc}
				</p>
			</div>
		</div>
	);
};

export default Hero;
