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

/* #region getstarted MW */
(() => {
  const modal = document.querySelector('[data-modal="getstarted"]');
  if (!modal) return;

  const openBtns = document.querySelectorAll('[data-modal-open="getstarted"]');
  const closeBtns = document.querySelectorAll(
    '[data-modal-close="getstarted"]'
  );

  openBtns.forEach((btn) => btn.addEventListener("click", toggleModal));
  closeBtns.forEach((btn) => btn.addEventListener("click", toggleModal));

  function toggleModal() {
    modal.classList.toggle("is-open");
  }
})();
/* #endregion */
