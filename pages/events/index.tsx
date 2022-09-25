import Head from "next/head";
import { Hero, HeroSec, Link } from "../../components/UI";
import hero from "../../images/bg-gs1.webp";
import heroSec1 from "../../images/heroSec1.webp";
import heroSec2 from "../../images/heroSec2.webp";
import heroSec3 from "../../images/heroSec3.webp";
import heroSec4 from "../../images/heroSec4.webp";

const Events: React.FC = () => {
	return (
		<>
			<Head>
				<title>Events | CFC</title>
			</Head>
			<div className="snap-y snap-mandatory overflow-scroll h-screen">
				<Hero
					title="What's a community without some events?"
					desc="Take part in our contests, guidance sessions by industry experts and
					fun activites. Hosted by the Community, for the Community."
					bgSrc={hero}
					imgDesc="Guidance Session by SDEs at Nokia & Jio"
					className="snap-center"
				>
					<>
						<Link href="/events/list" className="btn btn-secondary mx-2">
							Check Events
						</Link>
					</>
				</Hero>
				<HeroSec
					bgSrc={heroSec1}
					imgDesc=""
					className="snap-center bg-gray-800"
					imgRight={true}
					title="Meet & Greet"
					desc="Every year, we conduct an introductory session for the CSE Freshers, helping them explore the various opportunities available to them in the college and beyond."
				>
					<Link href="/events/list" className="btn btn-secondary">
						Check Events
					</Link>
				</HeroSec>
				<HeroSec
					bgSrc={heroSec2}
					imgDesc=""
					className="snap-center bg-stone-800"
					imgRight={false}
					title="Alma Matters"
					desc="An evergoing get-to-know cum interview session with the alumni of the college, where they share their experiences and advice with the current students."
				>
					<Link href="/events/list" className="btn btn-secondary">
						Check Events
					</Link>
				</HeroSec>
				<HeroSec
					bgSrc={heroSec3}
					imgDesc=""
					className="snap-center bg-zinc-800"
					imgRight={true}
					title="Guidance Sessions"
					desc="A series of sessions conducted by industry experts and GEC alumni, where they advice students on competitive exams, internships and placements."
				>
					<Link href="/events/list" className="btn btn-secondary">
						Check Events
					</Link>
				</HeroSec>
				<HeroSec
					bgSrc={heroSec4}
					imgDesc=""
					className="snap-center bg-slate-800"
					imgRight={false}
					title="Hack"
					desc="Hackathons conducted in parallel with SIH & HacktoberFest. Hosted by the Community, for the Community."
				>
					<Link href="/events/list" className="btn btn-secondary">
						Check Events
					</Link>
				</HeroSec>
			</div>
		</>
	);
};

export default Events;
