import Link from "next/link";
import {
	RiFacebookLine,
	RiInstagramLine,
	RiLinkedinLine,
} from "react-icons/ri";

const Footer: React.FC = () => {
	return (
		<div className="mx-auto xl:px-20 lg:px-12 sm:px-6 px-4 py-12">
			<div className="flex flex-col items-center justify-center">
				<h2>Code for Community</h2>
				<div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-8">
					<Link href="/about" className="text-base text-gray-800">
						About
					</Link>
					<Link href="/events" className="text-base text-gray-800">
						Event
					</Link>
					<Link href="/directory" className="text-base text-gray-800">
						Directory
					</Link>
					<Link href="/scrapbook" className="text-base text-gray-800">
						Scrapbook
					</Link>
				</div>
				<div className="flex items-center gap-x-8 mt-6">
					<button
						aria-label="facebook"
						className="p-1 bg-slate-700 rounded-full"
					>
						<RiFacebookLine className="text-2xl" color="white" />
					</button>
					<button
						aria-label="instagram"
						className="p-1 bg-slate-700 rounded-full"
					>
						<RiInstagramLine className="text-2xl" color="white" />
					</button>
					<button
						aria-label="linkedin"
						className="p-1 bg-slate-700 rounded-full"
					>
						<RiLinkedinLine className="text-2xl" color="white" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Footer;
