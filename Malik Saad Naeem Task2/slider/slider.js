

let current = 0;

const child = document.querySelectorAll(".child");

child.forEach((child, index) => {
 
  child.innerText = index + 1;
  child.style.transform = `translateX(${index * 100}%)`;

  if (index === 0) {
  
    child.style.backgroundImage = 'url("https://images.unsplash.com/photo-1573167101669-476636b96cea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN1Y2Nlc3N8ZW58MHx8MHx8fDA%3D")';
  } else if (index == 1) {
    child.style.backgroundImage = 'url("https://plus.unsplash.com/premium_photo-1664300974534-2c2aa07e4e3d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VjY2VzcyUyMGNvbnN0cnVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D")';
  } else if (index == 2) {
    child.style.backgroundImage = 'url("https://media.istockphoto.com/id/981344368/photo/silhouette-of-engineer-and-construction-team-working-at-site-over-blurred-background-sunset.webp?b=1&s=612x612&w=0&k=20&c=JbFnpfrXt_af1SjcQVctaV_RZ-O0opf-OLf9Jwevw5E=")';
  } else if (index == 3) {
    child.style.backgroundImage = 'url("https://media.istockphoto.com/id/981339754/photo/silhouette-of-engineer-and-construction-team-working-at-site-over-blurred-background-sunset.webp?b=1&s=612x612&w=0&k=20&c=5TNaaHXK4HaMg81FWc85KtnyvAGbbjU4VJc_EYyfAcg=")';
  } else if (index == 4) {
    child.style.backgroundImage = 'url("https://media.istockphoto.com/id/1057484742/photo/young-happy-worker-and-manager-giving-each-other-manly-greet-at-steel-mill.webp?b=1&s=612x612&w=0&k=20&c=AgSOKqi4UG93ZzA3dEvm2j16XVL1qYXrU9EEFYw21AQ=")';
  }
});
const moveSlide = () => {
   
    if(current===4){
        current=0;
    }
    else if(current==-1){
        current=3;
    }
  child.forEach((child, index) => {
    child.animate([{
      transform:`translateX(${index * 100 - current * 100}%)`
    }],{
       duration: 500,
       fill: 'forwards'
    })

  });
};

const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");

increment.addEventListener("click", () => {
  current++;
  moveSlide();
});

decrement.addEventListener("click", () => {
  current--;
  moveSlide();
});

