// GET DATA FROM URL
function getData(){ 
    axios.get("https://api.vschool.io/juanaviles6/todo")
        .then(res => listData(res.data))
        .catch(err => console.log(err))
} 

// LIST DATA
function listData(data){ 
    clearList() // LOOP THROUGH EACH DATA
        for (let i = 0; i < data.length; i++) { 
            // CREATE CHECKBOX
            const checkbox = document.createElement('input')
           checkbox.setAttribute("type", "checkbox")
            
           if (data[i].completed === true) {
            checkbox.checked = "checked"
            checkbox.addEventListener("change", function() {
                axios.put("https://api.vschool.io/juanaviles6/todo/" + data[i]._id, {completed: false})
                .then (res => getData())
                .catch (err => console.log(err))
            })
        } else {
            checkbox.addEventListener("change", function() {
                axios.put("https://api.vschool.io/juanaviles6/todo/" + data[i]._id, {completed: true})
                .then (res => getData())
                .catch (err => console.log(err))
            })
        }
        // CREATING NEW ELEMENTS
            const h1 = document.createElement('h1') 
            h1.textContent = "item: " + data[i].title

            const price = document.createElement('h3')
            price.textContent = "price: " + data[i].price 
            
            const img = document.createElement('img')
            img.src = data[i].imgUrl
           
            const h3 = document.createElement('h3')
            h3.textContent = "description: " + data[i].description 
            // CREATING A LINE TO SEPERATE THE ITEMS
            const hr = document.createElement('hr')
            hr.textContent = data[i].hr

            // IF DATA COMPLETEED = TRUE // ADD LINE-THROUGH
            if(data[i].completed === true) { 
                h1.style.setProperty("text-decoration", "line-through")
                h3.style.setProperty("text-decoration", "line-through")
                price.style.setProperty("text-decoration", "line-through")
                h1.style.setProperty("color", "red")
                h3.style.setProperty("color", "red")
                price.style.setProperty("color", "red")
            }
            // DELETE BUTTON 
            const delButton = document.createElement('button')
            delButton.textContent = "delete"
            delButton.setAttribute("id", "deleteButton")
            // ADDING EVENT TO CLICK 
            delButton.addEventListener("click", function() { 
                axios.delete("https://api.vschool.io/juanaviles6/todo/" + data[i]._id)
                .then(res => getData())
                .catch(err => console.log(err))
            })
            // APPEND TO THE DOME                                         
            document.getElementById('todo-list').appendChild(checkbox)
            document.getElementById('todo-list').appendChild(h1)
            document.getElementById('todo-list').appendChild(price)
            document.getElementById('todo-list').appendChild(img)
            document.getElementById('todo-list').appendChild(h3)
            document.getElementById('todo-list').appendChild(delButton)
            document.getElementById('todo-list').appendChild(hr)
        }
    }
          // CLEAR LIST FUNCTION 
function clearList(){ 
    const el = document.getElementById('todo-list')
        while(el.firstChild) { 
            el.removeChild(el.firstChild)
        }
} 

getData() 

// form for the post request 
const todoForm = document.todoForm
// PREVENTING HAVING TO REFRESH 
todoForm.addEventListener("submit", function(e){ 
    e.preventDefault()

// NEW TODOS
    const newTodo = { 
        title: todoForm.title.value, 
        imgUrl: todoForm.imgURL.value, 
        price: todoForm.price.value, 
        description: todoForm.desc.value
    }
// 
    todoForm.title.value = ""
    todoForm.imgURL.value = ""
    todoForm.price.value = ""
    todoForm.desc.value = ""
// POST NEW TODO TO THE URL
    axios.post("https://api.vschool.io/juanaviles6/todo", newTodo)
        .then(res => getData())
        .catch(err => console.log(err))
})