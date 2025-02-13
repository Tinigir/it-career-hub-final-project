function fillHeader() {
  function getHeaderHTML() {
    return `
		<div class="logo-search">
		  <div class="logo">
			<a href="/"><img src="../IMG/meetup-logo.svg" alt="Meetup Logo" /></a>
		  </div>
		</div>
	  
		<div class="user-auth">
		  <div class="language">
			<img src="../IMG/word.svg" alt="word" />
			<a href="#">English</a>
		  </div>
	  
		  <button class="log-in">Log in</button>
		  <button class="sign-up active">Sign up</button>
		</div>
	  
		<div class="search-bar">
		  <div class="search-input-wrapper">
			<i class="icon ic-search ic-color-gray"></i>
			<input class="search-input" type="text" placeholder="Search events" />
		  </div>
	  
		  <form id="search-location-form" style="display: contents">
			<input
			  id="search-location-input"
			  class="location"
			  type="text"
			  placeholder="Mountain View, CA"
			/>
	  
			<button class="search-button">
			  <i class="icon ic-search ic-color-white"></i>
			</button>
		  </form>
		</div>
			`;
  }

  const header = document.createElement("header");
  const navElement = document.createElement("nav");
  navElement.innerHTML = getHeaderHTML();
  header.append(navElement);
  header.classList.add('header');
  document.body.prepend(header);
}

fillHeader();
