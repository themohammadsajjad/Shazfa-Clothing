import { useState, useEffect } from 'react';
import { Instagram, Facebook, Mail, ArrowRight, Youtube } from 'lucide-react';
import logoImage from 'figma:asset/13b1fc49299dd0a4415f933dbe30503ab559c242.png';
import fashionImage from 'figma:asset/db9a334989356bb59440473f5b88dbb700ddaf1d.png';

// Custom X (Twitter) Icon
const XIcon = ({ size = 24, style }: { size?: number; style?: React.CSSProperties }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    style={style}
  >
    <path d="M4 4l16 16M20 4l-16 16" />
  </svg>
);

// Custom Pinterest Icon
const PinterestIcon = ({ size = 24, style }: { size?: number; style?: React.CSSProperties }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    style={style}
  >
    <path d="M12 2c5.523 0 10 4.477 10 10 0 4.237-2.636 7.855-6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.853 0 1.265.64 1.265 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.176-4.068-2.845 0-4.516 2.135-4.516 4.34 0 .859.331 1.781.744 2.281a.3.3 0 0 1 .069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
  </svg>
);

// Custom WhatsApp Icon
const WhatsAppIcon = ({ size = 24, style }: { size?: number; style?: React.CSSProperties }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    style={style}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function App() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      
      {/* Advanced Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating circles with parallax */}
        <div 
          className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-5 blur-3xl"
          style={{ 
            backgroundColor: '#b76e79',
            transform: `translate(${mousePosition.x * 0.02}px, ${scrollY * 0.2 + mousePosition.y * 0.02}px)`
          }}
        />
        <div 
          className="absolute bottom-20 left-10 w-72 h-72 rounded-full opacity-5 blur-2xl"
          style={{ 
            backgroundColor: '#b76e79',
            transform: `translate(${-mousePosition.x * 0.01}px, ${-scrollY * 0.3 - mousePosition.y * 0.01}px)`
          }}
        />
        
        {/* Geometric patterns */}
        <div 
          className="absolute top-40 left-1/3 w-32 h-32 border opacity-10"
          style={{ 
            borderColor: '#b76e79',
            transform: `rotate(45deg) scale(${1 + scrollY * 0.0005})`
          }}
        />
        <div 
          className="absolute bottom-40 right-1/4 w-24 h-24 border-2 rounded-full opacity-10"
          style={{ 
            borderColor: '#b76e79',
            transform: `scale(${1 + scrollY * 0.0003})`
          }}
        />
      </div>

      {/* Header with Enhanced Logo */}
      <header className="relative z-20 px-6 md:px-12 py-8 md:py-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo and Brand Name */}
          <div className="flex items-center gap-4">
            <img 
              src={logoImage} 
              alt="Shazfa Clothing" 
              className="h-14 md:h-16 w-auto"
            />
            <div className="flex items-baseline gap-2">
              <span 
                className="text-2xl md:text-3xl tracking-wider"
                style={{ 
                  fontFamily: "'Cinzel', serif",
                  fontWeight: 700,
                  color: '#000000',
                  letterSpacing: '2px'
                }}
              >
                SHAZFA
              </span>
              <span 
                className="text-lg md:text-2xl tracking-wider"
                style={{ 
                  fontFamily: "'Cinzel', serif",
                  fontWeight: 400,
                  color: '#b76e79',
                  letterSpacing: '2px'
                }}
              >
                CLOTHING
              </span>
              <span 
                className="text-xs"
                style={{ 
                  fontFamily: "'Cinzel', serif",
                  color: '#999999',
                  verticalAlign: 'super'
                }}
              >
                ™
              </span>
            </div>
          </div>

          {/* Header Badge */}
          <div 
            className="px-4 py-2 border backdrop-blur-sm"
            style={{ 
              borderColor: '#b76e79',
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '11px',
              letterSpacing: '1.5px',
              color: '#b76e79',
              fontWeight: 600,
              backgroundColor: 'rgba(183, 110, 121, 0.05)'
            }}
          >
            COMING 2026
          </div>
        </div>
      </header>

      {/* Main Hero Section */}
      <main className="relative z-10 px-6 md:px-12 pt-8 md:pt-16 pb-24">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Grid with Unique Layout */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Content Area - Takes 6 columns */}
            <div className="lg:col-span-6 space-y-12">

              {/* Main Headline with Unique Typography */}
              <div className="space-y-8">
                <h1 
                  className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none"
                  style={{ 
                    fontFamily: "'Montserrat', sans-serif",
                    color: '#1a1a1a',
                    fontWeight: 600
                  }}
                >
                  <span className="block mb-2">Shazfa</span>
                  <span className="block italic" style={{ color: '#b76e79' }}>is on its way.</span>
                </h1>
                
                {/* Subheading with decorative element */}
                <div className="space-y-4">
                  <div className="flex items-start gap-6">
                    <div 
                      className="text-6xl md:text-7xl opacity-20 leading-none"
                      style={{ 
                        fontFamily: "'Montserrat', sans-serif",
                        color: '#b76e79',
                        fontWeight: 300
                      }}
                    >
                      "
                    </div>
                    <p 
                      className="text-lg md:text-xl pt-4"
                      style={{ 
                        fontFamily: "'Montserrat', sans-serif",
                        color: '#666666',
                        lineHeight: '1.8',
                        fontWeight: 300
                      }}
                    >
                      Exclusive women's fashion designed for the modern muse. 
                      Where timeless sophistication meets contemporary elegance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Email Capture Form with Enhanced Design */}
              <div className="pt-4">
                {isSubmitted ? (
                  <div 
                    className="p-6 flex items-center gap-3 animate-in fade-in slide-in-from-left duration-500 backdrop-blur-sm"
                    style={{ 
                      backgroundColor: '#b76e7920',
                      fontFamily: "'Montserrat', sans-serif",
                      color: '#b76e79',
                      fontWeight: 500,
                      border: '1px solid #b76e79'
                    }}
                  >
                    <Mail size={22} />
                    <span className="text-base">You're on the exclusive list. Welcome to Shazfa.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-1">
                      <label 
                        className="block text-xs tracking-widest mb-4"
                        style={{ 
                          fontFamily: "'Montserrat', sans-serif",
                          color: '#999999',
                          letterSpacing: '2px'
                        }}
                      >
                        BE THE FIRST TO KNOW
                      </label>
                      <div className="relative group">
                        <input
                          type="email"
                          placeholder="your.email@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full px-0 py-4 border-b-2 bg-transparent focus:outline-none transition-all"
                          style={{ 
                            borderColor: email ? '#b76e79' : '#e0e0e0',
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: '17px',
                            color: '#333333'
                          }}
                        />
                        <div 
                          className="absolute bottom-0 left-0 h-0.5 transition-all duration-500"
                          style={{ 
                            backgroundColor: '#b76e79',
                            width: email ? '100%' : '0%'
                          }}
                        />
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      className="group flex items-center gap-3 px-10 py-4 transition-all hover:gap-5 hover:shadow-2xl relative overflow-hidden"
                      style={{ 
                        backgroundColor: '#b76e79',
                        color: 'white',
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                        letterSpacing: '2px',
                        fontSize: '13px'
                      }}
                    >
                      <span className="relative z-10">NOTIFY ME</span>
                      <ArrowRight size={18} className="relative z-10 transition-transform group-hover:translate-x-1" />
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ 
                          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 100%)'
                        }}
                      />
                    </button>

                    <p 
                      className="text-xs pt-2"
                      style={{ 
                        fontFamily: "'Montserrat', sans-serif",
                        color: '#aaaaaa',
                        fontStyle: 'italic'
                      }}
                    >
                      Join our exclusive waitlist for early access and special offers.
                    </p>
                  </form>
                )}
              </div>

              {/* Elegant Stats with Icons */}
              <div className="grid grid-cols-3 gap-6 pt-12 border-t" style={{ borderColor: '#f0f0f0' }}>
                <div className="space-y-3">
                  <div 
                    className="text-3xl md:text-4xl"
                    style={{ 
                      fontFamily: "'Cinzel', serif",
                      color: '#b76e79',
                      fontWeight: 700
                    }}
                  >
                    100%
                  </div>
                  <div 
                    className="text-xs tracking-wider leading-relaxed"
                    style={{ 
                      fontFamily: "'Montserrat', sans-serif",
                      color: '#666666',
                      letterSpacing: '1px'
                    }}
                  >
                    PREMIUM<br />FABRICS
                  </div>
                </div>
                <div className="space-y-3">
                  <div 
                    className="text-3xl md:text-4xl"
                    style={{ 
                      fontFamily: "'Cinzel', serif",
                      color: '#b76e79',
                      fontWeight: 700
                    }}
                  >
                    2026
                  </div>
                  <div 
                    className="text-xs tracking-wider leading-relaxed"
                    style={{ 
                      fontFamily: "'Montserrat', sans-serif",
                      color: '#666666',
                      letterSpacing: '1px'
                    }}
                  >
                    EXCLUSIVE<br />LAUNCH
                  </div>
                </div>
                <div className="space-y-3">
                  <div 
                    className="text-3xl md:text-4xl"
                    style={{ 
                      fontFamily: "'Cinzel', serif",
                      color: '#b76e79',
                      fontWeight: 700
                    }}
                  >
                    ∞
                  </div>
                  <div 
                    className="text-xs tracking-wider leading-relaxed"
                    style={{ 
                      fontFamily: "'Montserrat', sans-serif",
                      color: '#666666',
                      letterSpacing: '1px'
                    }}
                  >
                    TIMELESS<br />ELEGANCE
                  </div>
                </div>
              </div>

            </div>

            {/* Right Image Area - Takes 6 columns with Creative Layout */}
            <div className="lg:col-span-6 relative">
              <div className="relative">
                
                {/* Multiple layered frames for depth */}
                <div className="relative z-10">
                  {/* Main Image Container */}
                  <div className="aspect-[3/4] overflow-hidden relative group">
                    <img
                      src={fashionImage}
                      alt="Shazfa Clothing Collection"
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    />
                    
                    {/* Sophisticated overlay */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700"
                      style={{ 
                        background: 'linear-gradient(180deg, transparent 0%, #b76e79 100%)'
                      }}
                    />
                    
                    {/* Corner accents */}
                    <div 
                      className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2"
                      style={{ borderColor: 'rgba(255, 255, 255, 0.5)' }}
                    />
                    <div 
                      className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2"
                      style={{ borderColor: 'rgba(255, 255, 255, 0.5)' }}
                    />
                  </div>
                </div>
                
                {/* Decorative geometric frames */}
                <div 
                  className="absolute -bottom-6 -right-6 w-full h-full border-2 -z-0"
                  style={{ borderColor: '#b76e79' }}
                />
                <div 
                  className="absolute -top-6 -left-6 w-24 h-24 border-2"
                  style={{ borderColor: '#b76e79', opacity: 0.3 }}
                />
                
                {/* Floating badge */}
                <div 
                  className="absolute -left-8 top-1/3 rotate-90 hidden lg:block backdrop-blur-sm"
                  style={{ 
                    fontFamily: "'Cinzel', serif",
                    fontSize: '11px',
                    letterSpacing: '3px',
                    color: '#b76e79',
                    fontWeight: 700,
                    padding: '12px 24px',
                    border: '2px solid #b76e79',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)'
                  }}
                >
                  PREMIUM COLLECTION
                </div>

                {/* Side quote - vertical text */}
                <div 
                  className="absolute -right-16 top-1/2 -translate-y-1/2 hidden xl:block"
                  style={{ 
                    writingMode: 'vertical-rl',
                    transform: 'translateY(-50%) rotate(180deg)',
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '13px',
                    letterSpacing: '4px',
                    color: '#cccccc',
                    fontWeight: 300
                  }}
                >
                  FASHION • ELEGANCE • LUXURY
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Section - Enhanced Social Links */}
          <div className="mt-24 md:mt-40 grid md:grid-cols-2 gap-12 pt-16 border-t" style={{ borderColor: '#f0f0f0' }}>
            
            {/* Left: Call to Action */}
            <div className="space-y-4">
              <h3 
                className="text-2xl md:text-3xl"
                style={{ 
                  fontFamily: "'Montserrat', sans-serif",
                  color: '#333333',
                  fontWeight: 600
                }}
              >
                Follow Our Journey
              </h3>
              <p 
                className="text-sm max-w-md"
                style={{ 
                  fontFamily: "'Montserrat', sans-serif",
                  color: '#999999',
                  lineHeight: '1.8'
                }}
              >
                Stay connected with Shazfa as we prepare to unveil our exclusive collection. 
                Be part of our story from the very beginning.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex gap-3 pt-4">
                <a 
                  href="https://instagram.com/shazfaclothing" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center border transition-all hover:border-[#b76e79] hover:bg-[#b76e7908] group"
                  style={{ borderColor: '#e5e5e5' }}
                  aria-label="Instagram"
                >
                  <Instagram 
                    size={18} 
                    style={{ color: '#b76e79' }}
                    className="transition-transform group-hover:scale-110"
                  />
                </a>

                <a 
                  href="https://facebook.com/shazfaclothing" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center border transition-all hover:border-[#b76e79] hover:bg-[#b76e7908] group"
                  style={{ borderColor: '#e5e5e5' }}
                  aria-label="Facebook"
                >
                  <Facebook 
                    size={18} 
                    style={{ color: '#b76e79' }}
                    className="transition-transform group-hover:scale-110"
                  />
                </a>

                <a 
                  href="https://x.com/shazfaclothing" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center border transition-all hover:border-[#b76e79] hover:bg-[#b76e7908] group"
                  style={{ borderColor: '#e5e5e5' }}
                  aria-label="X (Twitter)"
                >
                  <XIcon 
                    size={18} 
                    style={{ color: '#b76e79' }}
                  />
                </a>

                <a 
                  href="https://pinterest.com/shazfaclothing" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center border transition-all hover:border-[#b76e79] hover:bg-[#b76e7908] group"
                  style={{ borderColor: '#e5e5e5' }}
                  aria-label="Pinterest"
                >
                  <PinterestIcon 
                    size={18} 
                    style={{ color: '#b76e79' }}
                  />
                </a>

                <a 
                  href="https://youtube.com/@shazfaclothing" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center border transition-all hover:border-[#b76e79] hover:bg-[#b76e7908] group"
                  style={{ borderColor: '#e5e5e5' }}
                  aria-label="YouTube"
                >
                  <Youtube 
                    size={18} 
                    style={{ color: '#b76e79' }}
                    className="transition-transform group-hover:scale-110"
                  />
                </a>
              </div>
            </div>

            {/* Right: Contact Information */}
            <div className="space-y-6">
              <h3 
                className="text-2xl md:text-3xl"
                style={{ 
                  fontFamily: "'Montserrat', sans-serif",
                  color: '#333333',
                  fontWeight: 600
                }}
              >
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div 
                    className="w-10 h-10 flex items-center justify-center border flex-shrink-0"
                    style={{ borderColor: '#e5e5e5' }}
                  >
                    <Mail size={16} style={{ color: '#b76e79' }} />
                  </div>
                  <div>
                    <p 
                      className="text-xs tracking-wider mb-1"
                      style={{ 
                        fontFamily: "'Montserrat', sans-serif",
                        color: '#999999',
                        letterSpacing: '1px'
                      }}
                    >
                      EMAIL
                    </p>
                    <a 
                      href="mailto:shazfa.brand@gmail.com"
                      className="text-sm transition-colors hover:text-[#b76e79]"
                      style={{ 
                        fontFamily: "'Montserrat', sans-serif",
                        color: '#333333'
                      }}
                    >
                      shazfa.brand@gmail.com
                    </a>
                  </div>
                </div>

                {/* Office Phone */}
                <div className="flex items-start gap-4">
                  <div 
                    className="w-10 h-10 flex items-center justify-center border flex-shrink-0"
                    style={{ borderColor: '#e5e5e5' }}
                  >
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="#b76e79" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <p 
                      className="text-xs tracking-wider mb-1"
                      style={{ 
                        fontFamily: "'Montserrat', sans-serif",
                        color: '#999999',
                        letterSpacing: '1px'
                      }}
                    >
                      OFFICE
                    </p>
                    <a 
                      href="tel:+917499044979"
                      className="text-sm transition-colors hover:text-[#b76e79]"
                      style={{ 
                        fontFamily: "'Montserrat', sans-serif",
                        color: '#333333'
                      }}
                    >
                      +91 74990 44979
                    </a>
                  </div>
                </div>

                {/* Accounts Phone */}
                <div className="flex items-start gap-4">
                  <div 
                    className="w-10 h-10 flex items-center justify-center border flex-shrink-0"
                    style={{ borderColor: '#e5e5e5' }}
                  >
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="#b76e79" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <p 
                      className="text-xs tracking-wider mb-1"
                      style={{ 
                        fontFamily: "'Montserrat', sans-serif",
                        color: '#999999',
                        letterSpacing: '1px'
                      }}
                    >
                      ACCOUNTS
                    </p>
                    <a 
                      href="tel:+918180092667"
                      className="text-sm transition-colors hover:text-[#b76e79]"
                      style={{ 
                        fontFamily: "'Montserrat', sans-serif",
                        color: '#333333'
                      }}
                    >
                      +91 81800 92667
                    </a>
                  </div>
                </div>

                {/* Sales Phone */}
                <div className="flex items-start gap-4">
                  <div 
                    className="w-10 h-10 flex items-center justify-center border flex-shrink-0"
                    style={{ borderColor: '#e5e5e5' }}
                  >
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="#b76e79" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <p 
                      className="text-xs tracking-wider mb-1"
                      style={{ 
                        fontFamily: "'Montserrat', sans-serif",
                        color: '#999999',
                        letterSpacing: '1px'
                      }}
                    >
                      SALES
                    </p>
                    <a 
                      href="tel:+919511703208"
                      className="text-sm transition-colors hover:text-[#b76e79]"
                      style={{ 
                        fontFamily: "'Montserrat', sans-serif",
                        color: '#333333'
                      }}
                    >
                      +91 95117 03208
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div 
                    className="w-10 h-10 flex items-center justify-center border flex-shrink-0"
                    style={{ borderColor: '#e5e5e5' }}
                  >
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="#b76e79" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <p 
                      className="text-xs tracking-wider mb-1"
                      style={{ 
                        fontFamily: "'Montserrat', sans-serif",
                        color: '#999999',
                        letterSpacing: '1px'
                      }}
                    >
                      FACTORY ADDRESS
                    </p>
                    <p 
                      className="text-sm"
                      style={{ 
                        fontFamily: "'Montserrat', sans-serif",
                        color: '#333333',
                        lineHeight: '1.6'
                      }}
                    >
                      Shop No. 101 and 102, First Floor,<br />
                      Near Japani Market, Opposite Gemini,<br />
                      Gajanand Market Road, Nehru Chowk,<br />
                      Ulhasnagar 2, Ulhasnagar,<br />
                      Thane, Maharashtra - 421002
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>

      {/* Enhanced Footer */}
      <footer className="relative z-10 px-6 md:px-12 py-10 border-t-2" style={{ borderColor: '#f0f0f0' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Copyright */}
            <div className="flex items-center gap-4">
              <div 
                className="w-8 h-8 flex items-center justify-center border-2"
                style={{ borderColor: '#b76e79' }}
              >
                <span style={{ color: '#b76e79', fontSize: '12px', fontWeight: 700 }}>S</span>
              </div>
              <p 
                className="text-sm tracking-wide"
                style={{ 
                  fontFamily: "'Montserrat', sans-serif",
                  color: '#999999'
                }}
              >
                © 2026 Shazfa Clothing. All rights reserved.
              </p>
            </div>

            {/* Links */}
            <div className="flex gap-8">
              <a 
                href="#"
                className="text-sm tracking-wide transition-colors hover:opacity-100"
                style={{ 
                  fontFamily: "'Montserrat', sans-serif",
                  color: '#999999',
                  opacity: 0.7
                }}
              >
                Privacy Policy
              </a>
              <a 
                href="#"
                className="text-sm tracking-wide transition-colors hover:opacity-100"
                style={{ 
                  fontFamily: "'Montserrat', sans-serif",
                  color: '#999999',
                  opacity: 0.7
                }}
              >
                Terms of Service
              </a>
              <a 
                href="#"
                className="text-sm tracking-wide transition-colors hover:opacity-100"
                style={{ 
                  fontFamily: "'Montserrat', sans-serif",
                  color: '#999999',
                  opacity: 0.7
                }}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/918180092667?text=Hi%2C%20I%27m%20interested%20in%20Shazfa%20Clothing.%20I%27d%20like%20to%20know%20more%20about%20your%20upcoming%20collection."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 group"
        aria-label="Chat on WhatsApp"
      >
        {/* Button with pulse animation */}
        <div className="relative">
          {/* Pulsing ring animation */}
          <div 
            className="absolute inset-0 rounded-full animate-ping opacity-75"
            style={{ 
              backgroundColor: '#25D366',
              animationDuration: '2s'
            }}
          />
          
          {/* Main button */}
          <div 
            className="relative w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-3xl"
            style={{ 
              backgroundColor: '#25D366'
            }}
          >
            <WhatsAppIcon size={32} style={{ color: 'white' }} />
          </div>

          {/* Tooltip */}
          <div 
            className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 rounded shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
            style={{ 
              backgroundColor: '#333333',
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '13px',
              color: 'white'
            }}
          >
            <span className="block">Chat with us 24/7</span>
            <div 
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0"
              style={{
                borderTop: '6px solid transparent',
                borderBottom: '6px solid transparent',
                borderLeft: '6px solid #333333'
              }}
            />
          </div>
        </div>
      </a>

    </div>
  );
}