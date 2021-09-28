$(window).ready(function(){
    $('.single-item').slick();

    let menu_img = $("header div.right div.menu img");
    let menu = $("header div.right div.menu");
    let menu_items = $("header div.right div.menu-items");
    let body_content = $("#body-content");
    let midil = $("header div.right div.top-right")

    $(menu_img).on("click", ()=>{
        $(menu).toggleClass("active");
        $(menu_items).toggleClass("active");
        $(body_content).toggleClass("active");
        $(midil).toggleClass("active");

    })
})