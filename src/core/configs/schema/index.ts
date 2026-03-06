import { IDefaultSchemaType } from "./type";

// --- DefaultSchema
const DefaultSchema: IDefaultSchemaType = {
	organization: {
		context: "http://schema.org",
		id: "https://skrining-digital-tb-hiv.vercel.app#organization",
		type: "Organization",
		name: "Skrining Digital TB HIV",
		url: "https://skrining-digital-tb-hiv.vercel.app",
		logo: "https://skrining-digital-tb-hiv.vercel.app/logo/logo.png",
		contactPoint: [
			{
				"@type": "ContactPoint",
				telephone: "+62-81380003385",
				contactType: "sales",
				areaServed: "ID",
			},
		],
		sameAs: [
			"https://www.instagram.com/skrining-digital-tb-hiv",
			"https://www.facebook.com/skrining-digital-tb-hiv",
			"https://www.tiktok.com/@skrining-digital-tb-hiv",
		],
	},
	website: {
		context: "http://schema.org",
		id: "https://skrining-digital-tb-hiv.vercel.app#website",
		type: "WebSite",
		url: "https://skrining-digital-tb-hiv.vercel.app",
		name: "Skrining Digital TB HIV",
	},
	webpage: {
		context: "http://schema.org",
		id: "https://skrining-digital-tb-hiv.vercel.app#webpage",
		type: "WebPage",
		url: "https://skrining-digital-tb-hiv.vercel.app",
		name: "Skrining Digital TB HIV",
	},
};

export default DefaultSchema;
