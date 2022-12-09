var formElement = document.querySelector("#todoForm");
var todoInputElement = document.querySelector(".todoInput");
var todoList = [];

function getData(form) {
    let formData = new FormData(form);
    
    // iterate through entries...
    for (var pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }
    
    // ...or output as an object
    let todo = Object.fromEntries(formData)
    todoList.splice(todoList.length, 1, todo);
  }
//let deletebutton = createButton('delete');
//createButton(e => )
  function createElement(tag, tagInnerHTML=""){
    let elementName = tag;
    return function(eventName, eventFunc, hasEvent ="", attribute={}){
            let element =  document.createElement(elementName);
            tagInnerHTML ? element.innerHTML = tagInnerHTML: "";
            attribute ? element.setAttribute(attribute.attribute, attribute.value):{};
            if(hasEvent == 'noEvent'){
                return element;
            }else{
                element.addEventListener(eventName, eventFunc);
            }
        return element;
    }
  }

    formElement.addEventListener("submit", (e) => {
        e.preventDefault();
        getData(e.target);
        let todoElement= document.createElement('li');
        todoElement.setAttribute("class", "todo-li");
        todoList.map((todo, i) => {
            let delButton = createElement('button', 'Delete');
            let completeBtn = createElement('button', 'Done');
            let todoFrag = document.querySelector("#todo-ul").appendChild(todoElement);
            todoFrag.innerHTML = todo.todo;
            todoElement.appendChild(delButton('click', e => e.target.parentElement.remove(), 'hasEvent', {attribute:'class', value:'todo-li-button'}));
            todoElement.appendChild(completeBtn('click', e => { 
                todoElement.classList.toggle("done");
            }, 
            'hasEvent', {attribute:'class', value:'todo-li-button'}));
        });

        todoInputElement.value="";
    });

    