import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ProgressBar } from "./ProgressBar";
import { AlertCircle, ChevronDown } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ResultScreenProps {
  feedbacks: Array<{ title: string; description: string }>;
}

/**
 * Remove a introdução redundante que reafirma o título do feedback.
 * Ex: "Entendido. Este é o Ponto Cego da \"X\"." -> removido
 */
const removeRedundantIntroduction = (description: string): string => {
  let cleaned = description.trim();

  // Remove palavras introdutórias no início (antes de procurar por "Este é o Ponto Cego")
  // Isso garante que removemos "Entendido." mesmo que venha antes
  const introWords = /^(Entendido|Sim|Exato|Faz sentido|Atenção aqui)\.\s*/i;
  cleaned = cleaned.replace(introWords, "");

  // Encontra e remove padrões que começam com "Este é o Ponto Cego" ou "Este é um Ponto Cego"
  // Procura pelo padrão completo: "Este é o Ponto Cego [qualquer coisa]."
  // Usa [\s\S] para capturar qualquer caractere incluindo quebras de linha
  const pontoCegoPattern = /^.*?Este é (o|um) Ponto Cego[\s\S]*?\.\s*/i;
  cleaned = cleaned.replace(pontoCegoPattern, "");

  // Remove palavras isoladas positivas que podem ter ficado
  cleaned = cleaned.replace(
    /^(Excelente|Perfeito|Maravilha|Fantástico|Exato)[\.!]\s*/i,
    ""
  );

  // Remove padrões específicos que podem ter ficado
  cleaned = cleaned.replace(
    /^Seu foco está 100% na estética\.\s*/i,
    ""
  );

  // Remove frases de transição no final do texto
  // Padrões como "Vamos ao próximo.", "Vamos continuar.", etc.
  // Usa um padrão genérico que captura qualquer frase começando com "Vamos" no final
  cleaned = cleaned.replace(/\s*Vamos[^.]*\.\s*$/i, "");

  return cleaned.trim();
};

interface Testimonial {
  name: string;
  location?: string;
  text: string;
  result?: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Mariana Silva",
    location: "São Paulo, SP",
    text: "Depois de anos lutando contra dietas restritivas, finalmente encontrei minha liberdade. O Método Anti-Dieta me ensinou que não preciso escolher entre paz mental e saúde. Hoje como sem culpa e emagreci 8kg naturalmente.",
    result: "Perdeu 8kg em 3 meses",
    image: "/dep1.png",
  },
  {
    name: "Ana Paula Rocha",
    location: "Rio de Janeiro, RJ",
    text: "Minha relação com a comida mudou completamente. Antes eu vivia no ciclo 'pode ou não pode' e isso me consumia. Agora tenho autonomia e moderação. Glicemia controlada e mente livre!",
    result: "Diabetes controlado",
    image: "/dep2.png",
  },
  {
    name: "Juliana Costa",
    location: "Belo Horizonte, MG",
    text: "A diferença entre fome real e fome emocional foi o divisor de águas para mim. Quando entendi que ansiedade não era fome, tudo mudou. Emagrecer foi consequência da minha transformação interna.",
    result: "Perdeu 12kg em 4 meses",
    image: "/dep3.png",
  },
  {
    name: "Camila Santos",
    location: "Curitiba, PR",
    text: "Cuidar da minha pressão alta sem tortura parecia impossível até conhecer a Nutrição Comportamental. Hoje como bem, com prazer, e meus exames estão perfeitos. Saúde sem sofrimento existe!",
    result: "Pressão normalizada",
    image: "/dep4.png",
  },
  {
    name: "Patrícia Lima",
    location: "Porto Alegre, RS",
    text: "Me curei primeiro e depois emagreci. Essa foi a ordem correta que o método me ensinou. Mudei minha mente, mudei meus hábitos e o peso foi embora naturalmente. Sou uma pessoa completamente nova!",
    result: "Perdeu 15kg em 5 meses",
    image: "/dep5.png",
  },
];

