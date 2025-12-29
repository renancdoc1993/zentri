import { Linkedin, Instagram } from 'lucide-react'; // Ícones para redes sociais

const TeamMember = ({ image, name, role, bio }) => {
  return (
    <div className="bg-zentri-card p-8 rounded-3xl border border-white/5 group hover:border-zentri-main/30 transition-all duration-500 shadow-xl">
      {/* Container da Imagem com Efeito de Zoom e Grayscale */}
      <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-2xl border border-white/10">
        <img 
          src={image} // Recebe a variável importada (ex: renanImg)
          alt={name} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
        />
        
        {/* Overlay sutil no hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Informações */}
      <div className="space-y-3">
        <div>
          <h3 className="text-2xl font-bold text-white group-hover:text-zentri-main transition-colors duration-300">
            {name}
          </h3>
          <p className="text-zentri-main text-xs font-black uppercase tracking-widest mt-1">
            {role}
          </p>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 italic">
          "{bio}"
        </p>

        {/* Redes Sociais */}
        <div className="flex gap-4 pt-4 border-t border-white/5">
          <a href="#" className="text-gray-500 hover:text-white transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors">
            <Instagram size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;