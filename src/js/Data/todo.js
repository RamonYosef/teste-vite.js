import { product, productBuy } from "../variables";

function data() {
  if (localStorage.getItem("list")) {
    //getItem = passe o nome da chave para retorna o seu valor no storage
    //localStorage = interface de armazenamento

    return JSON.parse(localStorage.getItem("list"));
  }

  return [];
}

function dataPush(e) {
  // setItem = adicionar a chave e valor no storage ou atualizar o valor caso a chave já exista

  const prevdata = data();
  prevdata.push(e);
  localStorage.setItem("list", JSON.stringify(prevdata));
}

function renderTodos() {
  product.innerHTML = "";
  productBuy.innerHTML = "";

  data().forEach((e, index) => {
    const itemLi = document.createElement("li");
    itemLi.setAttribute("data-index", index);

    const itemNome = document.createElement("span");
    itemNome.innerHTML = "<b>Nome do produto: </b>" + e.nome;
    itemLi.append(itemNome);

    const itemValor = document.createElement("span");
    itemValor.innerHTML = "<b>Valor: </b>" + e.valor;
    itemLi.append(itemValor);

    const itemDesc = document.createElement("span");
    itemDesc.innerHTML = "<b>Descrição: </b>" + e.desc;
    itemLi.append(itemDesc);

    const itemQtd = document.createElement("span");
    itemQtd.innerHTML = "<b>Quatindade: </b>" + e.qtd;
    itemLi.append(itemQtd);

    product.append(itemLi);
  });
}

export { renderTodos, dataPush };
