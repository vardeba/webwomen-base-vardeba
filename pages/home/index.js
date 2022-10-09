const tagUlCards = document.querySelector('.cards');

const tagUlCardsSelected = document.querySelector('.cards-selected');

const noCardsSelected = document.querySelector('.no-cards-selected');

let applyList = [];

function showCards(array, htmlReference){
    array.forEach(card => {
        let cardToShow = card;
        let cardReady = createCard(cardToShow);
        htmlReference.appendChild(cardReady);
        
    });
}

function showApplyedCards(array, htmlReference){
    array.forEach(card => {
        let cardApplyedToShow = card;
        let cardApplyedReady = createApplyedCard(cardApplyedToShow);
        htmlReference.appendChild(cardApplyedReady);
        
    });
}

function listRefresh(){
  if (applyList.length > 0){
    noCardsSelected.classList.add('hide');
    noCardsSelected.classList.remove('show');
    showApplyedCards(applyList, tagUlCardsSelected);
  }else{
    noCardsSelected.classList.remove('hide');
    noCardsSelected.classList.add('show');
  }
}

function applyToJob(){
  const applyButton = document.querySelectorAll('.btn-add');
  console.log(applyButton);
  applyButton.forEach((button) => {
    button.addEventListener('click', (event) => {
      if (event.target.innerText = "Candidatar"){
        let jobToShow = jobsData.find((job) => job.id == event.target.id);
        console.log(jobToShow);
        event.target.innerText = "Remover candidatura";
        event.target.classList.toggle('btn-add');
        event.target.classList.toggle('btn-del');
        applyList.push(jobToShow);
        tagUlCardsSelected.innerHTML = "";
        listRefresh();
        removeFromApplyList();
        const arrayJson = JSON.stringify(applyList);
        localStorage.setItem("jobList", arrayJson);

      }
    })
  })

}

function removeFromApplyList(){
  const removeButton = document.querySelectorAll('.btn-del');
  console.log(removeButton);
  removeButton.forEach((button) => {
    button.addEventListener('click', (event) => {
      if (event.target.innerText = "Remover candidatura"){
        let jobsToRemove = applyList.filter((job) => job.id != event.target.id);
        console.log(jobsToRemove);
        event.target.innerText = "Candidatar";
        event.target.classList.toggle('btn-add');
        event.target.classList.toggle('btn-del');
        applyList = [...jobsToRemove];
        tagUlCardsSelected.innerHTML = "";
        listRefresh();
        const arrayJson2 = JSON.stringify(applyList);
        localStorage.setItem("jobList", arrayJson2);

      }
    })
  })
}

function getDataFromLocalstorage(){
  const localStorageDataJSON = localStorage.getItem('jobList');
  if (localStorageDataJSON){
      const localStorageData = JSON.parse(localStorageDataJSON);
      applyList = [...localStorageData];
      listRefresh();
  }
}

// function applyToJob(){
//   let newApplyList = [];
//   const applyButton = document.querySelectorAll('.button-2');
//   console.log(applyButton);
//   applyButton.forEach((button) => {
//     button.addEventListener('click', (event) => {
//       let jobToShow = jobsData.find((job) => job.id == event.target.id);
//       console.log(jobToShow);
//       event.target.innerText = "Remover candidatura";
//       applyList.push(jobToShow);
//       tagUlCardsSelected.innerHTML = "";
//       listRefresh();
//     })
//   })
// }

function allFunctions(){
  showCards(jobsData, tagUlCards);

  showApplyedCards(applyList, tagUlCardsSelected);
  
  listRefresh();
  
  applyToJob();
  
  removeFromApplyList();

  getDataFromLocalstorage()
}

allFunctions();


























