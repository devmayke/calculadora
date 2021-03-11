for(let i = 0; i < 18; i++){
    document.querySelectorAll('button')[i].addEventListener("click", function(){         
        if(!isNaN(this.innerText)){        
            let tela = document.querySelector('.resultado');
            tela.innerText += this.innerText;
        }else{ 
            let tela = document.querySelector('.resultado');         
            operador = this.innerText;             
            switch (operador){               
                case 'Enter':
                    if(operador === 'Enter' && tela.innerText === ''){
                        tela.innerText = '';
                    }else{
                        tela.innerText = telaFinalResultado();
                        console.log(telaFinalResultado());
                    }
                    break;
                case 'C':
                    tela.innerText = '';                
                    break;
                case ',':
                    tela.innerText += '.';                   
                    break;
                default:
                    tela.innerText += operador;            
            }
        }
    function telaFinalResultado(){
        let telaFinal = document.querySelector('.resultado').innerText;
        telaFinal.innerText += this.innerText;            
        return eval(telaFinal);
    }        
})}
