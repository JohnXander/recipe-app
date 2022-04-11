//Access the empty DIV element in the HTML file and store in variable

const meals = document.getElementById("meals")

//Call the 1st function

getRandomMeal();

//When called, the 1st function fetches a random recipe from the API
//1st function:

async function getRandomMeal() {
    const resp = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php");
    const respData = await resp.json();
    const randomMeal = respData.meals[0];

    //Call the 2nd function inside the 1st function

    addMeal(randomMeal, true)
}

//When called, the 2nd function serves 2 purposes (explained below)...
//2nd function:

function addMeal(mealData, random = false) {
    
    //The 1st purpose is to create an HTML DIV element using the data from the API
    //1st purpose:

    const meal = document.createElement("div");
    meal.classList.add("meal");

    meal.innerHTML = `
        
        <div class="meal-header">
            ${random ? `<span class="random">Random Recipe</span>` : ""}
            <img
                src="${mealData.strMealThumb}"
                alt="${mealData.strMeal}"
            />
            <div class="meal-body">
                <h4>${mealData.strMeal}</h4>
                <button class="fav-btn">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
        </div>`
    
    meals.appendChild(meal)

    //The 2nd purpose is to change the style of the heart icon when it is clicked
    //2nd purpose:
    
    const btn = meal.querySelector(".meal-body .fav-btn")
    
    btn.addEventListener("click", () => {
        btn.classList.toggle("active")
    })  
}




