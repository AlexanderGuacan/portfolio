interface Props {
  icon: React.ReactNode
  title: string
  tools: string[]
}

export function SkillCard({ icon, title, tools }: Props) {
  return (
    <article className="bg-[#18181b] p-6 rounded-2xl border border-brand-border hover:border-red-500/40 transition-colors space-y-4">
      <span className="inline-block p-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500">
        {icon}
      </span>

      <h3 className="text-lg font-bold text-white">{title}</h3>

      <ul className="list-disc marker:text-red-500 list-inside text-sm text-zinc-300 space-y-2">
        {tools.map((tool, index) => (
          <li className="" key={index}>
            {tool}
          </li>
        ))}
      </ul>
    </article>
  )
}
