const searchMeal = async recherche => {
	const api_res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recherche}`);
	const api_ret = await api_res.json();
	api_ret.meals.forEach((meal, index) => {
		var img = `<div draggable="true" ondragstart="drag(event)" id="${index}">
        <img src="${meal.strMealThumb}" alt="repas" />
        <p>${meal.strMeal}</p>
    </div>`;
		document.getElementById('img').innerHTML += img;
		console.log(meal.strMealThumb);
	});
};

const validerForm = () => {
	document.getElementById('img').innerHTML = '';
	var nom = document.getElementById('recherches').value;
	searchMeal(nom);
};
