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

