function createCard(card){
    let {id} = card;
    let {title} = card;
    let {enterprise} = card;
    let {location} = card;
    let {descrition} = card;
    let {modalities} = card;

    const tagLiCard = document.createElement('li');
    tagLiCard.classList.add('card');

    const tagH3CardTitle = document.createElement('h3');
    tagH3CardTitle.classList.add('card-title');
    tagH3CardTitle.innerText = `${title}`;

    const tagDivCardCompanyCity = document.createElement('div');
    tagDivCardCompanyCity.classList.add('company-city');

    const tagSpanCardCompany = document.createElement('span');
    tagSpanCardCompany.classList.add('card-company');
    tagSpanCardCompany.innerText = `${enterprise}`;

    const tagSpanCardCity = document.createElement('span');
    tagSpanCardCity.classList.add('card-city');
    tagSpanCardCity.innerText = `${location}`;

    const tagPCardDescription = document.createElement('p');
    tagPCardDescription.classList.add('card-description');
    tagPCardDescription.innerText = `${descrition}`;

    const tagDivCardTypeButton = document.createElement('div');
    tagDivCardTypeButton.classList.add('card-type-button')

    const tagButtonCardType = document.createElement('button');
    tagButtonCardType.classList.add('card-type-of-work')
    tagButtonCardType.innerText = `${modalities[0]}`;

    const tagButtonCardApply = document.createElement('button');
    tagButtonCardApply.classList = 'btn-add button-2';
    tagButtonCardApply.setAttribute('id', `${id}`);
    tagButtonCardApply.innerText = "Candidatar";

    tagDivCardTypeButton.append(tagButtonCardType, tagButtonCardApply);
    tagDivCardCompanyCity.append(tagSpanCardCompany, tagSpanCardCity);
    tagLiCard.append(tagH3CardTitle, tagDivCardCompanyCity, tagPCardDescription, tagDivCardTypeButton);

    return tagLiCard;
};

function createApplyedCard(card){
    let {id} = card;
    let {title} = card;
    let {enterprise} = card;
    let {location} = card;

    const tagLiCardSelected = document.createElement('li');
    tagLiCardSelected.classList.add('card-selected');

    const tagDivCardSelectedHeader = document.createElement('div');
    tagDivCardSelectedHeader.classList.add('card-selected-header');

    const tagH3CardSelected = document.createElement('h3');
    tagH3CardSelected.innerText = `${title}`;

    const tagButtonCardSelected = document.createElement('button');
    tagButtonCardSelected.classList = 'btn-trash-del trash-button';
    tagButtonCardSelected.setAttribute('id', `${id}`);

    const tagDivCardSelectedCompanyCity = document.createElement('div');

    const tagSpanCardSelectedCompany = document.createElement('span');
    tagSpanCardSelectedCompany.innerText = `${enterprise}`;

    const tagSpanCardSelectedCity = document.createElement('span');
    tagSpanCardSelectedCity.innerText = `${location}`;

    tagDivCardSelectedCompanyCity.append(tagSpanCardSelectedCompany, tagSpanCardSelectedCity);
    tagDivCardSelectedHeader.append(tagH3CardSelected, tagButtonCardSelected);

    tagLiCardSelected.append(tagDivCardSelectedHeader, tagDivCardSelectedCompanyCity);

    return tagLiCardSelected;
};





