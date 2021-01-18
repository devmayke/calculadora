for(let i = 0; i < 18; i++){
    document.querySelectorAll('button')[i].addEventListener("click", function(){        
        if(!isNaN(this.innerText)){        
        let tela = document.querySelector('.resultado');
        tela.innerText = tela.innerText + this.innerText;
        }else{  
            let tela = document.querySelector('.resultado');         
            operador = this.innerText; 
            if(operador === 'Enter' && tela.innerText === ''){
            tela.innerText = '';
            }else if(operador === 'Enter'){
                tela.innerText = telaFinalResultado();
                console.log(telaFinalResultado());            

            }else if(operador === 'C'){
                tela.innerText = '';
            }else if(operador === ','){
                operador = '.';
            }else{           
                tela.innerText = tela.innerText + operador; 
        }       
    }
    function telaFinalResultado(){
        let telaFinal = document.querySelector('.resultado').innerText;
        telaFinal.innerText = telaFinal.innerText + this.innerText;            
        return eval(telaFinal);
    }        
})}




