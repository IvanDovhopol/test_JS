'use strict';

var btnRef = document.querySelector('.btn');
var btnYesRef = document.querySelector('.btn.left');
btnRef.addEventListener('mouseover', randomPositionBtnOnHover);
btnYesRef.addEventListener('click', onOpenModalWindow);
var instance = '';

function randomPositionBtnOnHover(e) {
  var btn = e.target;
  btnRef.style.top = ''.concat(
    Math.floor(Math.random() * (window.innerHeight - btn.clientHeight)),
    'px',
  );
  btnRef.style.left = ''.concat(
    Math.floor(Math.random() * (window.innerWidth - btn.clientWidth)),
    'px',
  );
  randomColor();
}

function onOpenModalWindow(e) {
  instance = basicLightbox.create(
    '\n    <div class="modal">\n        <p style="color: #fff">\n            \u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u0432\u0430\u0448 \u043E\u0442\u0437\u044B\u0432\n&#128077;\n        </p>\n    </div>\n',
  );
  instance.show();
  onCloseModalWindowKey(e);
  window.addEventListener('keydown', onCloseModalWindowKey);
}

function randomColor() {
  var randomHexColor = '#'.concat(
    Math.floor(Math.random() * 16777215).toString(16),
  );
  btnRef.style.backgroundColor = randomHexColor;
}

function onCloseModalWindowKey(e) {
  if (e.code === 'Escape') {
    instance.close();
  }
}
