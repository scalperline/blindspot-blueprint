import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ProgressBar } from "./ProgressBar";
import { AlertCircle } from "lucide-react";

interface ResultScreenProps {
  feedbacks: Array<{ title: string; description: string }>;
}

export const ResultScreen = ({ feedbacks }: ResultScreenProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-hero flex items-center justify-center p-6"
    >
      <div className="w-full max-w-4xl">
        <ProgressBar progress={100} />
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-2xl shadow-elevated p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Seu Diagnóstico "Ponto Cego" está Completo
            </h1>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6 rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Obrigado pela sua honestidade. Com base nas suas respostas, 
              seu problema não é falta de disciplina. 
              Você está presa(o) em um ciclo de auto-sabotagem. 
              Veja seu diagnóstico:
            </p>
          </div>

          <div className="space-y-6 mb-12">
            {feedbacks.map((feedback, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-secondary/50 rounded-xl p-6 border-l-4 border-primary"
              >
                <h3 className="font-bold text-lg text-foreground mb-2">
                  {feedback.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feedback.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-accent/10 border-2 border-accent rounded-xl p-8 mb-8"
          >
            <div className="flex items-start gap-4 mb-4">
              <AlertCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  O Gap que Você Precisa Preencher
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Você agora tem o <span className="font-semibold text-foreground">Diagnóstico</span>. 
                  Você vê exatamente o que está errado.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Mas você ainda não tem o <span className="font-semibold text-foreground">Plano de Ação</span>.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="bg-primary/5 rounded-xl p-8 mb-8"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
              A Solução: O Mapa Metabólico
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              É exatamente para isso que eu criei o <span className="font-semibold text-primary">'Mapa Metabólico'</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Eu resumi os princípios práticos da <span className="font-semibold text-primary">Nutrição Comportamental</span> em 
              um guia de aplicação imediata. Ele é o manual passo a passo para você:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Fazer as pazes com a comida (sem culpa)",
                "Aprender a honrar sua fome (sem exageros)",
                "Lidar com a 'Fome Emocional' (sem usar a comida)",
                "Gerenciar sua saúde (diabetes, HAS) com gentileza, e não com punição"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
            <p className="text-center text-lg font-semibold text-foreground">
              É a solução completa para os problemas que acabamos de diagnosticar.
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="text-center"
          >
            <div className="mb-6">
              <p className="text-3xl font-bold text-foreground mb-2">
                Apenas R$ 44
              </p>
              <p className="text-muted-foreground">
                Acesso imediato ao seu Mapa Metabólico
              </p>
            </div>
            <Button
              size="lg"
              className="text-xl px-12 py-8 bg-gradient-accent hover:opacity-90 transition-opacity shadow-elevated animate-pulse-soft"
            >
              QUERO MEU MAPA METABÓLICO POR R$ 44
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
