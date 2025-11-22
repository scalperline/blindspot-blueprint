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
          description: "Entendido. Este é o Ponto Cego clássico da \"Despedida da Comida\". A \"mentalidade de dieta\" te convence de que a restrição está chegando, o que dispara a ansiedade e te leva a comer em excesso antes mesmo de a dieta começar. Não é falta de controle; é uma reação direta à privação que você está impondo. Vamos analisar o próximo ponto."
        }
      },
      {
        id: "1b",
        text: "Eu me sinto ansiosa(o) e já começo a me restringir antes da hora.",
        feedback: {
          title: "Ponto Cego da 'Antecipação da Culpa'",
          description: "Faz sentido. Este é o Ponto Cego da \"Antecipação da Culpa\". O \"policial alimentar\" na sua cabeça é tão forte que você começa a se punir antes mesmo de \"quebrar as regras\". Isso coloca seu corpo e mente em estado de alerta e estresse. Vamos investigar mais."
        }
      },
      {
        id: "1c",
        text: "Eu me sinto cansada(o) só de pensar no sofrimento e na restrição que vêm pela frente.",
        feedback: {
          title: "Ponto Cego da 'Fadiga de Dieta'",
          description: "Exato. Este é o Ponto Cego da \"Fadiga de Dieta\". Seu corpo e sua mente já sabem, por experiência, que dietas restritivas são sinônimo de sofrimento, fome e mau humor. Essa exaustão é um sinal claro de que esse método não é sustentável para você. Vamos ao próximo."
        }
      },
      {
        id: "1d",
        text: "Eu já me sinto culpada(o) por qualquer coisa que como, pois sinto que 'deveria' ter começado antes.",
        feedback: {
          title: "Ponto Cego da 'Culpa Flutuante'",
          description: "Entendido. Este é o Ponto Cego da \"Culpa Flutuante\". A \"mentalidade de dieta\" não te dá folga. Ela faz você sentir que está sempre errando, não importa o que faça. Essa culpa constante é exaustiva e te mantém presa no ciclo. Vamos ver o próximo."
        }
      },
      {
        id: "1e",
        text: "Eu não faço 'dietas' restritivas, então meu fim de semana segue normal.",
        feedback: {
          title: "Excelente",
          description: "Excelente. Você já deu o primeiro e mais importante passo para \"rejeitar a mentalidade de dieta\" . Você entende que a restrição não é o caminho. Vamos ver se os outros pontos estão alinhados com essa liberdade."
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
          description: "Sim. Este é o Ponto Cego da \"Fome Reativa\". Você está ignorando os sinais sutis de fome do seu corpo, e só reage quando ele entra em \"modo de emergência\" (irritação, dor de cabeça). É quase impossível fazer escolhas conscientes nesse estado. Vamos continuar."
        }
      },
      {
        id: "2b",
        text: "Nada, eu aguento firme (tento 'enganar' a fome com água ou café).",
        feedback: {
          title: "Ponto Cego da 'Desconfiança Corporal'",
          description: "Entendido. Este é o Ponto Cego da \"Desconfiança Corporal\". Você trata sua fome não como um guia, mas como um inimigo a ser silenciado. A Nutrição Comportamental ensina que \"honrar a fome\" é o primeiro passo para parar de comer em excesso depois. Vamos ao próximo."
        }
      },
      {
        id: "2c",
        text: "Fraqueza, tremores ou tontura (sinais que podem indicar hipoglicemia).",
        feedback: {
          title: "Ponto Cego de Alerta de Saúde",
          description: "Atenção aqui. Este é um Ponto Cego de Alerta de Saúde. Seu corpo não está apenas \"pedindo comida\", ele está sinalizando um desequilíbrio metabólico. Ignorar isso (provavelmente por medo de comer) está colocando sua saúde em risco imediato. Isso é sério. Vamos analisar o próximo ponto."
        }
      },
      {
        id: "2d",
        text: "Uma vontade incontrolável de comer açúcar ou carboidratos imediatamente.",
        feedback: {
          title: "Ponto Cego da 'Fome por Energia Rápida'",
          description: "Exato. Este é o Ponto Cego da \"Fome por Energia Rápida\". Ao ficar muito tempo sem comer, seu cérebro entra em pânico buscando a fonte de combustível mais rápida que existe: açúcar/carboidrato. Não é \"vício\"; é biologia de sobrevivência. Vamos em frente."
        }
      },
      {
        id: "2e",
        text: "Eu raramente chego nesse ponto, pois como quando meu corpo dá os primeiros sinais de fome.",
        feedback: {
          title: "Perfeito",
          description: "Perfeito. Isso é \"honrar a fome\" na prática. Você ouve o \"sussurro\" do seu corpo antes que ele precise \"gritar\". Isso te mantém no controle e com energia. Vamos checar o próximo princípio."
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
          description: "Entendido. Este é o Ponto Cego central do \"Pensamento Dicotômico\" (Tudo ou Nada). A culpa não vem do alimento, mas da regra mental que o classifica como 'proibido' . Ironicamente, é essa culpa que prepara o terreno para a próxima compulsão. Vamos continuar."
        }
      },
      {
        id: "3b",
        text: "Ansiedade. Eu já começo a pensar em como vou 'queimar' ou 'compensar' isso amanhã.",
        feedback: {
          title: "Ponto Cego da 'Comida como Dívida'",
          description: "Faz sentido. Este é o Ponto Cego da \"Comida como Dívida\". Você não vê mais a comida como prazer ou nutrição, mas como um \"débito\" calórico que precisa ser \"pago\" com exercício punitivo. Isso é exaustivo e insustentável. Vamos ao próximo."
        }
      },
      {
        id: "3c",
        text: "Medo. Eu tenho medo de que esse único alimento vá me engordar ou estragar meu progresso.",
        feedback: {
          title: "Ponto Cego do 'Pensamento Catastrófico'",
          description: "Sim. Este é o Ponto Cego do \"Pensamento Catastrófico\". Você dá a um único alimento (ex: um brigadeiro) o poder mágico de destruir todo o seu esforço. A Nutrição Comportamental mostra que o que importa é o padrão, não um evento isolado. Vamos em frente."
        }
      },
      {
        id: "3d",
        text: "Vergonha. Eu geralmente como esse alimento escondido(a) para ninguém ver.",
        feedback: {
          title: "Ponto Cego do 'Comer Clandestino'",
          description: "Entendido. Este é o Ponto Cego do \"Comer Clandestino\". A \"mentalidade de dieta\" associou tanta vergonha a certos alimentos que você sente que está cometendo um \"crime\" e não pode ser vista(o). Isso só aumenta o poder que a comida tem sobre você. Vamos continuar."
        }
      },
      {
        id: "3e",
        text: "Prazer. Eu saboreio o momento sem culpa, pois tenho permissão incondicional para comer.",
        feedback: {
          title: "Maravilha",
          description: "Maravilha! Isso é exatamente o que significa \"fazer as pazes com a comida\" . Quando nenhum alimento é proibido, nenhum alimento tem o poder de te descontrolar. Esse é o caminho. Vamos ao próximo."
        }
      }
    ]
  },
  {
    id: 4,
    principle: "Desafiar o Policial Alimentar",
    text: "Qual 'voz' é mais alta na sua cabeça quando você está escolhendo o que comer? (ex: em um restaurante)",
    answers: [
      {
        id: "4a",
        text: "A voz do 'Policial' (Ex: 'Você não deveria comer isso, é proibido!').",
        feedback: {
          title: "Ponto Cego do 'Policial Alimentar'",
          description: "Entendido. Este é o Ponto Cego clássico do \"Policial Alimentar\" . Essa voz interna de julgamento é a raiz da \"mentalidade de dieta\". O problema é que ela só gera culpa e rebeldia, e nunca paz com a comida. Vamos ao próximo."
        }
      },
      {
        id: "4b",
        text: "A voz da 'Calculadora' (Ex: 'Isso tem X calorias... não cabe na minha meta').",
        feedback: {
          title: "Ponto Cego do 'Comer Racionalizado'",
          description: "Sim. Este é o Ponto Cego do \"Comer Racionalizado\". Você terceirizou suas escolhas para um aplicativo ou uma tabela. Isso te desconecta totalmente dos seus sinais internos de fome, saciedade e, principalmente, satisfação ."
        }
      },
      {
        id: "4c",
        text: "A voz do 'Medo' (Ex: 'Melhor não arriscar, vou pegar só a salada...').",
        feedback: {
          title: "Ponto Cego da 'Restrição pelo Medo'",
          description: "Entendido. Este é o Ponto Cego da \"Restrição pelo Medo\". Você escolhe o que é \"seguro\" em vez do que é \"satisfatório\". Isso quase sempre leva a uma busca por \"algo mais\" (geralmente o que você realmente queria) mais tarde. Vamos ver o próximo."
        }
      },
      {
        id: "4d",
        text: "A voz da 'Rebelião' (Ex: 'Cansei de regras! Vou comer o que eu quiser...').",
        feedback: {
          title: "Ponto Cego da 'Falsa Liberdade'",
          description: "Faz sentido. Este é o Ponto Cego da \"Falsa Liberdade\". Você está tão cansada(o) das regras do 'Policial Alimentar' que se rebela. Mas essa rebelião é só o outro lado da restrição; ambos são formas de descontrole. Vamos continuar."
        }
      },
      {
        id: "4e",
        text: "A minha voz interna (Ex: 'O que eu realmente quero? O que vai me satisfazer agora?').",
        feedback: {
          title: "Excelente",
          description: "Excelente. Você desafiou o \"Policial Alimentar\" . Você está no comando, ouvindo suas necessidades reais de fome e satisfação, em vez de regras externas. Vamos ao próximo."
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
          description: "Entendido. Este é o Ponto Cego da \"Regra Externa\". Você usa um sinal visual (o prato vazio) para decidir quando parar, em vez do seu sinal interno (a saciedade). Você está deixando um prato decidir o quanto seu corpo precisa. Vamos ao próximo."
        }
      },
      {
        id: "5b",
        text: "Quando me sinto desconfortavelmente 'cheia(o)' ou estufada(o).",
        feedback: {
          title: "Ponto Cego da 'Saciedade Atrasada'",
          description: "Sim. Este é o Ponto Cego da \"Saciedade Atrasada\". Você só para de comer quando o corpo já passou do limite do conforto . Isso é muito comum quando comemos rápido ou distraídos, pois não damos tempo ao cérebro de registrar que já está satisfeito. Vamos continuar."
        }
      },
      {
        id: "5c",
        text: "Quando a porção que a 'dieta' mandou acaba, mesmo que eu ainda esteja com fome.",
        feedback: {
          title: "Ponto Cego da 'Restrição Cognitiva'",
          description: "Entendido. Este é o Ponto Cego da \"Restrição Cognitiva\". Você está honrando a dieta, e não o seu corpo. O problema é que, se a dieta te deixar com fome, a chance de você \"beliscar\" ou ter uma compulsão mais tarde é de quase 100%. Vamos ao próximo."
        }
      },
      {
        id: "5d",
        text: "Eu raramente percebo; como de forma distraída (vendo TV, celular, trabalhando).",
        feedback: {
          title: "Ponto Cego do 'Comer Inconsciente'",
          description: "Sim. Este é o Ponto Cego do \"Comer Inconsciente\" (Mindless Eating) . Se a sua mente não está na refeição, seu cérebro não registra a saciedade corretamente. Você come muito mais do que precisaria e nem sequer tem a satisfação da comida. Vamos ver o próximo."
        }
      },
      {
        id: "5e",
        text: "Quando meu corpo sinaliza que está confortavelmente satisfeito...",
        feedback: {
          title: "Perfeito",
          description: "Perfeito. Isso é \"sentir a saciedade\" . Você está em sintonia com seus sinais corporais de conforto, o que é a chave para comer a quantidade certa para o seu corpo. Vamos ao próximo princípio."
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
          description: "Exato. Este é o Ponto Cego da \"Fome de Satisfação\". Seu corpo recebeu nutrientes, mas sua mente não recebeu prazer. Essa \"caça\" pelo doce é seu cérebro tentando preencher a lacuna da satisfação que a refeição \"chata\" deixou . Vamos ao próximo."
        }
      },
      {
        id: "6b",
        text: "Eu me sinto virtuosa(o) por 30 minutos, e depois fico mal-humorada(o) e com mais fome.",
        feedback: {
          title: "Ponto Cego da 'Virtude Faminta'",
          description: "Entendido. Este é o Ponto Cego da \"Virtude Faminta\". Você se alimenta da sensação de estar \"fazendo o certo\", mas negligencia sua energia e satisfação. O mau humor é um sinal claro de que seu corpo não foi nutrido adequadamente. Vamos continuar."
        }
      },
      {
        id: "6c",
        text: "Eu fico pensando o tempo todo na comida que eu realmente queria ter comido.",
        feedback: {
          title: "Ponto Cego da 'Obsessão pela Privação'",
          description: "Sim. Este é o Ponto Cego da \"Obsessão pela Privação\". A restrição mental (o \"não posso ter\") torna o alimento que você realmente queria ainda mais poderoso e desejável. Você comeu a salada, mas sua mente \"comeu\" a pizza 100 vezes. Vamos ao próximo."
        }
      },
      {
        id: "6d",
        text: "Eu como e já planejo minha 'recompensa' (o 'prêmio' por ter sido saudável).",
        feedback: {
          title: "Ponto Cego da 'Comida como Prêmio'",
          description: "Faz sentido. Este é o Ponto Cego da \"Comida como Prêmio\". Você trata a comida saudável como um \"castigo\" que precisa ser recompensado com uma \"guloseima\". Isso só reforça a ideia de que o saudável é ruim e o \"não saudável\" é bom. Vamos em frente."
        }
      },
      {
        id: "6e",
        text: "Eu raramente faço isso; minhas refeições saudáveis também são prazerosas e me satisfazem.",
        feedback: {
          title: "Excelente",
          description: "Excelente. Você \"descobriu o fator de satisfação\" . Você entendeu que uma alimentação verdadeiramente saudável precisa ser nutritiva E prazerosa. Esse é o equilíbrio. Vamos ao próximo."
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
          description: "Entendido. Este é o Ponto Cego da \"Fome Ansiosa\" . Você usa a comida (especialmente a textura crocante ou doce) como uma válvula de escape imediata para a tensão. A comida se tornou, inconscientemente, sua principal ferramenta de gerenciamento de estresse. Vamos ao próximo."
        }
      },
      {
        id: "7b",
        text: "Tédio (Eu como para passar o tempo ou 'quebrar' a rotina).",
        feedback: {
          title: "Ponto Cego da 'Fome de Tédio'",
          description: "Sim. Este é o Ponto Cego da \"Fome de Tédio\" . Você não está buscando nutrientes; está buscando estímulo. A comida se tornou uma forma de quebrar a monotonia ou procrastinar uma tarefa. É um hábito mental, não uma necessidade física. Vamos continuar."
        }
      },
      {
        id: "7c",
        text: "Tristeza ou Solidão (A comida é uma companhia ou um conforto).",
        feedback: {
          title: "Ponto Cego da 'Fome de Conforto'",
          description: "Entendido. Este é o Ponto Cego da \"Fome de Conforto\" . A comida (geralmente algo da infância, macio e quente) é usada como um \"abraço\" químico, uma forma de preencher um vazio emocional ou buscar um conforto que não está vindo de outro lugar. Vamos ver o próximo."
        }
      },
      {
        id: "7d",
        text: "Cansaço (Eu como para ter uma 'injeção' de energia rápida).",
        feedback: {
          title: "Ponto Cego da 'Fome de Exaustão'",
          description: "Exato. Este é o Ponto Cego da \"Fome de Exaustão\" . Seu corpo está pedindo descanso, mas você o entrega açúcar (energia rápida). É como tentar consertar um motor superaquecido colocando mais gasolina. O ciclo de energia só piora. Vamos em frente."
        }
      },
      {
        id: "7e",
        text: "Eu raramente como por emoção. Eu identifico meus sentimentos e procuro lidar com eles de outra forma.",
        feedback: {
          title: "Fantástico",
          description: "Fantástico. Você está \"lidando com as emoções sem usar a comida\" . Você identifica seu sentimento e busca a solução real (descanso, conforto, distração), e não o \"anestésico\" temporário da comida."
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
          description: "Este é o Ponto Cego da \"Métrica Externa\". Você terceirizou seu valor e sua saúde para um número na balança, que não mede sua energia, sua felicidade ou sua saúde metabólica. Quando o peso não muda (ou sobe), mesmo seguindo à risca uma dieta restritiva, você se sente um fracasso. Mas o problema não é você; é que a balança nunca te mostrou o que realmente importa: sua saúde metabólica, sua energia, seu bem-estar mental. Essa dependência de métricas externas te mantém presa(o) em um ciclo de frustração e autossabotagem."
        }
      },
      {
        id: "8c",
        text: "O que eu sinto (falta de energia, dores nas articulações, cansaço constante).",
        feedback: {
          title: "Ponto Cego importante",
          description: "Este é um Ponto Cego importante. Você percebe que seu corpo não está funcionando bem. A falta de energia não é uma \"falha\", é um sintoma de que sua abordagem atual de alimentação (provavelmente restritiva) não está te nutrindo. Vamos ver o próximo."
        }
      },
      {
        id: "8d",
        text: "Minha saúde (pressão alta, glicemia alterada, colesterol alto, exames ruins).",
        feedback: {
          title: "Ponto Cego da Urgência",
          description: "Este é o Ponto Cego da Urgência. Você entende que o problema não é mais só estético; é clínico . A frustração vem de tentar \"fazer dieta\" (restringir) e, mesmo assim, não ver melhora nos seus exames, o que é assustador e perigoso. Vamos analisar o próximo ponto."
        }
      },
      {
        id: "8e",
        text: "Nada me frustra; eu o aceito como ele é hoje e o trato com respeito.",
        feedback: {
          title: "Maravilha",
          description: "Maravilha. Isso é \"Respeitar seu Corpo\" . A aceitação não é desistência; é o ponto de partida para cuidar do corpo com gentileza, em vez de punição. Esse é o estado ideal."
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
          description: "Entendido. Este é o Ponto Cego do \"Exercício Punitivo\" . Você trata o movimento como uma forma de \"pagar\" pela comida. Isso torna o exercício um \"castigo\" e reforça a culpa, tornando-o insustentável a longo prazo. Vamos ao próximo."
        }
      },
      {
        id: "9b",
        text: "É uma obrigação para 'consertar' o que não gosto no meu corpo (foco na estética).",
        feedback: {
          title: "Ponto Cego do 'Foco Estético'",
          description: "Sim. Este é o Ponto Cego do \"Foco Estético\". Seu único objetivo é a mudança corporal. O problema é que, quando o resultado estético demora a aparecer, a frustração bate e a desistência é quase certa . Vamos continuar."
        }
      },
      {
        id: "9c",
        text: "Culpa. Eu me sinto uma pessoa 'preguiçosa' ou 'errada' se eu não fizer.",
        feedback: {
          title: "Ponto Cego da 'Obrigação Moral'",
          description: "Entendido. Este é o Ponto Cego da \"Obrigação Moral\". Você associou o exercício a ser uma pessoa \"boa\" ou \"ruim\". Isso tira todo o prazer do movimento e o transforma em uma obrigação pesada e cheia de culpa. Vamos ver o próximo."
        }
      },
      {
        id: "9d",
        text: "Eu não faço, porque odeio a ideia de ir para uma academia ou sentir dor.",
        feedback: {
          title: "Ponto Cego do 'Odeio Academia'",
          description: "Faz sentido. Você provavelmente só teve contato com o exercício punitivo (a academia chata, a dor). O Ponto Cego aqui é acreditar que todo movimento é sofrimento, o que não é verdade. Você só não encontrou o movimento que respeita seu corpo ."
        }
      },
      {
        id: "9e",
        text: "Eu me movimento porque me dá energia, alivia o estresse e me faz sentir bem...",
        feedback: {
          title: "Perfeito",
          description: "Perfeito. Você \"sente a diferença\" . Você se conectou com os benefícios internos (energia, humor) e não com a punição externa (calorias). Esse é o caminho para a constância."
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
          description: "Entendido. Este é o Ponto Cego do \"Pânico da Restrição\". Seu médico te deu um diagnóstico de saúde (ex: diabetes) , mas sua \"mentalidade de dieta\" o traduziu como uma sentença de privação eterna. Isso gera ansiedade e torna a adesão ao tratamento quase impossível. Vamos ao próximo."
        }
      },
      {
        id: "10b",
        text: "Confusão. Fico perdida(o) com tanta regra (cortar sal, açúcar, gordura)...",
        feedback: {
          title: "Ponto Cego da 'Paralisia por Análise'",
          description: "Sim. Este é o Ponto Cego da \"Paralisia por Análise\". A informação nutricional tradicional (\"nutricionismo\" ) é tão focada em regras e nutrientes isolados que ela confunde em vez de ajudar. Você fica com medo de comer e não sabe por onde começar."
        }
      },
      {
        id: "10c",
        text: "Rebeldia. Sinto raiva e como mais do que 'não deveria', como uma forma de protesto.",
        feedback: {
          title: "Ponto Cego da 'Rebeldia Autodestrutiva'",
          description: "Faz sentido. Este é o Ponto Cego da \"Rebeldia Autodestrutiva\". O diagnóstico parece uma punição ou uma crítica. Você se rebela contra a \"regra\" (mesmo que seja para sua saúde) como uma forma de retomar o controle, o que acaba piorando o problema ."
        }
      },
      {
        id: "10d",
        text: "Descaso. Eu ignoro a recomendação, pois 'de alguma coisa eu tenho que morrer'.",
        feedback: {
          title: "Ponto Cego Perigoso",
          description: "Este é um Ponto Cego Perigoso. Você está tão frustrada(o) com as tentativas anteriores ou com o diagnóstico que decidiu desistir. A Nutrição Comportamental mostra que é possível gerenciar sua saúde sem viver em privação, mas o descaso não é o caminho."
        }
      },
      {
        id: "10e",
        text: "Foco. Eu vejo isso como um motivo para honrar meu corpo e buscar um plano saudável...",
        feedback: {
          title: "Exato",
          description: "Exato. Isso é \"Honrar a Saúde\" com \"Nutrição Equilibrada\" . Você usa seu diagnóstico não como uma punição, mas como um motivo para cuidar do seu corpo de forma equilibrada, respeitando sua saúde e seu prazer."
        }
      }
    ]
  }
];
