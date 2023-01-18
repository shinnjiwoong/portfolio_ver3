

// VARIABLES
const intro_page = document.querySelector('.intro-page-container');
const cursor = document.querySelector('.cursor-container');
const cursor_design = document.querySelector('.cursor-img');
const bg_container = document.querySelector(".bg-container");
const project_wrap = document.querySelector(".project-wrap");
const intro_esc_btn = document.querySelectorAll(".intro-esc-btn");
let view_mode_flag = "home";

// MUSIC PLAYER VAR
const music_bar_container = document.querySelector(".music-bar-container");
const music_bar_track_title = document.querySelector(".music-bar-track-title");
const track_titles = document.querySelectorAll(".track-title");
const music_bar_playpause_btn = document.querySelector(".music-bar-playpause-btn");
let playpause_flag = "pause";

// --------------------------------------------------------------------------------------------

// INTRO PAGE VAR
const top_container = document.querySelector(".top-container");
const bottom_container = document.querySelector(".bottom-container");
const intro_title_container = document.querySelector('.intro-top-bg');
const intro_top_right_bg = document.querySelector('.intro-top-right-bg');
const intro_bottom = document.querySelector(".intro-bottom-bg");
const intro_bottom_right_bg = document.querySelector(".intro-bottom-right-bg");

const music_container = document.querySelector('.music-container');
const bio_container = document.querySelector(".bio-container");



// BTNS
const intro_bio_btn = document.querySelector(".intro-project-bio-btn");
const intro_work_btn = document.querySelector(".intro-project-overview-btn");
const intro_music_btn = document.querySelector(".intro-project-links-btn");
const intro_timeline_btn = document.querySelector(".intro-project-timeline-btn");

// --------------------------------------------------------------------------------------------

// <FUNCTIONS>


// MUSIC BAR ANIMATIONS
track_titles.forEach(t => t.addEventListener('click', (e)=>{
    playpause_flag = "play";
    music_bar_track_title.innerHTML = `${e.target.innerHTML}`
    showMusicBar();
    setTimeout(hideMusicBar, 2000);
}))
music_bar_playpause_btn.addEventListener("click", ()=>{
    if(playpause_flag == "play"){
        playpause_flag = "pause"
    }else{
        playpause_flag = "play"
    }
})
function showMusicBar(){
    music_bar_container.style.bottom = '0';
}
function hideMusicBar(){
    music_bar_container.style.bottom = "-10%";
}

// INTRO SCREEN CHANGE ANIMATION
intro_bio_btn.addEventListener("click", ()=>{
    intro_bio_btn.style.display = 'none'
    bio_container.style.display = 'block'
})

intro_music_btn.addEventListener('click', ()=>{
    intro_music_btn.style.display = 'none';
    music_container.style.display = 'block'
})

intro_esc_btn.forEach((e)=>{
    e.addEventListener('click', ()=>{
        if(e.classList.contains("third")){
            music_container.style.display = "none"
            intro_music_btn.style.display = "block"
        }else if(e.classList.contains("fourth")){
            intro_bio_btn.style.display = "block";
            bio_container.style.display = "none";
        }
    })
})
// WORK & TIMELINE BTN CLICK TRANSITION
function hideIntroContents(){
    window.removeEventListener('click', handleWindowClick);
    view_mode_flag = "project"
    setTimeout(handleWindowClick, 200);
    setTimeout(handleWindowClick, 400);
    setTimeout(handleWindowClick, 600);
    setTimeout(function(){
        intro_title_container.style.backgroundColor = "rgb(200, 200, 200)"
        intro_top_right_bg.style.backgroundColor = "rgb(200, 200, 200)";
        intro_bottom.style.backgroundColor = "rgb(200, 200, 200)";
        intro_bottom_right_bg.style.backgroundColor = "rgb(200, 200, 200)";
        top_container.style.opacity = "0%"
        bottom_container.style.opacity = "0%";
        window.addEventListener('click', handleWindowClick);
    }, 800);
    setTimeout(function(){
        top_container.style.display = "none";
        bottom_container.style.display = "none";
        project_page_container.style.display = "block"
    }, 1500)
}

intro_work_btn.addEventListener('click', hideIntroContents);
intro_timeline_btn.addEventListener('click', hideIntroContents)

// CURSOR ANIMATION
let window_width = window.innerWidth;
let window_height = window.innerHeight;

window.addEventListener('click', handleWindowClick);
function handleWindowClick(){
    randomColorChange(intro_title_container)
    randomColorChange(intro_top_right_bg)
    randomColorChange(intro_bottom)
    randomColorChange(intro_bottom_right_bg)
}
function randomColorChange(e){
    e.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
}
window.addEventListener("mousemove", (e)=>{
    // Cursor change
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
    // console.log(window.innerHeight, e.clientY)

    // 커서의 위치에 기반하여 음악 플레이어를 보여주는 함수
    if(window.innerHeight - e.clientY < 30){
        showMusicBar();
    }else{
        hideMusicBar();
    }

    // 요소에 따른 커서의 모양변화
    if(view_mode_flag == "home"){
        // cursor_design.style.border = "solid 1.5px rgb(25, 25, 25)"
        // cursor_design.style.backgroundColor = "rgb(25, 25, 25, 0.2)"
        if(e.target.classList.contains("intro-project-timeline-btn")||e.target.classList.contains("intro-project-links-btn")||e.target.classList.contains("intro-project-overview-btn")||e.target.classList.contains("intro-project-bio-btn")||e.target.classList.contains("track-title")){
            cursor_design.setAttribute('src', 'assets/web_logo/cursor/main_cursor.png')
            cursor_design.style.animation = "rotate_image 1s linear infinite"
            cursor_design.style.width = "60px"
            cursor_design.style.height = "60px"
        }
        else if(e.target.classList.contains("link")){
            cursor_design.setAttribute('src', 'assets/web_logo/cursor/link.png')
            cursor_design.style.animation = "none"
            cursor_design.style.width = "40px"
            cursor_design.style.height = "40px"
        }
        else if(e.target.classList.contains("music-bar-playpause-btn")){
            if(playpause_flag == "play"){
                cursor_design.setAttribute('src', 'assets/web_logo/cursor/pause.png')
                cursor_design.style.animation = "none"
                cursor_design.style.width = "60px"
                cursor_design.style.height = "60px"
            }else if(playpause_flag == "pause"){
                cursor_design.setAttribute('src', 'assets/web_logo/cursor/play.png')
                cursor_design.style.animation = "none"
                cursor_design.style.width = "60px"
                cursor_design.style.height = "60px"
            }
        }
        else if(e.target.classList.contains("music-bar-prev-btn")){
            cursor_design.setAttribute('src', 'assets/web_logo/cursor/arrow_l.png')
            cursor_design.style.animation = "none"
            cursor_design.style.width = "70px"
            cursor_design.style.height = "70px"
        }
        else if(e.target.classList.contains("music-bar-next-btn")){
            cursor_design.setAttribute('src', 'assets/web_logo/cursor/arrow_r.png')
            cursor_design.style.animation = "none"
            cursor_design.style.width = "70px"
            cursor_design.style.height = "70px"
        }
        else{
            cursor_design.setAttribute('src', 'assets/web_logo/cursor/esc.png')
            cursor_design.style.animation = "rotate_image 2s linear infinite"
            cursor_design.style.width = "20px"
            cursor_design.style.height = "20px"
        }
    }
})