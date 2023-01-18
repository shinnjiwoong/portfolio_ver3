let mindcraft = {
    "name" : "MINDCRAFT",
    "project_num" : "001",
    "scope" : "Music",
    "represent_source" : ["assets/project_source/mindcraft_1.png", "assets/project_source/mindcraft_2.png"],
    "link" : "https://soundcloud.com/montikayoti/sets/mindcraft",
    "description_kr" : "MINDCRAFT는 6곡의 전자음악으로 이루어진 앨범입니다. ",
    "description_en" : "MINDCRAFT is an album with 6 musical pieces. "
}
let artificial_object = {
    "name" : "ARTIFICIAL OBJECT",
    "project_num" : "001",
    "scope" : "Music",
    "represent_source" : ["assets/project_source/ao_1.png", "assets/project_source/ao_2.png"],
    "link" : "",
    "description_kr" : "ARTIFICIAL OBJECT는 JGP$의 첫 정규앨범입니다. 전곡을 프로듀싱하였습니다. ",
    "description_en" : "MINDCRAFT is an album with 6 musical pieces. "
}
let onerm = {
    "name" : "ONERM : NEVER FALL DOWN",
    "project_num" : "001",
    "scope" : "Music",
    "represent_source" : ["assets/project_source/onerm_1.png", "assets/project_source/onerm_2.png", "assets/project_source/onerm_3.png"],
    "link" : "",
    "description_kr" : "ARTIFICIAL OBJECT는 JGP$의 첫 정규앨범입니다. 전곡을 프로듀싱하였습니다. ",
    "description_en" : "MINDCRAFT is an album with 6 musical pieces. "
}
let altgal_simple = {
    "name" : "＜간결한 생각들＞",
    "project_num" : "001",
    "scope" : "Music",
    "represent_source" : ["assets/project_source/simple_thought_1.png"],
    "link" : "",
    "description_kr" : "ARTIFICIAL OBJECT는 JGP$의 첫 정규앨범입니다. 전곡을 프로듀싱하였습니다. ",
    "description_en" : "MINDCRAFT is an album with 6 musical pieces. "
}

// VAR
const project_page_container = document.querySelector(".project-page-container")
const left_loading_bar = document.querySelector(".left-loading-bar")
const right_loading_bar = document.querySelector(".right-loading-bar")

// PROJECT SECTIONS
const sec_1 = document.querySelector(".sec-1");
const sec_2 = document.querySelector(".sec-2");
const sec_3 = document.querySelector(".sec-3");
const sec_4 = document.querySelector(".sec-4");

// ESC BTN


// FUNCTIONS

intro_work_btn.addEventListener("click", ()=>{
    setTimeout(function(){
        showProject(sec_1, mindcraft);
        showProject(sec_2, artificial_object);
        showProject(sec_3, onerm);
        showProject(sec_4, altgal_simple);
    }, 2000)
});

function showProject(e,p){
    const project_front_container = e.querySelector(".project-front-container")
    const project_back_container = e.querySelector(".project-back-container");
    const project_esc = project_back_container.querySelector(".project-esc-btn .project-esc")
    const project_img = e.querySelector(".project-img");
    const project_title = e.querySelector(".project-title")
    const project_desc_kr = e.querySelector(".project-desc-kr")
    const project_desc_en = e.querySelector(".project-desc-en")
    const project_link = e.querySelector(".project-link");
    const img_len = p.represent_source.length;
    let i = 0;

    project_img.src = p.represent_source[i];
    project_title.innerText = p.name;
    project_desc_kr.innerText = p.description_kr;
    project_desc_en.innerText = p.description_en;
    project_link.href = p.link
    project_img.addEventListener("load", ()=>{
        project_front_container.style.opacity = "100%"
        project_back_container.style.opacity = "100%"
    })
    project_img.addEventListener("click", ()=>{
        if(i == img_len - 1){
            i = 0;
            project_img.src = p.represent_source[i];
        }else{
            i++;
            project_img.src = p.represent_source[i];
        }
        // project_front_container.style.display = "none"
        // project_back_container.style.display = "block"
    })
    project_esc.addEventListener("click", ()=>{
        project_front_container.style.display = "inline-block"
        project_back_container.style.display = "none"
    })
}

window.addEventListener('mousemove', (e)=>{
    if(view_mode_flag == "project" && e.clientX<40){
        left_loading_bar.style.opacity = "100%"
        cursor_design.setAttribute('src', 'assets/web_logo/cursor/arrow_l.png')
        cursor_design.style.animation = "none"
        cursor_design.style.width = "40px"
        cursor_design.style.height = "40px"
    }else if(view_mode_flag == "project" && window.innerWidth - e.clientX < 40){
        right_loading_bar.style.opacity = "100%"
        cursor_design.setAttribute('src', 'assets/web_logo/cursor/arrow_r.png')
        cursor_design.style.animation = "none"
        cursor_design.style.width = "40px"
        cursor_design.style.height = "40px"
    }else{
        left_loading_bar.style.opacity = "0%"
        right_loading_bar.style.opacity = "0%"
        cursor_design.setAttribute('src', 'assets/web_logo/cursor/esc.png')
        cursor_design.style.animation = "rotate_image 2s linear infinite"
        cursor_design.style.width = "20px"
        cursor_design.style.height = "20px"
    }

})





