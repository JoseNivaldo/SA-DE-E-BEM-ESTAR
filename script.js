/* =====================================================
   ALIMENTABEM
   Questionário sobre fome física e emocional
===================================================== */


/* =====================================================
   ETAPAS DO QUESTIONÁRIO
===================================================== */

const etapas = {

    inicio: {

        icone: "💭",

        titulo:
            "O que você está percebendo neste momento?",

        descricao:
            "Vamos observar seu corpo e seus sentimentos para entender melhor essa vontade de comer.",

        tipo: "opcoes",

        opcoes: [
            "Estou com fome",
            "Estou com vontade de comer",
            "Estou com muita vontade de comer",
            "Não consigo identificar"
        ],

        proxima: "sinaisCorporais"
    },


    sinaisCorporais: {

        icone: "🧠",

        titulo:
            "O que você percebe no seu corpo?",

        descricao:
            "Não existe resposta certa ou errada. Escolha o que mais combina com você agora.",

        tipo: "opcoes",

        opcoes: [
            "Sensação de fome no estômago",
            "Barriga roncando",
            "Pouca energia",
            "Estou satisfeito(a), mas quero comer",
            "Não sinto sinais físicos de fome",
            "Não sei"
        ],

        proxima: "tempo"
    },


    tempo: {

        icone: "⏰",

        titulo:
            "Quando você percebeu essa vontade de comer?",

        descricao:
            "Pensar no momento em que a vontade apareceu pode ajudar a entender o que a desencadeou.",

        tipo: "opcoes",

        opcoes: [
            "Foi aparecendo aos poucos",
            "Apareceu de repente",
            "Depois de ver ou sentir cheiro de comida",
            "Depois de alguma situação emocional",
            "Não sei"
        ],

        proxima: "preferenciaComida"
    },


    preferenciaComida: {

        icone: "🍫",

        titulo:
            "Se você pudesse escolher qualquer comida agora, o que gostaria?",

        descricao:
            "Essa pergunta ajuda a perceber se existe uma fome mais geral ou um desejo específico.",

        tipo: "opcoes",

        opcoes: [
            "Qualquer comida serviria",
            "Quero uma refeição completa",
            "Quero especificamente um doce",
            "Quero especificamente algo salgado",
            "Quero apenas um alimento específico",
            "Não sei"
        ],

        proxima: "energia"
    },


    energia: {

        icone: "⚡",

        titulo:
            "Como está sua energia agora?",

        descricao:
            "Observe como seu corpo está se sentindo.",

        tipo: "opcoes",

        opcoes: [
            "Estou com bastante energia",
            "Estou um pouco cansado(a)",
            "Estou muito cansado(a)",
            "Estou sonolento(a)",
            "Minha energia está normal",
            "Não sei"
        ],

        proxima: "situacao"
    },


    situacao: {

        icone: "🔎",

        titulo:
            "O que estava acontecendo antes dessa vontade aparecer?",

        descricao:
            "Pense nos minutos ou horas anteriores.",

        tipo: "opcoes",

        opcoes: [
            "Eu estava trabalhando ou estudando",
            "Eu estava descansando",
            "Eu estava entediado(a)",
            "Aconteceu algo estressante",
            "Aconteceu algo triste",
            "Aconteceu algo muito bom",
            "Eu estava conversando com alguém",
            "Nada específico aconteceu",
            "Não sei"
        ],

        proxima: "tipoEmocional"
    },


    tipoEmocional: {

        icone: "❤️",

        titulo:
            "Qual emoção ou sensação combina mais com o que você está sentindo agora?",

        descricao:
            "Emoções agradáveis e desagradáveis podem influenciar nossa vontade de comer. Escolha a que mais combina com você.",

        tipo: "opcoes",

        opcoes: [
            "😊 Alegria",
            "😌 Tranquilidade",
            "🥰 Carinho ou afeto",
            "🎉 Animação ou empolgação",
            "😎 Confiança ou satisfação",
            "❤️ Amor ou conexão",
            "😰 Ansiedade",
            "😣 Estresse",
            "😢 Tristeza",
            "😴 Tédio",
            "😡 Irritação ou raiva",
            "😔 Solidão",
            "😕 Preocupação",
            "🤔 Não sei exatamente"
        ],

        proxima: "pausaEmocional"
    },


    pausaEmocional: {

        icone: "⏸️",

        titulo:
            "Vamos fazer uma pequena pausa",

        descricao:
            "Antes de decidir o que fazer, observe sua vontade por alguns instantes. Você não precisa impedir que coma.",

        tipo: "opcoes",

        opcoes: [
            "Sim, vou fazer uma pausa",
            "Vou tentar por alguns segundos",
            "Está difícil fazer uma pausa"
        ],

        proxima: "mudancaVontade"
    },


    mudancaVontade: {

        icone: "🔎",

        titulo:
            "Depois dessa pausa, o que aconteceu com sua vontade de comer?",

        descricao:
            "Observe se alguma coisa mudou.",

        tipo: "opcoes",

        opcoes: [
            "Diminuiu bastante",
            "Diminuiu um pouco",
            "Ficou igual",
            "Aumentou",
            "Não consegui perceber"
        ],

        proxima: "resultado"
    },


    resultado: {

        icone: "🌱",

        titulo:
            "Como você entende essa vontade agora?",

        descricao:
            "Depois de observar seu corpo, seu momento e suas emoções, escolha a opção que mais faz sentido.",

        tipo: "opcoes",

        opcoes: [
            "Acredito que seja fome física",
            "Acredito que seja uma vontade emocional",
            "Acho que existe fome física e emocional",
            "Ainda não tenho certeza"
        ],

        proxima: "final"
    }

};


