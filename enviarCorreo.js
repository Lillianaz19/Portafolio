const btn = document.getElementById('button');
const mensajeEnCurso = document.getElementById('contacto__mensaje--enCurso');
const mensajeEnviado = document.getElementById('contacto__mensaje--enviado');
const btnMensajeEnviado = document.getElementById('contacto__mensajeEnviado--btn');

btnMensajeEnviado.addEventListener("click", () => {
    mensajeEnviado.close();
});

document.getElementById('formularioContacto')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   mensajeEnCurso.showModal()

   const serviceID = 'default_service';
   const templateID = 'template_p3cyfoq';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      mensajeEnCurso.close()
      mensajeEnviado.showModal()
      document.getElementById('name').value = "";
      document.getElementById('email').value = "";
      document.getElementById('asunto').value = "";
      document.getElementById('mensaje').value = "";
      
    }, (err) => {
      alert(JSON.stringify(err));
    });
});