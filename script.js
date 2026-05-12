const enterBtn = document.getElementById('enter-btn');

setInterval(updateTimer,1000);
updateTimer();


// FLOATING HEARTS

function createHeart(){

  const heart = document.createElement('div');

  heart.classList.add('heart');

  heart.innerHTML = '❤️';

  heart.style.left = Math.random() * 100 + 'vw';

  heart.style.fontSize = Math.random() * 20 + 10 + 'px';

  heart.style.animationDuration = Math.random() * 5 + 5 + 's';

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  },10000);

}

setInterval(createHeart,500);


// REVEAL MESSAGES

function revealMessage(id){

  const box = document.getElementById('secret-message');

  if(id === 1){
    box.innerHTML = 'No matter how far we are, my heart always finds you ❤️';
  }

  if(id === 2){
    box.innerHTML = 'You are stronger than you think, and I will always stand beside you ❤️';
  }

  if(id === 3){
    box.innerHTML = 'Surprise unlocked: You are my favourite person in the universe 🌍❤️';
  }

}


// SCROLL ANIMATIONS

const faders = document.querySelectorAll('.fade-up');

const appearOptions = {
  threshold:0.3
};

const appearOnScroll = new IntersectionObserver(function(entries,appearOnScroll){

  entries.forEach(entry => {

    if(!entry.isIntersecting){
      return;
    }

    entry.target.classList.add('show');
    appearOnScroll.unobserve(entry.target);

  });

},appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
