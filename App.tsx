import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  ChevronDown, 
  ChevronUp, 
  CreditCard, 
  ShieldCheck, 
  Calendar, 
  TrendingDown, 
  Home, 
  BrainCircuit, 
  Smartphone,
  Video,
  Infinity
} from 'lucide-react';

// --- Dados para Prova Social (70% Mulheres / 70% Acesso Completo) ---
const nomes = ['Ana Clara', 'Beatriz Silva', 'Camila Souza', 'Daniela Meireles', 'Elaine Pires', 'Fernanda Lima', 'Gabriela Costa', 'Heloísa Favero', 'Isabela Rocha', 'Juliana Matos', 'Larissa Moraes', 'Thais Cavalcanti', 'Renata Silveira', 'Priscila Ramos', 'Letícia Almeida', 'Viviane Rocha', 'Simone Borges', 'Marcos Oliveira', 'Ricardo Santos', 'João Pedro', 'Lucas Ferreira', 'André Luiz', 'Fábio Júnior', 'Gustavo Henrique'];
const planos = ['Acesso Completo', 'Acesso Completo', 'Acesso Completo', 'Acesso Completo', 'Acesso Completo', 'Acesso Completo', 'Acesso Completo', 'Acesso Essencial', 'Acesso Essencial', 'Acesso Essencial'];

// --- Components ---

const Navbar: React.FC = () => (
  <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold italic">P</div>
        <span className="text-xl font-bold text-slate-900 font-title">Plano Organizer</span>
      </div>
    </div>
  </nav>
);

const Hero: React.FC = () => (
  <section className="pt-24 pb-12 md:pt-40 md:pb-24 bg-gradient-to-b from-sky-50 to-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 text-center md:text-left">
        <div className="inline-block px-4 py-1.5 mb-6 bg-teal-100 text-teal-700 text-xs font-bold uppercase tracking-wider rounded-full btn-montserrat">
          Simples • Prático • Inteligente
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
          Sua mente não foi feita para guardar listas, foi feita para <span className="text-teal-600">ter ideias.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl">
          Pare de sentir que sua cabeça vai explodir. Recupere o controle da sua casa e das suas finanças com o Sistema de Organização Inteligente para Celular e Computador.
        </p>
      </div>
      <div className="flex-1 relative">
        <div className="absolute -inset-4 bg-teal-200/40 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <img 
          src="https://i.imgur.com/I8pgOMO.png" 
          alt="Mockup do Plano Organizer em dispositivos" 
          className="rounded-3xl shadow-2xl object-cover w-full h-[350px] md:h-[500px]"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop';
          }}
        />
      </div>
    </div>
  </section>
);

