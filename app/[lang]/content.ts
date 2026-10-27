export const SUPPORTED_LOCALES = ['en', 'pt'] as const

export type Locale = (typeof SUPPORTED_LOCALES)[number]

export function isLocale(value: string): value is Locale {
	return SUPPORTED_LOCALES.some((locale) => locale === value)
}

const sharedProjects = [
	{
		href: 'https://github.com/andpeicunha/herdr-output-comment-composer',
		name: 'herdr-output-comment-composer',
		stack: 'Python',
	},
	{
		href: 'https://github.com/andpeicunha/ai-notes-md',
		name: 'ai-notes-md',
		stack: 'TypeScript',
	},
	{
		href: 'https://github.com/andpeicunha/flow-server',
		name: 'flow-server',
		stack: 'JavaScript',
	},
	{
		href: 'https://github.com/andpeicunha/tmux-mcp',
		name: 'tmux-mcp',
		stack: 'Go',
	},
] as const

export const content = {
	en: {
		about: {
			body: [
				'I have more than 15 years of experience building web and mobile products, integrations, and internal systems. Today, I work across frontend and backend boundaries, with frontend architecture as my deepest area of expertise.',
				'I turn architectural decisions into shared platforms, clear contracts, and practical tools. This includes microfrontends, Design Systems, APIs, BFFs, identity and access, CI/CD, observability, and agentic engineering workflows.',
			],
			eyebrow: 'About',
			title: 'Frontend depth. Full-stack platform impact.',
		},
		capabilities: {
			eyebrow: 'Capabilities',
			items: [
				{
					description: 'React, Next.js, TypeScript, microfrontends, Design Systems, accessibility, and performance.',
					title: 'Frontend architecture',
				},
				{
					description: 'APIs, BFFs, service contracts, persistence, integrations, and delivery across system boundaries.',
					title: 'Backend and integration',
				},
				{
					description: 'Identity and access, CI/CD, scaffolds, observability, RFCs, OpenSpec, and developer experience.',
					title: 'Platform engineering',
				},
				{
					description: 'MCP integrations, adapters, plugins, and governed workflows that connect AI agents to engineering standards.',
					title: 'Agentic engineering',
				},
			],
			title: 'Architecture that connects product, platform, and delivery.',
		},
		contact: {
			body: 'I am interested in complex product and platform problems where frontend depth and cross-system work matter.',
			eyebrow: 'Contact',
			title: 'Let’s build clear foundations for teams to move faster.',
		},
		experience: {
			eyebrow: 'Experience',
			items: [
				{
					company: 'Pravaler',
					description: 'I define architecture and technical direction for frontend platforms while working hands-on with APIs, integration contracts, identity, access, CI/CD, and internal systems. I use RFCs and OpenSpec to align teams and make platforms easier to evolve.',
					period: '2025 — Present',
					role: 'Staff Software Engineer · Frontend Architect',
				},
				{
					company: 'Orbia',
					description: 'I contributed to a microfrontend portal and multitenant architecture for an agricultural marketplace. I also helped evolve a shared Design System and independent delivery pipelines.',
					period: 'Previous experience',
					role: 'Software Engineer · Frontend Platform',
				},
			],
			title: 'Technical direction with hands-on delivery.',
		},
		hero: {
			body: 'I design and build platforms across frontend and backend boundaries. My main strength is frontend architecture, supported by hands-on work with APIs, BFFs, identity and access, integrations, CI/CD, and developer tooling.',
			primaryAction: 'View selected work',
			role: 'Staff Software Engineer · Frontend Architect',
			secondaryAction: 'Read my LinkedIn profile',
			title: 'I build the foundations that help teams deliver with autonomy.',
		},
		navigation: {
			about: 'About',
			contact: 'Contact',
			experience: 'Experience',
			projects: 'Projects',
		},
		projects: {
			descriptions: [
				'Herdr plugin for reviewing AI agent output and sending structured inline feedback from the terminal.',
				'VS Code extension that turns Markdown comments into structured tasks for AI agents.',
				'Beta workflow service for local-first DAG execution, deterministic receipts, checkpoints, and audit.',
				'MCP server for orchestrating AI agents across tmux panes with Claude Code, Codex, and Cursor CLI.',
			],
			eyebrow: 'Selected projects',
			labels: {
				approach: 'Built around',
				problem: 'Problem',
			},
			problems: [
				'Reviewing long agent output in a terminal makes precise, contextual feedback difficult.',
				'AI tasks lose context when feedback is copied from a document into a separate chat.',
				'Local agent workflows need repeatable execution and evidence without sending run data elsewhere.',
				'Multiple coding agents in terminal panes need a shared control and communication layer.',
			],
			proof: [
				['Semantic blocks', 'Multiline comments', 'No external API'],
				['Native VS Code comments', 'Custom Markdown preview', 'en-US + pt-BR'],
				['Versioned DAG contracts', 'Deterministic receipts', 'Fail-closed adapters'],
				['MCP tools', 'Pane orchestration', 'Idle detection'],
			],
			title: 'Tools for clearer, more reliable agentic work.',
		},
	},
	pt: {
		about: {
			body: [
				'Tenho mais de 15 anos de experiência construindo produtos web e mobile, integrações e sistemas internos. Hoje atuo entre frontend e backend, com maior profundidade em arquitetura frontend.',
				'Transformo decisões de arquitetura em plataformas compartilhadas, contratos claros e ferramentas práticas. Isso inclui microfrontends, Design Systems, APIs, BFFs, identidade e acesso, CI/CD, observabilidade e fluxos de engenharia com agentes de IA.',
			],
			eyebrow: 'Sobre',
			title: 'Profundidade em frontend. Impacto full-stack em plataformas.',
		},
		capabilities: {
			eyebrow: 'Competências',
			items: [
				{
					description: 'React, Next.js, TypeScript, microfrontends, Design Systems, acessibilidade e performance.',
					title: 'Arquitetura frontend',
				},
				{
					description: 'APIs, BFFs, contratos de serviço, persistência, integrações e entregas entre sistemas.',
					title: 'Backend e integração',
				},
				{
					description: 'Identidade e acesso, CI/CD, scaffolds, observabilidade, RFCs, OpenSpec e experiência de desenvolvimento.',
					title: 'Engenharia de plataforma',
				},
				{
					description: 'Integrações MCP, adapters, plugins e fluxos governados que conectam agentes de IA aos padrões de engenharia.',
					title: 'Engenharia com agentes de IA',
				},
			],
			title: 'Arquitetura que conecta produto, plataforma e entrega.',
		},
		contact: {
			body: 'Tenho interesse em problemas complexos de produto e plataforma nos quais profundidade em frontend e atuação entre sistemas façam diferença.',
			eyebrow: 'Contato',
			title: 'Vamos criar bases claras para os times avançarem mais rápido.',
		},
		experience: {
			eyebrow: 'Experiência',
			items: [
				{
					company: 'Pravaler',
					description: 'Defino arquitetura e direção técnica de plataformas frontend enquanto atuo diretamente com APIs, contratos de integração, identidade, acesso, CI/CD e sistemas internos. Uso RFCs e OpenSpec para alinhar times e facilitar a evolução das plataformas.',
					period: '2025 — Atual',
					role: 'Staff Software Engineer · Arquiteto Frontend',
				},
				{
					company: 'Orbia',
					description: 'Contribuí para um portal de microfrontends e uma arquitetura multitenant de um marketplace agrícola. Também ajudei a evoluir um Design System compartilhado e pipelines independentes de entrega.',
					period: 'Experiência anterior',
					role: 'Software Engineer · Plataforma Frontend',
				},
			],
			title: 'Direção técnica com entrega prática.',
		},
		hero: {
			body: 'Defino e implemento plataformas entre as fronteiras de frontend e backend. Minha maior especialidade é arquitetura frontend, apoiada por atuação prática com APIs, BFFs, identidade e acesso, integrações, CI/CD e ferramentas para desenvolvimento.',
			primaryAction: 'Ver projetos selecionados',
			role: 'Staff Software Engineer · Arquiteto Frontend',
			secondaryAction: 'Ver meu perfil no LinkedIn',
			title: 'Construo as bases que ajudam times a entregar com autonomia.',
		},
		navigation: {
			about: 'Sobre',
			contact: 'Contato',
			experience: 'Experiência',
			projects: 'Projetos',
		},
		projects: {
			descriptions: [
				'Plugin do Herdr para revisar saídas de agentes de IA e enviar feedback inline estruturado pelo terminal.',
				'Extensão do VS Code que transforma comentários em Markdown em tarefas estruturadas para agentes de IA.',
				'Serviço beta para executar DAGs locais com recibos determinísticos, checkpoints e auditoria.',
				'Servidor MCP para orquestrar agentes de IA em painéis tmux com Claude Code, Codex e Cursor CLI.',
			],
			eyebrow: 'Projetos selecionados',
			labels: {
				approach: 'Construído com',
				problem: 'Problema',
			},
			problems: [
				'Revisar saídas longas de agentes no terminal dificulta um feedback preciso e contextual.',
				'Tarefas para IA perdem contexto quando o feedback sai do documento e vai para outro chat.',
				'Fluxos locais com agentes precisam de execução repetível e evidências sem enviar dados para fora.',
				'Vários agentes em painéis do terminal precisam de uma camada comum de controle e comunicação.',
			],
			proof: [
				['Blocos semânticos', 'Comentários multilinha', 'Sem API externa'],
				['Comments API do VS Code', 'Preview Markdown próprio', 'en-US + pt-BR'],
				['Contratos DAG versionados', 'Recibos determinísticos', 'Adapters fail-closed'],
				['Ferramentas MCP', 'Orquestração de painéis', 'Detecção de inatividade'],
			],
			title: 'Ferramentas para um trabalho com agentes mais claro e confiável.',
		},
	},
} as const

export function getProjects(locale: Locale) {
	return sharedProjects.map((project, index) => ({
		...project,
		description: content[locale].projects.descriptions[index],
		problem: content[locale].projects.problems[index],
		proof: content[locale].projects.proof[index],
	}))
}