/* =====================================================
   VARIÁVEIS
===================================================== */

let etapaAtual = "inicio";

let numeroEtapa = 1;

let respostaSelecionada = null;

let respostas = [];

let intervaloRespiracao = null;


/* =====================================================
   ELEMENTOS DO HTML
===================================================== */

const questionario =
    document.getElementById("questionario");

const resultado =
    document.getElementById("resultado");

const titulo =
    document.getElementById("titulo");

const descricao =
    document.getElementById("descricao");

const icone =
    document.getElementById("icone");

const conteudo =
    document.getElementById("conteudo");

const ajudaResposta =
    document.getElementById("ajudaResposta");

const botaoContinuar =
    document.getElementById("botaoContinuar");

const botaoReiniciar =
    document.getElementById("botaoReiniciar");

const progresso =
    document.getElementById("progresso");

const porcentagem =
    document.getElementById("porcentagem");

const etapaTexto =
    document.getElementById("etapaTexto");

const mensagemFinal =
    document.getElementById("mensagemFinal");

const classificacaoTexto =
    document.getElementById("classificacaoTexto");

const planoPessoal =
    document.getElementById("planoPessoal");

const modalRespiracao =
    document.getElementById("modalRespiracao");

const fecharModal =
    document.getElementById("fecharModal");

const iniciarRespiracao =
    document.getElementById("iniciarRespiracao");

const circulo =
    document.getElementById("circulo");

const textoRespiracao =
    document.getElementById("textoRespiracao");

const tempo =
    document.getElementById("tempo");


/* =====================================================
   MOSTRAR ETAPA
===================================================== */

function mostrarEtapa() {

    const etapa =
        etapas[etapaAtual];


    respostaSelecionada = null;


    botaoContinuar.disabled = true;


    titulo.textContent =
        etapa.titulo;


    descricao.textContent =
        etapa.descricao;


    icone.textContent =
        etapa.icone;


    conteudo.innerHTML = "";


    ajudaResposta.innerHTML = "";

    ajudaResposta.classList.add(
        "escondido"
    );


    if (etapa.tipo === "opcoes") {

        criarOpcoes(
            etapa.opcoes
        );

    }


    atualizarProgresso();
}


/* =====================================================
   CRIAR OPÇÕES
===================================================== */

function criarOpcoes(opcoes) {

    const container =
        document.createElement("div");


    container.className =
        "opcoes";


    opcoes.forEach(function(opcaoTexto) {

        const botao =
            document.createElement("button");


        botao.type = "button";


        botao.className =
            "opcao";


        botao.textContent =
            opcaoTexto;


        botao.addEventListener(
            "click",
            function() {

                selecionarOpcao(
                    botao,
                    opcaoTexto
                );

            }
        );


        container.appendChild(
            botao
        );

    });


    conteudo.appendChild(
        container
    );
}


