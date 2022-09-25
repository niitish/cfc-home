import Image from "next/image";
import { heroSec } from "../../types/types";

const HeroSec: React.FC<heroSec> = ({
	title,
	desc,
	children,
	bgSrc,
	className,
	imgRight,
}) => {
	const reorder = imgRight ? "md:order-2" : "";
	const textalign = imgRight ? "md:text-right text-left" : "text-left";

	return (
		<div className={`hero min-h-screen ${className}`}>
			<div className="hero-content text-center px-6 md:flex-row flex-col">
				<div className={`flex-1 flex items-center justify-center ${reorder}`}>
					<Image
						src={bgSrc}
						alt="hero"
						layout="intrinsic"
						width={500}
						height={500}
						objectFit="cover"
						objectPosition="center"
						className="rounded-2xl"
					/>
				</div>
				<div className={`flex-1 ${textalign}`}>
					<h1 className="xl:text-6xl lg:text-5xl text-4xl font-bold text-gray-300">
						{title}
					</h1>
					<p className="lg:text-2xl text-xl font-normal text-gray-400 my-4">
						{desc}
					</p>
					{children}
				</div>
			</div>
		</div>
	);
};

export default HeroSec;
