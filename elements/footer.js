function fillFooter() {
	function getFooterHTML() {
	  return `
	  <div class="footer-container">
	  <div class="footer-create-group">
		<p>Create your own Meetup group.</p>
		<button>Get Started</button>
	  </div>
	  <div class="gray-line"></div>

	  <!-- Секция "Your Account" -->
	  <div class="footer-links-group">

		<div class="footer-links">
			<h3>Your Account</h3>
			<ul>
			<li><a href="#">Sign up</a></li>
			<li><a href="#">Log in</a></li>
			<li><a href="#">Help</a></li>
			<li><a href="#">Become an Affiliate</a></li>
			</ul>
		</div>

		<div class="footer-links">
			<h3>Discover</h3>
			<ul>
			<li><a href="#">Groups</a></li>
			<li><a href="#">Calendar</a></li>
			<li><a href="#">Topics</a></li>
			<li><a href="#">Cities</a></li>
			<li><a href="#">Online Events</a></li>
			<li><a href="#">Local Guides</a></li>
			<li><a href="#">Make Friends</a></li>
			</ul>
		</div>

		<div class="footer-links">
			<h3>Meetup</h3>
			<ul>
			<li><a href="#">About</a></li>
			<li><a href="#">Blog</a></li>
			<li><a href="#">Meetup Pro</a></li>
			<li><a href="#">Careers</a></li>
			<li><a href="#">Apps</a></li>
			<li><a href="#">Podcast</a></li>
			</ul>
		</div>
	  </div>
	</div>

	<div class="footer-social">
	  <div class="social-icons">
		<p>Follow us</p>
		<a href="#"><img src="../IMG/facebook.svg" alt="facebook" /></a>
		<a href="#"><img src="../IMG/twitter.svg" alt="Twitter" /></a>
		<a href="#"><img src="../IMG/youtube → SVG.svg" alt="YouTube" /></a>
		<a href="#"><img src="../IMG/Instagram.svg" alt="Instagram" /></a>
		<a href="#"><img src="../IMG/TikTok.svg" alt="TikTok" /></a>
	  </div>

	  <div class="footer-apps hidden-mobile">
		<a href="#"><img src="../IMG/Google Play.png" alt="Google Play" /></a>
		<a href="#"><img src="../IMG/App Store .png" alt="App Store" /></a>
	  </div>
	</div>
	<div>
	  <div class="copyright">
		<div class="footer-bottom">
		  <p>&copy; 2024 Meetup</p>
		</div>

		<div class="footer-policy hidden-mobile">
		  <ul>
			<li><a href="#">Terms of Service</a></li>
			<li><a href="#">Privacy Policy</a></li>
			<li><a href="#">Do Not Sell or Share My Personal Data</a></li>
			<li><a href="#">Cookie Policy</a></li>
			<li><a href="#">Help</a></li>
		  </ul>
		</div>
	  </div>
	</div>
			  `;
	}
  
	const footer = document.createElement("footer");

	footer.innerHTML = getFooterHTML();
	footer.classList.add('footer');

	document.body.append(footer);
  }
  
  fillFooter();