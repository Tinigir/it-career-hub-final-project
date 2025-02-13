const searchLocationInput = document.getElementById('search-location-input');

document.addEventListener("DOMContentLoaded", () =>{
	
	handelQuerrySearchParam();
});

function handelQuerrySearchParam(){
	const urlParams = new URLSearchParams(window.location.search);
	const myParam = urlParams.get('location');
	if (myParam)
	searchLocationInput.value = myParam;
}