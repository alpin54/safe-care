"use client";

// -- core
import React from "react";

// -- style
import style from "./style.module.scss";

const FeatureSection: React.FC = () => {
	return (
		<section className={style.video} id="video">
			<div className="container">
				{/* <h2 className={style.title}>
					Tonton Video Edukasi TB untuk Kenali Gejala dan Pencegahannya
				</h2> */}
				<video controls className={style.videoPlayer}>
					<source src="/video/video.mp4" type="video/mp4" />
				</video>
			</div>
		</section>
	);
};

export default FeatureSection;
