// variables for element selectors
var clickable_item = document.querySelectorAll(".clickable-item");
var major_linksPopup = document.querySelector(".major-nav-links-info");
var minor_linksPopup = document.querySelector(".minor-nav-links-info");
var check_out_link = document.querySelectorAll(".checkout-basket-header, .checkout-basket-footer");
var product_picture = document.querySelectorAll(".grid-item>img, .grid-item>.product-info>div>p:nth-child(4)");
var buy_button = document.querySelectorAll(".buy-button");
var socials_icons = document.querySelectorAll(".instagram-icon, .facebook-icon");


// all function below
function showPopupMajor(){
    // major links show popup
    major_linksPopup.classList.toggle("is-visible");
}
function showPopupMinor(){
    // minor links show popup
    minor_linksPopup.classList.toggle("is-visible");
}
function hidePopup(){
    //hide popup
    major_linksPopup.classList.remove("is-visible");
    minor_linksPopup.classList.remove("is-visible");
}

// add click listener to clickable objects and perform relevant task
for(i=0; i<clickable_item.length; i++){
    // console.log(i, clickable_item[i].innerText,clickable_item[i])
    clickable_item[i].style.cursor = "pointer";

    if (clickable_item[i].innerText === "CLOSE"){
        clickable_item[i].addEventListener("click", hidePopup);
    }

    if (clickable_item[i].innerText === "SICK GALLERY"){
        clickable_item[i].addEventListener("click", function(){
            window.location="product.html"
        });
    }
    if(clickable_item[i].innerText === "Artist"){
        clickable_item[i].addEventListener("click", showPopupMajor);
    }
    if(clickable_item[i].innerText === "Artist"){
        clickable_item[i].addEventListener("click", showPopupMajor);
    }
    if(clickable_item[i].innerText === "Collection"){
        clickable_item[i].addEventListener("click", showPopupMajor);
    }
    if(clickable_item[i].innerText === "Products"){
        clickable_item[i].addEventListener("click", showPopupMajor);
    }
    if(clickable_item[i].innerText === "show all"){
        clickable_item[i].addEventListener("click", showPopupMajor);
    }
    if(clickable_item[i].innerText === "Shipping & Returns"){
        clickable_item[i].addEventListener("click", showPopupMinor);
    }
    if(clickable_item[i].innerText === "Terms & Conditions"){
        clickable_item[i].addEventListener("click", showPopupMinor);
    }
    if(clickable_item[i].innerText === "About Us"){
        clickable_item[i].addEventListener("click", showPopupMinor);
    }
}

// buy and checkout links
for(i=0; i<check_out_link.length; i++){
    check_out_link[i].addEventListener("click", function(){
        window.location="#";
    })
}
for(i=0; i<buy_button.length; i++){
    buy_button[i].addEventListener("click", function(){
        window.location="#";
    })
}

// go to product_product_page on click of product tile pictures
for(i=0; i<product_picture.length; i++){
    product_picture[i].addEventListener("click", function(){
        window.location="product_product_page.html";
    })
}

// socials icons click listener
for(i=0; i<socials_icons.length; i++){
    if(socials_icons[i].isSameNode(document.querySelector(".facebook-icon"))){
        socials_icons[i].addEventListener("click", function(){
            window.location="https://facebook.com";
        })
    }
    if(socials_icons[i].isSameNode(document.querySelector(".instagram-icon"))){
        socials_icons[i].addEventListener("click", function(){
            window.location="https://instagram.com/sickgallery";
        })
    }
} 
