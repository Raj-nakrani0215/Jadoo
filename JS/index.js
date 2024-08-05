function showDiv(index) {
    const contents = document.querySelectorAll('.content');
    contents.forEach((content, i) => {
        content.classList.remove('active');
        content.classList.add('hidden');
    });
    const activeContent = document.getElementById(`content${index}`);
    activeContent.classList.remove('hidden');
    activeContent.classList.add('active');
}


function openNav() {
    document.getElementById("mySidebar").style.display = "block";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.display = "none";
  }

// const card1 = document.getElementById('card1');
// const card2 = document.getElementById('card2');
// const upArrow = document.getElementById('upArrow');
// const downArrow = document.getElementById('downArrow');

// upArrow.addEventListener('click', () => {
//     swapCards();
// });

// downArrow.addEventListener('click', () => {
//     swapCards();
// });

// card1.style.position = 'relative';
// card2.style.position = 'absolute';
// card2.style.left = '-5px';
// card2.style.top = '-5px';
// card1.style.left = '40px';
// card1.style.top = '60px';

// function swapCards() {
//     const cardContainer = card1.parentNode;
//     cardContainer.insertBefore(card2, card1.nextSibling);

// }

const upArrow = document.getElementById('upArrow');
const downArrow = document.getElementById('downArrow');
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const arrowUp =document.getElementById('upArrow');
const arrowDown =document.getElementById('downArrow');

upArrow.addEventListener('click', () => {
    card1.style.zIndex = '2';
    card1.style.opacity = '1';
    card1.style.transform = 'translate(0, 0)';
    card2.style.zIndex = '1';
    card2.style.opacity = '0.5';
    card2.style.transform = 'translate(50px, 50px)';
    upArrow.style.color = 'gray';
    downArrow.style.color = 'black';
    
});

downArrow.addEventListener('click', () => {
    card1.style.zIndex = '1';
    card1.style.opacity = '0.5';
    card1.style.transform = 'translate(50px, 50px)';
    card2.style.zIndex = '2';
    card2.style.opacity = '1';
    card2.style.transform = 'translate(0, 0)';
    downArrow.style.color = 'gray';
    upArrow.style.color = 'black';
});
