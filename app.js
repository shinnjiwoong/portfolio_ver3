

// VARIABLES
const index_btn = document.querySelector('.project-view-index');
const home_btn = document.querySelector('.project-view-home');
const detail_btn = document.querySelector('.project-view-detail');
const intro_page = document.querySelector('.intro-page-container');
const index_page = document.querySelector('.index-page-container');
const detail_page = document.querySelector('.detail-page-container');
const all_project_btn = document.querySelector('.all-project-btn');
const project_lists = document.querySelector('.index-projects-box');
const top_container = document.querySelector(".top-container");
const bottom_container = document.querySelector(".bottom-container");
const cursor = document.querySelector('.cursor-container');
const cursor_design = document.querySelector('.cursor-img');
const intro_title_container = document.querySelector('.intro-top-bg');
const intro_top_right_bg = document.querySelector('.intro-top-right-bg');
const intro_bottom = document.querySelector(".intro-bottom-bg");
const intro_bottom_right_bg = document.querySelector(".intro-bottom-right-bg");
const bg_container = document.querySelector(".bg-container");
const change_btn = document.querySelector(".change-btn");
const project_wrap = document.querySelector(".project-wrap");
let title_slogans = ["portfolio", "website", ":)"]
let view_mode_flag = "home";
let project_num = project_lists.children.length;

// INTRO PAGE VAR
const intro_music_btn = document.querySelector(".intro-project-links-btn");
const music_container = document.querySelector('.music-container');
const bio_container = document.querySelector(".bio-container");
const intro_bio_btn = document.querySelector(".intro-project-bio-btn");

// INTRO BIO SHOWUP
intro_bio_btn.addEventListener("click", ()=>{
    intro_bio_btn.style.display = 'none'
    bio_container.style.display = 'block'
})
// INTRO MUSIC PLAYER SHOWUP
intro_music_btn.addEventListener('click', ()=>{
    intro_music_btn.style.display = 'none';
    music_container.style.display = 'block'
})
// CHANGE THE BG
change_btn.addEventListener("click", ()=>{
    bg_container.style.zIndex = "100";
    intro_title_container.style.width = "50vw";
    intro_title_container.style.height = "100vh";
    intro_title_container.style.position = "absolute";
    intro_bottom.style.width = "50vw";
    intro_bottom.style.height = "100vh";
    intro_bottom.style.position = "absolute";
    intro_bottom.style.left = "50vw";
    intro_bottom.style.top = "0vh";
    top_container.style.display = 'none';
    bottom_container.style.display = 'none';
    setTimeout(function(){
        project_wrap.style.opacity = "100%"
        project_wrap.style.zIndex = "110";
    }, 500);
})

// CURSOR ANIMATION
let window_width = window.innerWidth;
let window_height = window.innerHeight;
// setInterval(function(){
//     intro_title_container.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
//     // intro_title.innerText = title_slogans[Math.floor(Math.random() * title_slogans.length)];
//     let r = Math.floor(Math.random() * 255);
//     let g = Math.floor(Math.random() * 255);
//     let b = Math.floor(Math.random() * 255);
//     intro_bottom.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
// }, 2000)

