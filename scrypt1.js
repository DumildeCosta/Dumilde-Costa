document.addEventListener("DOMContentLoaded", () =>
	{
		console.log("Página carregada com sucesso!");
	});

	// Tema escuro
const btnToggle = document.getElementById("toggle-theme");
btnToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

// emoji do tema
// emoji com base no tema atual
const btnToggle = document.getElementById("toggle-theme");
  btnToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    // Atualiza o emoji com base no tema atual
    if (document.body.classList.contains("dark-theme")) {
      btnToggle.textContent = "☀️"; // Exibe sol para indicar tema claro se estiver no modo dark
    } else {
      btnToggle.textContent = "🌙"; // Exibe lua para indicar tema dark se estiver no modo claro
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
	const btnToggle = document.getElementById("toggle-theme");
	
	btnToggle.addEventListener("click", function () {
	  // Alterna a classe "dark-theme" no elemento body
	  document.body.classList.toggle("dark-theme");
	  
	  // Atualiza o emoji do botão conforme o estado do tema
	  if (document.body.classList.contains("dark-theme")) {
		btnToggle.textContent = "☀️"; // Tema escuro ativo; mostra emoji de sol para voltar ao tema claro
	  } else {
		btnToggle.textContent = "🌙"; // Tema claro ativo; mostra emoji de lua para ativar o tema escuro
	  }
	});
  });
