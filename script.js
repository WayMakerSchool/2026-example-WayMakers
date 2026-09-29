const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

const STORAGE_KEY = "waymaker-todos";

// 저장된 할 일 불러오기
let todos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

function saveTodos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function render() {
  list.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.className = todo.done ? "todo-item done" : "todo-item";

    const text = document.createElement("span");
    text.textContent = todo.text;
    // 글자를 누르면 완료/미완료 전환
    text.addEventListener("click", () => {
      todos[index].done = !todos[index].done;
      saveTodos();
      render();
    });

    // 삭제 버튼
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "삭제";
    deleteButton.addEventListener("click", () => {
      todos.splice(index, 1);
      saveTodos();
      render();
    });

    li.appendChild(text);
    li.appendChild(deleteButton);
    list.appendChild(li);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = input.value;
  if (!text) return;

  todos.push({ text, done: false });
  saveTodos();
  render();

  input.value = "";
  input.focus();
});

render();
