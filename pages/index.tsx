import type { NextPage } from "next";
import Head from "next/head";
import { Link } from "../components/UI/";
import { Hero } from "../components/UI/";
import hero from "../images/bg-sih.webp";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Home | CFC</title>
			</Head>
			<Hero
				bgSrc={hero}
				imgDesc="Team KRYSNL @ SIH Finals"
				title="A community that learns together, grows together."
				desc="We are a student-led community of developers @GEC Raipur exploring our paths in tech."
			>
				<>
					<div className="mt-3">
						<Link href="/" className="btn btn-primary mx-2">
							Join Us
						</Link>
						<Link href="/events" className="btn btn-secondary mx-2">
							Explore Events
						</Link>
					</div>
				</>
			</Hero>
		</>
	);
};

export default Home;
