//Selectors
const section = document.querySelector(".item-row");
const leftArrow = document.querySelector(".fas.fa-chevron-left");
const rightArrow = document.querySelector(".fas.fa-chevron-right");
const pages = document.querySelector(".pages");

//Variables
let duplicate = false;
let duplicatedItem;

//Event listerners
window.addEventListener("DOMContentLoaded", function () {
    displayItems(items[0]);
    displayStorageItems();
    startStorageTime();
    updateTotal(getLocalStorage());
    showPages();
})

//Display mechanism
function displayItems(array) {
    let display = array.map(function (item) {
        return `
    <div class="item-card-test" data-id="${item.id}">
        <div class="card-wrapper">
            <img class="image card-image" src="${item.img}" alt="product">
            <p class="test-name">${item.title}</p>
            <p class="price">
                <span class="full-price">${item.price}</span>
                <span class="unit-price secondary-info"> £13.89/kg </span>
            </p>
            <p class="purchase">
                <input type="number" class="quantity" name="quantity" min="1" max="5" placeholder="0">
                <a class="btn btn-submit" href="#">Add</a>
            </p>
        </div>
    </div>
`;
    });
    display = display.join("");
    section.innerHTML = display;
    let quantity = document.querySelectorAll('.quantity');
    quantity.forEach(function (item) {
        item.addEventListener("keypress", function (evt) {
            if (evt.which < 48 || evt.which > 57) {
                evt.preventDefault();
            }
        });
    })
    let buttons = document.querySelectorAll('.btn-submit');
    buttons.forEach(function (item) {
        item.addEventListener('click', addItem);
        item.addEventListener("click", function (event) {
            event.preventDefault()
        });
    })
    //console.log(buttons)
}


//Creates the error msg container
function errorMsg() {
    const sessionContainer = document.createElement("div");
    sessionContainer.classList.add("session-msg");
    const msgContainer = document.createElement("div");
    msgContainer.classList.add("msg-container");
    const paragraph = document.createElement("p");
    const btn = document.createElement("a");
    btn.classList = "btn btn-submit btn-session";
    btn.addEventListener('click', function () {
        localStorage.clear();
        window.location.reload();
    })
    paragraph.textContent = "Your session has expired!";
    btn.textContent = "Okay";
    msgContainer.appendChild(paragraph);
    msgContainer.appendChild(btn);
    sessionContainer.appendChild(msgContainer);

    document.body.appendChild(sessionContainer);
}

function showPages() {
    for (let i = 0; i < items.length; i++) {
        let current = i;
        const pageBtn = document.createElement("li");
        pageBtn.textContent = current + 1;
        pageBtn.addEventListener('click', function () {
            displayItems(items[current]);
        });
        pages.appendChild(pageBtn);


    }
}