

// VARIABLES
const intro_page = document.querySelector('.intro-page-container');
const cursor = document.querySelector('.cursor-container');
const cursor_design = document.querySelector('.cursor-img');
const bg_container = document.querySelector(".bg-container");
const project_wrap = document.querySelector(".project-wrap");
const intro_esc_btn = document.querySelectorAll(".intro-esc-btn");
const project_home_btn = document.querySelector(".project-home-btn");
const media_screen_container = document.querySelector(".media__screen__container");
const media_screen_notice = document.querySelector(".media__screen__notice");
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
const intro_bg_top = document.querySelector(".intro-bg-top-container");
const intro_bg_bottom = document.querySelector(".intro-bg-bottom-container");

const music_container = document.querySelector('.music-container');
const bio_container = document.querySelector(".bio-container");
const links_container = document.querySelector('.links-container');
const loading__container = document.querySelector('.loading__page__container');
const loading__img = document.querySelector('.loading__img');

// BTNS
const intro_bio_btn = document.querySelector(".intro-project-bio-btn");
const intro_work_btn = document.querySelector(".intro-project-overview-btn");
const intro_music_btn = document.querySelector(".intro-project-links-btn");
const intro_links_btn = document.querySelector(".intro-project-timeline-btn");

// --------------------------------------------------------------------------------------------

// <FUNCTIONS>

// FOR SMALL SCREEN


media_screen_container.addEventListener('mousemove', (e)=>{
    let red = e.clientX * 255 / window.innerWidth;
    let green = e.clientY * 255 / window.innerHeight;
    let blue = (red + green) * 255 / 510;
    media_screen_container.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    media_screen_notice.style.color = `rgb(${255 - red}, ${255 - green}, ${255 - blue})`;
})
let loading_deg = 0;
setInterval(function(){
    loading_deg = loading_deg + 45;
    if(loading_deg == 360){
        loading__deg = 0;
    }
    loading__img.style.transform = `rotate(${loading_deg}deg)`;
}, 1000);

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
intro_links_btn.addEventListener('click', ()=>{
    intro_links_btn.style.display = 'none';
    links_container.style.display = 'block'
})
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

// CHANGE STATUS

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
    // console.log(view_mode_flag);
};

// WORK BTN CLICK TRANSITION
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
window.addEventListener("mousemove", async (e)=>{
    let stat = await getStatus();
    let rect_1 = sec_1.getBoundingClientRect();
    let rect_2 = sec_2.getBoundingClientRect();
    let rect_3 = sec_3.getBoundingClientRect();
    let rect_4 = sec_4.getBoundingClientRect();

    // Cursor change
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;

    // 요소에 따른 커서의 모양변화
    if(stat == "home"){
        music__container.style.cursor = "none"
        if(e.target.classList.contains("link")){
            cursor_design.setAttribute('src', 'assets/web_logo/cursor/link.png')
            cursor_design.style.animation = "none"
            cursor_design.style.width = "40px"
            cursor_design.style.height = "40px"
        }
        else if(e.target.classList.contains("music-bar-playpause-btn")){
            if(playpause_flag == "play"){
                cursor_design.setAttribute('src', 'assets/web_logo/cursor/pause.png')
                cursor_design.style.animation = "none"
                cursor_design.style.width = "50px"
                cursor_design.style.height = "50px"
            }else if(playpause_flag == "pause"){
                cursor_design.setAttribute('src', 'assets/web_logo/cursor/play.png')
                cursor_design.style.animation = "none"
                cursor_design.style.width = "50px"
                cursor_design.style.height = "50px"
            }
        }
        else if(e.target.classList.contains("music-bar-prev-btn")){
            cursor_design.setAttribute('src', 'assets/web_logo/cursor/arrow_l.png')
            cursor_design.style.animation = "none"
            cursor_design.style.width = "60px"
            cursor_design.style.height = "60px"
        }
        else if(e.target.classList.contains("music-bar-next-btn")){
            cursor_design.setAttribute('src', 'assets/web_logo/cursor/arrow_r.png')
            cursor_design.style.animation = "none"
            cursor_design.style.width = "60px"
            cursor_design.style.height = "60px"
        }
        else{
            cursor_design.setAttribute('src', 'assets/web_logo/cursor/esc.png')
            cursor_design.style.animation = "rotate_image 2s linear infinite"
            cursor_design.style.width = "20px"
            cursor_design.style.height = "20px"
        }
    }
    else if(stat == "project"){
        
        if(e.target.classList.contains("music-bar-playpause-btn")){
            cursor_design.style.opacity = "100%"
            if(playpause_flag == "play"){
                cursor_design.setAttribute('src', 'assets/web_logo/cursor/pause.png')
                cursor_design.style.animation = "none"
                cursor_design.style.width = "50px"
                cursor_design.style.height = "50px"
            }else if(playpause_flag == "pause"){
                cursor_design.setAttribute('src', 'assets/web_logo/cursor/play.png')
                cursor_design.style.animation = "none"
                cursor_design.style.width = "50px"
                cursor_design.style.height = "50px"
            }
        }
        else if(e.target.classList.contains("music-bar-prev-btn")){
            cursor_design.style.opacity = "100%"
            cursor_design.setAttribute('src', 'assets/web_logo/cursor/arrow_l.png')
            cursor_design.style.animation = "none"
            cursor_design.style.width = "60px"
            cursor_design.style.height = "60px"
        }
        else if(e.target.classList.contains("music-bar-next-btn")){
            cursor_design.style.opacity = "100%"
            cursor_design.setAttribute('src', 'assets/web_logo/cursor/arrow_r.png')
            cursor_design.style.animation = "none"
            cursor_design.style.width = "60px"
            cursor_design.style.height = "60px"
        }
        else{
            left_loading_bar.style.opacity = "0%"
            right_loading_bar.style.opacity = "0%"
            cursor_design.style.opacity = "0%"
            project_page_container.style.cursor = "grab"
            music__container.style.cursor = "grab"
        }
    }
})