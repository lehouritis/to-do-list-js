const btn = document.getElementById("submit-button");
const uL = document.getElementById("tasks");

btn.addEventListener("click", function (event) {
  let task = document.getElementById("to-do-list").value;

  if (task == "") {
    alert("You did not enter any task.Do something!")
  } else {
    var li = document.createElement('li');
    li.innerHTML = `<li class="list-group-item list-group-item-action list-group-item-secondary">${task} 
                    <i class="fas fa-trash"></i> 
                    </li>`
    uL.append(li);
  }

  let remove = li.querySelector('i')
  remove.addEventListener('click', function (e) {
    this.parentNode.parentNode.remove();

    e.preventDefault()
  });

  event.preventDefault();

  document.getElementById("task-form").reset();

});

function toggleClassDoneOnAndOff(event) {
  if (event.target.tagName === "LI") {
      event.target.classList.toggle("done");
  }
}
uL.addEventListener("click", toggleClassDoneOnAndOff);