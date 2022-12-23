// VARIABLES
const index_btn = document.querySelector('.project-view-index');
const home_btn = document.querySelector('.project-view-home');
const detail_btn = document.querySelector('.project-view-detail');
const intro_page = document.querySelector('.intro-page-container');
const index_page = document.querySelector('.index-page-container');
const detail_page = document.querySelector('.detail-page-container');
// INTRO PAGE ANIMATION
index_btn.addEventListener('click', ()=>{
    intro_page.style.top = "-100vh";
    index_page.style.top = "0vh";
    detail_page.style.top = "100vh"
    index_btn.style.color = "rgb(0, 0, 250)"
    index_btn.style.border = "solid 1px rgb(0, 0, 250)"
    home_btn.style.color = "rgb(0, 0, 250)"
    home_btn.style.border = "solid 1px rgb(0, 0, 250)"
    detail_btn.style.color = "rgb(0, 0, 250)"
    detail_btn.style.border = "solid 1px rgb(0, 0, 250)"
})
home_btn.addEventListener('click', ()=>{
    intro_page.style.top = "0vh";
    index_page.style.top = "100vh";
    detail_page.style.top = "200vh"
    index_btn.style.color = "rgb(25, 25, 25)"
    index_btn.style.border = "solid 1px rgb(25, 25, 25)"
    home_btn.style.color = "rgb(25, 25, 25)"
    home_btn.style.border = "solid 1px rgb(25, 25, 25)"
    detail_btn.style.color = "rgb(25, 25, 25)"
    detail_btn.style.border = "solid 1px rgb(25, 25, 25)"
})
detail_btn.addEventListener("click", ()=>{
    intro_page.style.top = "-200vh";
    index_page.style.top = "-100vh";
    detail_page.style.top = "0vh";
    index_btn.style.color = "var(--font-color-white)"
    index_btn.style.border = "solid 1px var(--font-color-white)"
    home_btn.style.color = "var(--font-color-white)"
    home_btn.style.border = "solid 1px var(--font-color-white)"
    detail_btn.style.color = "var(--font-color-white)"
    detail_btn.style.border = "solid 1px var(--font-color-white)"
})