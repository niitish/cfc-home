import { Html, Head, Main, NextScript } from "next/document";

const Document: React.FC = () => {
	return (
		<Html lang="en">
			<Head>
				<meta name="description" content="Home | Code for Community" />
				<link rel="icon" href="/logo.svg" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
