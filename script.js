//Proyectos
const btnAbrirVerDemo = document.getElementById('btnVerDemo');
const btnCerrarVerDemo = document.getElementById('btnCerrarDemo');
const demo = document.getElementById('verDemo');

btnAbrirVerDemo.addEventListener('click', () => {
    demo.showModal();
});

btnCerrarVerDemo.addEventListener("click", () => {
    demo.close();
} )
