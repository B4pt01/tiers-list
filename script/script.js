const searchMeal = async recherche => {
	const api_res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recherche}`);
	const api_ret = await api_res.json();
	api_ret.meals.forEach((meal, index) => {
		var img = `<img src="${meal.strMealThumb}" alt="repas" draggable="true" ondragstart="drag(event)" id="${index}">`;
		document.getElementById('img').innerHTML += img;
		console.log(meal.strMealThumb);
	});
};

const validerForm = () => {
	document.getElementById('img').innerHTML = '';
	var nom = document.getElementById('recherches').value;
	searchMeal(nom);
};

function dragstartHandler(ev) {
	// Add the target element's id to the data transfer object
	ev.dataTransfer.setData('text/plain', ev.target.id);
}

window.addEventListener('DOMContentLoaded', () => {
	// Get the element by id
	const element = document.getElementById('p1');
	// Add the ondragstart event listener
	element.addEventListener('dragstart', dragstartHandler);
});
