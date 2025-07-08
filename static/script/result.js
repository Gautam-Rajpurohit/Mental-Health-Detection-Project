// Get the circle elements for anxiety, stress, and depression
let anxietyOuterCircle = document.querySelector(".circle1");
let anxietyInnerCircle = document.querySelector(".circle1 .inner-circle1");
let stressOuterCircle = document.querySelector(".circle2");
let stressInnerCircle = document.querySelector(".circle2 .inner-circle2");
let depressionOuterCircle = document.querySelector(".circle3");
let depressionInnerCircle = document.querySelector(".circle3 .inner-circle3");

// Function to change the circle color based on labels
function changeCircleColor(label, outerCircle, innerCircle) {
    // Map the labels to colors
    let outerColor = 'lightgrey';  // Default color
    let innerColor = 'lightgrey';  // Default color
    switch (label) {
        // Anxiety Labels
        case 'Mild Anxiety':
            outerColor = '#FADFA1';  // Mild anxiety (yellow)
            innerColor = '#F7DC6F';  // Mild anxiety (light yellow)
            break;
        case 'Minimal Anxiety':
            outerColor = '#7EACB5';  // Minimal anxiety (calming blue)
            innerColor = '#87CEEB';  // Minimal anxiety (light blue)
            break;
        case 'Moderate Anxiety':
            outerColor = '#C96868';  // Moderate anxiety (alert red)
            innerColor = '#FFC080';  // Moderate anxiety (light orange)
            break;
        case 'Severe Anxiety':
            outerColor = '#f50a0a';  // Severe anxiety (stronger alert red)
            innerColor = '#FF3737';  // Severe anxiety (stronger light red)
            break;
        
        // Stress Labels
        case 'High Perceived Stress':
            outerColor = '#C96868';  // High stress (alert red)
            innerColor = '#FFC080';  // High stress (light orange)
            break;
        case 'Low Stress':
            outerColor = '#7EACB5';  // Low stress (calming blue)
            innerColor = '#87CEEB';  // Low stress (light blue)
            break;
        case 'Moderate Stress':
            outerColor = '#f50a0a';  // Severe depression (stronger alert red)
            innerColor = '#FF3737';  // Severe depression (stronger light red)
            break;
        
        // Depression Labels
        case 'Mild Depression':
            outerColor = '#FADFA1';  // Mild depression (neutral yellow)
            innerColor = '#F7DC6F';  // Mild depression (light yellow)
            break;
        case 'Minimal Depression':
            outerColor = '#7EACB5';  // Minimal depression (calming blue)
            innerColor = '#87CEEB';  // Minimal depression (light blue)
            break;
        case 'Moderate Depression':
            outerColor = '#C96868';  // Moderate depression (alert red)
            innerColor = '#FFC080';  // Moderate depression (light orange)
            break;
        case 'Moderately Severe Depression':
            outerColor = '#C96868';  // Moderately severe (alert red)
            innerColor = '#FFC080';  // Moderately severe (light orange)
            break;
        case 'No Depression':
            outerColor = '#7EACB5';  // No depression (calming blue)
            innerColor = '#87CEEB';  // No depression (light blue)
            break;
        case 'Severe Depression':
            outerColor = '#f50a0a';  // Severe depression (stronger alert red)
            innerColor = '#FF3737';  // Severe depression (stronger light red)
            break;
    }
    outerCircle.style.backgroundColor = outerColor;
    innerCircle.style.backgroundColor = innerColor;
}


let anxietyLabel = document.querySelector(".circle1 .content p").textContent;
let stressLabel = document.querySelector(".circle2 .content p").textContent;
let depressionLabel = document.querySelector(".circle3 .content p").textContent;

changeCircleColor(anxietyLabel, anxietyOuterCircle, anxietyInnerCircle);
changeCircleColor(stressLabel, stressOuterCircle, stressInnerCircle);
changeCircleColor(depressionLabel, depressionOuterCircle, depressionInnerCircle);

// Back button alert message
document.querySelector(".back-button").addEventListener("click", function (event) {
    alert("You are being redirected to the form page.");
});