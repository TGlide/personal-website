import { defineCollection, z } from 'astro:content'

const articlesCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
	}),
})

export const collections = {
	articles: articlesCollection,
}
