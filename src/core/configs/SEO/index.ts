import { IDefaultSEOType } from "./type";

// --- DefaultSEO
const DefaultSEO: IDefaultSEOType = {
	title: "Skrining Digital TB HIV",
	description: "Skrining Digital TB HIV",
	keywords:
		"Skrining Digital TB HIV, Skrining Dini, Kesehatan Mental, self-assessment, skrining online, skrining digital, skrining TB HIV, skrining dini TB HIV, skrining kesehatan mental, skrining kecemasan, skrining depresi, skrining stres",
	timeRefresh: 900,
	siteName: "Skrining Digital TB HIV",
	siteDomain: "https://skrining-digital-tb-hiv.vercel.app",
	siteURL: "https://skrining-digital-tb-hiv.vercel.app",
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
