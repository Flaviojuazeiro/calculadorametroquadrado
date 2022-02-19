

     // inicio função 

function formatarMoeda() {
                var elemento = document.getElementById('valor3');   
                var valor = elemento.value;
        
                valor = valor + '';
                valor = parseInt(valor.replace(/[\D]+/g, ''));
                valor = valor + '';
                valor = valor.replace(/([0-9]{2})$/g, ",$1");
        
                if (valor.length > 6) {
                    valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
                }
        
                elemento.value = valor;
                if(valor == 'NaN') elemento.value = '';        
            }

            function formatarMoeda2() {
                var elemento = document.getElementById('outros');   
                var valor = elemento.value;
        
                valor = valor + '';
                valor = parseInt(valor.replace(/[\D]+/g, ''));
                valor = valor + '';
                valor = valor.replace(/([0-9]{2})$/g, ",$1");
        
                if (valor.length > 6) {
                    valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
                }
        
                elemento.value = valor;
                if(valor == 'NaN') elemento.value = '';        
            }
                   
              
            // fim

            // inicio função calcular
        
  function multiplicar (){

  var v1 = document.getElementById("valor1").value;
  var v2 = document.getElementById("valor2").value;
  var v3 = document.getElementById("valor3").value;
  var v4 = document.getElementById("valor4").value;
  var v5 = document.getElementById("outros").value;

  v3 = v3.replace(/\,/gi,'.'); //troca a vírgula por ponto do valor 1
  v5 = v5.replace(/\,/gi,'.'); //troca a vírgula por ponto do valor 1

if (v5==''){
    v5 ="0";
}

  
  if (v1 == '' || v2==''){
                    alert('Campo em branco!')
                    return
}
                    
  if (v3 == '' || v4==''){
                    alert('Campo em branco!')
                    return
  }
  

  var resultado1 = parseFloat(v1) * parseFloat(v2); // calcula altura x largura
  var resultado2 =   parseFloat(v3) * parseFloat(resultado1);   // calcula valor vezes metro 

  var resultado3 =   parseFloat(resultado1) * parseFloat(v4);   // calcula area x quantidade

  var soma = parseFloat(resultado2) + parseFloat(v5);   // calcula valor + outros custos 

  var vunitario = parseFloat(soma) / parseFloat(v4);   // calcula valor unitario



  //------------------------------------------------------
  //calculo quantidade  por  metro quadrado

  var quantidadepormetro = 1.0 / parseFloat(v1);
  var quantidadepormetro2 = 1.0 / parseFloat(v2);
  var tqmetro = quantidadepormetro * quantidadepormetro2;

  //---------------------------------------------------



  
  
 

    

//com R$
var f = soma.toLocaleString("pt-br", { style: "currency", currency: "BRL" });

 v5 =   parseFloat(v5)
var f2 = v5.toLocaleString("pt-br", { style: "currency", currency: "BRL" });


var f3 = vunitario.toLocaleString("pt-br", { style: "currency", currency: "BRL" });




            largura.innerHTML = parseFloat(v1).toFixed(2);
            altura.innerHTML = parseFloat(v2).toFixed(2);
            area.innerHTML = parseFloat(resultado1).toFixed(2);
            totalmetros.innerHTML = parseFloat(resultado3).toFixed(2);
            valormetro.innerHTML = (v3);
            unitario.innerHTML = (f3); 
            quantidade.innerHTML = parseFloat(v4);
            outroscustos.innerHTML = (f2);
            valorvenda.innerHTML = (f);
            cabemeio.innerHTML = (tqmetro).toFixed(4)/(2);
            cabemetro.innerHTML = (tqmetro).toFixed(4);

        }



        //LIMPA CAMPOS 

function limparInputs() {
  document.getElementById("valor1").value = "";
  document.getElementById("valor2").value = "";
  document.getElementById("valor3").value = "";
  document.getElementById("outros").value = "";

  document.querySelector('#altura').textContent = '0.00';
  document.querySelector('#largura').textContent = '0.00';
  document.querySelector('#area').textContent = '0.00';
  document.querySelector('#totalmetros').textContent = '0.00';
  document.querySelector('#valormetro').textContent = 'R$ 0,00';
  document.querySelector('#unitario').textContent = 'R$ 0,00';
  document.querySelector('#quantidade').textContent = '1';
  document.querySelector('#outroscustos').textContent = 'R$ 0,00';
  document.querySelector('#valorvenda').textContent = 'R$ 0,00';
  document.querySelector('#cabemeio').textContent = '0.00';
  document.querySelector('#cabemetro').textContent = '0.00';


  
}
                
 