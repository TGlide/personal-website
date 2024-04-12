import { column, defineDb, defineTable } from 'astro:db'

const PostMeta = defineTable({
	columns: {
		slug: column.text({ primaryKey: true }),
		views: column.number({
			default: 1,
		}),
	},
})

// https://astro.build/db/config
export default defineDb({
	tables: { PostMeta },
})
