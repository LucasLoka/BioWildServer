let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("carousel-slide")[0].getElementsByTagName("img");
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  
  slides[slideIndex-1].style.display = "block";  
  //setTimeout(showSlides, 2000); // Troca de slide a cada 2 segundos
}

document.getElementById('prevBtn').addEventListener('click', () => {
  slideIndex -= 2;
  if (slideIndex < 0) slideIndex = 0;
  showSlides();
});

document.getElementById('nextBtn').addEventListener('click', () => {
  showSlides();
});