/* =====================================================
   SELECIONAR OPÇÃO
===================================================== */

function selecionarOpcao(
    botao,
    resposta
) {

    const botoes =
        document.querySelectorAll(
            ".opcao"
        );


    botoes.forEach(function(item) {

        item.classList.remove(
            "selecionada"
        );

    });


    botao.classList.add(
        "selecionada"
    );


    respostaSelecionada =
        resposta;


    botaoContinuar.disabled =
        false;


    mostrarAjuda(
        resposta
    );
}


/* =====================================================
   BANCO DE AJUDA
===================================================== */

const ajudas = {

    "Estou com fome":
        "Observe os sinais do seu corpo. Se a fome estiver presente, uma refeição pode ser uma forma de cuidar dessa necessidade.",

    "Estou com vontade de comer":
        "Tente perceber se existe fome física ou se algo aconteceu antes dessa vontade aparecer.",

    "Estou com muita vontade de comer":
        "Quando a vontade estiver muito forte, tente fazer uma pequena pausa. Isso não significa que você precisa deixar de comer.",

    "Não consigo identificar":
        "Tudo bem não saber. O objetivo das próximas perguntas é justamente ajudar você a observar melhor o que está acontecendo.",


    "Sensação de fome no estômago":
        "Essa pode ser uma informação importante sobre fome física. Observe também sua energia e quando foi sua última refeição.",

    "Barriga roncando":
        "O estômago pode produzir sons por diversos motivos. Observe esse sinal junto com outros sinais do corpo.",

    "Pouca energia":
        "Baixa energia pode acompanhar fome, mas também pode ter outras causas. Observe o conjunto de sinais.",

    "Estou satisfeito(a), mas quero comer":
        "Essa informação pode indicar que a vontade não está vindo apenas da fome física. Vamos investigar o que aconteceu antes.",

    "Não sinto sinais físicos de fome":
        "Pode existir uma influência emocional, hábito ou desejo. Não é necessário se culpar por isso.",

    "Não sei":
        "Tudo bem. Nem sempre conseguimos identificar nossos sinais imediatamente.",


    "Foi aparecendo aos poucos":
        "Uma vontade que cresce gradualmente pode acompanhar a fome física, mas observe também outros sinais.",

    "Apareceu de repente":
        "Uma vontade que aparece de repente pode estar relacionada a uma situação, hábito ou emoção.",

    "Depois de ver ou sentir cheiro de comida":
        "Ver ou sentir o cheiro de alimentos pode despertar vontade de comer mesmo sem fome física.",

    "Depois de alguma situação emocional":
        "Uma situação emocional pode influenciar a vontade de comer. Vamos tentar entender qual emoção está presente.",


    "Qualquer comida serviria":
        "Quando várias opções de comida parecem interessantes, isso pode ser compatível com fome física. Ainda assim, observe os outros sinais.",

    "Quero uma refeição completa":
        "Sentir vontade de fazer uma refeição pode ser um sinal de fome física. Observe também sua energia e os sinais do corpo.",

    "Quero especificamente um doce":
        "Um desejo específico pode acontecer por diversos motivos, incluindo hábito, prazer ou emoção. Isso não significa que seja necessariamente fome emocional.",

    "Quero especificamente algo salgado":
        "Um desejo específico pode acontecer por diversos motivos. Observe se uma refeição também seria desejada.",

    "Quero apenas um alimento específico":
        "Observe se você faria uma refeição ou se deseja apenas aquele alimento. Essa diferença pode ajudar na reflexão.",


    "Estou com bastante energia":
        "Observe se existem outros sinais de fome física além da energia.",

    "Estou um pouco cansado(a)":
        "Cansaço pode aparecer por diversos motivos. Observe junto com outros sinais antes de tirar uma conclusão.",

    "Estou muito cansado(a)":
        "Se estiver muito cansado(a), vale observar suas necessidades físicas e também considerar descanso.",

    "Estou sonolento(a)":
        "Sonolência não significa necessariamente fome. Talvez seu corpo esteja pedindo descanso.",

    "Minha energia está normal":
        "Continue observando outros sinais físicos e emocionais.",


    "Eu estava trabalhando ou estudando":
        "Às vezes ficamos muito tempo concentrados e deixamos de perceber nossos sinais corporais. Observe quando foi sua última refeição.",

    "Eu estava descansando":
        "Observe se a vontade apareceu por fome, prazer, hábito ou simplesmente porque a comida estava disponível.",

    "Eu estava entediado(a)":
        "O tédio pode fazer a comida parecer uma atividade. Uma pequena mudança de atividade pode ajudar a perceber se a vontade continua.",

    "Aconteceu algo estressante":
        "O estresse pode influenciar a vontade de comer. Tente perceber o que você precisa além da comida.",

    "Aconteceu algo triste":
        "A tristeza merece cuidado e acolhimento. Pergunte-se se precisa de comida, descanso, companhia ou outra forma de cuidado.",

    "Aconteceu algo muito bom":
        "Momentos felizes também podem aumentar a vontade de comer. Comer não precisa ser visto como algo errado; observe apenas o que você realmente está buscando.",

    "Eu estava conversando com alguém":
        "Observe se a conversa influenciou seu humor ou se a vontade de comer já estava presente.",

    "Nada específico aconteceu":
        "A vontade pode surgir por hábito ou outros fatores. Continue observando seus sinais.",


    "😊 Alegria":
        "A alegria também pode estar associada à comida, especialmente em comemorações. Aproveite a emoção e observe se existe fome física.",

    "😌 Tranquilidade":
        "Quando estamos tranquilos, podemos querer comer por prazer ou hábito. Observe se existe fome física.",

    "🥰 Carinho ou afeto":
        "Alguns alimentos podem estar ligados a carinho, família e lembranças. Essa relação pode existir sem que você precise se culpar.",

    "🎉 Animação ou empolgação":
        "A empolgação pode aumentar a vontade de comer. Observe se você está buscando comemorar ou se existe fome física.",

    "😎 Confiança ou satisfação":
        "Momentos positivos também podem estar associados à comida. Observe o motivo da vontade sem julgamento.",

    "❤️ Amor ou conexão":
        "Comida e afeto podem estar relacionados a encontros, família e lembranças. Observe o que você realmente precisa neste momento.",

    "😰 Ansiedade":
        "A ansiedade pode aumentar a vontade de comer. Uma pequena pausa e uma respiração lenta podem ajudar você a observar o que está sentindo.",

    "😣 Estresse":
        "O estresse pode influenciar a alimentação. Tente criar alguns minutos para diminuir a tensão antes de decidir.",

    "😢 Tristeza":
        "A tristeza merece cuidado, não culpa. Pense se você precisa de comida, descanso, companhia, carinho ou conversa.",

    "😴 Tédio":
        "Experimente fazer uma atividade diferente por alguns minutos e depois observe se a vontade de comer continua.",

    "😡 Irritação ou raiva":
        "Quando estamos irritados, podemos buscar alívio rapidamente. Uma pausa, caminhada ou respiração pode ajudar.",

    "😔 Solidão":
        "A comida pode parecer uma forma de conforto quando estamos sozinhos. Conversar ou buscar companhia também pode ajudar.",

    "😕 Preocupação":
        "A preocupação pode ocupar bastante espaço mental. Observe se a comida está sendo usada para tentar aliviar essa sensação.",

    "🤔 Não sei exatamente":
        "Tudo bem não saber. Identificar emoções pode levar tempo. Apenas perceber que algo está acontecendo já é um passo.",


    "Sim, vou fazer uma pausa":
        "Muito bem. A pausa não serve para proibir a comida, mas para criar um momento de observação.",

    "Vou tentar por alguns segundos":
        "Começar com alguns segundos já é válido. Observe sua respiração e o que está acontecendo no seu corpo.",

    "Está difícil fazer uma pausa":
        "Tudo bem. Não transforme a pausa em uma obrigação. Apenas tente diminuir o ritmo e perceber o que você precisa.",


    "Diminuiu bastante":
        "Essa mudança pode indicar que a vontade estava parcialmente ligada ao momento, emoção ou hábito.",

    "Diminuiu um pouco":
        "Uma pequena mudança já é uma informação. Observe o que ajudou.",

    "Ficou igual":
        "A pausa não precisa fazer a vontade desaparecer. Ela ajuda você a decidir com mais consciência.",

    "Aumentou":
        "Não significa que você falhou. Observe novamente seus sinais físicos e emocionais.",

    "Não consegui perceber":
        "Tudo bem. Algumas vezes precisamos de mais tempo para entender nossos sinais.",


    "Acredito que seja fome física":
        "Pelos sinais que você observou, essa vontade parece estar mais relacionada às necessidades do seu corpo.",

    "Acredito que seja uma vontade emocional":
        "Pelos sinais que você observou, essa vontade parece estar mais relacionada a uma emoção ou situação.",

    "Acho que existe fome física e emocional":
        "Pode existir fome física junto com uma necessidade emocional. As duas coisas podem acontecer ao mesmo tempo.",

    "Ainda não tenho certeza":
        "Tudo bem não ter certeza. Identificar padrões leva tempo e não precisa acontecer de uma vez."
};


