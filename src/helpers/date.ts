// Function to add the correct ordinal suffix to the day
function getOrdinalSuffix(day: number) {
	if (day > 3 && day < 21) return 'th' // for numbers like 4th, 5th, 6th, etc.
	switch (day % 10) {
		case 1: return 'st'
		case 2: return 'nd'
		case 3: return 'rd'
		default: return 'th'
	}
}

export function formatDate(date: Date) {
	const day = date.getDate()
	const month = date.toLocaleString('default', { month: 'long' })
	const year = date.getFullYear()

	return `${day}${getOrdinalSuffix(day)} ${month} ${year}`
}
