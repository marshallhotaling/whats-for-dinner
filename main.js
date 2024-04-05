var sides =["Miso Glazed Carrots",
"Coleslaw",
"Garden Salad",
"Crispy Potatoes",
"Sweet Potato Tots",
"Coconut Rice",
"Caeser Salad",
"Shrimp Summer Rolls",
"Garlic Butter Mushrooms",
"Hush Puppies"]
var mains =[
"Spaghetti and Meatballs",
"Pineapple Chicken",
"Shakshuka",
"Thai Yellow Curry",
"Bibimbap",
"Chicken Parmesean",
"Butternut Squash Soup",
"BBQ Chicken Burgers",
"Ramen",
"Empanadas",
"Chicken Fried Rice",
"Sheet Pan Fajitas",
"Margarita Pizza"
]

var dessert =[
"Apple Pie",
"Lemon Meringue Pie",
"Black Forest Cake",
"Banana Bread",
"Peach Cobbler",
"Cheesecake",
"Funfetti Cake",
"Baklava",
"Flan",
"Macarons",
"Macaroons",
"Chocolate Cupcakes",
"Pavlova",
"Pumpkin Pie",
"Key Lime Pie",
"Tart Tatin",
"Croissants",
"Eclairs",
]






var bullitOne = document.querySelector('.sideCheckbox');
var bullitTwo = document.querySelector('.mainCheckbox');
var bullitTree = document.querySelector('.dessertCheckbox');
var bullitFour = document.querySelector(".entierCheckbox");
var cookingPotPage = document.querySelector(".cookingPot");
var foodTextPage = document.querySelector(".foodText");
var tital = document.querySelector(".topLable");
var imformation = document.querySelector(".bottomLable");
bullitOne.addEventListener('click', () => {
    disableButton()
    bullitOne.checked = true
})

bullitTwo.addEventListener('click', () => {
    disableButton()
    bullitTwo.checked = true
})

bullitTree.addEventListener('click', () => {
    disableButton()
    bullitTree.checked = true

})

bullitFour.addEventListener('click', () => {
    disableButton()
    bullitFour.checked = true

})


function disableButton() {
    bullitOne.checked = false
    bullitTwo.checked = false
    bullitTree.checked = false
    bullitFour.checked = false
}

function randomFood() {
    if (bullitOne.checked === true) {
        foodTextPage.classList.remove("hidden")
        cookingPotPage.classList.add("hidden")
        tital.innerHTML = "hi"
        imformation.innerHTML = "HIIIII"
    } else if (bullitTwo.checked === true) {
        foodTextPage.classList.remove("hidden")
        cookingPotPage.classList.add("hidden")
        tital.innerHTML = "hi"
        imformation.innerHTML = "HIIIII"
    } else if (bullitTree.checked === true) {
        foodTextPage.classList.remove("hidden")
        cookingPotPage.classList.add("hidden")
        tital.innerHTML = "hi"
        imformation.innerHTML = "HIIIII"
    } else if (bullitFour.checked === true) {
        foodTextPage.classList.remove("hidden")
        cookingPotPage.classList.add("hidden")
        tital.innerHTML = "hi"
        imformation.innerHTML = "HIIIII"
    } else {
        foodTextPage.classList.add("hidden")
        cookingPotPage.classList.remove("hidden")

    }


}


