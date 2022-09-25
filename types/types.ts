import { Attributes } from "react";
import { StaticImageData } from "next/image";

// types
export type layoutProps = {
	children: JSX.Element;
};

export type link = {
	href: string;
	children: string | JSX.Element;
	className?: string;
	key?: Attributes["key"];
};

export type sizeHook = {
	height?: number;
	width?: number;
};

// interfaces
export interface hero {
	title: string;
	desc: string;
	children: JSX.Element;
	bgSrc: StaticImageData;
	imgDesc: string;
	className?: string;
}

export interface heroSec extends hero {
	imgRight?: boolean;
}
