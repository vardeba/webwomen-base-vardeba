const tagUlCards = document.querySelector('.cards');

const tagUlCardsSelected = document.querySelector('.cards-selected');

let applyList = [
    {
        id: 0,
        title: "Pessoa desenvolvedora front-end - React",
        enterprise: "Kenzie",
        location: "Curitiba",
        descrition:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        modalities: ["Hibrido", "Presencial"],
      },
      {
        id: 1,
        title: "Pessoa desenvolvedora back-end - Node JS",
        enterprise: "Brazilians in Tech",
        location: "Rio de Janeiro",
        descrition:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        modalities: ["Home Office", "Presencial"],
      },
      {
        id: 2,
        title: "Pessoa desenvolvedora Fullstack - Node JS",
        enterprise: "Brazilians in Tech",
        location: "Rio de Janeiro",
        descrition:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        modalities: ["Home Office", "Presencial"],
      },
    
];

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

showCards(jobsData, tagUlCards);

showApplyedCards(applyList, tagUlCardsSelected);























