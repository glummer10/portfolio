export default function Projetos() {
    return (
        <section id="Projetos" className="container mx-auto px-6 py-20">
            <h2 className="text-3xl font-bold mb-10 text-center">Projetos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {[1, 2, 3, 4].map((project) => (
                    <div key={project} className="border border-stone-900 rounded-lg p-6 animate-pulse">
                        <div className="h-6 bg-gray-300 rounded mb-4"></div>
                        <div className="h-4 bg-gray-300 rounded mb-2"></div>
                        <div className="h-4 bg-gray-300 rounded mb-4"></div>
                        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                    </div>
                ))}
            </div>
        </section>
    )
}