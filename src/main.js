import Typed from 'typed.js';

const typed = new Typed('#element', {
  strings: ['Web Developer', 'UI/UX Designer', 'Software Engineer', 'DevOps Engineer'],
  typeSpeed: 75,
  loop: true,
  loopCount: Infinity,
});

(function () {
  [...document.querySelectorAll(".control")].forEach(button => {
      button.addEventListener("click", function() {
          document.querySelector(".active-btn").classList.remove("active-btn");
          this.classList.add("active-btn");
          document.querySelector(".active").classList.remove("active");
          document.getElementById(button.dataset.id).classList.add("active");
      })
  });
  
  document.querySelector(".theme-btn").addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
  })
})();

function submitForm(event) {
  event.preventDefault();
  const form = document.getElementById("form");
  if (form.checkValidity()) {
    form.submit();
  } else {
    alert("Please fill out all required fields.");
  }
}

window.submitForm = submitForm;