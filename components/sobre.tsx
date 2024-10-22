import { Code, Coffee, Book, Briefcase, Globe, Rocket, Server, Database, Cloud, Users, Zap } from 'lucide-react'

export default function SobreMin() {
  const skills = [
    { icon: <Code className="h-6 w-6" />, title: "Backend Dev", color: "bg-black" },
    { icon: <Server className="h-6 w-6" />, title: "API", color: "bg-green-500" },
    { icon: <Database className="h-6 w-6" />, title: "Database", color: "bg-yellow-500" },
    { icon: <Zap className="h-6 w-6" />, title: "Otiminização", color: "bg-orange-500" },
  ]

  return (
    <div id='sobre' className="bg-black text-white min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Sobre min</h2>
        <div className="grid grid-cols-12 gap-4">
          {/* Main content */}
          <div className="col-span-12 md:col-span-8 bg-black border border-stone-900 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Gedson - Backend Developer</h3>
            <p className="text-gray-300 mb-4">
            Comecei a programar em 2021/2022 movido pela curiosidade de entender como a tecnologia funcionava, especialmente no que diz respeito a cheats, 
            que foi meu principal motivo inicial. Queria descobrir como esses sistemas eram construídos. Com o tempo, me deparei com o JavaScript e a programação web, 
            o que ampliou ainda mais meu interesse no mundo da tecnologia e desenvolvimento. 
            </p>
            <p className="text-gray-300 mb-4">
            Quando não estou imerso em código, estou sempre de olho nas últimas tendências 
            tecnológicas.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <Coffee className="h-6 w-6 text-brown-400" />
              <span className="text-gray-400">Em busca de um vida boa.</span>
            </div>
          </div>

          {/* Skills grid */}
          <div className="col-span-12 md:col-span-4 grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className={`bg-black border border-stone-900 p-4 rounded-lg flex flex-col items-center justify-center text-center`}>
                {skill.icon}
                <span className="mt-2 font-semibold">{skill.title}</span>
              </div>
            ))}
          </div>

          <div className="col-span-12 md:col-span-4 bg-black border border-stone-900 p-6 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Book className="h-12 w-12 mx-auto mb-4 text-green-400" />
              <h4 className="text-xl font-semibold mb-2">Em Busca de conhecimento</h4>
              <p className="text-gray-400">Sempre expandindo meu conhecimento e minhas habilidades</p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 bg-black border border-stone-900 p-6 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Rocket className="h-12 w-12 mx-auto mb-4 text-purple-400" />
              <h4 className="text-xl font-semibold mb-2">Em busca de inovação</h4>
              <p className="text-gray-400">Busco inovação, colaborando em projetos.</p>
            </div>
          </div>

          {/* Quote */}
          <div className="col-span-12 bg-gradient-to-r from-black to-white p-6 rounded-lg">
            <blockquote className="text-xl italic font-semibold text-center">
              "A melhor maneira de prever o futuro da programação é criá-lo."
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}