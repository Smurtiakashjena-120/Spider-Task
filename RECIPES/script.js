const recipes = [
    {
        name: "Chicken Biryani",
        ingredients: ["Chicken", "Basmati Rice", "Yogurt", "Onion", "Spices"],
        image: "./assets/chickenBiriyani.jpeg",
        procedure: "Marinate chicken, layer with partially cooked rice, and cook until done."
    },
    {
        name: "Paneer Butter Masala",
        ingredients: ["Paneer", "Tomato", "Butter", "Cream", "Spices"],
        image: "./assets/paneerButter.jpeg",
        procedure: "Cook paneer in a rich tomato and butter gravy, add cream for smooth texture."
    },
    {
        name: "Aloo Gobi",
        ingredients: ["Potatoes", "Cauliflower", "Tomato", "Spices"],
        image: "./assets/alooGobi.jpeg",
        procedure: "Cook potatoes and cauliflower with spices and tomato until tender."
    },
    {
        name: "Dal Tadka",
        ingredients: ["Lentils", "Tomato", "Onion", "Garlic", "Spices"],
        image: "./assets/dalTadka.jpeg",
        procedure: "Cook lentils with spices and give a tempering of garlic and onions."
    },
    {
        name: "Palak Paneer",
        ingredients: ["Paneer", "Spinach", "Tomato", "Cream", "Spices"],
        image: "./assets/palakPaneer.jpeg",
        procedure: "Cook paneer in a spiced spinach gravy."
    },
    {
        name: "Chole Bhature",
        ingredients: ["Chickpeas", "Onion", "Tomato", "Spices", "Flour"],
        image: "./assets/choleBtaure.jpeg",
        procedure: "Cook chickpeas in a spicy gravy, serve with deep-fried bread."
    },
    {
        name: "Samosa",
        ingredients: ["Potato", "Peas", "Spices", "Flour"],
        image: "./assets/samosa.jpeg",
        procedure: "Fill pastry with spiced potato mixture, shape into triangles, and deep fry."
    },
    {
        name: "Butter Chicken",
        ingredients: ["Chicken", "Butter", "Tomato", "Cream", "Spices"],
        image: "./assets/butterChicken.jpeg",
        procedure: "Cook chicken in a creamy tomato sauce with butter."
    },
    {
        name: "Gulab Jamun",
        ingredients: ["Milk Powder", "Flour", "Sugar", "Cardamom"],
        image: "./assets/gulabJamun.jpeg",
        procedure: "Fry dough balls made from milk powder and flour, soak in sugar syrup."
    },
    {
        name: "Pasta Carbonara",
        ingredients: ["Pasta", "Eggs", "Parmesan Cheese", "Bacon", "Pepper"],
        image: "./assets/pastaCarbonara.jpeg",
        procedure: "Cook pasta, mix with eggs, cheese, and crispy bacon."
    },
    {
        name: "Tacos",
        ingredients: ["Tortillas", "Ground Beef", "Cheese", "Lettuce", "Tomato"],
        image: "./assets/tacos.jpeg",
        procedure: "Fill tortillas with seasoned beef and toppings."
    },
    {
        name: "Sushi",
        ingredients: ["Sushi Rice", "Nori", "Fish", "Vegetables"],
        image: "./assets/sushi.jpeg",
        procedure: "Roll rice and fillings in nori seaweed."
    },
    {
        name: "Margherita Pizza",
        ingredients: ["Pizza Dough", "Tomato Sauce", "Mozzarella Cheese", "Basil"],
        image:"./assets/margharita.jpeg",
        procedure: "Top dough with tomato sauce, cheese, and basil, then bake."
    },
    {
        name: "French Onion Soup",
        ingredients: ["Onions", "Beef Broth", "Butter", "Cheese", "Baguette"],
        image: "./assets/frenchOnion.jpeg",
        procedure: "Cook onions in butter, add broth, top with cheese and baguette slices, and bake."
    },
    {
        name: "Pad Thai",
        ingredients: ["Rice Noodles", "Shrimp", "Tofu", "Peanuts", "Bean Sprouts"],
        image:"./assets/padthai.jpeg",
        procedure: "Stir-fry noodles with shrimp, tofu, and other ingredients."
    }
];

const allIngredients = [
    "Chicken", "Basmati Rice", "Yogurt", "Onion", "Spices", "Paneer", "Tomato",
    "Butter", "Cream", "Potatoes", "Cauliflower", "Lentils", "Garlic", "Spinach",
    "Chickpeas", "Flour", "Peas", "Milk Powder", "Sugar", "Cardamom", "Pasta",
    "Eggs", "Parmesan Cheese", "Bacon", "Pepper", "Tortillas", "Ground Beef",
    "Cheese", "Lettuce", "Sushi Rice", "Nori", "Fish", "Vegetables", "Pizza Dough",
    "Tomato Sauce", "Mozzarella Cheese", "Basil", "Beef Broth", "Baguette", "Shrimp",
    "Tofu", "Peanuts", "Bean Sprouts"
]


//acessing show button
const startBtn = document.querySelector("#startBtn");
const container = document.getElementById('checkboxContainer');
const recipeForm = document.querySelector('.recipeForm');

startBtn.addEventListener("click",handleClick)

let showFlag = false

function handleClick(){
  
    if(!showFlag){
        showFlag = !showFlag
        startBtn.innerText = "Hide Items";
        recipeForm.classList.remove("hidden");
    }else{
        showFlag = !showFlag
        startBtn.innerText = "Show Items";
        recipeForm.classList.add("hidden");
    }


}



allIngredients.forEach(ingredient => {
    const div = document.createElement('div');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'ingredients';
    checkbox.value = ingredient;

    const label = document.createElement('label');
    label.htmlFor = checkbox.id;
    label.textContent = ingredient;

    div.appendChild(checkbox);
    div.appendChild(label);
    container.appendChild(div);
});
//creating restart button
let reStartBtn = document.createElement("button");
reStartBtn.innerText = "Re-Use";
reStartBtn.addEventListener("click",handleRestart)


//form acessing 
document.getElementById('ingredientForm').addEventListener('submit', function(event) {
    event.preventDefault();



    const selectedIngredients = Array.from(document.querySelectorAll('input[name="ingredients"]:checked'))
                                     .map(checkbox => checkbox.value);

    const matchedRecipes = recipes.filter(recipe => 
        recipe.ingredients.every(ingredient => selectedIngredients.includes(ingredient))
    );

    const resultContainer = document.getElementById('result');
    resultContainer.classList.remove("hidden")
    resultContainer.innerHTML = '';

    if (matchedRecipes.length > 0) {
        matchedRecipes.forEach(recipe => {
            const recipeDiv = document.createElement('div');
            recipeDiv.innerHTML = `
            
                <i><h2>${recipe.name}</h2></i>
                <i>Ingredients: ${selectedIngredients}</i>
                <img src="${recipe.image}" alt="${recipe.name}" width="200">
                <p> PROCEDURE: ${recipe.procedure}</p>
                
            `;
            resultContainer.appendChild(recipeDiv);
            resultContainer.appendChild(reStartBtn);

            
        });
    } else {
        resultContainer.innerHTML = '<p>No matching recipes found.</p>';
        resultContainer.appendChild(reStartBtn);
    }

    recipeForm.remove()
    startBtn.remove();



});


function handleRestart(){
    location.reload();
}






// Get the JSON string from localStorage
const data = localStorage.getItem('Recipes');


if(!data){
// Convert the recipes array to a JSON string
const recipesJSON = JSON.stringify(recipes);

// Save the JSON string to localStorage
localStorage.setItem('Recipes', recipesJSON);
}


