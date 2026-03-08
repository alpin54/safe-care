"use client";

// -- core
import React from "react";

// -- molecules
import FeatureItem from "@molecules/FeatureItem";

// -- style
import style from "./style.module.scss";

// -- interface
import { IFeatureList } from "./type";

// -- data
const feature: IFeatureList[] = [
	{
		icon: "health-screening.svg",
		title: "Skrining = Deteksi Dini",
		description:
			"TB dan HIV sering tidak bergejala di awal. Skrining membantu mengetahui status lebih cepat agar pengobatan lebih efektif dan penularan bisa dicegah.",
	},
	{
		icon: "airborne-droplets.svg",
		title: "TB Menular Lewat Udara",
		description:
			"Satu pasien TB aktif bisa menulari 10–15 orang per tahun. TB menyebar lewat percikan ludah (droplet) saat batuk, bersin, atau berbicara—bukan lewat jabat tangan atau alat makan.",
	},
	{
		icon: "cough-men.svg",
		title: "Kenali Gejala, Jangan Menunggu Parah",
		description:
			"Batuk lebih dari 2 minggu (bisa disertai darah), demam ringan sore hari, keringat malam, berat badan turun, dan lemas bisa menjadi tanda TB. TB laten bisa tanpa gejala—hanya skrining yang bisa mendeteksi.",
	},
	{
		icon: "health-screening.svg",
		title: "Tes TB & HIV Tersedia (Gratis) di Puskesmas",
		description:
			"Pemeriksaan TB (dahak dan rontgen dada) serta tes HIV tersedia di fasilitas kesehatan pemerintah. Hasil tes bersifat rahasia dan dilindungi undang-undang.",
	},
];

const FeatureSection: React.FC = () => {
	return (
		<section className={style.feature} id="kenali-gejala">
			<div className="container">
				<div className={style.head}>
					<h2 className={style.title}>
						Skrining TB & HIV: Langkah Kecil, Dampak Besar
					</h2>
					<p className={style.desc}>
						TB dan HIV dapat tidak bergejala pada fase awal. Dengan skrining,
						Anda bisa mengetahui status lebih cepat, memulai pengobatan bila
						diperlukan, dan membantu melindungi keluarga serta orang sekitar.
					</p>
				</div>
				<div className={style.body}>
					{feature.map((val, idx) => (
						<div className={style.item} key={idx}>
							<FeatureItem {...val} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FeatureSection;
