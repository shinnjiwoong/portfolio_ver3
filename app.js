

// VARIABLES
const index_btn = document.querySelector('.project-view-index');
const home_btn = document.querySelector('.project-view-home');
const detail_btn = document.querySelector('.project-view-detail');
const intro_page = document.querySelector('.intro-page-container');
const index_page = document.querySelector('.index-page-container');
const detail_page = document.querySelector('.detail-page-container');
const all_project_btn = document.querySelector('.all-project-btn');
const project_lists = document.querySelector('.index-projects-box');
const cursor = document.querySelector('.cursor-container');
const cursor_design = document.querySelector('.cursor');
const intro_title_container = document.querySelector('.intro-title-container');
let intro_title = document.querySelector('.intro-title-1')
let title_slogans = ["신지웅의", "작업물을", "모아놓은", "공간입니다", "안녕하세요", ":)", "언제나", "환영합니다", "둘러보세요", "누구신지는", "모르겠지만", "반가워요", "오래", "머물다", "가세요", "저는", "음악과", "웹을", "사랑하는", "사람입니다"]
let view_mode_flag = "home";
let project_num = project_lists.children.length;
// CURSOR ANIMATION
let window_width = window.innerWidth;
setInterval(function(){
    intro_title.innerText = title_slogans[Math.floor(Math.random() * title_slogans.length)];
    setTimeout(function(){
        intro_title.innerText = "";
    }, 500)
}, 2000)
window.addEventListener("mousemove", (e)=>{
    intro_title_container.style.opacity = `${100/window_width*e.clientX}%`
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
    if(view_mode_flag == "home"){
        cursor_design.style.border = "solid 1.5px rgb(0, 0, 255)"
        cursor_design.style.backgroundColor = "rgb(0, 0, 255, 0.2)"
        if(e.target.classList.contains("project-view-index")||e.target.classList.contains("project-view-home")||e.target.classList.contains("project-view-detail")||e.target.classList.contains("link")){
            cursor_design.style.width = "100px";
            cursor_design.style.height = "100px";
        }else{
            cursor_design.style.width = "20px";
            cursor_design.style.height = "20px";
            cursor_design.style.backgroundColor = "rgb(0, 0, 255)"
        }
    }else if(view_mode_flag == "index"){
        cursor_design.style.border = "solid 1.5px rgb(0, 0, 255)"
        cursor_design.style.backgroundColor = "rgb(0, 0, 255, 0.2)"
        if(e.target.classList.contains("project-view-index")||e.target.classList.contains("project-view-home")||e.target.classList.contains("project-view-detail")||e.target.classList.contains("link")||e.target.classList.contains("all-project-btn")){
            cursor_design.style.width = "100px";
            cursor_design.style.height = "100px";
            }else if(e.target.classList.contains("index-tag-container")){
                cursor_design.style.width = "100px";
                cursor_design.style.height = "100px";
                cursor_design.style.backgroundColor = "rgb(0, 0, 255, 0.2)"
            }else{
                cursor_design.style.width = "20px";
                cursor_design.style.height = "20px";
                cursor_design.style.backgroundColor = "rgb(0, 0, 255)"
            }
    }else if(view_mode_flag == "detail"){
        cursor_design.style.border = "solid 1.5px rgb(0, 0, 255)"
        cursor_design.style.backgroundColor = "rgb(0, 0, 255, 0.2)"
        if(e.target.classList.contains("project-view-index")||e.target.classList.contains("project-view-home")||e.target.classList.contains("project-view-detail")||e.target.classList.contains("link")){
            cursor_design.style.width = "100px";
            cursor_design.style.height = "100px";
            }
        else{
            cursor_design.style.width = "20px";
            cursor_design.style.height = "20px";
            cursor_design.style.backgroundColor = "rgb(0, 0, 255)"
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
    index_btn.style.color = "rgb(0, 0, 255)"
    index_btn.style.border = "solid 1px rgb(0, 0, 255)"
    home_btn.style.color = "rgb(0, 0, 255)"
    home_btn.style.border = "solid 1px rgb(0, 0, 255)"
    detail_btn.style.color = "rgb(0, 0, 255)"
    detail_btn.style.border = "solid 1px rgb(0, 0, 255)"
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
    index_btn.style.color = "rgb(0, 0, 255)"
    index_btn.style.border = "solid 1px rgb(0, 0, 255)"
    home_btn.style.color = "rgb(0, 0, 255)"
    home_btn.style.border = "solid 1px rgb(0, 0, 255)"
    detail_btn.style.color = "rgb(0, 0, 255)"
    detail_btn.style.border = "solid 1px rgb(0, 0, 255)"
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