const modalToggleBtns = document.querySelectorAll('.modal-toggle');
for (const modalToggleBtn of modalToggleBtns) {
  modalToggleBtn.addEventListener('click', (e) => {
    const actor = e.target;
    const modalTargetId = actor.dataset.modalTarget;
    const modalTarget = document.getElementById(modalTargetId);
    modalTarget.classList.add('show');
  })
  
}

const modals = document.querySelectorAll('.custom-modal');
for (const modal of modals) {
  modal.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
      e.currentTarget.classList.remove('show');
    }
  })
}