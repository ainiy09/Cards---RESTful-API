class Popup {
    constructor(className) {
      this._className = className;
      this.popup = document.querySelector(`.${className}`);
    }
    open() {
      this.popup.classList.add('popup_active');
    }
    close() {
      this.popup.classList.remove('popup_active');
    }
    setEventListener() {
      console.log(this.popup);
      this.popup.addEventListener('click', (evt) => {
        console.log(evt.target.classList);
        console.log(evt.target.closest('.popup__close'));
        if (
          evt.target.classList.contains(this._className) ||
          !!evt.target.closest('.popup__close')
        ) {
          this.close();
        }
      });
    }
}
  
const popups = new Popup('popup-add-cats');
console.log(popups);
  