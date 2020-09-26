$(document).ready(function(){
    $(".navbar-toggle").click(function(){
        $(".menu").toggleClass("menu-open");
    })
});

/* Com a estrutura e a aparência do menu pronta, 
agora precisamos implementar a ação de abrir e fechar o menu. 
Para isso utilizaremos o jQuery para capturar o evento de clique do botão na navbar*/