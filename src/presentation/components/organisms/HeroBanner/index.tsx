"use client";

// -- core
import React, { useState, useEffect, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
	AnimatePresence,
	motion,
	useScroll,
	useTransform,
} from "framer-motion";

// -- style
import style from "./style.module.scss";

// -- utils
import { slideLoop } from "@utils/animation";

// -- atoms
import Button from "@atoms/Button";

// -- data
const textItems: string[] = [
	"TB & HIV sering tanpa gejala di awal — skrining adalah kuncinya",
	"Deteksi dini = pengobatan lebih efektif & penularan bisa dicegah",
	"Tes TB & HIV gratis di Puskesmas (hasil rahasia & dilindungi hukum)",
	"Satu pasien TB aktif bisa menulari 10–15 orang per tahun",
];

const HeroBanner: React.FC = () => {
	const [index, setIndex] = useState<number>(0);
	const [enableParallax, setEnableParallax] = useState<boolean>(true);
	const container = useRef<HTMLDivElement | null>(null);
	const taglineRef = useRef<HTMLHeadingElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end start"],
	});
	const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);
	const [paddingBottom, setPaddingBottom] = useState<number>(0);

	useEffect(() => {
		// Disable parallax for mobile devices
		const handleResize = () => {
			setEnableParallax(window.innerWidth > 768);
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIndex((prevIndex) => (prevIndex + 1) % textItems.length);
		}, 3000);

		return () => clearTimeout(timer);
	}, [index]);

	useEffect(() => {
		if (taglineRef.current) {
			const height = taglineRef.current.offsetHeight;
			setPaddingBottom(height);
		}
	}, [index]);

	return (
		<section className={style.banner} id="apa-itu-tb" ref={container}>
			<div className="container">
				{enableParallax ? (
					<motion.div style={{ y }} className={style.img}>
						<LazyLoadImage
							src="/bg/hero-banner.png"
							alt="hero-banner"
							className={style.imgEl}
							width={1400}
							height={900}
						/>
					</motion.div>
				) : (
					<div className={style.img}>
						<LazyLoadImage
							src="/bg/hero-banner.png"
							alt="hero-banner"
							className={style.imgEl}
							width={1400}
							height={900}
						/>
					</div>
				)}
				<div className={style.content}>
					<h1 className={style.title}>Sadar TB & HIV Mulai dari Skrining.</h1>
					<h2
						className={style.tagline}
						style={{ paddingBottom: `${paddingBottom}px` }}
					>
						<AnimatePresence>
							<motion.span
								variants={slideLoop}
								key={index}
								initial="enter"
								animate="center"
								exit="exit"
								transition={{
									y: { type: "spring", stiffness: 100, damping: 30 },
									opacity: { duration: 0.3 },
								}}
								ref={taglineRef}
							>
								{textItems[index]}
							</motion.span>
						</AnimatePresence>
					</h2>
					<Button href="#skrining">Mulai Skrining Sekarang</Button>
				</div>
			</div>
		</section>
	);
};

export default HeroBanner;