/* =====================================================
   MOSTRAR AJUDA
===================================================== */

function mostrarAjuda(resposta) {

    const texto =
        ajudas[resposta];


    if (!texto) {

        ajudaResposta.classList.add(
            "escondido"
        );

        return;
    }


    ajudaResposta.innerHTML =
        "<strong>🌱 Como você pode se ajudar:</strong>" +
        "<span>" +
        texto +
        "</span>";


    ajudaResposta.classList.remove(
        "escondido"
    );
}


/* =====================================================
   CONTINUAR
===================================================== */

botaoContinuar.addEventListener(
    "click",
    function() {

        if (
            respostaSelecionada === null
        ) {
            return;
        }


        salvarResposta();


        if (
            etapaAtual === "tipoEmocional" &&
            respostaSelecionada ===
            "😰 Ansiedade"
        ) {

            mostrarAjudaEspecial(
                "🌬️",
                "Você identificou ansiedade",
                "Antes de pensar na comida, experimente fazer uma respiração lenta. A intenção não é impedir você de comer, mas criar uma pequena pausa."
            );

        }


        irParaProxima();

    }
);


/* =====================================================
   SALVAR RESPOSTA
===================================================== */

function salvarResposta() {

    respostas.push({

        etapa: etapaAtual,

        pergunta:
            etapas[etapaAtual].titulo,

        resposta:
            respostaSelecionada

    });

}


