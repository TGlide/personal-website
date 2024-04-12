import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import { PostMeta, db, sql } from 'astro:db'

export const prerender = false

export async function getStaticPaths() {
	const articles = await getCollection('articles')
	return articles.map(({ slug }) => ({
		params: { slug },
	}))
}

export const GET: APIRoute = async ({ params }) => {
	const { slug } = params
	if (!slug) {
		return new Response('Missing slug', { status: 400 })
	}

	const [meta] = await db
		.insert(PostMeta)
		.values({
			slug,
			views: 1,
		})
		.onConflictDoUpdate({
			target: PostMeta.slug,
			set: {
				views: sql`${PostMeta.views} + 1`,
			},
		})
		.returning({
			slug: PostMeta.slug,
			views: PostMeta.views,
		})

	if (!meta) {
		return new Response('Not found', { status: 404 })
	}

	return new Response(JSON.stringify(meta), {
		headers: {
			'Content-Type': 'text/plain',
		},
	})
}