export const ResultScreen = ({ feedbacks }: ResultScreenProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-hero flex items-center justify-center p-4 sm:p-6 pt-16 sm:pt-20 pb-8"
    >
      <div className="w-full max-w-4xl">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-xl sm:rounded-2xl shadow-elevated p-6 sm:p-8 md:p-10 lg:p-12"
        >
          {/* Título Principal */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 px-2">
              Seu Diagnóstico "Ponto Cego" está Completo
            </h1>
          </div>

          {/* Seção do Gabriel Ângelo */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-center mb-6 sm:mb-8"
          >
            <div className="flex justify-center mb-4 sm:mb-6">
              <img
                src="/gabriel.png"
                alt="Gabriel Ângelo - Nutricionista"
                className="w-32 sm:w-40 md:w-48 h-auto rounded-full object-cover shadow-lg"
              />
            </div>
            <div className="space-y-1 sm:space-y-2">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">
                Gabriel Ângelo
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Criador da NutriCoffee Brasil®
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground italic">
                Especializando em Nutrição Comportamental e Neurociência do Comportamento Humano.
              </p>
            </div>
          </motion.div>

          <div className="text-center mb-6 sm:mb-8">
            <div className="w-20 sm:w-24 h-1 bg-gradient-primary mx-auto mb-4 sm:mb-6 rounded-full" />
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              Obrigado pela sua honestidade. Com base nas suas respostas, 
              seu problema não é falta de disciplina. 
              Você está presa(o) em um ciclo de auto-sabotagem. 
              Veja seu diagnóstico:
            </p>
            
            {/* Seta animada abaixo da frase */}
            <div className="flex justify-center mt-4 sm:mt-6">
              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-primary"
              >
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6 mb-2 sm:mb-4">
            {feedbacks.map((feedback, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-secondary/50 rounded-lg sm:rounded-xl p-4 sm:p-6 border-l-4 border-primary"
              >
                <h3 className="font-bold text-base sm:text-lg text-foreground mb-2">
                  {feedback.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {removeRedundantIntroduction(feedback.description)}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Seta animada abaixo dos cards de diagnóstico */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-primary"
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-accent/10 border-2 border-accent rounded-lg sm:rounded-xl px-3 sm:px-4 md:px-5 pt-6 sm:pt-8 pb-3 sm:pb-4 mb-6 sm:mb-8"
          >
            <div className="flex items-start gap-2 sm:gap-3 mb-4">
              <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">
                  Você percebeu o padrão?
                </h3>
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <p>
                    As dietas falharam não porque você não sabia "o que" comer e sinceramente... Você já sabe disso e está cansada(o) de ouvir sempre a mesma coisa:
                  </p>
                  <ul className="space-y-2 sm:space-y-3 ml-2 sm:ml-3">
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold flex-shrink-0">✅</span>
                      <span>Evitar o consumo de ultraprocessados;</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold flex-shrink-0">✅</span>
                      <span>Diminuir o consumo de açúcares e carboidratos simples;</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold flex-shrink-0">✅</span>
                      <span>Comer mais frutas, legumes e vegetais;</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold flex-shrink-0">✅</span>
                      <span>Aumentar o consumo de proteínas;</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold flex-shrink-0">✅</span>
                      <span>Melhorar a qualidade de gorduras;</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold flex-shrink-0">✅</span>
                      <span>Dormir bem e beber bastante água.</span>
                    </li>
                  </ul>
                  <p className="font-semibold text-foreground">
                    Viu? A questão não é tão simples assim!
                  </p>
                  <p>
                    As dietas falharam porque ignoraram <span className="font-semibold text-foreground">sua ansiedade</span> em momentos de estresse, a <span className="font-semibold text-foreground">sua rotina de trabalho</span>, os <span className="font-semibold text-foreground">seus gatilhos emocionais</span> quando está vulnerável, ou seja, a <span className="font-semibold text-foreground">sua história</span>. Elas falharam porque focaram no <span className="font-semibold text-foreground">efeito</span> do problema e não na <span className="font-semibold text-foreground">causa</span>.
                  </p>
                  <p>
                    👇Aqui está a verdade que ninguém te contou:
                  </p>
                  <p className="font-semibold text-foreground mb-0">
                    Você não precisa escolher entre ter Saúde Clínica (peso saudável, exames bons) e Paz Mental. É possível ter os dois. E foi exatamente para isso que eu criei o 'MÉTODO ANTI-DIETA'
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Seta animada entre o card de gap e o card do CTA */}
          <div className="flex justify-center my-4 sm:my-6">
            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-primary"
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="bg-primary/5 rounded-lg sm:rounded-xl px-6 sm:px-8 pt-2 sm:pt-3 pb-6 sm:pb-8 mb-6 sm:mb-8"
          >
            {/* Imagem acima do título */}
            <div className="flex justify-center -mt-2 sm:-mt-3 mb-0">
              <img
                src="/capa-ebook-mad1.png"
                alt="Método Anti-Dieta"
                className="w-full max-w-xs sm:max-w-lg md:max-w-md lg:max-w-lg h-auto rounded-lg object-cover mx-auto"
              />
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground -mt-2 mb-3 sm:mb-4 text-center">
              MÉTODO ANTI-DIETA
            </h3>
            
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-center">
              O guia prático para desfazer os 'Pontos Cegos' da sua dieta, recuperar autonomia e emagrecer como consequência
            </p>
            
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              Neste eBook prático, eu abordo os princípios científicos da Nutrição Comportamental em um guia de aplicação imediata. Ele é o manual passo a passo para você:
            </p>
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-sm sm:text-base">
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-primary font-bold flex-shrink-0">✅</span>
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Declarar o Fim da Guerra contra o seu Corpo:</strong> Pare de lutar contra sua biologia. Aprenda a trabalhar com seu metabolismo, e não contra ele.
                </span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-primary font-bold flex-shrink-0">✅</span>
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Sair da Prisão do "Pode ou Não Pode":</strong> Quebre as correntes do Pensamento Dicotômico e conquiste a liberdade de comer um pão ou um chocolate com total autonomia e moderação.
                </span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-primary font-bold flex-shrink-0">✅</span>
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Identificar a Fome Real vs. Fome de Emoção:</strong> Nunca mais confunda ansiedade, cansaço ou tristeza com fome. Tenha clareza total do que seu corpo pede.
                </span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-primary font-bold flex-shrink-0">✅</span>
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Cuidar da sua Saúde Clínica sem Tortura:</strong> Gerencie glicemia, pressão e colesterol através da "Nutrição Comportamental", provando que saúde não precisa ser sinônimo de comida sem graça.
                </span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-primary font-bold flex-shrink-0">✅</span>
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Emagrecer porque se Curou (e não para se curar):</strong> O peso vai mudar porque você mudou sua mente, seus hábitos e desinflamou sua relação com a comida.
                </span>
              </li>
            </ul>
            
            {/* Seta animada abaixo do checklist */}
            <div className="flex justify-center mt-6 sm:mt-8 mb-4">
              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-primary"
              >
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </div>
            
            <p className="text-base sm:text-lg font-semibold text-foreground mb-4 sm:mb-6 text-center">
              🎁 BÔNUS: Comprando agora o MÉTODO ANTI-DIETA você ganha:
            </p>
            
            <div className="flex justify-center mb-4 sm:mb-6">
              <img
                src="/audio-40hz.png"
                alt="Protocolo de Neuroativação Gama 40 Hz"
                className="w-full max-w-xs sm:max-w-lg md:max-w-md lg:max-w-lg h-auto rounded-lg object-cover mx-auto"
              />
            </div>
            
            <div className="text-center">
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 sm:mb-3">
                Protocolo de Neuroativação Gama (40 Hz)
              </h4>
              <p className="text-sm sm:text-base font-semibold text-muted-foreground mb-3 sm:mb-4">
                Ferramenta de Apoio ao Foco e Controle Inibitório da Compulsão
              </p>
              <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed max-w-2xl mx-auto">
                Trata-se de uma ferramenta auditiva baseada em neurociência, calibrada na frequência exata de 40 Hz (Ondas Gama), para momentos de estresse, crises emocionais e para quando bater aquela vontade incontrolável de <span className="italic">'atacar a geladeira'</span>.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed max-w-2xl mx-auto">
                Estudos de instituições como o MIT (Massachusetts Institute of Technology) associam esta frequência específica a estados de alta performance cognitiva, memória e clareza mental.
              </p>
              
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 sm:mb-3 mt-6 sm:mt-8">
                Histórias De Quem Já Se Libertou
              </h4>
              
              <div className="mb-2 sm:mb-3 relative">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full max-w-4xl mx-auto"
                >
                  <CarouselContent className="-ml-2 md:-ml-4">
                    {testimonials.map((testimonial, index) => (
                      <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 h-full border border-primary/20 shadow-md flex flex-col"
                        >
                          <div className="flex flex-col items-center mb-4">
                            {testimonial.image ? (
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover flex-shrink-0 border-2 border-primary/20 mb-3"
                              />
                            ) : (
                              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-lg sm:text-xl flex-shrink-0 mb-3">
                                {testimonial.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                              </div>
                            )}
                            <h5 className="font-semibold text-foreground text-sm sm:text-base text-center mb-1">
                              {testimonial.name}
                            </h5>
                            {testimonial.location && (
                              <p className="text-xs sm:text-sm text-muted-foreground text-center">
                                {testimonial.location}
                              </p>
                            )}
                          </div>
                          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 italic flex-grow">
                            "{testimonial.text}"
                          </p>
                          <div className="mt-auto pt-4 border-t border-primary/20">
                            {testimonial.result && (
                              <p className="text-xs sm:text-sm font-semibold text-primary text-center">
                                ✅ {testimonial.result}
                              </p>
                            )}
                          </div>
                        </motion.div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="-left-4 sm:-left-8 md:-left-12" />
                  <CarouselNext className="-right-4 sm:-right-8 md:-right-12" />
                </Carousel>
              </div>
              
              {/* Seta animada abaixo da frase sobre estudos do MIT */}
              <div className="flex justify-center mb-4 sm:mb-6">
                <motion.div
                  animate={{
                    y: [0, 8, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-primary"
                >
                  <ChevronDown className="w-6 h-6" />
                </motion.div>
              </div>
              
              <p className="text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3">
                De: <span className="text-red-500 line-through">R$ 97,00</span>
              </p>
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 sm:mb-3">
                Por Apenas:
              </p>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2 sm:mb-3">
                12x de R$ 3,67
              </p>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4 sm:mb-6">
                ou R$ 44,00 à vista
              </p>
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Button
                  size="lg"
                  className="px-6 sm:px-8 py-5 sm:py-6 text-xs sm:text-base bg-gradient-primary hover:opacity-90 transition-opacity shadow-elevated w-full sm:w-auto"
                >
                  QUERO O MÉTODO ANTI-DIETA AGORA
                </Button>
              </motion.div>
            </div>
            
            {/* Imagem Garantia 7 dias */}
            <div className="flex justify-center mt-6 sm:mt-8">
              <img
                src="/7-dias.png"
                alt="Garantia 7 dias"
                className="w-24 sm:w-32 md:w-40 lg:w-48 h-auto object-contain mx-auto"
              />
            </div>
            
            {/* Imagem abaixo do botão CTA */}
            <div className="flex justify-center mt-4 sm:mt-6">
              <img
                src="/SYKrCu.webp"
                alt="Garantia"
                className="w-full max-w-xs sm:max-w-lg md:max-w-sm lg:max-w-md h-auto rounded-lg object-cover mx-auto"
              />
            </div>
          </motion.div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground text-center mt-4 sm:mt-6 mb-2">
            Copyright © 2025 - Todos os direitos reservados
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};
