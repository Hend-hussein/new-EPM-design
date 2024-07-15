const accordionItems = document.querySelectorAll('.accordion-item');
for (const item of accordionItems) {
  item.addEventListener('click', (e) => {
    if (!e.target.classList.contains('accordion-collapse-btn')) {
      return;
    }
    const actor = e.currentTarget;
    const accordion = actor.parentElement;
    const actorNumber = +actor.dataset.itemNumber;
    const otherItems = accordion.querySelectorAll('.accordion-item');
    if(actor.classList.contains('show')){
      actor.classList.add('close');
      for (const otherItem of otherItems) {
        otherItem.classList.remove('show', 'close');
        if (+otherItem.dataset.itemNumber === 1) {
          otherItem.classList.add('close');
        }
        if (+otherItem.dataset.itemNumber === 0) {
          otherItem.classList.add('show');
          actor.classList.remove('close');
        }
      }
      return;
    }
    actor.classList.add('show');
    actor.classList.remove('close');
    for (const otherItem of otherItems) {
      if (otherItem !== actor) {
        otherItem.classList.remove('show', 'close');
        let otherItemNumber = +otherItem.dataset.itemNumber;
        if (otherItemNumber - actorNumber ===  1) {
          otherItem.classList.add('close')
        }
      }
    }
  })
}