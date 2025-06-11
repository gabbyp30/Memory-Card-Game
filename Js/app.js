const colImages = document.querySelectorAll(".card-front")
console.log(colImages)
const img = document.querySelectorAll('#front-card')
console.log(img)

let count = 0;

img[0].addEventListener('click', () => {
  console.log('Button was clicked!');
  console.log(colImages[0]);
  colImages[0].classList.add("card-inner");
  img[0].setAttribute("src", "./Images/babyE.jpg")
});


img[1].addEventListener('click' ,() => 
{
    console.log('Button was clicked!');
    console.log(colImages[1]);
    colImages[1].classList.add("card-inner");
    img[1].setAttribute("src", "./Images/babyA.jpg")
} );

img[2].addEventListener('click', () => {
    console.log('Button was clicked!');
    console.log(colImages[2]);
    colImages[2].classList.add("card-inner");
    img[2].setAttribute("src", "./Images/pizza.jpg")
  });
  
  
  img[3].addEventListener('click' ,() => 
  {
      console.log('Button was clicked!')
      console.log(colImages[3]);
      colImages[3].classList.add("card-inner");
      img[3].setAttribute("src", "./Images/black.jpg")

  } )

  img[4].addEventListener('click', () => {
    console.log('Button was clicked!');
    console.log(colImages[4]);
    colImages[4].classList.add("card-inner");
    img[4].setAttribute("src", "./Images/babyA.jpg")
  });
  
  
  img[5].addEventListener('click' ,() => 
  {
      console.log('Button was clicked!')
      console.log(colImages[5]);
      colImages[5].classList.add("card-inner");
      img[5].setAttribute("src", "./Images/black.jpg")
  } )

  img[6].addEventListener('click', () => {
    console.log('Button was clicked!');
    console.log(colImages[6]);
    colImages[6].classList.add("card-inner");
    img[6].setAttribute("src", "./Images/babyE.jpg")
  });
  
  
  img[7].addEventListener('click' ,() => 
  {
      console.log('Button was clicked!')
      console.log(colImages[7]);
      colImages[7].classList.add("card-inner");
      img[7].setAttribute("src", "./Images/pizza.jpg")
  } )

