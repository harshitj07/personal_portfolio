<?php if (!isset($_SESSION)) { session_start(); } ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">	

	<!-- Title changes depending on the website -->
	<title><?php echo($siteName . "Homepage - Harshit Jain") ?></title>	
	
	<meta name="description" content="This pages covers all of the content in my ICS3UO-02 Course">
	<meta name="author" content="Harshit Jain">	
	
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Barlow:wght@100&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=GFS+Didot&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap" rel="stylesheet">

	<!-- Navbar title changes depending on the website -->
	<?php $siteName = "Harshit Jain - ICS3UO-02"; ?>

	<!-- Linking the stylesheet -->
	<link rel="stylesheet" href="styles.css">
</head>
<body>
	<!-- Navbar Element -->
	<?php include $_SERVER['DOCUMENT_ROOT'] . "/2022-2023/jain330c2/nav.php";?>

	<!-- main content -->
	<!-- Course Overview -->
	</br>
	</br>

	<!-- The Course -->
	<h2>The Course</h2>
	<div class="course">

		<!-- Overview-->
		<p class="fancy1">
			<span class="overview">Overview</span>
			</br>
			</br>
			In this course, we will be learning basic programming techniques and skills that are applicable to most programming languages. To learn these skills, we will be learning how to design and develop web applications using HTML5, PHP, JQuery, C and MySQL. We will learn how to create and manage a website using HTML standards and also how to create dynamic websites using the PHP scripting language. Aditionally we will be integrating databases into our programming using MySQL as well as implementing the dynamic functionality of JQuery.
		</p>

		<!-- Topics -->
		<p class="fancy2">
			<span class="topic">Topics</span>
			</br>
			</br>
			Topics that we will be covering include variables, calculations, data structures, functions, arrays, conditional statements, decisions, loops, data-control, data-storage, database management, GUI design, user input/output standards, troubleshooting, and media embedding. Additionally, we will be discussing careers, jobs, and researching trends in the field of computer science.
		</p>
	</div>
	</br>
	</br>

	<!-- About Me -->
	<h2>About Me</h2>
	<div class="me">
		<img class="me" src="images/me.jpeg"></img>
		<p class="fancy3">
			Hi! My name is Harshit Jain and I am a 10th-grade student who currently goes to Aldershot High School. I come from an Indian family and I was born in New Dehli, India in the year 2007. From the age of 3.5, I have been living in Canada. Initially, I resided in Vancouver, on the other side of Canada, but since 2015, I have been residing in the Greater Toronto Area (GTA). I have lived for a year in Mississauga, a year in Oakville, and 5+ years in Burlington. I have a strong passion for math, science, computers, and technology. In the future, I would like to pursue a career in the field of Engineering or Computers whether this is Computer Engineering or Computer Science. 
		</p>
	</div>
	</br>
	</br>

	<!-- end main content -->

	<!-- footer -->
	<footer>
		<p>This site was created for ICS3UO-02. You can contact me at<a class="mail" href="mailto:1jainhar@hdsb.ca">1jainhar@hdsb.ca</a>or 905-802-2902.</p>
	</footer>
	
	<!-- turn work in widget -->
	<?php include $_SERVER['DOCUMENT_ROOT'] . "/marking-rubric/turn-work-in.inc.php"; ?>
</body>
</html>
