
if(screen.width < 1000)
{
	$('.serv_slider').slick({
		dots: false,
		infinite: false,
		slidesToScroll: 1,
		slidesToShow: 2,
		responsive: [
		{
			breakpoint: 750,
			settings: {
				slidesToShow: 1
			}
		}
		],
		prevArrow: '<div class="prev-photo"><svg width="28" height="15" viewBox="0 0 28 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.3524 7.23819L20.2584 0.144165L18.5773 1.83222L22.5547 5.80959H0.904785V8.19054H23.0309L18.5773 12.6442L20.2584 14.3322L27.3524 7.23819Z" fill="white"></path></svg></div>',
		nextArrow: '<div class="next-photo"><svg width="28" height="15" viewBox="0 0 28 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.3524 7.23819L20.2584 0.144165L18.5773 1.83222L22.5547 5.80959H0.904785V8.19054H23.0309L18.5773 12.6442L20.2584 14.3322L27.3524 7.23819Z" fill="white"></path></svg></div>'
	});
}

$('.news_slider').slick({
	dots: false,
	infinite: false,
	slidesToScroll: 1,
	variableWidth: true,
	responsive: [
		{
			breakpoint: 750,
			settings: {
				variableWidth: false,
				slidesToShow: 1
			}
		}
		],
	prevArrow: '<div class="prev-photo"><svg width="28" height="15" viewBox="0 0 28 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.3524 7.23819L20.2584 0.144165L18.5773 1.83222L22.5547 5.80959H0.904785V8.19054H23.0309L18.5773 12.6442L20.2584 14.3322L27.3524 7.23819Z" fill="white"></path></svg></div>',
	nextArrow: '<div class="next-photo"><svg width="28" height="15" viewBox="0 0 28 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.3524 7.23819L20.2584 0.144165L18.5773 1.83222L22.5547 5.80959H0.904785V8.19054H23.0309L18.5773 12.6442L20.2584 14.3322L27.3524 7.23819Z" fill="white"></path></svg></div>'
});

$('.works_slider').slick({
	dots: false,
	infinite: false,
	slidesToScroll: 1,
	variableWidth: true,
	responsive: [
		{
			breakpoint: 750,
			settings: {
				variableWidth: false,
				slidesToShow: 1
			}
		}
		],
	prevArrow: '<div class="prev-photo"><svg width="28" height="15" viewBox="0 0 28 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.3524 7.23819L20.2584 0.144165L18.5773 1.83222L22.5547 5.80959H0.904785V8.19054H23.0309L18.5773 12.6442L20.2584 14.3322L27.3524 7.23819Z" fill="white"></path></svg></div>',
	nextArrow: '<div class="next-photo"><svg width="28" height="15" viewBox="0 0 28 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.3524 7.23819L20.2584 0.144165L18.5773 1.83222L22.5547 5.80959H0.904785V8.19054H23.0309L18.5773 12.6442L20.2584 14.3322L27.3524 7.23819Z" fill="white"></path></svg></div>'
});

/********меню***************/
if(screen.width < 750)
{
	$('header .menu_butt').on('click', function() {
		$('header .burger').toggleClass("active");
		$('header .menu_hide').fadeToggle(400);
		$('body').toggleClass("overflow");
	});
}
else
{
	$('header .menu_butt').on('click', function() {
		$('header .burger').toggleClass("active");
		$('header .menu_hide').slideToggle(400);
		$('body').toggleClass("overflow");
	});
}

/********меню***************/

/*******скролл**********/
var $w = $(window);
var $menu_lang = $('header .menu_lang');
var $header = $('header');

window.addEventListener('scroll', function(){
	
	if($w.scrollTop() == 0)
	{
		$menu_lang.removeClass('hide');
		$header.css('background', 'none');
	}
	else
	{
		$menu_lang.addClass('hide');
		$header.css('background', '#0b0333');
	}
});

/*******скролл**********/

$('.conf .conf_slider').slick({
	dots: false,
	infinite: true,
	slidesToScroll: 1,
	variableWidth: true,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
				variableWidth: false
			}
		}
	],
	responsive: [
		{
			breakpoint: 750,
			settings: {
				slidesToShow: 1,
				variableWidth: false
			}
		}
	],
	prevArrow: '<div class="prev-photo"><svg width="28" height="15" viewBox="0 0 28 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.3524 7.23819L20.2584 0.144165L18.5773 1.83222L22.5547 5.80959H0.904785V8.19054H23.0309L18.5773 12.6442L20.2584 14.3322L27.3524 7.23819Z" fill="white"></path></svg></div>',
	nextArrow: '<div class="next-photo"><svg width="28" height="15" viewBox="0 0 28 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.3524 7.23819L20.2584 0.144165L18.5773 1.83222L22.5547 5.80959H0.904785V8.19054H23.0309L18.5773 12.6442L20.2584 14.3322L27.3524 7.23819Z" fill="white"></path></svg></div>'
});

/**показать больше**/
Create_More_Items_System(3, 3, '.more_items_box', '.news_item', 'hide');

function Create_More_Items_System(number_initially_visible, delta_items, selector_button_parent, selector_item, hide_class)
{
	var all_elements = document.querySelectorAll(selector_item);
	var amount = all_elements.length;
	if(amount != 0)
	{
		if (amount  > number_initially_visible)
		{
			var j = 0;
			for (let item of all_elements)
			{
				j++;
				if(j > number_initially_visible)
				{
					item.classList.add(hide_class);
				}
			}

			var parent = document.querySelector(selector_button_parent);
			
			parent.innerHTML = `
				<div class="about_ref more_items">
					<div class="round"></div>
					<div class="text">Показать ещё</div>
					<svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0 7.63806L12.17 7.63806L8.59 11.3946L10 12.8701L16 6.59166L10 0.313232L8.59 1.78866L12.17 5.54525L1.74846e-07 5.54525L0 7.63806Z" fill="white"></path>
					</svg>
				</div>
			`;
			
			Click_Button_More_Items(delta_items, all_elements, '.about_ref.more_items', 'hide');
		}
	}
}

function Click_Button_More_Items(num_records, elements_reff, button_selector, hide_class)
{
	document.querySelector(button_selector).addEventListener("click", function(){
	    var num = 0;
	    for (let item of elements_reff)
	    {
	        if((item.classList.contains(hide_class)) && (num < num_records))
	        {
	            item.classList.remove(hide_class);
	            num++;
	        }
	    }
	    if (num == 0)
	    {
	        document.querySelector(button_selector).remove();
	    }
	});
}
/**показать больше**/

