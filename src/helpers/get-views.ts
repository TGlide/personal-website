import { PostMeta, db, sql } from 'astro:db'

export async function getViews(slug?: string) {
	if (!slug) return 1
	try {
		const res = await db
			.insert(PostMeta)
			.values({
				slug,
				views: 1,
			})
			.onConflictDoUpdate({
				target: PostMeta.slug,
				set: {
					views: sql`views + 1`,
				},
			})
			.returning({
				slug: PostMeta.slug,
				views: PostMeta.views,
			})

		return res[0].views
	}
	catch (error) {
		console.error(error)
		return 1
	}
}
