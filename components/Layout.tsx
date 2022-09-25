import { Nav } from "./";
import Footer from "./Footer";
import { layoutProps } from "../types/types";

const Layout: React.FC<layoutProps> = ({ children }) => {
	return (
		<>
			<Nav />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
