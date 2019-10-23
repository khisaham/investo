<!DOCTYPE html>
<html lang="en">
<head>
<title>4 Smiles</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="description" content="Invest project">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="styles/bootstrap4/bootstrap.min.css">
<link href="plugins/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" type="text/css" href="styles/contact.css">
<link rel="stylesheet" type="text/css" href="styles/contact_responsive.css">
</head>


<?php
include('header.php');

?>
<body>

<div class="super_container">
	
	<!-- Home -->

	<div class="home">
		<div class="home_background parallax-window" data-parallax="scroll" data-image-src="images/contact_background.jpg" data-speed="0.8"></div>
		<div class="container">
			<div class="row">
				<div class="col">
					<div class="home_content">
						<div class="home_content_inner">
							<div class="home_title">Contact</div>
							<div class="home_breadcrumbs">
								<ul>
									<li><a href="financial.html">Home</a></li>
									<li>Contact</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Header -->

		
	</div>
	
	<!-- Contact -->

	<div class="contact">
		<div class="container">
			<div class="row">
				<div class="col-lg-4">
					<div class="info">
						<div class="section_title_container">
							<div class="section_subtitle">take a look at our</div>
							<div class="section_title">Contact info</div>
						</div>
						<div class="info_title">Head Office</div>
						<ul>
							<li>Address: JSL Complex 1st Floor Mwatate.  P.O Box 25-80305 Mwatate</li>
							<li>Phone: +254727270317</li>
							<li>Email: office@4smiles.com</li>
						</ul>
					</div>
				</div>
				<div class="col-lg-8 contact_form_col">
					<div class="section_title_container">
						<div class="section_subtitle">take a look at our</div>
						<div class="section_title">Get in touch</div>
					</div>
					<div class="contact_form_container">
						<form action="#" action="contact_send.php" method="post" id="contactForm" class="contact_form">
							<div class="row">
								<div class="col-md-6">
									<input type="text" class="input_item" name="name" placeholder="Your Name"  id="name" required="required">
								</div>
								<div class="col-md-6">
									<input type="email" class="input_item" name="email" placeholder="Your E-mail"  id="email" required="required">
								</div>
								<div class="col-md-6">
									<input type="text" class="input_item" name="phone" placeholder="Your Phone" id="phone" >
								</div>
								<div class="col-md-6">
									<select class="dropdown_item input_item" name="business_type" id="business_type">
										<option>Business type</option>
										<option>Business type</option>
										<option>Business type</option>
									</select>
								</div>
								<div class="col-md-12">
									<textarea id="contact_message" class="input_item contact_message" name="message" placeholder=" Your Message" required="required" id="message" data-error="Please, write us a message."></textarea>
								</div>
								<div class="col-md-12">
									<button id="contact_btn" type="submit" class="contact_button trans_200" value="Submit">submit</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Google Map -->
		
	<div class="map">
		<div id="google_map" class="google_map">
			<div class="map_container">
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.346866713395!2d38.
				36757781397757!3d-3.506964897447652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1838dfa4846
				a5543%3A0xb3db3819f9d5d724!2sJirani%20Smart%20Ltd%20Head%20Office!5e0!3m2!1sen!2suk!4v1569427008559!
				5m2!1sen!2suk" width="1350" height="600" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
            </div>
				<div class="map_contact">
			

			<div class="map_contact_inner d-flex flex-column align-items-start justify-content-center">
				<div class="logo_container contact_logo">
					<div class="logo">
						<a href="#">
						
							<div class="logo_img"><img src="images/logo.JPG" alt=""></div>
						</a>
					</div>
				</div>
				<div class="map_contact_title">Head Office</div>
				<ul>
					<li>Address: JSL Complex 1st Floor Mwatate.  P.O Box 25-80305 Mwatate </li>
					<li>Phone: +254727270317</li>
					<li>Email: office@4smiles.com</li>
				</ul>
			</div>
		</div>
	</div>

	<!-- Footer -->

	<footer class="footer">
		<div class="container">
			<div class="row">

				<!-- Footer Column -->
				<div class="col-lg-3 footer_col">
					<div class="footer_about">
						<div class="logo_container footer_logo">
							<div class="logo">
								<a href="#">
									
									<div class="logo_img"><img src="images/logo.JPG" alt=""></div>
								</a>
							</div>
						</div>
						<p class="footer_about_text">Providing affordable finance.
Realising the dreams and aspirations of businesses.
Increasing our socio-economic impact.
Future proofing your business and ours.</p>
					</div>
				</div>

				<!-- Footer Column -->
				<div class="col-lg-3 footer_col">
					<div class="footer_links">
						<div class="footer_title">Useful Links</div>
						<ul>
							<li><a href="#">Home</a></li>
							<li><a href="#">About</a></li>
							
							<li><a href="#">Services</a></li>
							<li><a href="#">Blog</a></li>
							<li><a href="#">Contact us</a></li>
							
						</ul>
					</div>
				</div>

				<!-- Footer Column -->
				<div class="col-lg-6 footer_col">
					<div class="footer_newsletter">
						<div class="footer_title">Subscribe to our newsletter</div>
						<form action="#" class="footer_newsletter_form">
							<input type="email" class="footer_newsletter_input" placeholder="Your E-mail" required="required">
							<button class="footer_newsletter_button" type="submit">subscribe</button>
						</form>
						<div class="footer_newsletter_text">No viable business is left unsupported</div>
						<div class="footer_social">
							<ul>
								<li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
								<li><a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a></li>
								<li><a href="#"><i class="fa fa-reddit-alien" aria-hidden="true"></i></a></li>
								<li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
							</ul>
						</div>
					</div>
				</div>

			</div>
		</div>

		<div class="copyright">
			<div class="container">
				<div class="row">
					<div class="col-md-4 order-md-1 order-2">
						<div class="copyright_content d-flex flex-row align-items-center justify-content-start">
							<div class="cr"><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This website is made<i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://foursmiles.com" target="_blank">4 Smiles</a>
<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></div>
						</div>
					</div>
					<div class="col-md-8 order-md-2 order-1">
						<nav class="footer_nav d-flex flex-row align-items-center justify-content-md-end">
							<ul>
								<li><a href="#">Home</a></li>
								<li><a href="#">About us</a></li>
								<li><a href="#">Services</a></li>
								<li><a href="#">Blog</a></li>
								<li><a href="#">Contact</a></li>
							</ul>
						</nav>
					</div>
				</div>
			</div>			
		</div>
	</footer>
</div>

<script src="js/jquery-3.2.1.min.js"></script>
<script src="styles/bootstrap4/popper.js"></script>
<script src="styles/bootstrap4/bootstrap.min.js"></script>
<script src="plugins/easing/easing.js"></script>
<script src="plugins/parallax-js-master/parallax.min.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCIwF204lFZg1y4kPSIhKaHEXMLYxxuMhA"></script>
<script src="js/contact_custom.js"></script>
</body>
</html>