window.addEventListener('click', ()=>{
    randomColorChange(intro_title_container)
    randomColorChange(intro_top_right_bg)
    randomColorChange(intro_bottom)
    randomColorChange(intro_bottom_right_bg)
});
function randomColorChange(e){
    console.log('clicked!')
    e.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
}
window.addEventListener("mousemove", (e)=>{
    // intro top & bottom color change
    // intro_title_container.style.opacity = `${100/window_width*e.clientX}%`;
    // intro_bottom.style.opacity = `${100/window_height*e.clientY}%`
    // Cursor change
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
    if(view_mode_flag == "home"){
        // cursor_design.style.border = "solid 1.5px rgb(25, 25, 25)"
        // cursor_design.style.backgroundColor = "rgb(25, 25, 25, 0.2)"
        if(e.target.classList.contains("intro-project-index-btn")||e.target.classList.contains("intro-project-links-btn")||e.target.classList.contains("intro-project-overview-btn")||e.target.classList.contains("intro-project-bio-btn")||e.target.classList.contains("track-title")){
            cursor_design.setAttribute('src', 'assets/web_logo/cursor/main_cursor.png')
            cursor_design.style.animation = "rotate_image 2s linear infinite"
            cursor_design.style.width = "30px"
            cursor_design.style.height = "30px"
        }
        else if(e.target.classList.contains("link")){
            cursor_design.setAttribute('src', 'assets/web_logo/cursor/link.png')
            cursor_design.style.animation = "none"
            cursor_design.style.width = "30px"
            cursor_design.style.height = "30px"
        }
        else{
            cursor_design.setAttribute('src', 'assets/web_logo/cursor/esc.png')
            cursor_design.style.animation = "rotate_image 2s linear infinite"
            cursor_design.style.width = "20px"
            cursor_design.style.height = "20px"
        }
    }else if(view_mode_flag == "index"){
        cursor_design.style.border = "solid 1.5px rgb(25, 25, 25)"
        // cursor_design.style.backgroundColor = "rgb(25, 25, 25, 0.2)"
        if(e.target.classList.contains("project-view-index")||e.target.classList.contains("project-view-home")||e.target.classList.contains("project-view-detail")||e.target.classList.contains("link")||e.target.classList.contains("all-project-btn")){
            cursor_design.style.width = "100px";
            cursor_design.style.height = "100px";
            cursor_design.style.borderRadius = "100%"
            }else if(e.target.classList.contains("index-tag-container")){
                cursor_design.style.width = "100px";
                cursor_design.style.height = "100px";
                cursor_design.style.borderRadius = "100%"
                // cursor_design.style.backgroundColor = "rgb(25, 25, 25, 0.2)"
            }else{
                cursor_design.style.width = "10px";
                cursor_design.style.height = "10px";
                cursor_design.style.borderRadius = "0%"
                // cursor_design.style.backgroundColor = "rgb(25, 25, 25)"
            }
    }else if(view_mode_flag == "detail"){
        cursor_design.style.border = "solid 1.5px rgb(250, 250, 250)"
        // cursor_design.style.backgroundColor = "rgb(250, 250, 250, 0.2)"
        if(e.target.classList.contains("project-view-index")||e.target.classList.contains("project-view-home")||e.target.classList.contains("project-view-detail")||e.target.classList.contains("detail-left-click")||e.target.classList.contains("detail-right-click")){
            cursor_design.style.width = "100px";
            cursor_design.style.height = "100px";
            cursor_design.style.borderRadius = "100%"
            }
        else{
            cursor_design.style.width = "10px";
            cursor_design.style.height = "10px";
            cursor_design.style.borderRadius = "0%"
            cursor_design.style.backgroundColor = "rgb(250, 250, 250)"
        }
    }
})

// INTRO PAGE ANIMATION
window.addEventListener("load", ()=>{
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
index_btn.addEventListener('click', ()=>{
    view_mode_flag = "index";
    intro_page.style.top = "-100vh";
    index_page.style.top = "0vh";
    detail_page.style.top = "100vh"
    index_btn.style.color = "rgb(25, 25, 25)"
    index_btn.style.border = "solid 1px rgb(25, 25, 25)"
    home_btn.style.color = "rgb(25, 25, 25)"
    home_btn.style.border = "solid 1px rgb(25, 25, 25)"
    detail_btn.style.color = "rgb(25, 25, 25)"
    detail_btn.style.border = "solid 1px rgb(25, 25, 25)"
})
home_btn.addEventListener('click', ()=>{
    view_mode_flag = "home";
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
    view_mode_flag = "detail";
    intro_page.style.top = "-200vh";
    index_page.style.top = "-100vh";
    detail_page.style.top = "0vh";
    index_btn.style.color = "rgb(250, 250, 250)"
    index_btn.style.border = "solid 1px rgb(250, 250, 250)"
    home_btn.style.color = "rgb(250, 250, 250)"
    home_btn.style.border = "solid 1px rgb(250, 250, 250)"
    detail_btn.style.color = "rgb(250, 250, 250)"
    detail_btn.style.border = "solid 1px rgb(250, 250, 250)"
})

// TAG FILTERING
function filtering_tags(tag){
    console.log(tag)
    
    for(let i = 0; i<project_num; i++){
        let flag = false
        let tag_childs = project_lists.children[i].children[0].children[3].children;
        let child_num = project_lists.children[i].children[0].children[3].children.length;
        for(let j = 0; j<child_num; j++){
            // console.log(tag_childs[j].classList[1])
            if(tag_childs[j].classList[1] == tag){
                flag = true
                project_lists.children[i].style.display = "block";
                break;
            };
        }
        if(flag == false){
            project_lists.children[i].style.display = "none";
        }
    }
}
window.addEventListener("click", (e)=>{
    // console.log(e.target)
    const classes = e.target.classList
    let tag_type = ""
    if(classes.contains("index-tag-container")){
        all_project_btn.style.opacity = "100%";
        all_project_btn.style.pointerEvents = "auto";
        tag_type = classes[1];
        filtering_tags(tag_type);
    }
    
})

all_project_btn.addEventListener("click", ()=>{
    for(let i = 0; i<project_num; i++){
        project_lists.children[i].style.display = "block";
    }
    all_project_btn.style.opacity = "0%";
    all_project_btn.style.pointerEvents = "none";
})