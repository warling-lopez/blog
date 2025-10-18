import { Heart, Lightbulb, BookOpen, Sparkles } from 'lucide-react';

interface ThoughtCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  category: string;
}

const ThoughtCard = ({ icon: Icon, title, description, category }: ThoughtCardProps) => {
  return (
    <div className="group bg-gradient-to-br from-violet-900/30 to-purple-900/20 border border-purple-700/30 hover:border-amber-500/50 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20 backdrop-blur-sm">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-gradient-to-br from-amber-500/20 to-violet-600/20 rounded-lg">
          <Icon className="w-6 h-6 text-amber-400" />
        </div>
        <span className="text-xs font-medium text-amber-500/70 bg-amber-500/10 px-2 py-1 rounded-full">
          {category}
        </span>
      </div>
      
      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-amber-300 transition-colors">
        {title}
      </h3>
      
      <p className="text-purple-200/80 text-sm mb-4 line-clamp-2">
        {description}
      </p>
      
      <button className="w-full py-2 px-4 bg-gradient-to-r from-violet-600 to-purple-700 hover:from-amber-500 hover:to-amber-600 text-white font-medium rounded-lg transition-all duration-300 text-sm">
        Ver más
      </button>
    </div>
  );
};

function App() {
  const thoughts = [
    {
      icon: Lightbulb,
      title: "La Naturaleza del Ser",
      description: "Reflexiones sobre quiénes somos más allá de lo que nos definen los demás. Una exploración poética de la identidad.",
      category: "Filosofía"
    },
    {
      icon: Heart,
      title: "Amor en el Silencio",
      description: "Versos sobre esos sentimientos que habitan en el vacío, en lo no dicho, en lo eternamente presente.",
      category: "Poesía"
    },
    {
      icon: BookOpen,
      title: "Palabras que Trascienden",
      description: "Cómo las palabras pueden ser puentes entre mundos, entre almas que buscan ser entendidas.",
      category: "Reflexión"
    },
    {
      icon: Sparkles,
      title: "Luz en la Oscuridad",
      description: "Pequeños destellos de esperanza encontrados en los rincones más inesperados de la existencia.",
      category: "Inspiración"
    },
    {
      icon: Lightbulb,
      title: "El Laberinto Interior",
      description: "Navegando los pasillos de la mente, encontrando puertas que nunca supe que existían.",
      category: "Filosofía"
    },
    {
      icon: Heart,
      title: "Nostalgia sin Tiempo",
      description: "Sentimientos que no pertenecen a ningún momento específico, pero que viven en todos ellos.",
      category: "Poesía"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
      {/* Elementos decorativos de fondo */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-800/10 rounded-full blur-3xl"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10">
        {/* Header */}
        <header className="px-6 py-12 text-center border-b border-purple-700/20">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-gradient-to-r from-violet-600 to-purple-600 text-amber-300 text-xs font-semibold rounded-full">
              DIARIO PÚBLICO
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl py-3 font-bold  bg-gradient-to-r from-amber-500 via-purple-300 to-violet-400 bg-clip-text text-transparent">
            Warling
          </h1>
          <p className="text-purple-300/80 text-lg max-w-2xl mx-auto">
            Pensamientos, poesía y filosofía. Un espacio donde las ideas encuentran forma.
          </p>
        </header>

        {/* Grid de Cards */}
        <main className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {thoughts.map((thought, index) => (
              <ThoughtCard
                key={index}
                icon={thought.icon}
                title={thought.title}
                description={thought.description}
                category={thought.category}
              />
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-purple-700/20 px-6 py-8 mt-16">
          <div className="max-w-7xl mx-auto text-center text-purple-300/60 text-sm">
            <p>© 2025 Warling. Todos los pensamientos merecen ser escuchados.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
export default App
