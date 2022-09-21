const btnRef = document.querySelector('.btn');
const btnYesRef = document.querySelector('.btn.left');

btnRef.addEventListener('mouseover', randomPositionBtnOnHover);
btnYesRef.addEventListener('click', onOpenModalWindow);

let instance = '';

function randomPositionBtnOnHover(e) {
  const { target: btn } = e;

  btnRef.style.top = `${Math.floor(
    Math.random() * (window.innerHeight - btn.clientHeight),
  )}px`;

  btnRef.style.left = `${Math.floor(
    Math.random() * (window.innerWidth - btn.clientWidth),
  )}px`;

  randomColor();
}

function onOpenModalWindow(e) {
  instance = basicLightbox.create(`
    <div class="modal">
        <p style="color: #fff">
            Спасибо за ваш отзыв
&#128077;
        </p>
    </div>
`);

  instance.show();

  onCloseModalWindowKey(e);

  window.addEventListener('keydown', onCloseModalWindowKey);
}

function randomColor() {
  const randomHexColor = `#${Math.floor(Math.random() * 16777215).toString(
    16,
  )}`;

  btnRef.style.backgroundColor = randomHexColor;
}

function onCloseModalWindowKey(e) {
  if (e.code === 'Escape') {
    instance.close();
  }
}
