const botaoEnviar = document.getElementById('enviar');
const caixaTexto =  document.getElementById('texto');
const chat = document.getElementById('mensagens');


const socket = io();

botaoEnviar.addEventListener('click', () =>{
    if(caixaTexto.value !== ''){
        socket.emit('nova mensagem',caixaTexto.value);
        caixaTexto.value = "";        

    }

})

socket.addEventListener('nova mensagem', (msg)=>{
   const elementMensagem = document.createElement('li');
   elementMensagem.textContent = msg;
   elementMensagem.classList.add('mensagem');
   chat.appendChild(elementMensagem);

})