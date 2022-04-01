console.log("hola mundo");

let bookmarkLogo = document.getElementById("logo-bookmark");
let bookmarkText = document.getElementById("bookmark-text");

let modal = document.getElementById("modal");

let modalPrice = document.getElementsByClassName("modal__price");

let radioInput = document.getElementsByName("priceRadio");

let menuButton = document.getElementById("menu-button");
let menuItems = document.getElementById("menu-items");

function changeBookmark() {
    bookmarkLogo.classList.toggle("logo-active");
    bookmarkText.classList.toggle("bookmarkText-active");
}

function openModal() {
    modal.classList.add("modal--open");
}

function closeModal() {
    modal.classList.remove("modal--open");
}

function checkRadioValue() {
    var found = 1;

    clearClassRadio();
    for (var i = 0; i < radioInput.length; i++) {
        modalPrice[i].classList.remove("modal__price--active");
        if (radioInput[i].checked) {
            modalPrice[i].classList.add("modal__price--active");
            togglePledge(radioInput[i].value);
            found = 0;
            break;
        }
    }
    if (found == 1) {
        alert("Please Select Radio");
    }
}

function clearClassRadio() {
    for (let i = 0; i < modalPrice.length; i++) {
        modalPrice[i].classList.remove("modal__price--active");
    }
}

function pledgeSuccess(event) {
    event.preventDefault();
    let message =
        "Your pledge brings us one step closer to    sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.";
    closeModal();
    Swal.fire("Thanks for your support!", message, "success");
}

function togglePledge(value) {
    let Pledge = document.getElementById(value);
    if (value === "noReward") {
        document.getElementById("reward1").style.display = "none";
        document.getElementById("reward2").style.display = "none";
        Pledge.style.display = "flex";
    } else if (value === "reward1") {
        document.getElementById("noReward").style.display = "none";
        document.getElementById("reward2").style.display = "none";
        Pledge.style.display = "flex";
    } else if (value === "reward2") {
        document.getElementById("noReward").style.display = "none";
        document.getElementById("reward1").style.display = "none";
        Pledge.style.display = "flex";
    }
}

function handleMenuClick(e) {
    e.classList.toggle("change");
    menuItems.classList.toggle("nav__items-menu");
}
