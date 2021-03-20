const tela = document.querySelector('.resultado');
const botoes = document.querySelectorAll('button');


for (let i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("click", (e) => {
        destingueTeclas(e)
    })
}

function destingueTeclas(e) {
    if (!isNaN(e.target.innerText)) {
        tela.innerText += e.target.innerText;
        console.log(e.target.innerText)
    } else {
        switch (e.target.innerText) {
            case 'Enter':
                if (tela.innerText === '') {
                    tela.innerText = '';
                } else {
                    tela.innerText = resultado(tela.innerText)
                }
                break;
            case 'C':
                tela.innerText = '';
                break;
            case '.':
                verifica(',')
                break;
            case ',':
                verifica(',')
                break;
            default:
                verifica(e.target.innerText)
        }
    }
}

function verifica(v) {
    if (tela.innerText.substr(tela.innerText.length - 1) === v) {
        tela.innerText = tela.innerText;
    } else {
        tela.innerText += v;
    }
    if (tela.innerText.indexOf(',') > -1) {

    }
}

function resultado(resultado) {
    return eval(resultado)
}







