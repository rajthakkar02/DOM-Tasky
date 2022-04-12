const taskContainer = document.querySelector(".task_container");
console.log(taskContainer);

let globalstore = [];

const genrateNewCard = (taskdata) =>
  `<div id=${taskdata.id} class="col-md-6 col-lg-4">
      <div class="card">
      <div class="card-header d-flex justify-content-end gap-2">
        <button type="button" class="btn btn-outline-success" id=${taskdata.id} onclick="editcard.apply(this,arguments)" ><i class="fa-solid fa-pen" id=${taskdata.id} onclick="editcard.apply(this,arguments)" ></i></button>
        <button type="button" class="btn btn-outline-danger" id=${taskdata.id} onclick="deletecard.apply(this,arguments)" ><i class="fa-solid fa-trash" id=${taskdata.id} onclick="deletecard.apply(this,arguments)" ></i></button>
      </div>
      <div class="p-3">
        <img src=${taskdata.imageurl} class="card-img-top" alt="Image">
      </div>
      <div class="card-body">
        <h5 class="card-title fw-bold text-primary">${taskdata.tasktitle}</h5>
        <p class="card-text">${taskdata.taskdescription}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    </div>
    `;


const loadIntialData = () => {
      //localstorage to get tasky card data
      const getCardData = localStorage.getItem("Tasky");


    //convert string to normal object
      const {cards} = JSON.parse(getCardData);


 //loop over those array of task obejct to create HTML card , inject it to DOM
      cards.map((cardObject) => {
        taskContainer.insertAdjacentHTML("beforeend",genrateNewCard(cardObject));


 //update our globalStore
        globalstore.push(cardObject);

      })
    };


    //Delete function
    const deletecard = (event) => {
      event = window.event;
      const targetID = event.target.id;
      const tagname = event.target.tagName;

      globalstore = globalstore.filter((cardObject) => cardObject.id !== targetID);
      localStorage.setItem("Tasky",JSON.stringify({cards: globalstore}));

      if(tagname === "BUTTON")
      {
        return taskContainer.removeChild(event.target.parentNode.parentNode.parentNode);
      }else{
        return taskContainer.removeChild(event.target.parentNode.parentNode.parentNode.parentNode);
      }
    };

//Edit function
const editcard = (event) => {
  event = window.event;
  const targetID = event.taget.id;
  const tagname = event.target.tagName;

  globalstore = globalstore.filter((cardObject) => cardObject.id !== targetID);
  localStorage = setItem("Tasky",JSON.stringify({cards : globalstore}));


  if(tagname === "BUTTON")
  {
    return taskContainer.contentEditable();
  }
  else {
    return taskContainer.contentEditable();
  }
}


const saveChanges = () => {
  const taskdata = {
    id: `${Date.now()}`,
    imageurl:document.getElementById("imageurl").value,
    tasktitle:document.getElementById("tasktitle").value,
    tasktype:document.getElementById("tasktype").value,
    taskdescription:document.getElementById("taskdescription").value,
  };
  taskContainer.insertAdjacentHTML("beforeend",genrateNewCard(taskdata));

  globalstore.push(taskdata);

  localStorage.setItem("Tasky",JSON.stringify({cards : globalstore}));

};
