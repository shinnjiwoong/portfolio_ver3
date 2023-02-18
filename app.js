

// DOM SELECTOR
const intro_page = document.querySelector('.intro-page-container');
const cursor = document.querySelector('.cursor-container');
const cursor_design = document.querySelector('.cursor-img');
const bg_container = document.querySelector(".bg-container");
const project_wrap = document.querySelector(".project-wrap");
const intro_esc_btn = document.querySelectorAll(".intro-esc-btn");
const project_home_btn = document.querySelector(".project-home-btn");
const top_container = document.querySelector(".top-container");
const bottom_container = document.querySelector(".bottom-container");
const intro_title_container = document.querySelector('.intro-top-bg');
const intro_top_right_bg = document.querySelector('.intro-top-right-bg');
const intro_bottom = document.querySelector(".intro-bottom-bg");
const intro_bottom_right_bg = document.querySelector(".intro-bottom-right-bg");
const intro_bg_top = document.querySelector(".intro-bg-top-container");
const intro_bg_bottom = document.querySelector(".intro-bg-bottom-container");
const music_container = document.querySelector('.music-container');
const bio_container = document.querySelector(".bio-container");
const links_container = document.querySelector('.links-container');
const intro_bio_btn = document.querySelector(".intro-project-bio-btn");
const intro_work_btn = document.querySelector(".intro-project-overview-btn");
const intro_music_btn = document.querySelector(".intro-project-links-btn");
const intro_links_btn = document.querySelector(".intro-project-timeline-btn");

// FLAGS
let playpause_flag = "pause";
let view_mode_flag = "home";

// 일반 변수
let loading_deg = 0;
let window_width = window.innerWidth;
let window_height = window.innerHeight;


// ------------------------------------------FUNCTIONS------------------------------------------------

// ********** EVENT LISTENERS *************

// 클릭 할 때마다 배경의 색이 랜덤하게 바뀌는 기능

window.addEventListener('click', handleWindowClick);

// 마우스의 커서의 변경 관련 이벤트리스너

window.addEventListener("mousemove", async (e)=>{
    let stat = await getStatus();

    // Cursor change
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;

    // stat의 현재 상태에 따라서 커서의 모양이 변경된다.

    if(stat == "home"){
        music__container.style.cursor = "none"
        if(e.target.classList.contains("link")){
            cursor_design.setAttribute('src', 'assets/web_logo/cursor/link.png')
            cursor_design.style.animation = "none"
            cursor_design.style.width = "40px"
            cursor_design.style.height = "40px"
        }else{
            cursor_design.setAttribute('src', 'assets/web_logo/cursor/esc.png')
            cursor_design.style.animation = "rotate_image 2s linear infinite"
            cursor_design.style.width = "20px"
            cursor_design.style.height = "20px"
        }
    }
    else if(stat == "project"){
            cursor_design.style.opacity = "0%"
            project_page_container.style.cursor = "grab"
            music__container.style.cursor = "grab"
    }
})

// 홈 화면의 각 버튼에 따른 반응 코드

intro_bio_btn.addEventListener("click", ()=>{
    intro_bio_btn.style.display = 'none'
    bio_container.style.display = 'flex'
})

intro_music_btn.addEventListener('click', ()=>{
    intro_music_btn.style.display = 'none';
    music_container.style.display = 'block'
})

intro_links_btn.addEventListener('click', ()=>{
    intro_links_btn.style.display = 'none';
    links_container.style.display = 'block'
})

intro_work_btn.addEventListener("click", async ()=>{
    await hideIntroContents();
    await setPageIndex(1);
    await setPageNum();
    setTimeout(async function(){
        await change_projects(1)
    }, 2000);
});

intro_esc_btn.forEach((e)=>{
    e.addEventListener('click', ()=>{
        if(e.classList.contains("third")){
            music_container.style.display = "none"
            intro_music_btn.style.display = "block"
        }else if(e.classList.contains("fourth")){
            intro_bio_btn.style.display = "block";
            bio_container.style.display = "none";
        }else if(e.classList.contains("second")){
            intro_links_btn.style.display = "block";
            links_container.style.display = "none";
        }
    })
})



// ********** FUNCTIONS *************



// 홈 화면과 프로젝트 화면사이를 오갈 때 페이지의 현재 상태를 바꾸는 기능

async function changeStatus(stat){
    view_mode_flag = stat;
}

async function getStatus(){
    return view_mode_flag;
}

window.onload = async ()=>{
    await changeStatus("home")
    setTimeout(function(){
        music_arr[0].play();
        current_track = music_arr[0];
    },500)
};

// WORK 버튼 클릭 시 애니메이션 

async function hideIntroContents(){
    window.removeEventListener('click', handleWindowClick);
    await changeStatus("project");

    setTimeout(handleWindowClick, 200);
    setTimeout(handleWindowClick, 400);
    setTimeout(handleWindowClick, 600);
    setTimeout(function(){
        intro_bg_top.style.opacity = '0%';
        intro_bg_bottom.style.opacity = '0%';
        intro_title_container.style.backgroundColor = "rgb(200, 200, 200)"
        intro_top_right_bg.style.backgroundColor = "rgb(200, 200, 200)";
        intro_bottom.style.backgroundColor = "rgb(200, 200, 200)";
        intro_bottom_right_bg.style.backgroundColor = "rgb(200, 200, 200)";
        //intro_page.style.opacity = '0%'
        project_page_container.style.display = "block"
        top_container.style.opacity = "0%"
        bottom_container.style.opacity = "0%";
        window.addEventListener('click', handleWindowClick);
    }, 800);
    setTimeout(function(){
        intro_bg_top.style.opacity = '100%';
        intro_bg_bottom.style.opacity = '100%';
        top_container.style.display = "none";
        bottom_container.style.display = "none";
        // intro_page.style.display = 'none'
        project_page_container.style.opacity = '100%'
        cursor_design.style.opacity = "0%"
    }, 1500)
}

// 클릭 시 애니메이션

function handleWindowClick(){
    randomColorChange(intro_title_container)
    randomColorChange(intro_top_right_bg)
    randomColorChange(intro_bottom)
    randomColorChange(intro_bottom_right_bg)
}

//  색 랜덤 변경 
function randomColorChange(e){
    e.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
}

