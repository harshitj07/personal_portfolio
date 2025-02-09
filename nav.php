<style>

	/* Colour Variables */
	:root {
	  	/* Navy-Blue | Primary Background Colour */
	  	--midnight: #21263b;
	  	/* Dark-Blue | Header Colour */
	  	--navy:  #2e3c73;
	  	/* Off-White | Primary Text Colour */
	  	--snow:  #edeef0;
	  	/* Bland-Blue | Hover Colour */
	 	--denim:  #4c79b5;

		--midnightRGB: 33, 38, 59;
		--navyRGB:  46, 60, 115;
		--snowRGB: 237, 238, 240;
		--denimRGB: 76, 121, 181;
	}

	/* Header element */
	header {
	  background-color: var(--navy);
	  align-items: center;
	  padding-top: 2em;
	  padding-bottom: 2em;
	  font-size: 16px;
	  display: block;
	  justify-content: space-evenly;
	  text-align: center;
	  position: relative;
	  font-family: 'Nunito', sans-serif;
	}

	/* Header on site title */
	h1.sitetitle {
		font-family: 'Nunito', sans-serif;
		color: var(--snow);
		margin: 0;
		flex-basis: 30%;
		margin-bottom: 2.5%;
		margin-top: 1%;
		font-size: 35px;
		text-align: center;
	}

	/* Navbar */
	.navbar {
	  overflow: hidden;
	  font-family: 'Nunito', sans-serif;
	  align-items: center;
	  justify-content: space-evenly;
	  font-family: monospace;
	  display: flex;
	  text-align: center;
	  padding-right: 5%;
	  padding-left: 3.5%;
	  flex-direction: column;
	  gap: 2.5%;
	}

	/* Links inside the navbar */
	.navbar a {
	  align-items: center;
	  justify-content: center;
	  float: left;
	  font-size: 20px;
	  text-align: center;
	  padding: 7px 16px;
	  text-decoration: none;
	  font-family: monospace;
	  color: var(--snow);
	  font-family: 'Nunito', sans-serif;
	}

	/* The dropdown container */
	.dropdown {
	  float: left;
	  overflow: hidden;
	  text-align: center;
	  font-family: 'Nunito', sans-serif;
	}

	/* Dropdown button */
	.dropdown .dropbtn {
	  font-size: 20px;
	  border: none;
	  outline: none;
	  color: var(--snow);
	  padding: 7px 16px;
	  background-color: inherit;
	  font-family: inherit; /* Important for vertical align on mobile phones */
	  margin: 0; /* Important for vertical align on mobile phones */
	  font-family: monospace;
	  font-family: 'Nunito', sans-serif;
	}

	/* Dropdown container section styling */
	p.section {
		text-align: center;
		font-size: 18px;
		font-weight: bold;
		margin: 10px;
		color: var(--navy);
	}

	/* Navbar links on hover */
	.navbar a:hover {
	  /* background-color: var(--denim) */
	  font-family: 'Nunito', sans-serif;
	  border-radius: 5px;
	}

	.dropdown:hover .dropbtn {
		background-color: var(--denim);
		font-family: 'Nunito', sans-serif;
		border-radius: 5px 5px 0 0;
	}

	/* Dropdown content (hidden by default) */
	.dropdown-content {
	  display: none;
	  position: absolute;
	  background-color: var(--snow);
	  min-width: 160px;
	  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	  z-index: 1;
	  font-family: 'Nunito', sans-serif;
	  padding: 5px;
	  max-height: 450px;
      overflow: scroll;
	}

	/* Links inside the dropdown */
	.dropdown-content a {
	  	float: none;
	  	color: black;
	  	padding: 12px 16px;
	  	text-decoration: none;
	  	display: block;
	  	text-align: center;
	  	font-family: 'Nunito', sans-serif;
	}

	/* Dropdown links on hover */
	.dropdown-content a:hover {
	  	background-color: var(--denim);
	  	font-family: 'Nunito', sans-serif;
	  	border-radius: 5px;
	}

	/* Show the dropdown menu on hover */
	.dropdown:hover .dropdown-content {
	    display: block;
	    font-family: 'Nunito', sans-serif;
	    border-radius: 0 5px 5px 5px;
	}

	.hoverlink {

	}

	/*
	.navlink {
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-basis: 50%;
		width: 100%;
	} 
	*/

	/* Font size on drop down elements */

	a.activity, a.resource {
		font-size: 17px;
	}

	/* 
	Hover animation on navbar links 
	Source: https://www.sliderrevolution.com/resources/css-button-hover-effects/ -> Nav Hovers
	*/

	.hoverlink {
		position: relative;	
	}

	.hoverlink:after {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
		width: 0%;
		content: '.';
		color: transparent;
		background: var(--denim);
		height: 1px;
	}

	.hoverlink {
		transition: all 1s;
	}

	.hoverlink:after {
		text-align: left;
		content: '.';
		margin: 0;
		opacity: 0;
	}

	.hoverlink:hover {
		color: var(--snow);
		z-index: 1;
	}

	.hoverlink:hover:after {
		z-index: -10;
		animation: fill 1s forwards;
		-webkit-animation: fill 1s forwards;
		-moz-animation: fill 1s forwards;
		opacity: 1;
	}

	/* Keyframes for hover animation */
	@-webkit-keyframes fill {
		0% {
			width: 0%;
			height: 1px;
		}

		50% {
			width: 100%;
			height: 1px;
		}

		100% {
			width: 100%;
			height: 100%;
			background: #4c79b5;
			border-radius: 5px;
		}
	}

	/* Formatting of the different Navbar buttons */
	.links {
		width: 100%;
		display: flex;
		justify-content: space-around;
	}

	.dropbtn {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
<header>
	<nav class="navbar">
		<div class="links">
			<a class="navlink hoverlink" href="/2022-2023/jain330c2/">🏠 Home</a>
			<a class="navlink hoverlink" href="https://hdsb.elearningontario.ca/d2l/home/22896061">📚 Brightspace</a>
			<a class="navlink hoverlink" href="https://icsprogramming.ca/index.php">🏫 Course Homepage</a>
			<div class="dropdown navlink">
				<button class="dropbtn">🏛️ Resources</button>
				<div class="dropdown-content">
					<a class="resource" href="https://www.w3schools.com/">W3 Schools</a>
					<a class="resource" href="https://stackoverflow.com/">Stack Overflow</a>
				</div>
			</div>
			<div class="dropdown navlink">
				<button class="dropbtn">👨‍💻 Activities</button>
				<div class="dropdown-content">
					<p class="section">Grid Layouts</p>
					<a class="activity" href="/2022-2023/jain330c2/section4.2/grid_layout.php">Grid Layout 1</a>
					<hr style="text-align: center; width: 90%; color: var(--navy);">
				</div>
			</div>
		</div>
	</nav>
</header>