/* =====================================================
   PRÓXIMA ETAPA
===================================================== */

function irParaProxima() {

    const proxima =
        etapas[etapaAtual].proxima;


    if (
        proxima === "final"
    ) {

        mostrarResultado();

        return;
    }


    etapaAtual =
        proxima;


    numeroEtapa++;


    mostrarEtapa();
}


/* =====================================================
   AJUDA ESPECIAL
===================================================== */

function mostrarAjudaEspecial(
    iconeEspecial,
    tituloEspecial,
    textoEspecial
) {

    ajudaResposta.innerHTML =
        "<strong>" +
        iconeEspecial +
        " " +
        tituloEspecial +
        "</strong>" +
        "<span>" +
        textoEspecial +
        "</span>";


    ajudaResposta.classList.remove(
        "escondido"
    );
}


/* =====================================================
   PROGRESSO
===================================================== */

function atualizarProgresso() {

    const total =
        Object.keys(etapas).length;


    const porcentagemAtual =
        Math.round(
            (numeroEtapa / total) * 100
        );


    const valor =
        Math.min(
            95,
            Math.max(
                5,
                porcentagemAtual
            )
        );


    progresso.style.width =
        valor + "%";


    porcentagem.textContent =
        valor + "%";


    etapaTexto.textContent =
        "Etapa " +
        numeroEtapa;
}


/* =====================================================
   RESULTADO
===================================================== */

