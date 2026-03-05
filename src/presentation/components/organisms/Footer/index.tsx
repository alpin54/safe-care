"use client";

// -- core
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

// -- style
import style from "./style.module.scss";

// -- atoms
import SystemIcon from "@atoms/SystemIcon";
import Magnetic from "@atoms/Magnetic";

// -- interface
import { IListData } from "../Header/type";

// -- data navItems
const navItems: IListData[] = [
	{ title: "Senin - Jumat: 08:00 - 16:00", to: "" },
	{ title: "Sabtu - Minggu: Tutup", to: "" },
	{ title: "Hari Libur Nasional: Tutup", to: "" },
];

// -- data sosmed
const sosmedList: IListData[] = [
	{ title: "instagram", to: "https://www.instagram.com/balaikarkesbandung" },
	{
		title: "whatsapp",
		to: "https://api.whatsapp.com/send/?phone=6281299991023&text=Halo+BKK+Bandung&type=phone_number&app_absent=0",
	},
];

const Footer: React.FC = () => {
	return (
		<footer className={style.footer}>
			<div className="container">
				<div className={style.inner}>
					<div className={style.grid}>
						<div className={style.item}>
							<h6 className={style.title}>Alamat</h6>
							<p className={style.text}>
								<span>BKK Kelas I Bandung</span> Jl. Cikapayang No.5, Tamansari,
								Kec. Bandung Wetan Kota Bandung, Jawa Barat 40116
							</p>
						</div>
						<div className={style.item}>
							<h6 className={style.title}>Jam Operasional</h6>
							<ul className={style.nav}>
								{navItems.map((val, indx) => (
									<li key={indx} className={style.navItem}>
										<span className={style.navText}>{val.title}</span>
									</li>
								))}
							</ul>
						</div>
						<div className={style.item}>
							<h6 className={style.title}>Hubungi Kami</h6>
							<a href="tel:0224219305" className={style.link}>
								(022) 421-9305
							</a>
							<a
								href="mailto:balaikarkesbandung@kemkes.go.id"
								className={style.link}
							>
								balaikarkesbandung@kemkes.go.id
							</a>
						</div>
						<div className={style.item}>
							<h6 className={style.title}>Ikuti Kami</h6>
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
					</div>
					<div className={style.logo}>
						<LazyLoadImage
							src="/logo/bkk-kemenkes-text.png"
							alt="BKK Kemenkes"
							className={style.logoImg}
							width={1400}
							height={240}
						/>
					</div>
					<div className={style.copyright}>
						<p className={style.copyrightText}>
							© {new Date().getFullYear()} Raya Natasya. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
