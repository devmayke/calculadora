const tela = document.querySelector('.resultado');
const fn={    
       init(e) {
        if (!isNaN(e.target.innerText)) {
            tela.innerText += e.target.innerText;
            console.log(e.target.innerText)
        } else {
            switch (e.target.innerText) {
                case 'Enter':
                    if (tela.innerText === '') {
                        tela.innerText = '';
                    } else {
                        tela.innerText = fn.resultado(tela.innerText)
                    }
                    break;
                case 'C':
                    tela.innerText = '';
                    break;
                case '.':
                    fn.verifica(',')
                    break;
                case ',':
                    fn.verifica(',')
                    break;
                default:
                    fn.verifica(e.target.innerText)
            }
        }
    },

    verifica(v) {
        if (tela.innerText.substr(tela.innerText.length - 1) === v) {
            tela.innerText = tela.innerText;
        } else {
            tela.innerText += v;
        }
        if (tela.innerText.indexOf(',') > -1) {
    
        }
    },
    
    resultado(resultado) {
        return eval(resultado)
    }
}
export {fn}