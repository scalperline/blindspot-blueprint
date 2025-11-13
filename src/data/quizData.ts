export interface Answer {
  id: string;
  text: string;
  feedback: {
    title: string;
    description: string;
  };
}

export interface Question {
  id: number;
  principle: string;
  text: string;
  answers: Answer[];
}

export const quizData: Question[] = [
  {
    id: 1,
    principle: "Rejeitar a Mentalidade de Dieta",
    text: "Quando você decide 'começar uma dieta' na segunda-feira, qual é seu comportamento mais comum no fim de semana?",
    answers: [
      {
        id: "1a",
        text: "Eu como tudo o que 'não vou poder' comer, como se fosse uma 'última refeição'.",
        feedback: {
          title: "Ponto Cego da 'Despedida da Comida'",
          description: "A 'mentalidade de dieta' te convence de que a restrição está chegando, o que dispara a ansiedade e te leva a comer em excesso antes da dieta começar. Não é falta de controle; é uma reação direta à privação. Vamos analisar o próximo ponto."
        }
      },
      {
        id: "1b",
        text: "Eu me sinto ansiosa(o) e já começo a me restringir antes da hora.",
        feedback: {
          title: "Ponto Cego da 'Antecipação da Culpa'",
          description: "O 'policial alimentar' na sua cabeça é tão forte que você começa a se punir antes de 'quebrar as regras'. Isso coloca seu corpo e mente em estado de alerta. Vamos investigar mais."
        }
      },
      {
        id: "1c",
        text: "Eu me sinto cansada(o) só de pensar no sofrimento e na restrição que vêm pela frente.",
        feedback: {
          title: "Ponto Cego da 'Fadiga de Dieta'",
          description: "Seu corpo já sabe que dietas restritivas são sinônimo de sofrimento. Essa exaustão é um sinal claro de que esse método não é sustentável. Vamos ao próximo."
        }
      },
      {
        id: "1d",
        text: "Eu já me sinto culpada(o) por qualquer coisa que como, pois sinto que 'deveria' ter começado antes.",
        feedback: {
          title: "Ponto Cego da 'Culpa Flutuante'",
          description: "A 'mentalidade de dieta' não te dá folga. Ela faz você sentir que está sempre errando. Essa culpa constante te mantém presa no ciclo. Vamos ver o próximo."
        }
      },
      {
        id: "1e",
        text: "Eu não faço 'dietas' restritivas, então meu fim de semana segue normal.",
        feedback: {
          title: "Excelente progresso!",
          description: "Você já deu o primeiro e mais importante passo para 'rejeitar a mentalidade de dieta'. Vamos ver se os outros pontos estão alinhados com essa liberdade."
        }
      }
    ]
  },
  {
    id: 2,
    principle: "Honrar a Fome",
    text: "Quando você fica muito tempo sem comer, o que você sente com mais intensidade?",
    answers: [
      {
        id: "2a",
        text: "Irritação e dor de cabeça (a 'fome de mau humor').",
        feedback: {
          title: "Ponto Cego da 'Fome Reativa'",
          description: "Você está ignorando os sinais sutis de fome, e só reage quando seu corpo entra em 'modo de emergência'. É quase impossível fazer escolhas conscientes nesse estado. Vamos continuar."
        }
      },
      {
        id: "2b",
        text: "Nada, eu aguento firme (tento 'enganar' a fome com água ou café).",
        feedback: {
          title: "Ponto Cego da 'Desconfiança Corporal'",
          description: "Você trata sua fome não como um guia, mas como um inimigo a ser silenciado. 'Honrar a fome' é o primeiro passo para parar de comer em excesso depois. Vamos ao próximo."
        }
      },
      {
        id: "2c",
        text: "Fraqueza, tremores ou tontura (sinais que podem indicar hipoglicemia).",
        feedback: {
          title: "Alerta de Saúde",
          description: "Seu corpo não está só 'pedindo comida', ele está sinalizando um desequilíbrio metabólico. Ignorar isso é arriscado. Isso é sério. Vamos analisar o próximo ponto."
        }
      },
      {
        id: "2d",
        text: "Uma vontade incontrolável de comer açúcar ou carboidratos imediatamente.",
        feedback: {
          title: "Ponto Cego da 'Fome por Energia Rápida'",
          description: "Ao ficar muito tempo sem comer, seu cérebro entra em pânico buscando a fonte de combustível mais rápida que existe: açúcar. Não é 'vício'; é biologia de sobrevivência. Vamos em frente."
        }
      },
      {
        id: "2e",
        text: "Eu raramente chego nesse ponto, pois como quando meu corpo dá os primeiros sinais de fome.",
        feedback: {
          title: "Perfeito!",
          description: "Isso é 'honrar a fome' na prática. Você ouve o 'sussurro' do seu corpo antes que ele precise 'gritar'. Vamos checar o próximo princípio."
        }
      }
    ]
  },
  {
    id: 3,
    principle: "Fazer as Pazes com a Comida",
    text: "Qual é o seu sentimento dominante logo após comer um alimento que você ama, mas considera 'proibido'?",
    answers: [
      {
        id: "3a",
        text: "Culpa intensa. Eu sinto que 'estraguei tudo' e me arrependo imediatamente.",
        feedback: {
          title: "Ponto Cego do 'Pensamento Dicotômico'",
          description: "A culpa não vem do alimento, mas da regra mental que o classifica como 'proibido'. Ironicamente, é essa culpa que causa a compulsão. Vamos continuar."
        }
      },
      {
        id: "3b",
        text: "Ansiedade. Eu já começo a pensar em como vou 'queimar' ou 'compensar' isso amanhã.",
        feedback: {
          title: "Ponto Cego da 'Comida como Dívida'",
          description: "Você não vê mais a comida como prazer, mas como um 'débito' calórico que precisa ser 'pago' com exercício punitivo. Isso é exaustivo. Vamos ao próximo."
        }
      },
      {
        id: "3c",
        text: "Medo. Eu tenho medo de que esse único alimento vá me engordar.",
        feedback: {
          title: "Ponto Cego do 'Pensamento Catastrófico'",
          description: "Você dá a um único brigadeiro o poder mágico de destruir todo o seu esforço. A Nutrição Comportamental mostra que o que importa é o padrão, não um evento isolado. Vamos em frente."
        }
      },
      {
        id: "3d",
        text: "Vergonha. Eu geralmente como esse alimento escondido(a) para ninguém ver.",
        feedback: {
          title: "Ponto Cego do 'Comer Clandestino'",
          description: "A 'mentalidade de dieta' associou tanta vergonha a certos alimentos que você sente que está cometendo um 'crime'. Isso só aumenta o poder que a comida tem sobre você. Vamos continuar."
        }
      },
      {
        id: "3e",
        text: "Prazer. Eu saboreio o momento sem culpa, pois tenho permissão incondicional para comer.",
        feedback: {
          title: "Maravilha!",
          description: "Isso é 'fazer as pazes com a comida'. Quando nenhum alimento é proibido, nenhum alimento tem o poder de te descontrolar. Vamos ao próximo."
        }
      }
    ]
  },
  {
    id: 4,
    principle: "Desafiar o Policial Alimentar",
    text: "Qual 'voz' é mais alta na sua cabeça quando você está escolhendo o que comer?",
    answers: [
      {
        id: "4a",
        text: "A voz do 'Policial' (Ex: 'Você não deveria comer isso, é proibido!').",
        feedback: {
          title: "Ponto Cego do 'Policial Alimentar'",
          description: "Essa voz interna de julgamento é a raiz da 'mentalidade de dieta'. O problema é que ela só gera culpa e rebeldia, e nunca paz. Vamos ao próximo."
        }
      },
      {
        id: "4b",
        text: "A voz da 'Calculadora' (Ex: 'Isso tem X calorias... não cabe na minha meta').",
        feedback: {
          title: "Ponto Cego do 'Comer Racionalizado'",
          description: "Você terceirizou suas escolhas para um aplicativo. Isso te desconecta totalmente dos seus sinais internos de fome, saciedade e, principalmente, satisfação. Vamos continuar."
        }
      },
      {
        id: "4c",
        text: "A voz do 'Medo' (Ex: 'Melhor não arriscar, vou pegar só a salada...').",
        feedback: {
          title: "Ponto Cego da 'Restrição pelo Medo'",
          description: "Você escolhe o que é 'seguro' em vez do que é 'satisfatório'. Isso quase sempre leva a uma busca por 'algo mais' (o que você realmente queria) mais tarde. Vamos ver o próximo."
        }
      },
      {
        id: "4d",
        text: "A voz da 'Rebelião' (Ex: 'Cansei de regras! Vou comer o que eu quiser...').",
        feedback: {
          title: "Ponto Cego da 'Falsa Liberdade'",
          description: "Você está tão cansada(o) das regras do 'Policial Alimentar' que se rebela. Mas essa rebelião é só o outro lado da restrição; ambos são formas de descontrole. Vamos continuar."
        }
      },
      {
        id: "4e",
        text: "A minha voz interna (Ex: 'O que eu realmente quero? O que vai me satisfazer?').",
        feedback: {
          title: "Excelente!",
          description: "Você desafiou o 'Policial Alimentar'. Você está no comando, ouvindo suas necessidades reais de fome e satisfação. Vamos ao próximo."
        }
      }
    ]
  },
  {
    id: 5,
    principle: "Sentir a Saciedade",
    text: "Em uma refeição normal (almoço ou jantar), quando você geralmente para de comer?",
    answers: [
      {
        id: "5a",
        text: "Quando o prato está limpo (fui ensinada(o) a 'raspar o prato').",
        feedback: {
          title: "Ponto Cego da 'Regra Externa'",
          description: "Você usa um sinal visual (o prato vazio) para decidir quando parar, em vez do seu sinal interno (a saciedade). Você está deixando um prato decidir o quanto seu corpo precisa. Vamos ao próximo."
        }
      },
      {
        id: "5b",
        text: "Quando me sinto desconfortavelmente 'cheia(o)' ou estufada(o).",
        feedback: {
          title: "Ponto Cego da 'Saciedade Atrasada'",
          description: "Você só para de comer quando o corpo já passou do limite do conforto. Isso é comum quando comemos rápido ou distraídos, pois não damos tempo ao cérebro de registrar a saciedade. Vamos continuar."
        }
      },
      {
        id: "5c",
        text: "Quando a porção que a 'dieta' mandou acaba, mesmo que eu ainda esteja com fome.",
        feedback: {
          title: "Ponto Cego da 'Restrição Cognitiva'",
          description: "Você está honrando a dieta, e não o seu corpo. O problema é que, se a dieta te deixar com fome, a chance de você ter uma compulsão mais tarde é de quase 100%. Vamos ao próximo."
        }
      },
      {
        id: "5d",
        text: "Eu raramente percebo; como de forma distraída (vendo TV, celular, trabalhando).",
        feedback: {
          title: "Ponto Cego do 'Comer Inconsciente'",
          description: "Se a sua mente não está na refeição, seu cérebro não registra a saciedade corretamente. Você come muito mais do que precisaria e nem sequer tem a satisfação. Vamos ver o próximo."
        }
      },
      {
        id: "5e",
        text: "Quando meu corpo sinaliza que está confortavelmente satisfeito...",
        feedback: {
          title: "Perfeito!",
          description: "Isso é 'sentir a saciedade'. Você está em sintonia com seus sinais corporais de conforto, o que é a chave para comer a quantidade certa. Vamos ao próximo."
        }
      }
    ]
  },
  {
    id: 6,
    principle: "Descobrir o Fator de Satisfação",
    text: "O que acontece depois que você come uma refeição 'saudável' (ex: salada e grelhado), mas que não era o que você realmente queria?",
    answers: [
      {
        id: "6a",
        text: "Eu me sinto insatisfeita(o) e fico 'caçando' um doce 1 hora depois.",
        feedback: {
          title: "Ponto Cego da 'Fome de Satisfação'",
          description: "Seu corpo recebeu nutrientes, mas sua mente não recebeu prazer. Essa 'caça' pelo doce é seu cérebro tentando preencher a lacuna da satisfação que a refeição 'chata' deixou. Vamos ao próximo."
        }
      },
      {
        id: "6b",
        text: "Eu me sinto virtuosa(o) por 30 minutos, e depois fico mal-humorada(o) e com mais fome.",
        feedback: {
          title: "Ponto Cego da 'Virtude Faminta'",
          description: "Você se alimenta da sensação de estar 'fazendo o certo', mas negligencia sua energia e satisfação. O mau humor é um sinal claro de que seu corpo não foi nutrido adequadamente. Vamos continuar."
        }
      },
      {
        id: "6c",
        text: "Eu fico pensando o tempo todo na comida que eu realmente queria ter comido.",
        feedback: {
          title: "Ponto Cego da 'Obsessão pela Privação'",
          description: "A restrição mental (o 'não posso ter') torna o alimento que você realmente queria ainda mais poderoso e desejável. Você comeu a salada, mas sua mente 'comeu' a pizza 100 vezes. Vamos ao próximo."
        }
      },
      {
        id: "6d",
        text: "Eu como e já planejo minha 'recompensa' (o 'prêmio' por ter sido saudável).",
        feedback: {
          title: "Ponto Cego da 'Comida como Prêmio'",
          description: "Você trata a comida saudável como um 'castigo' que precisa ser recompensado com uma 'guloseima'. Isso só reforça a ideia de que o saudável é ruim e o 'não saudável' é bom. Vamos em frente."
        }
      },
      {
        id: "6e",
        text: "Eu raramente faço isso; minhas refeições saudáveis também são prazerosas e me satisfazem.",
        feedback: {
          title: "Excelente!",
          description: "Você 'descobriu o fator de satisfação'. Você entendeu que uma alimentação saudável precisa ser nutritiva E prazerosa. Esse é o equilíbrio. Vamos ao próximo."
        }
      }
    ]
  },
  {
    id: 7,
    principle: "Lidar com as Emoções",
    text: "Qual é o seu gatilho mais forte para 'beliscar' ou comer quando você não está com fome física?",
    answers: [
      {
        id: "7a",
        text: "Ansiedade ou Estresse (A comida parece me acalmar).",
        feedback: {
          title: "Ponto Cego da 'Fome Ansiosa'",
          description: "Você usa a comida como uma válvula de escape para a tensão. A comida se tornou, inconscientemente, sua principal ferramenta de gerenciamento de estresse. Vamos ao próximo."
        }
      },
      {
        id: "7b",
        text: "Tédio (Eu como para passar o tempo ou 'quebrar' a rotina).",
        feedback: {
          title: "Ponto Cego da 'Fome de Tédio'",
          description: "Você não está buscando nutrientes; está buscando estímulo. A comida se tornou uma forma de quebrar a monotonia ou procrastinar. É um hábito mental, não uma necessidade física. Vamos continuar."
        }
      },
      {
        id: "7c",
        text: "Tristeza ou Solidão (A comida é uma companhia ou um conforto).",
        feedback: {
          title: "Ponto Cego da 'Fome de Conforto'",
          description: "A comida é usada como um 'abraço' químico, uma forma de preencher um vazio emocional ou buscar um conforto que não está vindo de outro lugar. Vamos ver o próximo."
        }
      },
      {
        id: "7d",
        text: "Cansaço (Eu como para ter uma 'injeção' de energia rápida).",
        feedback: {
          title: "Ponto Cego da 'Fome de Exaustão'",
          description: "Seu corpo está pedindo descanso, mas você o entrega açúcar. É como tentar consertar um motor superaquecido colocando mais gasolina. O ciclo só piora. Vamos em frente."
        }
      },
      {
        id: "7e",
        text: "Eu raramente como por emoção. Eu identifico meus sentimentos e procuro lidar com eles de outra forma.",
        feedback: {
          title: "Fantástico!",
          description: "Você está 'lidando com as emoções sem usar a comida'. Você identifica seu sentimento e busca a solução real, e não o 'anestésico' temporário da comida."
        }
      }
    ]
  },
  {
    id: 8,
    principle: "Respeitar seu Corpo",
    text: "O que mais te frustra em relação ao seu corpo hoje?",
    answers: [
      {
        id: "8a",
        text: "O que eu vejo no espelho (a estética, a gordura localizada, a celulite).",
        feedback: {
          title: "Ponto Cego da 'Insatisfação Corporal'",
          description: "Seu foco está 100% na estética. Isso muitas vezes nos leva a tomar decisões drásticas (dietas malucas) que, ironicamente, pioram nossa saúde e o ciclo da compulsão. Vamos ao próximo."
        }
      },
      {
        id: "8b",
        text: "Os números (o peso na balança, o tamanho da roupa que não serve).",
        feedback: {
          title: "Ponto Cego da 'Métrica Externa'",
          description: "Você terceirizou seu valor e sua saúde para um número na balança, que não mede sua energia, sua felicidade ou sua saúde metabólica. Vamos continuar."
        }
      },
      {
        id: "8c",
        text: "O que eu sinto (falta de energia, dores nas articulações, cansaço constante).",
        feedback: {
          title: "Ponto importante",
          description: "Você percebe que seu corpo não está funcionando bem. A falta de energia não é uma 'falha', é um sintoma de que sua abordagem atual de alimentação (provavelmente restritiva) não está te nutrindo. Vamos ver o próximo."
        }
      },
      {
        id: "8d",
        text: "Minha saúde (pressão alta, glicemia alterada, colesterol alto, exames ruins).",
        feedback: {
          title: "Ponto Cego da Urgência",
          description: "Você entende que o problema não é mais só estético; é clínico. A frustração vem de tentar 'fazer dieta' e, mesmo assim, não ver melhora nos seus exames, o que é assustador. Vamos analisar o próximo ponto."
        }
      },
      {
        id: "8e",
        text: "Nada me frustra; eu o aceito como ele é hoje e o trato com respeito.",
        feedback: {
          title: "Maravilha!",
          description: "Isso é 'Respeitar seu Corpo'. A aceitação não é desistência; é o ponto de partida para cuidar do corpo com gentileza, em vez de punição."
        }
      }
    ]
  },
  {
    id: 9,
    principle: "Exercitar-se",
    text: "Qual é a sua principal motivação para praticar (ou pensar em praticar) atividade física?",
    answers: [
      {
        id: "9a",
        text: "É uma punição ou compensação pelo que comi (foco em 'queimar calorias').",
        feedback: {
          title: "Ponto Cego do 'Exercício Punitivo'",
          description: "Você trata o movimento como uma forma de 'pagar' pela comida. Isso torna o exercício um 'castigo' e reforça a culpa, tornando-o insustentável. Vamos ao próximo."
        }
      },
      {
        id: "9b",
        text: "É uma obrigação para 'consertar' o que não gosto no meu corpo (foco na estética).",
        feedback: {
          title: "Ponto Cego do 'Foco Estético'",
          description: "Seu único objetivo é a mudança corporal. O problema é que, quando o resultado estético demora a aparecer, a frustração bate e a desistência é quase certa. Vamos continuar."
        }
      },
      {
        id: "9c",
        text: "Culpa. Eu me sinto uma pessoa 'preguiçosa' ou 'errada' se eu não fizer.",
        feedback: {
          title: "Ponto Cego da 'Obrigação Moral'",
          description: "Você associou o exercício a ser uma pessoa 'boa' ou 'ruim'. Isso tira todo o prazer do movimento e o transforma em uma obrigação pesada. Vamos ver o próximo."
        }
      },
      {
        id: "9d",
        text: "Eu não faço, porque odeio a ideia de ir para uma academia ou sentir dor.",
        feedback: {
          title: "Ponto Cego importante",
          description: "Você provavelmente só teve contato com o exercício punitivo. O Ponto Cego aqui é acreditar que todo movimento é sofrimento. Você só não encontrou o movimento que respeita seu corpo."
        }
      },
      {
        id: "9e",
        text: "Eu me movimento porque me dá energia, alivia o estresse e me faz sentir bem...",
        feedback: {
          title: "Perfeito!",
          description: "Você 'sente a diferença'. Você se conectou com os benefícios internos (energia, humor) e não com a punição externa (calorias). Esse é o caminho."
        }
      }
    ]
  },
  {
    id: 10,
    principle: "Honrar a Saúde",
    text: "Quando você recebe um diagnóstico (ex: pressão alta, diabetes, colesterol alto), qual é sua primeira reação em relação à comida?",
    answers: [
      {
        id: "10a",
        text: "Pânico. Sinto que agora tudo está proibido e que nunca mais vou comer o que gosto.",
        feedback: {
          title: "Ponto Cego do 'Pânico da Restrição'",
          description: "Seu médico te deu um diagnóstico de saúde (ex: diabetes), mas sua 'mentalidade de dieta' o traduziu como uma sentença de privação eterna. Isso gera ansiedade e torna a adesão impossível."
        }
      },
      {
        id: "10b",
        text: "Confusão. Fico perdida(o) com tanta regra (cortar sal, açúcar, gordura)...",
        feedback: {
          title: "Ponto Cego da 'Paralisia por Análise'",
          description: "A informação nutricional tradicional ('nutricionismo') é tão focada em regras e nutrientes isolados que ela confunde em vez de ajudar. Você fica com medo de comer e não sabe por onde começar."
        }
      },
      {
        id: "10c",
        text: "Rebeldia. Sinto raiva e como mais do que 'não deveria', como uma forma de protesto.",
        feedback: {
          title: "Ponto Cego da 'Rebeldia Autodestrutiva'",
          description: "O diagnóstico parece uma punição. Você se rebela contra a 'regra' (mesmo que seja para sua saúde) como uma forma de retomar o controle, o que acaba piorando o problema."
        }
      },
      {
        id: "10d",
        text: "Descaso. Eu ignoro a recomendação, pois 'de alguma coisa eu tenho que morrer'.",
        feedback: {
          title: "Ponto Cego Perigoso",
          description: "Você está tão frustrada(o) com as tentativas anteriores ou com o diagnóstico que decidiu desistir. A Nutrição Comportamental mostra que é possível gerenciar sua saúde sem viver em privação."
        }
      },
      {
        id: "10e",
        text: "Foco. Eu vejo isso como um motivo para honrar meu corpo e buscar um plano saudável...",
        feedback: {
          title: "Exato!",
          description: "Isso é 'Honrar a Saúde' com 'Nutrição Gentil'. Você usa seu diagnóstico não como uma punição, mas como um motivo para cuidar do seu corpo de forma equilibrada, respeitando sua saúde e seu prazer."
        }
      }
    ]
  }
];
