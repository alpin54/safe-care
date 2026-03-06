"use client";

import React from "react";
import style from "./style.module.scss";

const VideoSection: React.FC = () => {
	return (
		<section className={style.video} id="video">
			<div className="container">
				<div className={style.videoPlayer}>
					<iframe
						src="https://player.vimeo.com/video/1170865979?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
						frameBorder="0"
						allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						title="VID-20260305-WA0021(1)"
					/>
				</div>
				<script src="https://player.vimeo.com/api/player.js" />
			</div>
		</section>
	);
};

export default VideoSection;
