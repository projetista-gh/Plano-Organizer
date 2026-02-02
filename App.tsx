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
  ArrowRight,
  Smartphone,
  Video,
  Infinity
} from 'lucide-react';

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
            // Fallback caso o link direto do Imgur falhe
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop';
          }}
        />
        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[240px] hidden md:block">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center text-sky-600">
              <BrainCircuit size={20} />
            </div>
            <span className="font-bold text-slate-800 font-title">Carga Mental</span>
          </div>
          <p className="text-sm text-slate-500">Reduza 80% do estresse mental hoje mesmo.</p>
        </div>
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
            <div key={idx} className="flex items-center gap-4 p-6 bg-teal-50/50 rounded-2xl border border-teal-100/50 hover:border-teal-200 transition-all text-left">
              <div className="bg-white p-3 rounded-xl shadow-sm">
                {pain.icon}
              </div>
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Apresentamos a você o Plano Organizer</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Desenvolvido especialmente para quem precisa de praticidade, não de complicação.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100 flex flex-col items-center text-center">
          <div className="w-14 h-14 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center mb-6">
            <Smartphone size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-4 font-title">Funciona 100% no celular</h3>
          <p className="text-slate-600">Acesse suas listas, gastos e tarefas de qualquer lugar. Sem precisar ligar o computador toda hora.</p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100 flex flex-col items-center text-center">
          <div className="w-14 h-14 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center mb-6">
            <Video size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-4 font-title">Vídeo-aula inclusa</h3>
          <p className="text-slate-600">Não deixamos você sozinha. Mostramos o passo a passo de como usar cada detalhe do sistema.</p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100 flex flex-col items-center text-center">
          <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
            <Infinity size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-4 font-title">Acesso vitalício</h3>
          <p className="text-slate-600">Pague uma única vez e use para sempre. Sem mensalidades escondidas ou renovações automáticas.</p>
        </div>
      </div>
    </div>
  </section>
);

