const botoes = document.querySelectorAll('button');
import {fn} from './fn.js'

for (let i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("click", (e) => {
        fn.init(e)
    })
}