<template lang="html">
    <div>
                    <!-- Google Map -->
            <div id="map">
                
                <div style="width: 100%"><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Suit%2021f%20Melita%20plaza,%20off%20Gimbiya%20street,%20area%2011%20Garki,%20Abuja+(Oasis%20Scout)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/farm-gps/">gps for tractors</a></iframe></div>
            </div>
            <!-- End Google Map -->

            <!-- Section Area - Content Central -->
            <section class="content-info">

                <div class="container">
                    <div class="row paddings-mini">
                        <!-- Left Content -->
                        <div class="col-md-4">
                            <aside class="panel-box">
                                <div class="titles no-margin">
                                    <h4>The Office</h4>
                                </div>
                                <div class="info-panel">
                                    <address>
                                      <strong>Oasis Scout</strong><br>
                                      <i class="fa fa-map-marker"></i><strong>Address: </strong> Suit 21f Melita plaza, off Gimbiya street, area 11 Garki, Abuja<br>
                                     
                                      <i class="fa fa-phone"></i> <abbr title="Phone">P:</abbr> 07086427141
                                    </address>
                                </div>
                            </aside>

                            <aside class="panel-box">
                                <div class="titles no-margin">
                                    <h4>Emails Contact</h4>
                                </div>
                                <div class="info-panel">
                                    <address>
                                      <i class="fa fa-envelope"></i><strong>Email:</strong><a href="mailto:#"> info@oasisfootballscout.org</a><br>
                                     
                                    </address>
                                </div>
                            </aside>
                        </div>
                        <!-- End Left Content -->

                        <!-- Right Content -->
                        <div class="col-md-8">
                            <div class="panel-box">
                                <div class="titles no-margin">
                                    <h4>Contact Form</h4>
                                </div>
                                <div class="info-panel">
                                    <!-- Form Contact -->
                                    <form class="form-theme" action="php/send-mail.php">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Your name *</label>
                                                <input type="text"   value="" maxlength="100" class="form-control" name="Name" id="name">
                                            </div>
                                            <div class="col-md-6">
                                                <label>Your email address *</label>
                                                <input type="email"   value="" maxlength="100" class="form-control" name="Email" id="email">
                                            </div>
                                        </div>
                                         <div class="row">
                                            <div class="col-md-12">
                                                <label>Subject *</label>
                                                <input type="text"   value="" maxlength="100" class="form-control" name="Email" id="email">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <label>Comment *</label>
                                                <textarea maxlength="5000" rows="10" class="form-control" name="message"  style="height: 138px;" ></textarea>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <input type="submit" value="Send Message" class="btn btn-lg btn-primary">
                                            </div>
                                        </div>
                                    </form>
                                    <!-- End Form Contact -->
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="result"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- End Right Content -->
                    </div>
                </div>

                <!-- Newsletter -->
            
                <!-- End Newsletter -->
            </section>
            <!-- End Section Area -  Content Central -->

            <div class="instagram-btn">
                <div class="btn-instagram">
                    <i class="fa fa-instagram"></i>
                    FOLLOW
                    <a href="https://www.instagram.com/fifaworldcup/" target="_blank">&#64;oasisfootballscout</a>
                </div>
            </div>

            <div class="content-instagram">
                <div id="instafeed"></div>
            </div>
    </div>
</template>