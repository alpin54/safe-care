import { IDefaultSEOType } from "./type";

// --- DefaultSEO
const DefaultSEO: IDefaultSEOType = {
	title: "SAFE CARE - Skrining Dini Kesehatan Mental",
	description: "SAFE CARE - Skrining Dini Kesehatan Mental",
	keywords: "SAFE CARE, Skrining Dini, Kesehatan Mental",
	timeRefresh: 900,
	siteName: "SAFE CARE",
	siteDomain: "https://safe-care.vercel.app",
	siteURL: "https://safe-care.vercel.app",
	themeColor: "#fac310",
	author: "Alpin",
	copyright: "© 2026 Raya Natasya. All rights reserved",
	robots: {
		index: true,
		follow: true,
	},
	openGraph: {
		enable: true,
		locale: "en_US",
		type: "website",
		image: "/default/og-facebook.jpg",
	},
	twitter: {
		enable: true,
		username: "@safe_care",
		card: "summary_large_image",
		image: "/default/twitter-card.jpg",
	},
	manifest: "",
	viewport: {
		width: "device-width",
		initialScale: 1,
		userScalable: true,
	},
	icons: {
		// -- src
		src: "/homescreen/",

		// -- shortcut
		shortcut: "favicon.ico",

		// -- android
		android: [16, 32, 96, 144, 192],

		// -- microsoft
		microsoft: 144,

		// -- apple
		apple: {
			default: "apple-icon.png",
			items: [57, 60, 72, 76, 114, 120, 144, 152, 180],
		},
	},
	siteCapable: true,
};

export default DefaultSEO;
