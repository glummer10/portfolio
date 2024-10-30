import Link from "next/link"
const projetos = [
    {
        name: "Meu Portfólio",
        description: "Uma apresentação completa dos meus projetos e habilidades como desenvolvedor.",
        link: "https://github.com/glummer10/portfolio"
    },
    {
        name: "Base Bot Discord",
        description: "Uma base para criar bots no Discord, com funcionalidades essenciais e fácil personalização.",
        link: "https://github.com/glummer10/MakeBot-v14"
    }
]
export default function Projetos() {
    return (
        <section id="Projetos" className="section container mx-auto px-6 py-20">
            <h2 className="text-3xl font-bold mb-10 text-center">Projetos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {projetos.map((project) => (
                    <Link href={`${project.link}`}>
                        <div key={project.name} className="border border-stone-900 rounded-lg p-6">
                            <div className="h-6 bg-gray-300 rounded mb-4">{project.name}</div>
                            <div className="h-4 bg-gray-300 rounded mb-2">{project.description}</div>
                            <div className="h-4 bg-gray-300 rounded mb-4"></div>
                            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}