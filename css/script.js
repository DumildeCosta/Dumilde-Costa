document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling para links âncora (ex.: navegando para a seção "contato")
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if(targetElement){
        targetElement.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  // Exemplo de tratamento para o formulário de contato, caso o mesmo seja implementado.
  // Se você decidir adicionar um formulário com, por exemplo, id="contactForm", descomente e adapte o código abaixo:
  const contactForm = document.getElementById("contactForm");
  if(contactForm) {
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();
      // Aqui você pode implementar validações ou enviar os dados via AJAX.
      console.log("Formulário de contato enviado!");
      // Exemplo: alert("Obrigado por entrar em contato!");
    });
  }
  */
});

