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
    listRefresh();
};

function showApplyedCards(array, htmlReference){
    array.forEach(card => {
        let cardApplyedToShow = card;
        let cardApplyedReady = createApplyedCard(cardApplyedToShow);
        htmlReference.appendChild(cardApplyedReady);
        
    });
};

function listRefresh(){
  if (applyList.length > 0){
    noCardsSelected.classList.add('hide');
    noCardsSelected.classList.remove('show');
    showApplyedCards(applyList, tagUlCardsSelected);
    jobAlreadyApplyed();
    removeTrashButton();
  }else{
    noCardsSelected.classList.remove('hide');
    noCardsSelected.classList.add('show');
  };
};

function getDataFromLocalstorage(){
  const localStorageDataJSON = localStorage.getItem('jobList');
  if (localStorageDataJSON){
      const localStorageData = JSON.parse(localStorageDataJSON);
      applyList = [...localStorageData];
      listRefresh();
  };
};

function addAndRemoveFromList(){
  const applyButton = document.querySelectorAll('.btn-add');
  applyButton.forEach((button) => {
    button.addEventListener('click', (event) => {
      if (event.target.innerText === "Candidatar"){
        let jobToShow = jobsData.find((job) => job.id == event.target.id);
        event.target.innerText = "Remover candidatura";
        applyList = [...applyList, jobToShow];
        tagUlCardsSelected.innerHTML = "";
        listRefresh();
        jobAlreadyApplyed();
        removeTrashButton();

        const arrayJson = JSON.stringify(applyList);
        localStorage.setItem("jobList", arrayJson);

      }else{
        let newList = applyList.filter((job) => job.id != event.target.id);
        event.target.innerText = "Candidatar";
        applyList = [...newList];
        tagUlCardsSelected.innerHTML = "";
        listRefresh();
        jobAlreadyApplyed()
        removeTrashButton()

        const arrayJson2 = JSON.stringify(applyList);
        localStorage.setItem("jobList", arrayJson2);

      };
    });
  });
};

function jobAlreadyApplyed(){
  const btnAdd = document.querySelectorAll('.btn-add');
  btnAdd.forEach((btn) => {
    let jobOnList = applyList.findIndex(element => element.id == btn.id);
    if (jobOnList < 0){
      btn.innerText = "Candidatar";
    }else{
      btn.innerText = "Remover candidatura";
    };
  });
};

function removeTrashButton(){
  if (applyList.length > 0){
    const trashButton = document.querySelectorAll('.btn-trash-del');
    trashButton.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        let newList = applyList.filter((job) => job.id != event.target.id);
        applyList = [...newList];
        tagUlCardsSelected.innerHTML = "";
        listRefresh();
        jobAlreadyApplyed();

        const arrayJson3 = JSON.stringify(applyList);
        localStorage.setItem("jobList", arrayJson3);

      });
    });
  };
};

showCards(jobsData, tagUlCards);

showApplyedCards(applyList, tagUlCardsSelected)

listRefresh();

addAndRemoveFromList();

getDataFromLocalstorage();

jobAlreadyApplyed();

removeTrashButton();