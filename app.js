

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
let view_mode_flag = "home";
let project_num = project_lists.children.length;
// CURSOR ANIMATION
window.addEventListener("mousemove", (e)=>{
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
    if(view_mode_flag == "home"){
        cursor_design.style.border = "solid 1.5px rgb(0, 255, 0)"
        cursor_design.style.backgroundColor = "rgb(0, 255, 0, 0.7)"
        if(e.target.classList.contains("project-view-index")||e.target.classList.contains("project-view-home")||e.target.classList.contains("project-view-detail")||e.target.classList.contains("link")){
            cursor_design.style.width = "100px";
            cursor_design.style.height = "100px";
        }else{
            cursor_design.style.width = "20px";
            cursor_design.style.height = "20px";
            cursor_design.style.backgroundColor = "rgb(0, 255, 0)"
        }
    }else if(view_mode_flag == "index"){
        cursor_design.style.border = "solid 1.5px rgb(0, 255, 0)"
        cursor_design.style.backgroundColor = "rgb(0, 255, 0, 0.7)"
        if(e.target.classList.contains("project-view-index")||e.target.classList.contains("project-view-home")||e.target.classList.contains("project-view-detail")||e.target.classList.contains("link")){
            cursor_design.style.width = "100px";
            cursor_design.style.height = "100px";
            }else if(e.target.classList.contains("index-tag-container")){
                cursor_design.style.width = "100px";
                cursor_design.style.height = "100px";
                cursor_design.style.backgroundColor = "rgb(0, 255, 0, 0.7)"
            }else{
                cursor_design.style.width = "20px";
                cursor_design.style.height = "20px";
                cursor_design.style.backgroundColor = "rgb(0, 255, 0)"
            }
    }else if(view_mode_flag == "detail"){
        cursor_design.style.border = "solid 1.5px rgb(0, 255, 0)"
        cursor_design.style.backgroundColor = "rgb(0, 255, 0, 0.7)"
        if(e.target.classList.contains("project-view-index")||e.target.classList.contains("project-view-home")||e.target.classList.contains("project-view-detail")||e.target.classList.contains("link")){
            cursor_design.style.width = "100px";
            cursor_design.style.height = "100px";
            }
        else{
            cursor_design.style.width = "20px";
            cursor_design.style.height = "20px";
            cursor_design.style.backgroundColor = "rgb(0, 255, 0)"
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
    index_btn.style.color = "rgb(0, 255, 0)"
    index_btn.style.border = "solid 1px rgb(0, 255, 0)"
    home_btn.style.color = "rgb(0, 255, 0)"
    home_btn.style.border = "solid 1px rgb(0, 255, 0)"
    detail_btn.style.color = "rgb(0, 255, 0)"
    detail_btn.style.border = "solid 1px rgb(0, 255, 0)"
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
    index_btn.style.color = "rgb(0, 255, 0)"
    index_btn.style.border = "solid 1px rgb(0, 255, 0)"
    home_btn.style.color = "rgb(0, 255, 0)"
    home_btn.style.border = "solid 1px rgb(0, 255, 0)"
    detail_btn.style.color = "rgb(0, 255, 0)"
    detail_btn.style.border = "solid 1px rgb(0, 255, 0)"
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
    all_project_btn.style.opacity = "100%";
    const classes = e.target.classList
    let tag_type = ""
    if(classes.contains("index-tag-container")){
        tag_type = classes[1];
        filtering_tags(tag_type);
    }
    
})

all_project_btn.addEventListener("click", ()=>{
    for(let i = 0; i<project_num; i++){
        project_lists.children[i].style.display = "block";
    }
    all_project_btn.style.opacity = "0%";
})