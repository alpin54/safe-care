"use client";

// -- core
import React, { useEffect, useLayoutEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// -- style
import style from "./style.module.scss";

// -- utils
import { menuSlide } from "@utils/animation";

// -- atoms
import Curve from "@atoms/Curve";
import SystemIcon from "@atoms/SystemIcon";
import Magnetic from "@atoms/Magnetic";

// -- molecules
import HeaderItem from "@molecules/HeaderItem";

// -- interface
import { IListData } from "../Header/type";

// -- data nav list
const navItems: IListData[] = [
	{ title: "Apa Itu TB", to: "#apa-itu-tb" },
	{ title: "Kenali Gejala", to: "#kenali-gejala" },
	{ title: "Skrining TB", to: "#skrining" },
];

// -- data sosmed
const sosmedList: IListData[] = [
	{ title: "instagram", to: "https://instagram.com" },
	{
		title: "whatsapp",
		to: "https://api.whatsapp.com/send/?phone=6281299991023&text=Halo+BKK+Bandung&type=phone_number&app_absent=0",
	},
];

const Header: React.FC = () => {
	const pathname = usePathname();
	const [selectedIndicator, setSelectedIndicator] = useState<string>(pathname);
	const [isActive, setIsActive] = useState<boolean>(false);

	useEffect(() => {
		const body = document.body;
		body.classList.toggle("rm-scroll", isActive);
		body.classList.toggle("show-menu", isActive);
	}, [isActive]);

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
	}, []);

	const handleScroll = () => {
		const sections = navItems.map((item) => document.querySelector(item.to));
		const scrollPosition = window.scrollY + window.innerHeight / 2;

		sections.forEach((section, index) => {
			if (
				section &&
				(section as HTMLElement).offsetTop <= scrollPosition &&
				(section as HTMLElement).offsetTop +
					(section as HTMLElement).clientHeight >
					scrollPosition
			) {
				setSelectedIndicator(navItems[index].to);
			}
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header className={style.header}>
			<div className={style.bar}>
				<div className={style.burgerMenu}>
					<button
						type="button"
						className={style.burgerMenuToggle}
						onClick={() => setIsActive((prev) => !prev)}
						aria-label="Toggle menu"
					>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				<div className={style.logo}>
					<Link href="/" className={style.logoLink} aria-label="logo">
						<LazyLoadImage
							src="/logo/bkk-kemenkes-text.png"
							alt="logo"
							className={style.logoImg}
							width={200}
							height={64}
						/>
					</Link>
				</div>
				<div className={style.mark}>
					<Link href="/" className={style.markLink} aria-label="logo">
						<LazyLoadImage
							src="/logo/bkk-kemenkes.png"
							alt="logo"
							className={style.markImg}
							width={64}
							height={64}
						/>
					</Link>
				</div>
			</div>
			<AnimatePresence mode="wait">
				{isActive && (
					<motion.div
						variants={menuSlide}
						initial="initial"
						animate="enter"
						exit="exit"
						className={style.menu}
					>
						<div className={style.body}>
							<div className={style.nav}>
								{navItems.map((val, idx) => (
									<HeaderItem
										key={idx}
										data={{ ...val, idx }}
										isActive={selectedIndicator === val.to}
										setIsActive={setIsActive}
										setSelectedIndicator={setSelectedIndicator}
									/>
								))}
							</div>
						</div>
						<div className={style.footer}>
							<div className={style.info}>
								<p className={style.infoLabel}>Hubungi Kami</p>
								<a href="tel:0224219305" className={style.infoLink}>
									(022) 421-9305
								</a>
								<a
									href="mailto:balaikarkesbandung@kemkes.go.id"
									className={style.infoLink}
								>
									balaikarkesbandung@kemkes.go.id
								</a>
							</div>
							<p className={style.infoLabel}>Ikuti Kami</p>
							<div className={style.social}>
								{sosmedList.map((val, idx) => {
									return (
										<Magnetic key={"social-" + idx}>
											<a
												href={val.to}
												target="_blank"
												rel="noopener noreferrer"
												className={`${style.socialLink} ${val.title}`}
												aria-label={val.title}
											>
												<SystemIcon name={val.title} />
											</a>
										</Magnetic>
									);
								})}
							</div>
						</div>
						<Curve />
					</motion.div>
				)}
			</AnimatePresence>
			<div
				className={style.background}
				onClick={(): void => setIsActive(false)}
			></div>
		</header>
	);
};

export default Header;
