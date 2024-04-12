export function toSnakeCase(str: string) {
	return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`)
}

export function toKebabCase(str: string) {
	return str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`)
}
