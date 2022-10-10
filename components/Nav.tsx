import Image from "next/image";
import { Link } from "./UI";
import logo from "../public/logo.svg";
import { useEffect, useRef } from "react";
import { useSize } from "../hooks";
import { HiOutlineMenuAlt3, HiDotsHorizontal } from "react-icons/hi";

const navItems: { name: string; link: string }[] = [
	{ name: "About", link: "/about" },
	{ name: "Events", link: "/events" },
	{ name: "Directory", link: "/directory" },
	{ name: "Scrapbook", link: "/scrapbook" },
	{ name: "Blog", link: "/blog" },
	{ name: "Join Us", link: "/join" },
];

const Nav: React.FC = () => {
	const { width } = useSize();
	const navRef = useRef<HTMLHeadElement>(null);

	useEffect(() => {
		const toAdd = ["header-initial", "backdrop-blur-[8px]", "bg-slate-900/70"];
		const toRemove = ["scale-105"];
		const onScroll = () => {
			if (document.documentElement.scrollTop > 1) {
				navRef.current?.classList.add(...toAdd);
				navRef.current?.classList.remove(...toRemove);
			} else {
				navRef.current?.classList.add(...toRemove);
				navRef.current?.classList.remove(...toAdd);
			}
		};

		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return (
		<header
			className="navbar fixed top-0 z-50 border-b border-[#303030] border-opacity-20 transition-transform duration-300 scale-105"
			ref={navRef}
		>
			{/* hamburger menu -> on small viewport */}
			{width && width < 1024 ? (
				<>
					<nav className="navbar-start">
						<div className="dropdown">
							<label
								tabIndex={0}
								className="btn btn-ghost btn-circle lg:hidden"
							>
								<HiOutlineMenuAlt3 size="1.5rem" />
							</label>
							<div
								tabIndex={0}
								className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-200 rounded-box w-max"
							>
								{navItems.slice(0, 4).map((item, index) => (
									<Link key={index} href={item.link} className="p-2 text-black">
										{item.name}
									</Link>
								))}
							</div>
						</div>
					</nav>

					<nav className="navbar-center">
						<Link
							href="/"
							className="flex lg:hidden justify-center items-center gap-2 cursor-pointer"
						>
							<>
								<Image src={logo} alt="logo" className="w-6 h-6" />
								<span className="text-3xl text-gray-100">CFC</span>
							</>
						</Link>
					</nav>

					<nav className="navbar-end lg:hidden">
						<div className="dropdown dropdown-end">
							<label tabIndex={0} className="btn btn-ghost btn-circle">
								<HiDotsHorizontal size="1.5rem" />
							</label>
							<div
								tabIndex={0}
								className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-200 rounded-box w-max"
							>
								{navItems.slice(4).map((item, index) => (
									<Link key={index} href={item.link} className="p-2 text-black">
										{item.name}
									</Link>
								))}
							</div>
						</div>
					</nav>
				</>
			) : (
				<>
					<nav className="navbar-start">
						<Link
							href="/"
							className="hidden lg:flex justify-center items-center gap-2 cursor-pointer"
						>
							<>
								<Image src={logo} alt="logo" className="w-12 h-12" />
								<span className="text-3xl text-gray-100">CFC</span>
							</>
						</Link>
					</nav>

					<nav className="navbar-center hidden lg:flex uppercase">
						<div className="menu menu-horizontal gap-6 p-0">
							{navItems.slice(0, 4).map((item, index) => (
								<Link key={index} href={item.link} className="p-2">
									{item.name}
								</Link>
							))}
						</div>
					</nav>

					<nav className="navbar-end lg:flex hidden">
						{navItems.slice(4).map((item, index) => (
							<Link
								key={index}
								href={item.link}
								className="btn btn-sm glass mx-2 text-base font-normal"
							>
								{item.name}
							</Link>
						))}
					</nav>
				</>
			)}
		</header>
	);
};

export default Nav;
