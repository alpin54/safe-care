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
		icon: "cough-men.svg",
		title: "Kenali Gejala TB",
		description:
			"Batuk lebih dari dua minggu, demam berkepanjangan, keringat malam, penurunan berat badan, dan mudah lelah dapat menjadi tanda Tuberkulosis. Jangan abaikan gejala yang berlangsung lama.",
	},
	{
		icon: "airborne-droplets.svg",
		title: "TB Menular Melalui Udara",
		description:
			"Tuberkulosis menyebar melalui udara ketika seseorang yang terinfeksi batuk, berbicara, atau bersin. Tanpa pemeriksaan, risiko penularan kepada keluarga dan rekan kerja dapat meningkat.",
	},
	{
		icon: "health-screening.svg",
		title: "Skrining TB Cepat dan Mudah",
		description:
			"Pemeriksaan skrining TB tersedia di puskesmas dan fasilitas kesehatan. Prosesnya sederhana dan membantu mendeteksi TB lebih awal agar pengobatan dapat segera dilakukan.",
	},
];
const FeatureSection: React.FC = () => {
	return (
		<section className={style.feature} id="kenali-gejala">
			<div className="container">
				<div className={style.head}>
					<h2 className={style.title}>
						Kenali Gejala TB dan Lakukan Skrining Lebih Awal
					</h2>
					<p className={style.desc}>
						Tuberkulosis (TB) adalah penyakit menular yang masih banyak terjadi
						pada orang dewasa yang aktif bekerja dan beraktivitas. Mengenali
						gejala sejak dini dan melakukan skrining dapat membantu mendeteksi
						TB lebih cepat sehingga pengobatan bisa segera dimulai dan penularan
						dapat dicegah.
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
