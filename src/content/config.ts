import { defineCollection, z } from 'astro:content'

const articleSchema = z.object({
	title: z.string(),
	description: z.string(),
	publishDate: z.date(),
})

const articlesCollection = defineCollection({
	type: 'content',
	schema: articleSchema,
})

export type Article = z.infer<typeof articleSchema>

export const collections = {
	articles: articlesCollection,
}