function mostrarResultado() {

    questionario.classList.add(
        "escondido"
    );


    resultado.classList.remove(
        "escondido"
    );


    const classificacao =
        encontrarResposta(
            "resultado"
        );


    const emocao =
        encontrarResposta(
            "tipoEmocional"
        );


    const sinais =
        encontrarResposta(
            "sinaisCorporais"
        );


    const momento =
        encontrarResposta(
            "situacao"
        );


    const mudanca =
        encontrarResposta(
            "mudancaVontade"
        );


    /* ---------------------------------------------
       TEXTO PRINCIPAL
    --------------------------------------------- */

    if (
        classificacao ===
        "Acredito que seja fome física"
    ) {

        mensagemFinal.textContent =
            "Pelos sinais que você observou, essa vontade parece estar mais relacionada às necessidades do seu corpo. Cuidar da fome também é uma forma de autocuidado.";

    }

    else if (
        classificacao ===
        "Acredito que seja uma vontade emocional"
    ) {

        mensagemFinal.textContent =
            "Pelos sinais observados, essa vontade parece estar mais relacionada a uma emoção ou situação. Isso não significa que você fez algo errado.";

    }

    else if (
        classificacao ===
        "Acho que existe fome física e emocional"
    ) {

        mensagemFinal.textContent =
            "Você percebeu sinais de fome física e também influência emocional. Essas duas experiências podem acontecer ao mesmo tempo.";

    }

    else {

        mensagemFinal.textContent =
            "Você ainda não tem certeza sobre a origem da vontade, e tudo bem. Observar seus padrões sem julgamento já é um passo importante.";
    }


    /* ---------------------------------------------
       CLASSIFICAÇÃO
    --------------------------------------------- */

    classificacaoTexto.innerHTML =
        criarClassificacao(
            classificacao
        );


    /* ---------------------------------------------
       PLANO
    --------------------------------------------- */

    planoPessoal.innerHTML = "";


    adicionarPlano(
        "Sinal corporal",
        sinais || "Não identificado"
    );


    adicionarPlano(
        "Momento anterior",
        momento || "Não identificado"
    );


    adicionarPlano(
        "Emoção percebida",
        emocao || "Não identificada"
    );


    adicionarPlano(
        "Mudança depois da pausa",
        mudanca || "Não identificada"
    );


    /* ---------------------------------------------
       PLANO PERSONALIZADO
    --------------------------------------------- */

    if (
        classificacao ===
        "Acredito que seja fome física"
    ) {

        adicionarPlano(
            "Próximo passo",
            "Considere cuidar da fome com uma refeição ou lanche e observe como seu corpo responde."
        );

    }

    else if (
        classificacao ===
        "Acredito que seja uma vontade emocional"
    ) {

        adicionarPlano(
            "Próximo passo",
            "Na próxima vez, tente identificar a emoção antes de decidir o que fazer. Você pode experimentar uma atividade alternativa ou conversar com alguém."
        );

    }

    else if (
        classificacao ===
        "Acho que existe fome física e emocional"
    ) {

        adicionarPlano(
            "Próximo passo",
            "Você pode cuidar da fome física e também acolher a emoção presente. Não é necessário escolher apenas uma das duas coisas."
        );

    }

    else {

        adicionarPlano(
            "Próximo passo",
            "Continue observando seus sinais em outras situações. Com o tempo, pode ficar mais fácil identificar padrões."
        );

    }
}


/* =====================================================
   CRIAR CLASSIFICAÇÃO
===================================================== */

function criarClassificacao(
    classificacao
) {

    if (
        classificacao ===
        "Acredito que seja fome física"
    ) {

        return `
            <strong>
                🍽️ Possível fome física
            </strong>

            <br><br>

            Os sinais observados parecem estar mais relacionados às necessidades do corpo.

            <br><br>

            Se você está com fome, alimentar-se não é algo que precisa ser evitado.
        `;
    }


    if (
        classificacao ===
        "Acredito que seja uma vontade emocional"
    ) {

        return `
            <strong>
                ❤️ Possível influência emocional
            </strong>

            <br><br>

            A vontade parece estar relacionada principalmente ao momento emocional.

            <br><br>

            Isso não significa que você fez algo errado. A comida pode fazer parte da nossa relação com emoções, lembranças e situações sociais.
        `;
    }


    if (
        classificacao ===
        "Acho que existe fome física e emocional"
    ) {

        return `
            <strong>
                🌿 Fome física + influência emocional
            </strong>

            <br><br>

            Pode haver uma necessidade física junto com uma necessidade emocional.

            <br><br>

            As duas coisas podem ser cuidadas ao mesmo tempo.
        `;
    }


    return `
        <strong>
            🤔 Ainda não identificado
        </strong>

        <br><br>

        Não conseguir identificar imediatamente é normal.

        <br><br>

        Continue observando seus sinais sem culpa ou julgamento.
    `;
}


