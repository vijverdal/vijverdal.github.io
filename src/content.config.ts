import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const paginas = defineCollection({
	loader: glob({ pattern: "*.{md,mdx}", base: "./content/pages" }),
	schema: z.object({
		title: z.string(),
		slug: z.string(),
		description: z.string(),
		type: z.string(),
	}),
});




export const collections = { paginas };