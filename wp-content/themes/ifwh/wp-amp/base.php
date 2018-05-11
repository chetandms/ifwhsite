<?php

/**

 * The Base Template for displaying AMP HTML page.

 *

 * This template can be overridden by copying it to yourtheme/wp-amp/base.php.

 *

 * @var $this AMPHTML_Template

 */



ob_start();

do_action( 'amphtml_template_content' );

$content = ob_get_clean();



ob_start();

echo $this->get_footer();

$footer = ob_get_clean();



$rtl = $this->options->get('rtl_enable');

do_action('amphtml_before_header');

?>

<!doctype html>

<html amp>

<head>

<?php echo $this->render( 'header' ) ?>

</head>







<?php



if ( is_front_page() && is_home() ) {



  // Default homepage



} elseif ( is_front_page() ) {



?>



<body<?php echo $rtl ? ' class="rtl"' : ''; ?> class="homepage">



<?php





} else {





?>



<body<?php echo $rtl ? ' class="rtl"' : ''; ?> <?php body_class(); ?>>





<?php







}





?>




<?php



if ( is_front_page() && is_home() ) {



  // Default homepage



} elseif ( is_front_page() ) {



?>



    <!--div id="home-page-notice">
        <div class="container">
            
            <h5><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Announcement: Notice of Breach</h5>
            <p>Between June 5, 2017 and July 11, 2017, a keylogger virus accessed the IFWH computer network. Letters have been sent to patients whose information may have been captured. IFWH encourages patients who received letters to contact MyIDCare to establish a free year of credit monitoring services and take appropriate steps to protect their identity.

            Please call 1-844-402-8564 Monday through Friday from 5 a.m. – 5 p.m. Pacific Time and use the enrollment code provided in the letter. For more information, <a href="https://www.ifwh.org/news/institute-womens-health-notifies-patients-web-security-incident/"> click here</a>.</p>

        </div>
       
    </div -->
    <!-- // notice  -->


<?php





} else {





?>








<?php







}





?>








<?php if ( $this->options->get( 'header_menu' ) ): ?>

	<?php if ( $this->options->get( 'header_menu_type' ) == 'sidebar' ): ?>

		<amp-sidebar id='amp-sidebar' layout="nodisplay" side="right">

			<amp-img class='amp-close-image' 

					 src="<?php bloginfo('template_directory'); ?>/wp-amp/img/ic_close_black_18dp_2x.png" 

					 width="20"

					 height="20"

					 alt="close sidebar"

					 on="tap:amp-sidebar.close"

					 role="button"

					 tabindex="0">

			</amp-img>

			<?php echo $this->nav_menu(); ?>

		</amp-sidebar>

	<?php endif; ?>

<?php endif; ?>

<div class="wrapper" id="top">

	<nav class="amphtml-title">

		<?php echo $this->render( 'nav' ) ?>

	</nav>

	<div id="main">

		<div class="inner">

			<?php echo $content; ?>

		</div>

	</div>





