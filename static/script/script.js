document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll('.form-section');
  const nextButtons = document.querySelectorAll('.next');
  const prevButtons = document.querySelectorAll('.prev');
  const form = document.getElementById("multi-step-form");
  let currentSection = 0;

  function showSection(index) {
      sections.forEach((section, i) => {
          section.classList.remove('active');
          if (i === index) {
              section.classList.add('active');
          }
      });
  }

  nextButtons.forEach(button => {
      button.addEventListener('click', () => {
          if (currentSection < sections.length - 1) {
              currentSection++;
              showSection(currentSection);
          }
      });
  });

  prevButtons.forEach(button => {
      button.addEventListener('click', () => {
          if (currentSection > 0) {
              currentSection--;
              showSection(currentSection);
          }
      });
  });

  // Form submission validation for radio buttons
  form.addEventListener("submit", function (event) {
      let error = document.getElementById("form-error");
      let allFieldsValid = true; // Assume all fields are valid initially

      // Validate text inputs
      const requiredTextFields = form.querySelectorAll("input[required]:not([type='radio'])");
      requiredTextFields.forEach(field => {
          if (field.value === "") {
              allFieldsValid = false;
              error.style.display = "block";
              error.textContent = "Please fill out all required fields.";
          }
      });

      // Validate radio button groups by 'name' attribute
      const radioGroups = ['anxiety1', 'anxiety2', 'anxiety3', 'anxiety4', 'anxiety5', 'anxiety6', 'anxiety7', 
        'stress1', 'stress2', 'stress3', 'stress4', 'stress5', 'stress6', 'stress7', 'stress8', 'stress9', 'stress10', 
        'depression1', 'depression2', 'depression3', 'depression4', 'depression5', 'depression6', 'depression7', 'depression8', 'depression9']; // Add all your radio group names here
      radioGroups.forEach(groupName => {
          const checkedRadio = form.querySelector(`input[name="${groupName}"]:checked`);
          if (!checkedRadio) {
              allFieldsValid = false;
              error.style.display = "block";
              error.textContent = "Please select an option for all required questions.";
          }
      });

      if (!allFieldsValid) {
          event.preventDefault(); // Prevent form submission if validation fails
      } else {
          error.style.display = "none";
      }
  });

  showSection(currentSection); 
});
