const sliderBtns = document.querySelectorAll('.btn-slide');

for (const btnSlide of sliderBtns) {
  btnSlide.addEventListener('click', (e) =>{
    const actor = e.currentTarget;
    const targetSlideId = actor.dataset.targetId;
    const slideDir = actor.dataset.slideDir;
    const targetSlide = document.getElementById(targetSlideId);
    const card = targetSlide.querySelector('.card');
    const cardWidth = +card.offsetWidth + parseInt(getComputedStyle(card).marginRight);
    targetSlide.scrollBy({left: slideDir === 'next'? cardWidth : -cardWidth, behavior:'smooth'});
  })
}