<div id="map-slider">

	<amp-carousel height="300"

	  layout="fixed-height"

	  type="slides">

	  <div>

	    <div class="location-box">



      	<span class="location-title">Administrative Office Building</span>



            <address>

                1355 Central Parkway South, Suite 400 </span><br>

                <span itemprop="addressLocality">San Antonio</span>, 

                 <span itemprop="addressRegion">TX</span>

                <span itemprop="postalCode"> 78232 </span><br>

            </address>



          <p class="tel-ico"><a href="tel:(210) 349-9300 ">(210) 349-9300  </a></p>



          <p class="fax-ico"><a href="tel:(210) 366-2558"> (210) 366-2558</a></p>

          <a href="<?php bloginfo('url'); ?>/offices/administrative-office-building/" class="view-loc">View Details</a>



	    </div>

	  </div>

	  <!-- // slides  -->

	  <div>

	    <div class="location-box">



          <span class="location-title">Metropolitan Professional Building</span>



                <address>

                    1303 McCullough Ave., Suite GL70 </span><br>

                    <span itemprop="addressLocality">San Antonio</span>, 

                     <span itemprop="addressRegion">TX</span>

                    <span itemprop="postalCode"> 78212 </span><br>

                </address>



              <p class="tel-ico"><a href="tel:(210) 226-9705 "> (210) 226-9705  </a></p>



              <p class="fax-ico"><a href="tel:(210) 223-4555">(210) 223-4555</a></p>

              <a href="<?php bloginfo('url'); ?>/offices/metropolitan-professional-building/" class="view-loc">View Details</a>



	    </div>

	  </div>

	  <!-- // slides  -->

	  <div>

	    <div class="location-box">



              <span class="location-title">Westover Hills Medical Office Building</span>



                    <address>

                        3903 Wiseman Blvd., Suite 200 </span><br>

                        <span itemprop="addressLocality">San Antonio</span>, 

                         <span itemprop="addressRegion">TX</span>

                        <span itemprop="postalCode"> 78251 </span><br>

                    </address>



              <p class="tel-ico"><a href="tel:(210) 684-4100 ">(210) 684-4100  </a></p>



              <p class="fax-ico"><a href="tel:(210) 521-679"> (210) 521-679</a></p>

              <a href="<?php bloginfo('url'); ?>/offices/westover-hills-medical-office-building/" class="view-loc">View Details</a>





	    </div>

	  </div>

	  <!-- // slides  -->



	  <div>

	    <div class="location-box">



          <span class="location-title">Hardy Oak Medical Pavilion</span>



                <address>

                    18707 Hardy Oak Blvd., Suite 230 </span><br>

                    <span itemprop="addressLocality">San Antonio</span>, 

                     <span itemprop="addressRegion">TX</span>

                    <span itemprop="postalCode"> 78258 </span><br>

                </address>



              <p class="tel-ico"><a href="tel:(210) 494-2000 "> (210) 494-2000  </a></p>



              <p class="fax-ico"><a href="tel:(210) 494-6119"> (210) 494-6119</a></p>

              <a href="<?php bloginfo('url'); ?>/offices/hardy-oak-medical-pavilion/" class="view-loc">View Details</a>



	    </div>

	  </div>

	  <!-- // slides  -->



	  <div>

	    <div class="location-box">



	      <span class="location-title">The Advanced Fertility Center</span>



	            <address>

	                18707 Hardy Oak Blvd., Suite 500 </span><br>

	                <span itemprop="addressLocality">San Antonio</span>, 

	                 <span itemprop="addressRegion">TX</span>

	                <span itemprop="postalCode"> 78258 </span><br>

	            </address>



          <p class="tel-ico"><a href="tel:(210) 616-0680 "> (210) 616-0680  </a></p>



          <p class="fax-ico"><a href="tel:(210) 616-0684"> (210) 616-0684</a></p>

          <a href="<?php bloginfo('url'); ?>/offices/the-advanced-fertility-center/" class="view-loc">View Details</a>





	    </div>

	  </div>

	  <!-- // slides  -->





	  <div>

	    <div class="location-box">



          <span class="location-title">Northeast Methodist Plaza</span>



                <address>

                    12709 Toepperwein, Suite 309 </span><br>

                    <span itemprop="addressLocality">San Antonio</span>, 

                     <span itemprop="addressRegion">TX</span>

                    <span itemprop="postalCode"> 78233 </span><br>

                </address>



              <p class="tel-ico"><a href="tel:(210) 657-4099 "> (210) 657-4099  </a></p>



              <p class="fax-ico"><a href="tel:(210) 599-9137"> (210) 599-9137</a></p>

              <a href="<?php bloginfo('url'); ?>/offices/northeast-methodist-plaza/" class="view-loc">View Details</a>



	    </div>

	  </div>

	  <!-- // slides  -->



	  <div>

	    <div class="location-box">



	      <span class="location-title">The Shops at Lincoln Heights</span>



	            <address>

	                999 E. Basse Road, Suite 100 </span><br>

	                <span itemprop="addressLocality">San Antonio</span>, 

	                 <span itemprop="addressRegion">TX</span>

	                <span itemprop="postalCode"> 78209 </span><br>

	            </address>



          <p class="tel-ico"><a href="tel:(210) 656-3040 "> (210) 656-3040  </a></p>



          <p class="fax-ico"><a href="tel:(210) 656-6419"> (210) 656-6419</a></p>

          <a href="<?php bloginfo('url'); ?>/offices/the-shops-at-lincoln-heights/" class="view-loc">View Details</a>



	    </div>

	  </div>

	  <!-- // slides  -->



	  <div>

	    <div class="location-box">



           <span class="location-title">Medical Center Tower II</span>



                    <address>

                        7940 Floyd Curl Drive, Suite 900 </span><br>

                        <span itemprop="addressLocality">San Antonio</span>, 

                         <span itemprop="addressRegion">TX</span>

                        <span itemprop="postalCode"> 78229 </span><br>

                    </address>



              <p class="tel-ico"><a href="tel:(210) 614-1000 "> (210) 614-1000  </a></p>



              <p class="fax-ico"><a href="tel:(210) 615-1236"> (210) 615-1236</a></p>

              <a href="<?php bloginfo('url'); ?>/offices/medical-center-tower-ii/" class="view-loc">View Details</a>



	    </div>

	  </div>

	  <!-- // slides  -->



	  <div>

	    <div class="location-box">

          <span class="location-title">Medical Center Tower I</span>



                <address>

                    7950 Floyd Curl Drive, Suite 600 </span><br>

                    <span itemprop="addressLocality">San Antonio</span>, 

                     <span itemprop="addressRegion">TX</span>

                    <span itemprop="postalCode"> 78229 </span><br>

                </address>



          <p class="tel-ico"><a href="tel:(210) 615-8585 "> (210) 615-8585  </a></p>

          <p class="fax-ico"><a href="tel:(210) 616-3094"> (210) 616-3094</a></p>

          <a href="<?php bloginfo('url'); ?>/offices/medical-center-tower-i/" class="view-loc">View Details</a>



	    </div>

	  </div>

	  <!-- // slides  -->



	</amp-carousel>

</div>

<!-- // slider  -->



	<div class="footer">

		<?php do_action( 'amphtml_footer_logo' ); ?>

		<?php if ( $footer ): ?>

			<div class="inner">

				<?php echo $footer; ?>

				<?php if( $scroll = $this->get_scrolltop() ): ?>

					<span class="scrolltop-btn"><a href="#top"><?php _e( $scroll, 'amphtml' ); ?></a></span>

				<?php endif; ?>

			</div>

		<?php endif; ?>

		<?php do_action( 'amphtml_footer_bottom' ); ?>

	</div>

	<?php do_action( 'amphtml_after_footer' ); ?>

</div>

</body>

</html>