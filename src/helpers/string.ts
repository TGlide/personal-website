export function toSnakeCase(str: string) {
	return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`)
}

export function toKebabCase(str: string) {
	return str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`)
}

// Return plural form if count is not 1
export function pluralize(str: string, count: number, plural?: string) {
	if (count === 1) return str
	return plural || `${str}s`
}
