let addButton = document.getElementById('add-button');
let allTasks = document.getElementById('all-tasks');
let inputText = document.getElementById('input-text');

addButton.onclick = mainFunction;
document.addEventListener('keypress', (event) => {
  let keypressed = event.key;
  if (keypressed == 'Enter') {
    mainFunction();
  }
});
function mainFunction() {
  if (inputText.value != '') {
    allTasks.innerHTML += ` <div class='task' >
 <input type='checkbox' name='check' class='checkbox' />
 <p id='text'>${inputText.value}</p>
 </div>`;
  }

  let checkboxes = document.querySelectorAll('.checkbox');
  console.log(checkboxes);
  for (let i = 0; i < checkboxes.length; i++) {
    let checkbox = checkboxes[i];
    checkbox.onclick = function () {
      if (checkbox.checked) {
        let parent = checkbox.parentNode;
        parent.classList.add('line-through');
      } else {
        let parent = checkbox.parentNode;
        parent.classList.remove('line-through');
      }
    };
  }
}
