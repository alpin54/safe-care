"use client";

import React from "react";
import style from "./style.module.scss";

const VideoSection: React.FC = () => {
	return (
		<section className={style.video} id="video">
			<div className="container">
				<video
					controls
					className={style.videoPlayer}
					preload="metadata"
					poster="/bg/hero-banner.png"
				>
					<source src="/video/video.mp4" type="video/mp4" />
				</video>
			</div>
		</section>
	);
};

export default VideoSection;
