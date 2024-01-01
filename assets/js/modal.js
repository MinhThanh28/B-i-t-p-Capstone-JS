const cartList = document.getElementById("cartList");
const subTotal = document.getElementById("subTotal");
const shipping = document.getElementById("shipping");
const tax = document.getElementById("tax");
const priceTotal = document.getElementById("priceTotal");
const ModalContainer = document.querySelector('.add-modal');
const modal = document.querySelector('.modal');
const cartCount = document.getElementById("cartCount");
const inputact = document.querySelector('#act');

// Hiển thị Danh modal danh sách 
cartCount.addEventListener('click', showModalAdd);

const showModalAdd = (e) => {
    e.preventDefault();
    inputact.value = "new";
    selectTopic.selectedIndex = 0;
    inputName.placeholder = translations[currentLanguage]["namePlaceholder"];
    inputAuthor.placeholder = translations[currentLanguage]["authorPlaceholder"];
    inputId.value = getBookStore().reduce((max, book) => (book.id > max ? book.id : max), 0) + 1;
    ModalContainer.classList.add('active-modal');
};

function show() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'text');
}

function hide() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'password');
}

var pwShown = 0;

document.getElementById("eye").addEventListener("click", function () {
    if (pwShown == 0) {
        pwShown = 1;
        show();
    } else {
        pwShown = 0;
        hide();
    }
}, false);

$(document).ready(function($) {
	// Declare the body variable
	var $body = $("body");

	// Function that shows and hides the sidebar cart
	$(".cart-button, .close-button, #sidebar-cart-curtain").click(function(e) {
		e.preventDefault();
		
		// Add the show-sidebar-cart class to the body tag
		$body.toggleClass("show-sidebar-cart");

		// Check if the sidebar curtain is visible
		if ($("#sidebar-cart-curtain").is(":visible")) {
			// Hide the curtain
			$("#sidebar-cart-curtain").fadeOut(500);
		} else {
			// Show the curtain
			$("#sidebar-cart-curtain").fadeIn(500);
		}
	});
	
	// Function that adds or subtracts quantity when a 
	// plus or minus button is clicked
	$body.on('click', '.plus-button, .minus-button', function () {
		// Get quanitity input values
		var qty = $(this).closest('.qty').find('.qty-input');
		var val = parseFloat(qty.val());
		var max = parseFloat(qty.attr('max'));
		var min = parseFloat(qty.attr('min'));
		var step = parseFloat(qty.attr('step'));

		// Check which button is clicked
		if ($(this).is('.plus-button')) {
			// Increase the value
			qty.val(val + step);
		} else {
			// Check if minimum button is clicked and that value is 
			// >= to the minimum required
			if (min && min >= val) {
				// Do nothing because value is the minimum required
				qty.val(min);
			} else if (val > 0) {
				// Subtract the value
				qty.val(val - step);
			}
		}
	});
});
