let elForm = document.querySelector('.js-form')
let elList = document.querySelector('.js-list')
let elInp1 = document.querySelector('.js-inp1')
let elInp2 = document.querySelector('.js-inp2')
let elInp3 = document.querySelector('.js-inp3')

const result = []

let today = ((array, list) => {
   list.innerHTML = ''
   
   array.forEach(function(item){
      newItem = document.createElement("li")
      newTitle = document.createElement("h2")
      newText = document.createElement("h3")
      newTell = document.createElement("a")
      newBtn = document.createElement('button')
      
      
      newTitle.textContent = item.name;
      newText.textContent = item.relationship;
      newTell.textContent = item.number;
      newTell.href = `tel:${elInp3.value}`;
      newBtn.textContent = 'Delete'

      newBtn.setAttribute('class', 'btn btn-danger ms-4 js-btn')
      
      newItem.appendChild(newTitle)
      newItem.appendChild(newText)
      newItem.appendChild(newTell) 
      newItem.appendChild(newBtn) 
      list.appendChild(newItem)

      newBtn.dataset.todoId = item.id
   })
})

elForm.addEventListener('submit', function(evt){
   evt.preventDefault()

   result.push(
      {
         id: result.length,
         name: elInp1.value,
         relationship: elInp2.value,
         number: elInp3.value
      }
   )

   elInp1.value = '';
   elInp2.value = '';
   elInp3.value = '';

   today(result, elList)
})

elList.addEventListener('click', function(evt){
   if(evt.target.matches('.js-btn')){
      let todoId = evt.target.dataset.todoId
      let findedIndex = result.findIndex((el) => el.id == todoId)
      result.splice(findedIndex, 1)

      today(result, elList)
   }
})