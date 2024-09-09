function pesquisar() {
  // console.log(dados); // Comentado para fins de debug, remover em produção

  let campoPesquisa = document.getElementById
  ("campo-pesquisa").value
if (!campoPesquisa) {
section.innerHTML = "<p>Nada foi encontrado</p>"  
return 
}
  campoPesquisa = campoPesquisa.toLowerCase()

  // Seleciona a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  // console.log(section); // Comentado para fins de debug, remover em produção

  // Inicializa uma string para armazenar os resultados formatados em HTML
  let resultados = "";
  let titulo = "";
  let descricao = "";

  // Itera sobre cada dado da pesquisa e constrói o HTML para cada item
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    // se titulo icludes no campoPesquisa
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
      resultados += `
      <div class="item-resultados">
        <h2>
          <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descrição-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Mais Informações</a>
      </div>
    `;
    }
  
    
  }

  if (!resultados)  {
resultados = "<p>Nada foi encontrado</p>"
  }

  // Atribui o HTML gerado à seção de resultados
  section.innerHTML = resultados;
}
