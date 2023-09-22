import { dataPush, renderTodos } from "../Data/todo";

const form = document.querySelector("#formProduct");

function onSubmitFormTask() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    dataPush({
      nome: form.querySelector("[name=nome]").value,
      valor: form.querySelector("[name=valor]").value,
      desc: form.querySelector("[name=desc]").value,
      qtd: form.querySelector("[name=qtd]").value,
      check: false
    });

    renderTodos();
  });
}

export{
    onSubmitFormTask
}
