let btn = document.querySelector("button");
console.dir(btn);
btn.addEventListener("click",function(e)
{
    addElement();
});

function  addElement()
{
      let input = document.querySelector("input");
      let inputValue=input.value;
     

     let listElement = document.createElement("li");
     listElement.innerText = inputValue;
     let inputCheckbox = document.createElement("input");
     inputCheckbox.setAttribute("type","checkbox");
     listElement.prepend(inputCheckbox);
     listElement.addEventListener("click", function()
     { 
        this.remove();
     });
     let list = document.querySelector("ul");
     list.prepend(listElement);
}