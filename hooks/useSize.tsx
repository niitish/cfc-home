import { useState, useEffect } from "react";
import { sizeHook } from "../types/types";

const useSize = () => {
	const [size, setSize] = useState<sizeHook>({
		height: undefined,
		width: undefined,
	});

	useEffect(() => {
		const updateDimension = () => {
			setSize({
				height: window.innerHeight,
				width: window.innerWidth,
			});
		};
		updateDimension();
		window.addEventListener("resize", updateDimension);
		return () => window.removeEventListener("resize", updateDimension);
	}, []);

	return size;
};

export default useSize;
