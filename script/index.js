const cardsContainer = document.querySelector('.cards');
const btnOpenPopupForm = document.querySelector('#add');
const formCatAdd = document.querySelector('#popup-form-cat');


const popupAddCat = new Popup('popup-add-cats');
popupAddCat.setEventListener();

btnOpenPopupForm.addEventListener('click', () => {
  popupAddCat.open();
});


cats.forEach(function (catData) {
  const cardInstance = new Card(catData, '#card-template');
  const newCardElement = cardInstance.getElement();
  cardsContainer.append(newCardElement);
});

console.log(cardsContainer);
