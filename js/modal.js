// /* #region SignIn MW */
// (() => {
//   const refs = {
//     // Додати атрибут data-modal-open на кнопку відкриття
//     openModalBtn: document.querySelector('[data-modal-open="login"]'),
//     // Додати атрибут data-modal-close на кнопку закриття
//     closeModalBtn: document.querySelector('[data-modal-close="login"]'),
//     // Додати атрибут data-modal на бекдроп модалки
//     modal: document.querySelector('[data-modal="login"]'),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
//     refs.modal.classList.toggle("is-open");
//   }
// })();
// /* #endregion */

/* #region SignIn MW */
(() => {
  const modal = document.querySelector('[data-modal="login"]');
  if (!modal) return;

  const openBtns = document.querySelectorAll('[data-modal-open="login"]');
  const closeBtns = document.querySelectorAll('[data-modal-close="login"]');

  openBtns.forEach((btn) => btn.addEventListener("click", toggleModal));
  closeBtns.forEach((btn) => btn.addEventListener("click", toggleModal));

  function toggleModal() {
    modal.classList.toggle("is-open");
  }
})();
/* #endregion */

// /* #region SignUp MW */
// (() => {
//   const refs = {
//     // Додати атрибут data-modal-open на кнопку відкриття
//     openModalBtn: document.querySelector('[data-modal-open="signup"]'),
//     // Додати атрибут data-modal-close на кнопку закриття
//     closeModalBtn: document.querySelector('[data-modal-close="signup"]'),
//     // Додати атрибут data-modal на бекдроп модалки
//     modal: document.querySelector('[data-modal="signup"]'),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
//     refs.modal.classList.toggle("is-open");
//   }
// })();
// /* #endregion */

/* #region SignUp MW */
(() => {
  const modal = document.querySelector('[data-modal="signup"]');
  if (!modal) return;

  const openBtns = document.querySelectorAll('[data-modal-open="signup"]');
  const closeBtns = document.querySelectorAll('[data-modal-close="signup"]');

  openBtns.forEach((btn) => btn.addEventListener("click", toggleModal));
  closeBtns.forEach((btn) => btn.addEventListener("click", toggleModal));

  function toggleModal() {
    modal.classList.toggle("is-open");
  }
})();
/* #endregion */

// /* #region Process MW */
// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-open="process"]'),
//     closeModalBtn: document.querySelector('[data-modal-close="process"]'),
//     modal: document.querySelector('[data-modal="process"]'),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle("is-open");
//   }
// })();
// /* #endregion */

/* #region Process MW */
(() => {
  const modal = document.querySelector('[data-modal="process"]');
  if (!modal) return;

  const openBtns = document.querySelectorAll('[data-modal-open="process"]');
  const closeBtns = document.querySelectorAll('[data-modal-close="process"]');

  openBtns.forEach((btn) => btn.addEventListener("click", toggleModal));
  closeBtns.forEach((btn) => btn.addEventListener("click", toggleModal));

  function toggleModal() {
    modal.classList.toggle("is-open");
  }
})();
/* #endregion */
