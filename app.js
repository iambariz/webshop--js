const section = document.querySelector(".item-row");

window.addEventListener("DOMContentLoaded", function () {
    displayItems(items)
})

//display
function displayItems(array) {
    let display = array.map(function (item) {
        return `
    <div class="item-card-test" dataset="${item.id}">
        <div class="card-wrapper">
            <img class="image card-image" src="${item.img}" alt="product">
            <p class="test-name">${item.title}</p>
            <p class="price">
                <span class="full-price">${item.price}</span>
                <span class="unit-price secondary-info">£13.89/kg </span></p>
            <p class="purchase">
                <input type="number" class="quantity" name="quantity" min="1" max="5">
                <a class="btn btn-submit" href="#">Add</a>
            </p>
        </div>
    </div>
`;
    });
    display = display.join("");
    section.innerHTML = display;
    let buttons = document.querySelectorAll('.btn-submit');
    buttons.forEach(function (item) {
        item.addEventListener('click', addItem);
    })
    console.log("Works");
    console.log(buttons)
}

function addItem(e) {
    console.log(e.target);
}

console.log(buttons)