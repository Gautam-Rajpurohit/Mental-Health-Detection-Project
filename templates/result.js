// script.js

// Get the HTML elements
const anxietyLevel = document.querySelector('#anxiety');
const stressLevel = document.querySelector('#stress');
const depressionLevel = document.querySelector('#depression');
const workoutPlan = document.querySelector('#workout');
const dietPlan = document.querySelector('#diet');

// Function to update the prediction results
function updatePredictionResults(anxiety, stress, depression, workout, diet) {
    anxietyLevel.textContent = anxiety;
    stressLevel.textContent = stress;
    depressionLevel.textContent = depression;
    workoutPlan.textContent = workout;
    dietPlan.textContent = diet;
}

// Function to handle the back button click
function handleBackButtonClick() {
    window.location.href = '/';
}

// Add event listener to the back button
document.querySelector('.back-button').addEventListener('click', handleBackButtonClick);

// Update the HTML to include the container class
document.body.innerHTML = `
    <div class="container">
        ${document.body.innerHTML}
    </div>
`;

// Update the HTML to include the id attributes
document.querySelector('p:nth-child(2)').innerHTML = `
    <strong>Anxiety Level:</strong> <span id="anxiety">{{ anxiety }}</span>
`;
document.querySelector('p:nth-child(3)').innerHTML = `
    <strong>Stress Level:</strong> <span id="stress">{{ stress }}</span>
`;
document.querySelector('p:nth-child(4)').innerHTML = `
    <strong>Depression Level:</strong> <span id="depression">{{ depression }}</span>
`;
document.querySelector('p:nth-child(6)').innerHTML = `
    <strong>Workout Plan:</strong> <span id="workout">{{ workout }}</span>
`;
document.querySelector('p:nth-child(7)').innerHTML = `
    <strong>Diet Plan:</strong> <span id="diet">{{ diet }}</span>
`;

// Update the HTML to include the back button class
document.querySelector('a').className = 'back-button';