// const API_PATH = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;

const search = async recherche => {
	const api_res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recherche}`);
	const api_ret = await api_res.json();
	if (api_ret.meals) {
		api_ret.meals.forEach(async meal => {
			var img = `<div draggable="true" ondragstart="drag(event)" id="${meal.idMeal}">
            <img src="${meal.strMealThumb}" alt="repas" />
            <p>${meal.strMeal}</p>
            </div>`;
			document.getElementById('selection').innerHTML += img;
			console.log(meal.strMealThumb);
			console.log(api_ret);
		});
	} else {
		var erreur = document.getElementById('selection');
		erreur.textContent = `Elément non trouver pour : ${recherche}`;
	}
};

const validerForm = () => {
	document.getElementById('selection').innerHTML = '';
	var nom = document.getElementById('recherches').value;
	if (nom.length >= 3) {
		search(nom);
	}
};
