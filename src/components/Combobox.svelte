<script lang='ts'>
	import {
		type ComboboxOptionProps,
		createCombobox,
		melt,
	} from '@melt-ui/svelte'

	const people: string[] = [
		'Wade Cooper',
		'Arlene Mccoy',
		'Devon Webb',
		'Tom Cook',
		'Tanya Fox',
		'Hellen Schmidt',
	]

	const toOption = (person: string): ComboboxOptionProps<string> => ({
		value: person,
		label: person,
	})

	const {
		elements: { menu, input, option },
		states: { open, inputValue, touchedInput, selected },
		helpers: { isSelected },
	} = createCombobox<string>({
		defaultSelected: toOption(people[0]),
	})

	$: if (!$open) $inputValue = $selected?.label ?? ''

	$: filteredOptions = $touchedInput
		? people.filter((person) => {
			const normalizedInput = $inputValue.toLowerCase()
			return person.toLowerCase().includes(normalizedInput)
		})
		: people

	let inputEl: HTMLInputElement | null = null
</script>

<div
	class='relative flex flex-col items-center pt-16
		overflow-hidden rounded-xl bg-gradient-to-r from-teal-400 to-cyan-400 h-[392px]'
>
	<div
		class='relative w-72 cursor-default rounded-lg bg-white text-left shadow-md
			focus:outline-none sm:text-sm'
	>
		<input
			bind:this={inputEl}
			use:melt={$input}
			class='w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 bg-transparent outline-none
				selection:bg-teal-500 selection:text-white'
			placeholder='Best book ever'
			on:m-click={e => e.preventDefault()}
		/>

		<button
			class='absolute right-2 top-1/2 z-10 -translate-y-1/2'
			on:click={() => {
				$open = !$open
				if ($open) inputEl?.focus()
			}}
		>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 20 20'
				fill='currentColor'
				aria-hidden='true'
				class='h-5 w-5 text-gray-400'
			>
				<path
					fill-rule='evenodd'
					d='M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75
						0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908
						2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z'
					clip-rule='evenodd'
				/>
			</svg>
		</button>
	</div>
</div>

<ul
	class='z-10 flex max-h-[300px] flex-col rounded-lg gap-0 bg-white py-1 text-black shadow-lg'
	use:melt={$menu}
>
	{#each filteredOptions as person (person)}
		<li
			use:melt={$option(toOption(person))}
			class='relative cursor-pointer scroll-my-2 py-2 pl-10 hover:bg-orange-100 group sm:text-sm
				data-[highlighted]:bg-teal-600 data-[highlighted]:text-white data-[disabled]:opacity-50
				data-[selected]:font-medium'
		>
			{#if $isSelected(person)}
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 20 20'
					fill='currentColor'
					aria-hidden='true'
					class='h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 z-10 text-teal-900
						group-data-[highlighted]:text-white'
				>
					<path
						fill-rule='evenodd'
						d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75
							0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
						clip-rule='evenodd'
					/>
				</svg>
			{/if}
			<span>{person}</span>
		</li>
	{:else}
		<li class='relative cursor-pointer rounded-md py-1 pl-8 pr-4'>
			No results found
		</li>
	{/each}
</ul>
