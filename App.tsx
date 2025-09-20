
import React from 'react';
import {
  RobotIcon, ArrowRightIcon, BonesIcon, ActivityIcon, DumbbellIcon, ZapIcon, ShieldIcon, ClockIcon, StarIcon, PhoneIcon, MailIcon, MapPinIcon, InstagramIcon, FacebookIcon, LinkedinIcon, SkeletonIcon, WhatsAppIcon
} from './components/icons';

// --- DATA ---
const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#sobre-mi', label: 'Sobre Mí' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#contacto', label: 'Contacto' },
];

const services = [
  { icon: <BonesIcon className="w-8 h-8"/>, title: 'Terapia Manual Osteopática', description: 'Técnicas avanzadas de manipulación para restaurar la función óptima del cuerpo.', theme: 'pink' },
  { icon: <ActivityIcon className="w-8 h-8"/>, title: 'Diagnóstico Biomecánico', description: 'Análisis preciso de patrones de movimiento y disfunciones estructurales.', theme: 'cyan' },
  { icon: <DumbbellIcon className="w-8 h-8"/>, title: 'Rehabilitación Funcional', description: 'Programas personalizados para optimizar el rendimiento y prevenir lesiones.', theme: 'green' },
  { icon: <ZapIcon className="w-8 h-8"/>, title: 'Tratamiento del Dolor', description: 'Abordaje integral para el alivio del dolor crónico y agudo.', theme: 'pink' },
  { icon: <ShieldIcon className="w-8 h-8"/>, title: 'Prevención Lesiones', description: 'Estrategias proactivas para mantener tu cuerpo en estado óptimo.', theme: 'cyan' },
  { icon: <ClockIcon className="w-8 h-8"/>, title: 'Recuperación Deportiva', description: 'Optimización del rendimiento atlético y recuperación acelerada.', theme: 'green' },
];

const testimonials = [
  { quote: '"Increíble profesional. Mi dolor de espalda desapareció completamente después de 3 sesiones."', author: 'María González' },
  { quote: '"El enfoque innovador del Mecánico Humano cambió mi vida. Altamente recomendado."', author: 'Carlos Ruiz' },
  { quote: '"Tratamiento excepcional. Finalmente encontré solución a mis problemas cervicales."', author: 'Ana Martín' },
];

// --- SECTION COMPONENTS ---

const Header: React.FC = () => (
  <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/30">
    <div className="container mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <a href="#inicio" className="flex items-center space-x-3">
          <RobotIcon className="w-8 h-8 neon-text-pink"/>
          <span className="text-2xl font-bold font-orbitron neon-text-cyan">MECÁNICO HUMANO</span>
        </a>
        <div className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium text-lg">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  </nav>
);

