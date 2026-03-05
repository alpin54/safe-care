"use client";

import React from "react";
import style from "./style.module.scss";

const VideoSection: React.FC = () => {
	return (
		<section className={style.video} id="video">
			<div className="container">
				<div className={style.videoPlayer}>
					<iframe
						src="https://player.vimeo.com/video/1170745973?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
						frameBorder="0"
						allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						title="video"
					/>
				</div>
				<script src="https://player.vimeo.com/api/player.js"></script>
			</div>
		</section>
	);
};

export default VideoSection;