const PainPoints: React.FC = () => {
  const pains = [
    { icon: <Calendar className="text-teal-500" />, text: "Esquece datas de boletos?" },
    { icon: <TrendingDown className="text-teal-500" />, text: "Não sabe para onde o dinheiro está indo?" },
    { icon: <Home className="text-teal-500" />, text: "Sente-se perdida com as tarefas da casa?" },
    { icon: <BrainCircuit className="text-teal-500" />, text: "Carga mental pesada no fim do dia?" },
  ];
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Você se sente assim?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pains.map((pain, idx) => (
            <div key={idx} className="flex items-center gap-4 p-6 bg-teal-50/50 rounded-2xl border border-teal-100/50 text-left">
              <div className="bg-white p-3 rounded-xl shadow-sm">{pain.icon}</div>
              <span className="text-lg font-medium text-slate-700">{pain.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Solution: React.FC = () => (
  <section className="py-16 md:py-24 bg-teal-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-16 text-slate-900">O que você recebe no Plano Organizer</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex flex-col items-center">
          <div className="w-14 h-14 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center mb-6"><Smartphone size={32} /></div>
          <h3 className="text-2xl font-bold mb-4 font-title">Funciona no celular</h3>
          <p className="text-slate-600">Acesse suas listas e gastos de qualquer lugar pelo celular ou PC.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex flex-col items-center">
          <div className="w-14 h-14 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center mb-6"><Video size={32} /></div>
          <h3 className="text-2xl font-bold mb-4 font-title">Vídeo-aula inclusa</h3>
          <p className="text-slate-600">Mostramos o passo a passo de como usar cada detalhe do sistema.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex flex-col items-center">
          <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6"><Infinity size={32} /></div>
          <h3 className="text-2xl font-bold mb-4 font-title">Acesso vitalício</h3>
          <p className="text-slate-600">Pague uma única vez e use para sempre. Sem mensalidades.</p>
        </div>
      </div>
    </div>
  </section>
);

const Pricing: React.FC = () => (
  <section id="precos" className="py-16 md:py-24 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Escolha seu plano ideal</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Card Essencial */}
        <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200 flex flex-col">
          <h3 className="text-2xl font-bold mb-2">Acesso Essencial</h3>
          <p className="text-slate-500 mb-6">Foco no controle financeiro</p>
          <div className="mb-8 space-y-4">
            <div className="flex gap-3 text-slate-700"><CheckCircle className="text-teal-500 shrink-0" size={20} /><span>Gestão Financeira Completa</span></div>
            <div className="flex gap-3 text-slate-700"><CheckCircle className="text-teal-500 shrink-0" size={20} /><span>Vídeo-aula inclusa</span></div>
          </div>
          <div className="mt-auto">
            <div className="text-slate-900 text-5xl font-extrabold mb-8">R$ 19,90</div>
            <a href="COLE_AQUI_LINK_ESSENCIAL" className="block w-full text-center py-4 bg-slate-100 text-slate-800 rounded-2xl font-bold">QUERO COMEÇAR AGORA</a>
          </div>
        </div>
        {/* Card Completo */}
        <div className="bg-white rounded-[2.5rem] p-8 border-4 border-teal-500 shadow-2xl flex flex-col relative">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-teal-500 text-white px-6 py-2 rounded-full text-sm font-bold">MAIS VENDIDO</div>
          <h3 className="text-2xl font-bold mb-2">Acesso Completo</h3>
          <p className="text-teal-600 font-medium mb-6">Gestão Total da sua vida</p>
          <div className="mb-8 space-y-4">
            <div className="flex gap-3 text-slate-700"><CheckCircle className="text-teal-500 shrink-0" size={20} /><strong>Tudo do Plano Essencial</strong></div>
            <div className="flex gap-3 text-slate-700"><CheckCircle className="text-teal-500 shrink-0" size={20} /><span>Gestão Doméstica + Tempo</span></div>
          </div>
          <div className="mt-auto">
            <div className="text-slate-900 text-6xl font-extrabold mb-8">R$ 47,00</div>
            <a href="COLE_AQUI_LINK_COMPLETO" className="block w-full text-center py-5 bg-teal-500 text-white rounded-2xl font-bold shadow-xl">QUERO O SISTEMA COMPLETO</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const faqs = [
    { q: "Preciso saber Excel?", a: "Não! O sistema é intuitivo. Se sabe digitar no celular, você consegue usar." },
    { q: "Como recebo o acesso?", a: "Envio imediato por e-mail após a confirmação do Pix ou Cartão." }
  ];
  return (
    <section className="py-16 bg-white max-w-3xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Dúvidas Frequentes</h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden">
            <button onClick={() => setOpenIdx(openIdx === idx ? null : idx)} className="w-full flex justify-between p-6 font-bold text-slate-800">
              {faq.q} {openIdx === idx ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openIdx === idx && <div className="px-6 pb-6 text-slate-600">{faq.a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer: React.FC = () => (
  <footer className="py-12 bg-slate-900 text-white text-center">
    <p>© {new Date().getFullYear()} Plano Organizer. Todos os direitos reservados.</p>
  </footer>
);

export default function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [data, setData] = useState({ nome: '', plano: '' });

  useEffect(() => {
    const interval = setInterval(() => {
      const randomNome = nomes[Math.floor(Math.random() * nomes.length)];
      const randomPlano = planos[Math.floor(Math.random() * planos.length)];
      setData({ nome: randomNome, plano: randomPlano });
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 10000); // 10s na tela
    }, 13000); // Novo balão a cada 13s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative">
      <Navbar />
      <Hero />
      <PainPoints />
      <Solution />
      <Pricing />
      <FAQ />
      <Footer />
      
      {/* Social Proof Popup */}
      {showPopup && (
        <div className="fixed bottom-20 left-4 md:bottom-4 z-50 animate-bounce-in">
          <div className="bg-white border-l-4 border-teal-500 shadow-2xl rounded-lg p-4 flex items-center gap-4 max-w-[280px]">
            <div className="bg-teal-100 p-2 rounded-full"><CheckCircle className="w-5 h-5 text-teal-600" /></div>
            <div>
              <p className="text-xs font-bold text-slate-800">Acesso liberado!</p>
              <p className="text-[11px] text-slate-600 leading-tight">
                <strong>{data.nome}</strong> garantiu o <br />
                <strong>{data.plano}</strong>.
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes bounce-in { 0% { transform: translateX(-100%); opacity: 0; } 100% { transform: translateX(0); opacity: 1; } }
        .animate-bounce-in { animation: bounce-in 0.5s ease-out; }
      `}</style>
    </div>
  );
}
