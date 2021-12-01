jQuery(document).ready(function($){
    $('dd').hide();
    $('dt').click(function(){
        //Expands FAQ Answers
        $(this).next().slideToggle('slow');

        //Toggle Plus/Minus icon on FAQ Expansion
        let icon = $(this).find('.expand-icon').children();

        if(icon.hasClass('fa-plus-circle')){
            icon.removeClass('fa-plus-circle').addClass('fa-minus-circle');
        } else {
            icon.removeClass('fa-minus-circle').addClass('fa-plus-circle');
        }
    })

    //Check email form and enable submit button when filled out
    $('.emailForm textarea').keypress(function(){
        if($('.emailForm #name').val() != '' && $('.emailForm #email').val() != ''){
            $('.submit-button').prop('disabled', false);
        }
    })

    //For Mobile navigation
    $(window).resize(function(){
        if ($(window).width() < 992){
            $('.mobile-menu').addClass('navbar-collapse');
        } else {
            $('.mobile-menu').removeClass('navbar-collapse');
        }
    })
    //For when the window starts small
    if ($(window).width() < 992){
        $('.mobile-menu').addClass('navbar-collapse');
    }

    //For Mobile Navigaion
    $('.mobile-child-menu').hide();
    $('.mobile-menu-item').click(function(){
        $(this).children('.mobile-child-menu').slideToggle();

        //Toggle up/down caret
        let icon = $(this).find('.menu-expand-icon').children();

        if(icon.hasClass('fa-caret-down')){
            icon.removeClass('fa-caret-down').addClass('fa-caret-up');
        } else {
            icon.removeClass('fa-caret-up').addClass('fa-caret-down');
        }
    })

    $('.displayHours').append(displayHours());

	!$(function(){
		$('#chat-button').click(function(){ 
			$("#iframeHolder").toggle();
			if(!$('#iframe').length) {
                $('#iframeHolder').html('<iframe src="https://libraryh3lp.com/chat/nicref@chat.libraryh3lp.com?skin=29545" title="Chat box for website assistance" style="width: 100%; height: 100%"></iframe>');
			}
		});
		$("#iframeHolder").hide();
	});
	
	!$(function(){
		$(document).on('click','.navbar-collapse.in',function(e) {
		if( $(e.target).is('a:not(".dropdown-toggle")') ) {
			$(this).collapse('hide');
		}
		});
	});

	const theme = document.querySelector("#theme-link");
	!$(function(){
		if (localStorage.getItem("hasvisited") == 1) {
			theme.href = localStorage.getItem("colorscheme");
		} else {
			localStorage.setItem("hasvisited", 1);
			theme.href = "http://library.anderson.edu/themes/niclib2021/assets/css/main.css";
		}
	});	
	
	$('#light_switch').click(function(){
		// Swap out the URL for different sites (https://libtest.anderson.edu/drupal/drupal-8/themes/niclib2021/assets/css/main.css)
		if (theme.getAttribute("href") == "http://library.anderson.edu/themes/niclib2021/assets/css/main.css") {
			theme.href = "http://library.anderson.edu/themes/niclib2021/assets/css/main-dark.css";
		} else {
			theme.href = "http://library.anderson.edu/themes/niclib2021/assets/css/main.css";
		}
		localStorage.setItem("colorscheme", theme.href);
	});
	
})