  <section id="paralax-1" class="bottom-cta">
      <div class="bcg" 
       
        data-top-bottom="background-position: 50% -100px;" 
        data-bottom-top="background-position: 50% 100px;" 
        data-anchor-target="#paralax-1">

        <div class="paralax-overlay"></div>


          <div class="container">

            <div class="row">
              <div class="col-xl-6 col-xl-offset-3 col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
                
                <div class="cta-content">
                  
                    <h5><?php the_field('small_title_bottom_cta', 'options'); ?> </h5>
                    <h6><?php the_field('main_title_bottom_cta', 'options'); ?></h6>

                    <p><?php the_field('description_bottom_cta', 'options'); ?></p>

                    <a href="<?php the_field('button_link_bottom_cta', 'options'); ?>"><?php the_field('button_label_bottom_cta', 'options'); ?></a>

                </div>
                <!-- // cta content  -->

              </div>
            </div>
            <!-- // offset  -->

          </div>
          <!-- // container  -->


      </div>
      <!-- // bcg  -->
  </section>
  <!-- // cta  -->