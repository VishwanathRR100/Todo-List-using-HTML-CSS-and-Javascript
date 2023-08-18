let input = document.getElementById("input")
let button = document.getElementById("add")
let lists = document.getElementById("lists")

let arr = []
window.onload = ()=>{
    arr = JSON.parse(localStorage.getItem('arr')) || []
    arr.forEach(todo => {todolist(todo)})
}

button.addEventListener("click",() => {
    arr.push(input.value) 
    localStorage.setItem('arr',JSON.stringify(arr))
    todolist(input.value)
    input.value = ""
}
)
function todolist(todo){
        let para = document.createElement("p")
        para.innerHTML = todo
        lists.appendChild(para)
    para.addEventListener("click" , () => {
                para.style.textDecoration = "line-through"
                remove(todo)
    })
    para.addEventListener("dblclick" , ()=>{
        lists.removeChild(para)
        remove(todo)
    })
}
function remove(todo){
    let index = arr.indexOf(todo)
    if(index>-1){
        arr.splice(index,1)
    }
    localStorage.setItem('arr', JSON.stringify(arr))
}