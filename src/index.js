document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("#create-task-form");
  form.addEventListener("submit", function(event){
    let input = form.querySelector("input#new-task-description");
    let ul = document.querySelector("ul#tasks");

    let text = document.createElement("text");
    text.innerText = input.value;

    let button = document.createElement("button");
    button.textContent = "x";
    button.addEventListener("click", function(e){
      e.target.parentNode.remove();
    });

    let li = document.createElement("li");
    li.appendChild(text);
    li.appendChild(button);
    ul.appendChild(li);

    event.preventDefault();
    input.value = "";

  })
  // your code here
});
