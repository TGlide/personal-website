import { toKebabCase } from './string'

export function styleToString(style: Record<string, string>) {
	return Object.entries(style)
		.map(([key, value]) => `${toKebabCase(key)}: ${value}`)
		.join('; ')
}
