var prompt = require('prompt-sync')();

jogo: while (true) {
    console.clear();
    console.log('JOKENPO');
    quantidade: while (true) {
        var rodadas = prompt('Quantas rodadas serão? -> ');
        if (rodadas % 1 != 0) {
            console.log('Valor inválido, digite um número inteiro');
        } else {
            break quantidade;
        }
    }
    var opcoes = ['PEDRA', 'PAPEL', 'TESOURA'];
    var ganhou = 0;
    var perdeu = 0;
    for (var i = 0; i < rodadas; i++) {
        opcao: while (true) {
            var escolha = prompt(
                'Qual é sua escolha? Pedra, papel ou tesoura? -> ',
            );
            escolha = escolha.toUpperCase();
            if (
                escolha == opcoes[0] ||
                escolha == opcoes[1] ||
                escolha == opcoes[2]
            ) {
                break opcao;
            } else {
                console.log('Opção Inválida, tente novamente.');
            }
        }
        var item = opcoes[Math.floor(Math.random() * opcoes.length)];
        if (escolha == opcoes[0]) {
            if (item == opcoes[0]) {
                console.log(
                    `Você EMPATOU, a jogada do computador foi ${item}.`,
                );
            } else if (item == opcoes[1]) {
                console.log(`Você PERDEU, a jogada do computador foi ${item}.`);
                perdeu += 1;
            } else {
                console.log(`Você GANHOU, a jogada do computador foi ${item}.`);
                ganhou += 1;
            }
        } else if (escolha == opcoes[1]) {
            if (item == opcoes[0]) {
                console.log(`Você GANHOU, a jogada do computador foi ${item}.`);
                ganhou += 1;
            } else if (item == opcoes[1]) {
                console.log(
                    `Você EMPATOU, a jogada do computador foi ${item}.`,
                );
            } else {
                console.log(`Você PERDEU, a jogada do computador foi ${item}.`);
                perdeu += 1;
            }
        } else {
            if (item == opcoes[0]) {
                console.log(`Você PERDEU, a jogada do computador foi ${item}.`);
                perdeu += 1;
            } else if (item == opcoes[1]) {
                console.log(`Você GANHOU, a jogada do computador foi ${item}.`);
                ganhou += 1;
            } else {
                console.log(
                    `Você EMPATOU, a jogada do computador foi ${item}.`,
                );
            }
        }
    }

    console.log(
        `\nVocê ganhou ${ganhou} rodadas, já o computador ganhou ${perdeu} rodadas.`,
    );
    if (ganhou > perdeu) {
        console.log('\nVocê ganhou do computador.');
    } else if (ganhou < perdeu) {
        console.log('\nVocê perdeu do computador.');
    } else {
        console.log('\nVocê empatou com o computador.');
    }
    console.log();
    var pergunta = prompt(
        'Deseja jogar novamente? Digite SIM caso queira, senão, digite qualquer coisa -> ',
    );
    pergunta = pergunta.toUpperCase();
    if (pergunta == 'SIM') {
        continue;
    } else {
        console.clear();
        break jogo;
    }
}