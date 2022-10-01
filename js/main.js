let elForm = document.querySelector('.js-form')
let elBox = document.querySelector('.diaz-box')
let elInp1 = document.querySelector('.js-inp1')
let elInp2 = document.querySelector('.js-inp2')
let elInp3 = document.querySelector('.js-inp3')


elForm.addEventListener('submit', function(evt){
   evt.preventDefault()
   let array = [
      {
         name: elInp1.value,
         relationship: elInp2.value,
         number: elInp3.value
      }
   ]

   array.forEach(function(arr){
      newTitle = document.createElement("h2")
      newText = document.createElement("h3")
      newTell = document.createElement("a")
   
   
      newTitle.textContent = arr.name;
      newText.textContent = arr.relationship;
      newTell.textContent = arr.number;
      newTell.href = `tel:${elInp3.value}`;
      

      
      elBox.appendChild(newTitle)
      elBox.appendChild(newText)
      elBox.appendChild(newTell)   
   })
})