const Pricing: React.FC = () => {
  return (
    <section id="precos" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100 rounded-full -mr-32 -mt-32 blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-100 rounded-full -ml-32 -mb-32 blur-3xl opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Escolha seu plano ideal</h2>
          <p className="text-slate-600">Organize sua vida e foque no que realmente importa</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card Essencial */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-200 shadow-sm flex flex-col hover:border-teal-200 transition-colors">
            <h3 className="text-2xl font-bold text-slate-800 mb-2 font-title">Acesso Essencial</h3>
            <p className="text-slate-500 mb-6">Foco no controle financeiro</p>
            
            <div className="mb-8 space-y-4">
              <div className="flex gap-3 text-slate-700">
                <CheckCircle className="text-teal-500 shrink-0" size={20} />
                <span>Planilha de Gestão Financeira Completa</span>
              </div>
              <div className="flex gap-3 text-slate-700">
                <CheckCircle className="text-teal-500 shrink-0" size={20} />
                <span>Vídeo-aula de como usar</span>
              </div>
            </div>

            <div className="mt-auto">
              <div className="text-slate-400 line-through text-lg mb-1">De R$ 47,00</div>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-2xl font-bold">R$</span>
                <span className="text-5xl font-extrabold text-slate-900 font-title">19,90</span>
              </div>
              <a 
                href="#"
                className="block w-full text-center py-4 bg-slate-100 hover:bg-slate-200 text-slate-800 btn-montserrat rounded-2xl transition-all active:scale-95"
              >
                QUERO COMEÇAR AGORA
              </a>
            </div>
          </div>

          {/* Card Completo */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border-4 border-teal-500 shadow-2xl flex flex-col relative">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-teal-500 text-white px-6 py-2 rounded-full text-sm btn-montserrat shadow-lg">
              MAIS VENDIDO
            </div>
            
            <h3 className="text-2xl font-bold text-slate-800 mb-2 font-title">Acesso Completo</h3>
            <p className="text-teal-600 font-medium mb-6">Gestão Completa da sua vida</p>
            
            <div className="mb-8 space-y-4">
              <div className="flex gap-3 text-slate-700">
                <CheckCircle className="text-teal-500 shrink-0" size={20} />
                <span className="font-semibold">Tudo do Plano Essencial</span>
              </div>
              <div className="flex gap-3 text-slate-700">
                <CheckCircle className="text-teal-500 shrink-0" size={20} />
                <span>Planilha de Gestão Doméstica</span>
              </div>
              <div className="flex gap-3 text-slate-700">
                <CheckCircle className="text-teal-500 shrink-0" size={20} />
                <span>Planilha de Gestão de Tempo/Atividades</span>
              </div>
              <div className="flex gap-3 text-slate-700">
                <CheckCircle className="text-teal-500 shrink-0" size={20} />
                <span>Vídeo-aula de como usar inclusa</span>
              </div>
            </div>

            <div className="mt-auto">
              <div className="text-slate-400 line-through text-lg mb-1">De R$ 97,00</div>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-2xl font-bold">R$</span>
                <span className="text-6xl font-extrabold text-slate-900 font-title">47,00</span>
              </div>
              <a 
                href="#"
                className="block w-full text-center py-5 bg-teal-500 hover:bg-teal-600 text-white btn-montserrat rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95 text-lg"
              >
                QUERO O SISTEMA COMPLETO
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TrustAndSecurity: React.FC = () => (
  <section className="py-16 bg-slate-50 border-y border-slate-100">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg mb-4 border border-teal-200">
            <ShieldCheck size={48} className="text-teal-500" />
          </div>
          <h4 className="text-xl font-bold mb-2 font-title">Garantia de 7 dias</h4>
          <p className="text-slate-500 max-w-[250px]">Se não se adaptar, devolvemos seu dinheiro. Sem perguntas.</p>
        </div>
        
        <div className="h-px w-16 bg-slate-200 hidden md:block"></div>

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100">
               <CreditCard size={24} className="text-slate-600" />
            </div>
            <div className="font-bold text-2xl text-teal-600 italic font-title">Pix</div>
          </div>
          <h4 className="text-xl font-bold mb-2 font-title">Pagamento Seguro</h4>
          <p className="text-slate-500 max-w-[250px]">Acesso imediato após confirmação via Pix ou Cartão.</p>
        </div>
      </div>
    </div>
  </section>
);

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "Preciso saber Excel?",
      a: "Não! O sistema foi desenhado para ser super intuitivo. Se você sabe digitar no celular, você consegue usar perfeitamente."
    },
    {
      q: "Funciona no iPhone e Android?",
      a: "Sim! Funciona em qualquer smartphone através do aplicativo Excel ou do Google Planilhas, que é gratuito."
    },
    {
      q: "Como recebo o acesso?",
      a: "O envio é imediato e automático por e-mail logo após a confirmação do pagamento (em segundos para Pix e Cartão)."
    },
    {
      q: "Tenho suporte se tiver dúvidas?",
      a: "Sim! Dentro do sistema você terá acesso ao nosso canal de suporte para qualquer dificuldade técnica."
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Dúvidas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden transition-all">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-800">{faq.q}</span>
                {openIdx === idx ? <ChevronUp size={20} className="text-slate-400" /> : <ChevronDown size={20} className="text-slate-400" />}
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-6 text-slate-600 animate-in fade-in slide-in-from-top-2 duration-300">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => (
  <footer className="py-12 bg-slate-900 text-white">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <div className="flex items-center justify-center gap-2 mb-6">
        <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold italic">P</div>
        <span className="text-xl font-bold font-title">Plano Organizer</span>
      </div>
      <p className="text-slate-400 text-sm mb-8">
        © {new Date().getFullYear()} Plano Organizer. Todos os direitos reservados.<br />
        Desenvolvido para facilitar a vida de quem precisa de praticidade.
      </p>
      <div className="flex justify-center gap-6 text-slate-400 text-xs uppercase tracking-widest">
        <a href="#" className="hover:text-teal-400">Termos de Uso</a>
        <a href="#" className="hover:text-teal-400">Privacidade</a>
      </div>
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PainPoints />
      <Solution />
      <Pricing />
      <TrustAndSecurity />
      <FAQ />
      <Footer />
      
      {/* Sticky Bottom CTA for Mobile */}
      <div className="fixed bottom-4 left-4 right-4 md:hidden z-40">
        <a 
          href="#precos" 
          className="block w-full text-center py-4 bg-teal-500 text-white btn-montserrat rounded-2xl shadow-2xl transition-transform active:scale-95"
        >
          QUERO COMEÇAR AGORA
        </a>
      </div>
    </div>
  );
}