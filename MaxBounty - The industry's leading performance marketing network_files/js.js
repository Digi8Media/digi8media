$(document).ready(function(){
    // Fade in effects
    $('.fadeIn').css({'opacity':0, 'position':'relative','bottom':-25});
    setTimeout(function(){
        $('.fadeIn1').animate({'opacity':1,'bottom':0});
    }, 500);
    setTimeout(function(){
        $('.fadeIn2').animate({'opacity':1,'bottom':0});
    }, 650);
    setTimeout(function(){
        $('.fadeIn3').animate({'opacity':1,'bottom':0});
    }, 800);

    // Scroll based effects
    $(window).scroll(scrollEffects);
     
    function scrollEffects(){

        var windowScroll = $(window).scrollTop();

        // Hero parallax
            var heroHeight = $('.hero-parallax').height();
            var backgroundPosition = -(windowScroll / heroHeight) * 200;
            $('.hero-parallax').css('background-position-y', backgroundPosition);

        // Fade in text
            $('.scroll-fade').each(function(){

                var eTop = $(this).offset().top; //get the offset top of the element             
                var eOffset = eTop - (($(window).height())*.85); // Get the scroll height where the section should begin to appear

                var sectionHeight = $(this).height(); // Get the height of the section
                if (sectionHeight < 200){
                    fullOpacityHeight = 150;
                }else{
                    fullOpacityHeight = sectionHeight * .4;
                }

                var fullView = eOffset + fullOpacityHeight; // Get the scroll height where the section should be at full opacity

                var opacity = (windowScroll - eOffset) / (fullView - eOffset);

                if (opacity < 0){
                    opacity = 0;
                } else if (opacity > 1){
                    opacity = 1;
                }

                $(this).css('opacity',opacity);

            })
        
    }

    // Help Modal
    $(".help_modal").click(function(){
        
        var help_id = $(this).attr("id");

        var postData ={
            help_id: help_id
            }

            $.ajax({
                type: "post",
                url: "includes/help.cfm",
                contentType: "application/json",
                data:JSON.stringify(postData),
                datatype: "json",
                success: function(data){
                    $("#help_message").html(data);
                }
            })
    })

    //Contact Form
    //Date picker for contact form
    $(document).ready(function(){
        $('.datepicker').datetimepicker({
            format: "yyyy/mm/dd",
            minView: 2,
        });
    });

    //contact form buttons

    $(document).ready(function(){

        $("#contact_affiliate_button").click(function(){
            $("#contact_affiliate").removeClass("contact_hide");
            $(".contact_basic").addClass("contact_hide")
        })

        $("#contact_advertiser_button").click(function(){
            $("#contact_advertiser").removeClass("contact_hide");
            $(".contact_basic").addClass("contact_hide")
        })

        $("#contact_benefit_button").click(function(){
            $("#contact_benefit").removeClass("contact_hide");
            $(".contact_basic").addClass("contact_hide")
        })

        $("#contact_feedback_button").click(function(){
            $("#contact_feedback").removeClass("contact_hide");
            $(".contact_basic").addClass("contact_hide")
        })

        $("#contact_abuse_button").click(function(){
            $("#contact_abuse").removeClass("contact_hide");
            $(".contact_basic").addClass("contact_hide")
        })

        $("#contact_pr_button").click(function(){
            $("#contact_pr").removeClass("contact_hide");
            $(".contact_basic").addClass("contact_hide")
        })

        $("#contactModal").on('hidden.bs.modal', function () {
            $("#contact_affiliate").addClass("contact_hide");
            $("#contact_advertiser").addClass("contact_hide");
            $("#contact_benefit").addClass("contact_hide");
            $("#contact_feedback").addClass("contact_hide");
            $("#contact_abuse").addClass("contact_hide");
            $("#contact_pr").addClass("contact_hide");
            $(".contact_basic").removeClass("contact_hide");
        })

    })

    // Contact form submission
    // Advertiser
    $('#form_contact_advertiser').submit(function(e){
        e.preventDefault();

        //name
        var name = $("#ad_name").val();

         //company
        var company = $("#ad_company_name").val();

        //email
        var email = $("#ad_email").val();

        //phone
        var phone = $("#ad_phone").val();

        //skype
        var skype_handle = $("#skype_handle").val();

        //campaign_name
        var campaign_name = $("#campaign").val();

        //url
        var url = $("#sample_url").val();

        //rate
        var rate = $("#rate").val();    

        //value
        var ctype = $("#ctype").val();

        //system
        var tsystem = $("#tsystem").val();

        //spend
        var spend = $("#ad_spend").val();

        //Geographical
        var geo = $("#ad_geo").val();

        //date
        var date = $("#receive_traffic").val();

        //listed
        var listed = $("#listed").val();

        //notes
        var message = $("#ad_notes").val();

        //who
        var who_contact = $("#advertiser_key").val();

        //which
        var which_form = $("#advertiser_ident").val();
        

        var postData ={
            who_contact: who_contact,
            which_form: which_form,
            name: name,
            company: company,
            email: email,
            phone: phone,
            skype_handle: skype_handle,
            campaign_name: campaign_name,
            url: url,
            rate: rate,
            ctype: ctype,
            tsystem: tsystem,
            spend: spend,
            geo: geo,
            date: date,
            listed: listed,
            message: message
            }

            $.ajax({
                type: "post",
                url: "contact_send.cfm",
                contentType: "application/json",
                data:JSON.stringify(postData),
                success: function(){
                    $('#contactModal').modal('toggle');
                    $('#successModal').modal('toggle');
                }
            })
    })

    // Affliates
    $('#form_contact_affiliate').submit(function(e){
        e.preventDefault();

        //name
        var name = $("#af_name").val();

         //company
        var company = $("#af_company_name").val();

        //email
        var email = $("#af_email").val();

        //phone
        var phone = $("#af_phone").val();

        //message
        var message = $("#af_message").val(); 

        //who
        var who_contact = $("#affiliate_key").val();

        //which
        var which_form = $("#affiliate_ident").val();

        var postData ={
            who_contact: who_contact,
            which_form: which_form,
            name: name,
            company: company,
            email: email,
            phone: phone,
            message: message
            }

            $.ajax({
                type: "post",
                url: "contact_send.cfm",
                contentType: "application/json",
                data:JSON.stringify(postData),
                success: function(){
                    $('#contactModal').modal('toggle');
                    $('#successModal').modal('toggle');
                }
            })
    })

    // Benefits
    $('#form_contact_benefit').submit(function(e){
        e.preventDefault();

        //name
        var name = $("#ben_name").val();

         //company
        var company = $("#ben_company_name").val();

        //email
        var email = $("#ben_email").val();

        //phone
        var phone = $("#ben_phone").val();

        //url
        var url = $("#ben_url").val(); 

        //message
        var message = $("#ben_message").val(); 

        //who
        var who_contact = $("#benefit_key").val();

        //which
        var which_form = $("#benefit_ident").val();

        var postData ={
            who_contact: who_contact,
            which_form: which_form,
            name: name,
            company: company,
            email: email,
            phone: phone,
            url: url,
            message: message
            }

            $.ajax({
                type: "post",
                url: "contact_send.cfm",
                contentType: "application/json",
                data:JSON.stringify(postData),
                success: function(){
                    $('#contactModal').modal('toggle');
                    $('#successModal').modal('toggle');
                }
            })
    })

    // Feedback
    $('#form_contact_feedback').submit(function(e){
        e.preventDefault();

        //name
        var name = $("#feedback_name").val();

         //company
        var company = $("#feedback_company_name").val();

        //email
        var email = $("#feedback_email").val();

        //phone
        var phone = $("#feedback_phone").val();

        //message
        var message = $("#feedback_message").val(); 

        //who
        var who_contact = $("#feedback_key").val();

        //which
        var which_form = $("#feedback_ident").val();

        var postData ={
            who_contact: who_contact,
            which_form: which_form,
            name: name,
            company: company,
            email: email,
            phone: phone,
            message: message
            }

            $.ajax({
                type: "post",
                url: "contact_send.cfm",
                contentType: "application/json",
                data:JSON.stringify(postData),
                success: function(){
                    $('#contactModal').modal('toggle');
                    $('#successModal').modal('toggle');
                }
            })
    })

    // abuse
    $('#form_contact_abuse').submit(function(e){
        e.preventDefault();

        //name
        var name = $("#abuse_name").val();

         //company
        var company = $("#abuse_company_name").val();

        //email
        var email = $("#abuse_email").val();

        //phone
        var phone = $("#abuse_phone").val();

        //message
        var message = $("#abuse_message").val(); 

        //who
        var who_contact = $("#abuse_key").val();

        //which
        var which_form = $("#abuse_ident").val();

        var postData ={
            who_contact: who_contact,
            which_form: which_form,
            name: name,
            company: company,
            email: email,
            phone: phone,
            message: message
            }

            $.ajax({
                type: "post",
                url: "contact_send.cfm",
                contentType: "application/json",
                data:JSON.stringify(postData),
                success: function(){
                    $('#contactModal').modal('toggle');
                    $('#successModal').modal('toggle');
                }
            })
    })

    // Public Relations
    $('#form_contact_pr').submit(function(e){
        e.preventDefault();

        //name
        var name = $("#pr_name").val();

         //company
        var company = $("#pr_company_name").val();

        //email
        var email = $("#pr_email").val();

        //phone
        var phone = $("#pr_phone").val();

        //message
        var message = $("#pr_message").val(); 

        //who
        var who_contact = $("#pr_key").val();

        //which
        var which_form = $("#pr_ident").val();

        var postData ={
            who_contact: who_contact,
            which_form: which_form,
            name: name,
            company: company,
            email: email,
            phone: phone,
            message: message
            }

            $.ajax({
                type: "post",
                url: "contact_send.cfm",
                contentType: "application/json",
                data:JSON.stringify(postData),
                success: function(){
                    $('#contactModal').modal('toggle');
                    $('#successModal').modal('toggle');
                }
            })
    })

    //close contact Modals
    $(".close-contact-modal").click(function(e){
        e.preventDefault();
        $("#contactModal").modal("hide");
    });

})