const Hero: React.FC = () => (
  <section id="inicio" className="min-h-screen flex items-center justify-center relative cyber-grid overflow-hidden pt-24">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-0"></div>
    <div className="container mx-auto px-6 text-center relative z-10">
      <div className="space-y-8">
        <div className="animate-floating">
          <RobotIcon className="w-32 h-32 mx-auto neon-text-pink animate-pulse-neon" />
        </div>
        <h1 className="text-6xl md:text-8xl font-bold font-orbitron glitch-effect neon-text-cyan" data-text="MECÁNICO HUMANO">MECÁNICO HUMANO</h1>
        <p className="text-2xl md:text-3xl neon-text-green font-light tracking-widest">OSTEOPATÍA DEL FUTURO</p>
        <p className="text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
          Revolucionando la terapia manual con técnicas avanzadas y tecnología de vanguardia. Tu cuerpo es una máquina perfecta, yo soy tu mecánico especializado.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
          <a href="#contacto" className="inline-flex items-center justify-center rounded-md h-11 neon-border-pink bg-transparent hover:bg-pink-500/20 text-pink-400 px-8 py-4 text-lg font-semibold transition-all duration-300 w-full sm:w-auto">
            RESERVAR CITA <ArrowRightIcon className="ml-2 w-5 h-5"/>
          </a>
          <a href="#servicios" className="inline-flex items-center justify-center rounded-md h-11 neon-border-cyan bg-transparent hover:bg-cyan-500/20 text-cyan-400 px-8 py-4 text-lg font-semibold transition-all duration-300 w-full sm:w-auto">
            CONOCER MÁS
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Services: React.FC = () => {
    const themeClasses = {
        pink: { border: 'neon-border-pink', text: 'neon-text-pink', hoverBg: 'hover:bg-pink-500/20', hoverBorder: 'hover:border-pink-400', hoverText: 'hover:text-pink-400' },
        cyan: { border: 'neon-border-cyan', text: 'neon-text-cyan', hoverBg: 'hover:bg-cyan-500/20', hoverBorder: 'hover:border-cyan-400', hoverText: 'hover:text-cyan-400' },
        green: { border: 'neon-border-green', text: 'neon-text-green', hoverBg: 'hover:bg-green-500/20', hoverBorder: 'hover:border-green-400', hoverText: 'hover:text-green-400' },
    };

    return (
        <section id="servicios" className="py-20 bg-gradient-to-b from-black to-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold font-orbitron neon-text-pink mb-6">SERVICIOS ESPECIALIZADOS</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">Tecnología de vanguardia aplicada a la osteopatía tradicional para resultados extraordinarios</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const currentTheme = themeClasses[service.theme as keyof typeof themeClasses];
                        return (
                            <div key={index} className={`cyber-card p-8 rounded-lg hover:scale-105 transition-all duration-300 flex flex-col ${currentTheme.border}`}>
                                <div className={`mb-4 ${currentTheme.text}`}>{service.icon}</div>
                                <h3 className="text-2xl font-bold mb-4 text-white flex-grow">{service.title}</h3>
                                <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>
                                <button className={`mt-auto inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 w-full bg-transparent border border-gray-600 transition-all duration-300 ${currentTheme.hoverBorder} ${currentTheme.hoverText}`}>
                                    MÁS INFORMACIÓN
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

const About: React.FC = () => (
    <section id="sobre-mi" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-5xl font-bold font-orbitron neon-text-cyan mb-8">EL MECÁNICO HUMANO</h2>
                    <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                        <p>Con más de 10 años de experiencia en osteopatía y terapia manual, he desarrollado un enfoque único que combina técnicas tradicionales con metodologías innovadoras.</p>
                        <p>Mi filosofía es simple: tu cuerpo es una máquina perfecta que a veces necesita un ajuste preciso. Como tu mecánico especializado, diagnostico, reparo y optimizo tu sistema musculoesquelético para un rendimiento máximo.</p>
                        <p>Especializado en tratamientos personalizados, cada sesión es única y adaptada a las necesidades específicas de cada paciente.</p>
                    </div>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="cyber-card p-6 rounded-lg neon-border-green text-center"><div className="text-4xl font-bold neon-text-green">500+</div><div className="text-gray-300 mt-2">Pacientes Tratados</div></div>
                        <div className="cyber-card p-6 rounded-lg neon-border-pink text-center"><div className="text-4xl font-bold neon-text-pink">10+</div><div className="text-gray-300 mt-2">Años Experiencia</div></div>
                    </div>
                </div>
                <div className="relative flex items-center justify-center h-full min-h-[400px]">
                    <div className="w-full max-w-sm p-4">
                        <SkeletonIcon className="w-full h-auto animate-scan animate-floating" />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const Testimonials: React.FC = () => (
    <section id="testimonios" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-5xl font-bold font-orbitron neon-text-green mb-6">TESTIMONIOS</h2>
                <p className="text-xl text-gray-300">Lo que dicen mis pacientes sobre su experiencia</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="cyber-card p-8 rounded-lg neon-border-cyan flex flex-col">
                        <div className="flex mb-4">
                            {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5 text-green-400 fill-current" />)}
                        </div>
                        <p className="text-gray-300 mb-6 italic flex-grow">"{testimonial.quote}"</p>
                        <div className="font-semibold neon-text-cyan mt-auto">- {testimonial.author}</div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Contact: React.FC = () => (
    <section id="contacto" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-5xl font-bold font-orbitron neon-text-pink mb-6">CONTACTO</h2>
                <p className="text-xl text-gray-300">Inicia tu proceso de recuperación hoy mismo</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-16">
                <div className="space-y-8">
                    <div className="cyber-card p-8 rounded-lg neon-border-green">
                        <h3 className="text-2xl font-bold neon-text-green mb-6">Información de Contacto</h3>
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4"><PhoneIcon className="w-6 h-6 neon-text-cyan" /><div><div className="font-semibold">Teléfono</div><a href="tel:+TU_NUMERO_DE_TELEFONO" className="text-gray-300 hover:text-cyan-400">+TU_NUMERO_DE_TELEFONO</a></div></div>
                            <div className="flex items-center space-x-4"><MailIcon className="w-6 h-6 neon-text-pink" /><div><div className="font-semibold">Email</div><a href="mailto:TU_EMAIL" className="text-gray-300 hover:text-pink-400">TU_EMAIL</a></div></div>
                            <div className="flex items-center space-x-4"><MapPinIcon className="w-6 h-6 neon-text-green" /><div><div className="font-semibold">Ubicación</div><div className="text-gray-300">Calle Principal 123, Madrid</div></div></div>
                        </div>
                    </div>
                    <div className="cyber-card p-8 rounded-lg neon-border-cyan">
                        <h3 className="text-2xl font-bold neon-text-cyan mb-6">Horarios</h3>
                        <div className="space-y-3 text-gray-300">
                            <div className="flex justify-between border-b border-cyan-500/20 pb-2"><span>Lunes - Viernes</span><span>9:00 - 20:00</span></div>
                            <div className="flex justify-between border-b border-cyan-500/20 pb-2"><span>Sábados</span><span>9:00 - 14:00</span></div>
                            <div className="flex justify-between"><span>Domingos</span><span>Cerrado</span></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="cyber-card p-8 rounded-lg neon-border-pink h-full flex flex-col justify-center">
                        <h3 className="text-2xl font-bold neon-text-pink mb-4">Acceso Directo a tu Cita</h3>
                        <p className="text-gray-300 mb-8">Elige tu canal preferido para agendar tu sesión y empezar tu recuperación.</p>
                        <div className="space-y-6">
                             <a href="https://wa.me/TU_NUMERO_DE_TELEFONO" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md h-12 px-4 w-full neon-border-green bg-transparent hover:bg-green-500/20 text-green-400 py-4 text-lg font-semibold transition-all duration-300 gap-3">
                                <WhatsAppIcon className="w-6 h-6"/>
                                RESERVAR POR WHATSAPP
                            </a>
                            <a href="https://instagram.com/TU_USUARIO_INSTAGRAM" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md h-12 px-4 w-full neon-border-pink bg-transparent hover:bg-pink-500/20 text-pink-400 py-4 text-lg font-semibold transition-all duration-300 gap-3">
                                <InstagramIcon className="w-6 h-6"/>
                                RESERVAR POR INSTAGRAM
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const Footer: React.FC = () => (
    <footer className="bg-black border-t border-cyan-500/30 py-8">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center space-x-3">
                    <RobotIcon className="w-8 h-8 neon-text-pink" />
                    <span className="text-2xl font-bold font-orbitron neon-text-cyan">MECÁNICO HUMANO</span>
                </div>
                <div className="flex items-center">
                    <a href="https://instagram.com/TU_USUARIO_INSTAGRAM" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <InstagramIcon className="w-8 h-8 text-gray-400 hover:text-pink-400 transition-colors" />
                    </a>
                </div>
                <div className="text-center md:text-right">
                    <p className="text-gray-400 mb-1">© {new Date().getFullYear()} Mecánico Humano. Todos los derechos reservados.</p>
                    <p className="text-sm text-gray-500">Osteopatía profesional con tecnología del futuro</p>
                </div>
            </div>
        </div>
    </footer>
);

// --- MAIN APP COMPONENT ---

function App() {
  return (
    <div className="min-h-screen bg-black text-white scan-lines">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
