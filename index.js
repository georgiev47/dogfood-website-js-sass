let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("slider-card");

  for (i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains('c1')) { slides[i].classList.remove('c1'); slides[i].classList.add('c2'); }
    else if (slides[i].classList.contains('c2')) { slides[i].classList.remove('c2'); slides[i].classList.add('c3'); }
    else if (slides[i].classList.contains('c3')) { slides[i].classList.remove('c3'); slides[i].classList.add('c4'); }
    else if (slides[i].classList.contains('c4')) { slides[i].classList.remove('c4'); slides[i].classList.add('c1'); }
  }
  
  setTimeout(showSlides, 3000);
}


const aboutSubTitle = document.querySelector('.about-text .sub-title');
const aboutDescription = document.querySelector('.about-text .about-description');

axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
    const id = 6; // for example I take the title and body of item 6
    const post = response.data.filter(item => item.id === id);
    const title = post[0].title;
    const body = post[0].body;

    aboutSubTitle.innerHTML = title;
    aboutDescription.innerHTML = body;
});

