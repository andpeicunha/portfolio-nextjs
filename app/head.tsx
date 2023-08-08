import GlobalTags from './globalTags'

export default function Head() {
	return (
		<>
			<GlobalTags />
			<title>André Peixoto | Front-End Engineer</title>
			<meta
				name='description'
				content='André Peixoto | Front-End Developer | TypeScript| JavaScript | ReactJs | NextJs | NodeJs | Estudando Flutter e Native'
			/>
			<meta
				property='og:title'
				content='Front-End Developer | TypeScript| JavaScript | ReactJs | NextJs | NodeJs | Estudando Flutter e Native | André Peixoto'
			/>
			<meta
				property='og:description'
				content='Um desenvolvedor apaixonado por design, responsividade e performance. Front-End Developer | TypeScript| JavaScript | ReactJs | NextJs | NodeJs | Estudando Flutter e Native'
			/>
			<meta
				property='og:type'
				content='website'
			/>
		</>
	)
}
