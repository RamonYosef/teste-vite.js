import { dataCheck, dataDel, renderTodos } from "../Data/todo";

function onCheck() {
  const check = document.querySelectorAll(".check");
  check.forEach((btn) => {
    btn.addEventListener("click", () => {
      const itemLi = btn.closest("li");
      const index = itemLi.dataset.index;
      dataCheck(index);
      renderTodos();
    });
  });
}

function onDel() {
    const del = document.querySelectorAll(".btn-del");
    del.forEach((btn) => {
      btn.addEventListener("click", () => {
        const itemLi = btn.closest("li");
        const index = itemLi.dataset.index;
        dataDel(index);
        renderTodos();
      });
    });
  }

export { onCheck, onDel };
