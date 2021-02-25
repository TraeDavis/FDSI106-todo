function saveTodo(){
    let text = $("#txtTodo").val(); // get the text of input
    // validations
    if(text.length < 1){
        alert("Todo text can not be empty");
        return; // get out of the function
    }

    $("#txtTodo").val('');
    
    // create a todo
    var syntax = 
    `<div class="todo-item"><p>${text}</p>
        <button class="complete-btn btn"><i class="fas fa-check"></i></button>
        <button class="delete-btn btn"><i class="fas fa-trash-alt"></i></button>
    </div>`;
    // add todo inside .todo-list
    $(".todo-list").append(syntax);
}

function deleteCheck(e){
    // get button on click
    const item = e.target;

    // delete todo
    if(item.classList[0] === 'delete-btn'){
        const todo = item.parentElement;
        todo.remove();
    }

    // completed todo: toggle new class to show completed
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}


function init(){
    console.log("ToDo app");
    // get some initial data


    //  hook events
    $("#btnSave").click(saveTodo);
    
    $("#txtTodo").keypress(function(e){
            if(e.keyCode === 13){
                saveTodo();
            }
    });

    $('.todo-list').click(deleteCheck);
}

window.onload = init;