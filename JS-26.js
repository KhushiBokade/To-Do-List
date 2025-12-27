const todoform=document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todolist=document.querySelector(".todo-list");


todoform.addEventListener("submit",(e)=>{
    e.preventDefault();  // prevent from refresh 
    const task=todoInput.value;
    const newLi = document.createElement("li");
    const newLiInnerHtml=`
            <span class="text">${task}</span>
            <div class="todo-buttons">
                <button class="todo-btn done">Done</button>
                <button class="todo-btn remove">Remove</button>
            </div>
    `;

    if(task===""){
        alert("Please Enter a valid Task");
        return;
    }
    newLi.innerHTML = newLiInnerHtml;
    // console.log(newLi);
    todolist.appendChild(newLi);
    todoInput.value="";
});

todolist.addEventListener("click", (e) => {
    // console.log(e.target);               // clicked element
    // console.log(e.target.classList);     // correct

    if (e.target.classList.contains("done")) {
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through";
        liSpan.style.fontWeight="200";
    }

    if (e.target.classList.contains("remove")) {
        const liSpan = e.target.parentNode.previousElementSibling;
        e.target.parentNode.parentNode.remove();
    }
});



