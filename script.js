// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Back to Top Button
const backToTopButton = document.createElement('a');
backToTopButton.classList.add('back-to-top');
backToTopButton.innerHTML = '&uarr;';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Macro Calculator
const macroForm = document.getElementById('macroForm');
const macroResults = document.getElementById('macroResults');

macroForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const activity = document.getElementById('activity').value;
    const goal = document.getElementById('goal').value;

    // Simple macro calculation logic (this can be adjusted based on your needs)
    let bmr;
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    let activityMultiplier;
    switch (activity) {
        case 'sedentary':
            activityMultiplier = 1.2;
            break;
        case 'light':
            activityMultiplier = 1.375;
            break;
        case 'moderate':
            activityMultiplier = 1.55;
            break;
        case 'heavy':
            activityMultiplier = 1.725;
            break;
        case 'athlete':
            activityMultiplier = 1.9;
            break;
    }

    const tdee = bmr * activityMultiplier;

    let goalAdjustment;
    if (goal === 'lose') {
        goalAdjustment = -500; // 500 calorie deficit for weight loss
    } else if (goal === 'gain') {
        goalAdjustment = 500; // 500 calorie surplus for weight gain
    } else {
        goalAdjustment = 0; // Maintain weight
    }

    const dailyCalories = tdee + goalAdjustment;

    // Display results
    macroResults.innerHTML = `
        <h4>Your Daily Caloric Needs:</h4>
        <ul>
            <li>Total Daily Energy Expenditure (TDEE): ${Math.round(tdee)} calories</li>
            <li>Adjusted for Goal: ${Math.round(dailyCalories)} calories</li>
        </ul>
    `;
    macroResults.classList.add('active');
});

// Testimonial Slider
const testimonials = [
    {
        image: '/api/placeholder/100/100',
        text: "FitFuel has transformed my meal prep! I love the convenience and taste.",
        author: "John Doe"
    },
    {
        image: '/api/placeholder/100/100',
        text: "The meals are delicious and help me stay on track with my fitness goals.",
        author: "Jane Smith"
    },
    {
        image: '/api/placeholder/100/100',
        text: "I can't believe how easy it is to eat healthy with FitFuel!",
        author: "Mike Johnson"
    }
];

const testimonialSlider = document.getElementById('testimonialSlider');
let currentTestimonialIndex = 0;

function loadTestimonials() {
    testimonialSlider.innerHTML = testimonials.map((testimonial, index) => `
        <div class="testimonial-slide ${index === currentTestimonialIndex ? 'active' : ''}">
            <div class="testimonial-card">
                <div class="testimonial-image">
                    <img src="${testimonial.image}" alt="${testimonial.author}">
                </div>
                <div class="testimonial-text">${testimonial.text}</div>
                <div class="testimonial-author">${testimonial.author}</div>
            </div>
        </div>
    `).join('');
}

document.getElementById('nextBtn').addEventListener('click', () => {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    loadTestimonials();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
    loadTestimonials();
});

// FAQ Section
const faqContainer = document.getElementById('faqContainer');
const faqs = [
    {
        question: "What is FitFuel?",
        answer: "FitFuel is a meal delivery service that provides delicious, nutritionally balanced meals tailored to your fitness goals."
    },
    {
        question: "How do I choose a meal plan?",
        answer: "You can choose a meal plan based on your dietary preferences and fitness goals during the signup process."
    },
    {
        question: "Are the meals customizable?",
        answer: "Yes! You can customize your meals based on your taste preferences and nutritional needs."
    }
];

function loadFAQs() {
    faqContainer.innerHTML = faqs.map((faq, index) => `
        <div class="faq-item">
            <div class="faq-question" id="faqQuestion${index}">
                ${faq.question}
            </div>
            <div class="faq-answer" id="faqAnswer${index}">
                ${faq.answer}
            </div>
        </div>
    `).join('');

    faqs.forEach((_, index) => {
        const question = document.getElementById(`faqQuestion${index}`);
        const answer = document.getElementById(`faqAnswer${index}`);
        question.addEventListener('click', () => {
            answer.classList.toggle('active');
        });
    });
}

loadTestimonials();
loadFAQs();
document.getElementById('highProteinBtn').addEventListener('click', function() {
    var highProteinFoods = document.getElementById('highProteinFoods');
    if (highProteinFoods.style.display === 'block') {
        highProteinFoods.style.display = 'none';
    } else {
        highProteinFoods.style.display = 'block';
    }
});
document.getElementById('balancedMacrosBtn').addEventListener('click', function() {
    var balancedMacroFoods = document.getElementById('balancedMacroFoods');
    if (balancedMacroFoods.style.display === 'block') {
        balancedMacroFoods.style.display = 'none';
    } else {
        balancedMacroFoods.style.display = 'block';
    }
});
document.getElementById('freshIngredientsBtn').addEventListener('click', function() {
    var freshIngredientsList = document.getElementById('freshIngredientsList');
    if (freshIngredientsList.style.display === 'block') {
        freshIngredientsList.style.display = 'none';
    } else {
        freshIngredientsList.style.display = 'block';
    }
});
document.getElementById('noAdditivesBtn').addEventListener('click', function() {
    var noAdditivesList = document.getElementById('noAdditivesList');
    if (noAdditivesList.style.display === 'block') {
        noAdditivesList.style.display = 'none';
    } else {
        noAdditivesList.style.display = 'block';
    }
});