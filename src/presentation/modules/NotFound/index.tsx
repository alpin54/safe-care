"use client";

// -- core
import React, { useEffect } from "react";

// -- organisms
import NotFoundSection from "@organisms/NotFoundSection";

type LocomotiveScrollInstance = {
	destroy: () => void;
};

const NotFound: React.FC = () => {
	useEffect(() => {
		let locomotiveScroll: LocomotiveScrollInstance | null = null;

		const initLocomotiveScroll = async () => {
			try {
				const LocomotiveScrollModule = await import("locomotive-scroll");
				const LocomotiveScroll = LocomotiveScrollModule.default as unknown as new (options: {
					el: HTMLElement;
					smooth: boolean;
				}) => LocomotiveScrollInstance;
				const scrollContainer = document.querySelector("[data-scroll-container]");

				if (!(scrollContainer instanceof HTMLElement)) {
					return;
				}

				locomotiveScroll = new LocomotiveScroll({
					el: scrollContainer,
					smooth: true,
				});

				setTimeout(() => {
					document.body.style.cursor = "default";
					window.scrollTo(0, 0);
				}, 1000);
			} catch (error) {
				console.error("Error loading Locomotive Scroll:", error);
			}
		};

		initLocomotiveScroll();

		return () => {
			if (locomotiveScroll) {
				locomotiveScroll.destroy();
			}
		};
	}, []);

	return <NotFoundSection />;
};

export default NotFound;
