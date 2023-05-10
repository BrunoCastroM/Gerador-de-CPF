import GeraCPF from './modules/GeraCPF';

import './assets/css/style.css';

(function() {
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    const botaoGerarCpf = document.querySelector('#gerar-cpf');
    cpfGerado.innerHTML = gera.geraNovoCpf();


    botaoGerarCpf.addEventListener('click', function() {
        cpfGerado.innerHTML = gera.geraNovoCpf();
    });

})();