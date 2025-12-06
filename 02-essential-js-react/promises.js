fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => res.json()) // executed later
  .then((data) => console.log(data));

console.log("indra");

// Java script immediatelly move the the next line, not waiting for the other line

async function getTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  return data;
}

const todos = await getTodos();
console.log(todos);

console.log("indra");