/* =====================================================
   ENCONTRAR RESPOSTA
===================================================== */

function encontrarResposta(
    nomeEtapa
) {

    const resposta =
        respostas.find(
            function(item) {

                return item.etapa ===
                    nomeEtapa;

            }
        );


    if (!resposta) {

        return null;
    }


    return resposta.resposta;
}


/* =====================================================
   ADICIONAR AO PLANO
===================================================== */

function adicionarPlano(
    tituloPlano,
    texto
) {

    const item =
        document.createElement("div");


    item.className =
        "plano-item";


    item.innerHTML =
        `
        <span>✓</span>

        <div>
            <strong>
                ${tituloPlano}:
            </strong>

            ${texto}
        </div>
        `;


    planoPessoal.appendChild(
        item
    );
}


/* =====================================================
   REINICIAR
===================================================== */

botaoReiniciar.addEventListener(
    "click",
    reiniciar
);


function reiniciar() {

    etapaAtual =
        "inicio";


    numeroEtapa =
        1;


    respostaSelecionada =
        null;


    respostas =
        [];


    resultado.classList.add(
        "escondido"
    );


    questionario.classList.remove(
        "escondido"
    );


    mostrarEtapa();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =====================================================
   MODAL DE RESPIRAÇÃO
===================================================== */

function abrirRespiracao() {

    modalRespiracao.classList.remove(
        "escondido"
    );
}


function fecharRespiracao() {

    pararRespiracao();


    modalRespiracao.classList.add(
        "escondido"
    );
}


fecharModal.addEventListener(
    "click",
    fecharRespiracao
);


/* =====================================================
   RESPIRAÇÃO
===================================================== */

iniciarRespiracao.addEventListener(
    "click",
    iniciarExercicioRespiracao
);


function iniciarExercicioRespiracao() {

    iniciarRespiracao.disabled =
        true;


    let segundos =
        30;


    let inspirando =
        true;


    textoRespiracao.textContent =
        "Inspire lentamente";


    function atualizar() {

        tempo.textContent =
            segundos +
            " segundos";


        if (
            segundos <= 0
        ) {

            pararRespiracao();


            textoRespiracao.textContent =
                "Muito bem! 🌱";


            tempo.textContent =
                "Você concluiu a pausa.";


            setTimeout(
                function() {

                    fecharRespiracao();

                },
                1200
            );


            return;
        }


        if (
            segundos % 5 === 0
        ) {

            inspirando =
                !inspirando;

        }


        if (inspirando) {

            textoRespiracao.textContent =
                "Inspire lentamente";


            circulo.classList.add(
                "aumentar"
            );


            circulo.classList.remove(
                "diminuir"
            );

        }

        else {

            textoRespiracao.textContent =
                "Solte o ar lentamente";


            circulo.classList.remove(
                "aumentar"
            );


            circulo.classList.add(
                "diminuir"
            );
        }


        segundos--;
    }


    atualizar();


    intervaloRespiracao =
        setInterval(
            atualizar,
            1000
        );
}


/* =====================================================
   PARAR RESPIRAÇÃO
===================================================== */

function pararRespiracao() {

    if (
        intervaloRespiracao !== null
    ) {

        clearInterval(
            intervaloRespiracao
        );


        intervaloRespiracao =
            null;
    }


    iniciarRespiracao.disabled =
        false;


    circulo.classList.remove(
        "aumentar"
    );


    circulo.classList.remove(
        "diminuir"
    );
}


/* =====================================================
   INICIAR QUESTIONÁRIO
===================================================== */

mostrarEtapa();