const searchMeal = async (recherche) => {
  const api_res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${recherche}`
  );
  const api_ret = await api_res.json();
  api_ret.meals.forEach((meal) => {
    var img = `<img src="${meal.strMealThumb}" alt="repas"></img>`;
    document.getElementById("img").innerHTML += img;
    console.log(meal.strMealThumb);
  });
};

const validerForm = () => {
  var nom = document.getElementById("recherches").value;
  searchMeal(nom);
};
