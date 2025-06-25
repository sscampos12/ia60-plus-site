import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Clock, Brain, Users, Shield, Star, CheckCircle, Play, CreditCard, Zap, ShieldCheck } from 'lucide-react'
import brainIcon from './assets/brain-icon.jpg'
import elderlyTech1 from './assets/elderly-tech-1.jpeg'
import elderlyTech2 from './assets/elderly-tech-2.jpeg'
import elderlyTech3 from './assets/elderly-tech-3.jpeg'
import './Aplicativo.css'

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 6,
    hours: 19,
    minutes: 49,
    seconds: 43
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen gradient-bg text-white">
      {/* Countdown Timer */}
      <div className="bg-orange-500 text-center py-3">
        <div className="flex items-center justify-center gap-4">
          <Clock className="w-5 h-5" />
          <span className="font-bold">ÚLTIMA BRECHA ATIVA ATÉ 30/06</span>
          <div className="flex gap-2">
            <span className="countdown-timer">{timeLeft.days} dias</span>
            <span className="countdown-timer">{timeLeft.hours} horas</span>
            <span className="countdown-timer">{timeLeft.minutes} min</span>
            <span className="countdown-timer">{timeLeft.seconds} seg</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="mb-8">
          <img src={brainIcon} alt="IA 60+ Icon" className="w-24 h-24 mx-auto mb-6 rounded-full" />
        </div>
        
        <h1 className="text-6xl font-bold mb-4 neon-text">
          IA 60+ <span className="text-purple-400">+ Tecnologia Avançada</span>
        </h1>
        
        <p className="text-xl mb-6 max-w-4xl mx-auto">
          <strong>Ative hoje IA de última geração, ferramentas exclusivas e mais!</strong>
          Método simples, direto e ativação imediata na sua conta — utilizando os{' '}
          <strong>benefícios atualmente disponíveis</strong> na plataforma.
        </p>
        
        <div className="neon-border inline-block px-6 py-3 rounded-lg mb-8">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            <span className="font-bold">Acesso por 15 meses • Ativação Imediata</span>
          </div>
        </div>
        
        <Button 
          className="cta-button text-xl px-8 py-4 mb-8"
          onClick={() => window.open('https://loja.infinitepay.io/adventureislifeoficial/uvv3755-gemini-veo-3', '_blank')}
        >
          Quero Acessar Agora →
        </Button>
        
        <div className="flex items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <CreditCard className="w-4 h-4" />
            <span>Pagamento único</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4" />
            <span>Acesso instantâneo ao método</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Garantia de 7 dias</span>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">Como Funciona</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="step-number">1</div>
            <h3 className="text-xl font-bold mb-4">Escolha e Pague</h3>
            <p className="text-gray-300">Pagamento seguro e instantâneo</p>
          </div>
          
          <div className="text-center">
            <div className="step-number">2</div>
            <h3 className="text-xl font-bold mb-4">Receba Acesso ao Método</h3>
            <p className="text-gray-300">Instruções enviadas por email</p>
          </div>
          
          <div className="text-center">
            <div className="step-number">3</div>
            <h3 className="text-xl font-bold mb-4">Ativação na sua conta</h3>
            <p className="text-gray-300">
              Ative os benefícios diretamente na sua própria conta.
              <br />
              👉 Não pedimos sua senha.
            </p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* IA 60+ */}
          <Card className="feature-card">
            <CardHeader>
              <CardTitle className="text-2xl text-cyan-400 flex items-center gap-2">
                <Brain className="w-8 h-8" />
                IA 60+
              </CardTitle>
              <CardDescription className="text-gray-300">
                A IA mais avançada especialmente adaptada para a melhor idade
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-300">
              <ul className="space-y-2">
                <li>• Crie conteúdo personalizado para sua idade</li>
                <li>• Monte estratégias de vida e bem-estar</li>
                <li>• Analise informações com inteligência artificial</li>
                <li>• Criação assistida de documentos e projetos pessoais</li>
              </ul>
            </CardContent>
          </Card>

          {/* Tecnologia Avançada */}
          <Card className="feature-card">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-400 flex items-center gap-2">
                <Users className="w-8 h-8" />
                Tecnologia Avançada
              </CardTitle>
              <CardDescription className="text-gray-300">
                Ferramentas de última geração adaptadas para facilitar seu dia a dia
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-300">
              <ul className="space-y-2">
                <li>• Interface simplificada e intuitiva</li>
                <li>• Assistente virtual personalizado</li>
                <li>• Comunicação facilitada com família</li>
                <li>• Organização digital de memórias e documentos</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Additional Benefits */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">Benefícios Inclusos</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="feature-card">
            <CardContent className="p-6 text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-green-400" />
              <h3 className="text-lg font-bold mb-2">Armazenamento Seguro</h3>
              <p className="text-gray-300 text-sm">
                Espaço de sobra para todos os seus arquivos, fotos e vídeos, seguros na nuvem.
              </p>
            </CardContent>
          </Card>

          <Card className="feature-card">
            <CardContent className="p-6 text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-lg font-bold mb-2">Ferramentas Avançadas</h3>
              <p className="text-gray-300 text-sm">
                Ferramentas premium para otimizar seu trabalho e colaboração familiar.
              </p>
            </CardContent>
          </Card>

          <Card className="feature-card">
            <CardContent className="p-6 text-center">
              <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <h3 className="text-lg font-bold mb-2">Segurança Total</h3>
              <p className="text-gray-300 text-sm">
                Proteção de ponta com infraestrutura segura e confiável.
              </p>
            </CardContent>
          </Card>

          <Card className="feature-card">
            <CardContent className="p-6 text-center">
              <Brain className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
              <h3 className="text-lg font-bold mb-2">Pesquisa Inteligente</h3>
              <p className="text-gray-300 text-sm">
                Encontre informações mais rápido com recursos de pesquisa avançada.
              </p>
            </CardContent>
          </Card>

          <Card className="feature-card">
            <CardContent className="p-6 text-center">
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-green-400" />
              <h3 className="text-lg font-bold mb-2">Assistente Criativo</h3>
              <p className="text-gray-300 text-sm">
                Crie com o auxílio da IA, documentos, projetos... A inteligência desenvolvida para facilitar sua vida.
              </p>
            </CardContent>
          </Card>

          <Card className="feature-card">
            <CardContent className="p-6 text-center">
              <Star className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-lg font-bold mb-2">Suporte Especializado</h3>
              <p className="text-gray-300 text-sm">
                Atendimento dedicado para a melhor idade com paciência e carinho.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Video Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-8 text-cyan-400">Veja como é simples aplicar</h2>
        
        <div className="relative inline-block">
          <img 
            src={elderlyTech2} 
            alt="Vídeo explicativo" 
            className="rounded-lg w-full max-w-2xl mx-auto"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Button className="bg-red-600 hover:bg-red-700 rounded-full p-4">
              <Play className="w-8 h-8" />
            </Button>
          </div>
        </div>
        
        <p className="mt-4 text-lg">📽️ Clique para assistir o vídeo explicativo.</p>
      </div>

      {/* Pricing */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="price-card">
            <h2 className="text-3xl font-bold mb-4">Acesso Pro: IA 60+</h2>
            
            <div className="text-5xl font-bold mb-2">R$ 29,90</div>
            <p className="text-lg mb-6">preço único</p>
            
            <div className="text-left space-y-3 mb-8">
              <p className="font-semibold">Acesso PRO: IA 60+ + Tecnologia Avançada (Método Prático)</p>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Acesso ao Método + Suporte</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Bônus: Aula de Uso da IA para Melhor Idade</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Garantia de 7 dias</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Sem renovação automática</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Bônus: Guia de Tecnologia Simplificada</span>
              </div>
            </div>
            
            <Button 
              className="cta-button w-full text-xl py-4"
              onClick={() => window.open('https://loja.infinitepay.io/adventureislifeoficial/uvv3755-gemini-veo-3', '_blank')}
            >
              ACESSAR AGORA ⚡
            </Button>
            
            <div className="flex items-center justify-center gap-1 mt-4">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-sm">+320 Clientes Ativos | Satisfação 4,9/5</span>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">O que nossos clientes dizem</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="testimonial-card">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <img src={elderlyTech1} alt="Cliente" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold">Maria Silva, 68 anos</h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300">
                "Finalmente consegui entender e usar a tecnologia! O IA 60+ mudou minha vida digital."
              </p>
            </CardContent>
          </Card>

          <Card className="testimonial-card">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <img src={elderlyTech3} alt="Cliente" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold">João Santos, 72 anos</h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300">
                "Agora consigo me comunicar melhor com meus netos e organizar minhas fotos digitalmente!"
              </p>
            </CardContent>
          </Card>

          <Card className="testimonial-card">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <img src={elderlyTech2} alt="Cliente" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold">Ana Costa, 65 anos</h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300">
                "O suporte é maravilhoso! Sempre com paciência para explicar tudo detalhadamente."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Security Badges */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center gap-8">
          <Badge variant="outline" className="text-green-400 border-green-400 px-4 py-2">
            <ShieldCheck className="w-4 h-4 mr-2" />
            SSL Seguro
          </Badge>
          <Badge variant="outline" className="text-blue-400 border-blue-400 px-4 py-2">
            <CheckCircle className="w-4 h-4 mr-2" />
            7 Dias
          </Badge>
        </div>
        <p className="text-center mt-4 text-gray-300">
          Compra Segura • Suporte Rápido • Garantia de 7 Dias
        </p>
      </div>

      {/* FAQ */}
      <div className="container mx-auto px-4 py-16">
        <Card className="feature-card max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-cyan-400">FAQ - Perguntas Frequentes</CardTitle>
            <CardDescription className="text-gray-300">
              Clique aqui para ver as respostas às perguntas mais comuns
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button variant="outline" className="text-cyan-400 border-cyan-400">
              👆 Clique para abrir
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Final CTA */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-4 text-cyan-400">Não perca essa oportunidade</h2>
        <p className="text-xl mb-8">Acesso instantâneo por menos que uma pizza.</p>
        
        <Button 
          className="cta-button text-xl px-8 py-4"
          onClick={() => window.open('https://loja.infinitepay.io/adventureislifeoficial/uvv3755-gemini-veo-3', '_blank')}
        >
          🔒 Quero meu Acesso Pro
        </Button>
      </div>
    </div>
  )
}

export default App

