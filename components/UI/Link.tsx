import { default as NL } from "next/link";
import { link } from "../../types/types";

const Link: React.FC<link> = ({ href, className, children }) => {
	return (
		<NL href={href}>
			<a className={className}>{children}</a>
		</NL>
	);
};

export default Link;
