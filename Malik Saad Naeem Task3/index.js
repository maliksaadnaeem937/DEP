const trustedBy=document.querySelectorAll('.trusted-by');

trustedBy.forEach((trusted,index)=>{

    trusted.style.transform=`translate(${index*100}%)`;
    trusted.style.backgroundColor='red';
    trusted.style.border="2px solid yellow"


})

const form=document.querySelector('.form');
const submitForm=document.querySelector('submit-register')
const closeRegistrationForm=document.querySelector('.cancel-btn');
const registerButton=document.querySelector('.register-button');
const formContainer=document.querySelector('.form-container');
const body=document.getElementsByTagName('body')[0];

registerButton.addEventListener('click',()=>{
    formContainer.style.display='flex';
    body.style.overflow='hidden';

})


closeRegistrationForm.addEventListener('click',()=>{
    formContainer.style.display='none';
    body.style.overflow='auto';
})


form.addEventListener('submit',(event)=>{
    event.preventDefault();

})






// accordion js 



const data = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a range of construction services including residential, commercial, and industrial projects. Our services include remodeling, new construction, and project management.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We primarily serve the metropolitan area and surrounding regions. Please contact us to check if we cover your specific location.",
    },
    {
      question: "How do I get a quote?",
      answer:
        "You can request a quote by filling out the contact form on our website or calling us directly. We will schedule a consultation to discuss your project and provide a detailed estimate.",
    },
    {
      question: "What is your project timeline?",
      answer:
        "Project timelines vary based on the scope and complexity of the project. We will provide a detailed timeline during the consultation and keep you updated throughout the construction process.",
    },
    {
      question: "Do you offer financing options?",
      answer:
        "Yes, we offer various financing options to help make your project more affordable. Our team can provide more information on available plans during your consultation.",
    },
    {
      question: "Are you licensed and insured?",
      answer:
        "Yes, we are fully licensed and insured. We adhere to all industry standards and regulations to ensure the quality and safety of our work.",
    },
  ];
  
  const accordionContainer = document.querySelector(".accordion-row");
  
  accordionContainer.innerHTML = "";
  
  data.forEach((data, index) => {
    accordionContainer.innerHTML =
      accordionContainer.innerHTML +
      ` <div class="content col-12 col-sm-8  mx-auto">
      <button class=" accordian-btn btn btn-danger w-100">${data.question}</button>
  
      <p class="text-container display-block text-light text-justify">
       ${data.answer}
      </p>
    </div>`;
  });
  
  const accordionButton = document.querySelectorAll(".accordian-btn");
  
  accordionButton.forEach((button, index) => {
    button.addEventListener("click", () => {
      console.log("clicked", index);
      const textContainers = document.querySelectorAll(".text-container");
      console.log(textContainers);
  
      if (textContainers[index].classList.contains("display-block")) {
        textContainers[index].classList.add("display-none");
        textContainers[index].classList.remove("display-block");
        return;
      }
      textContainers[index].classList.remove("display-none");
      textContainers[index].classList.add("display-block");
    });
  });
  