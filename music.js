var music1 = new Audio("assets/music/music_1.mp3");
var music2 = new Audio("assets/music/music_2.mp3");
var music3 = new Audio("assets/music/music_3.mp3");
var music4 = new Audio("assets/music/music_4.mp3");
var music5 = new Audio("assets/music/music_5.mp3");

const music__play__btn = document.querySelector('.play')
const music__pause__btn = document.querySelector('.pause')

let music_arr = [music1, music2, music3, music4, music5];

track_titles.forEach((e, i)=>{
    e.addEventListener('click', ()=>{
        for(let i = 0; i < track_titles.length; i++){
            music_arr[i].pause();
        }
        music_arr[i].play();
    })
})
// 음악 플레이가 완료되면 다음 곡을 재생한다.
music_arr.forEach((e, i)=>{
    e.addEventListener('ended', ()=>{
        if(i == track_titles.length - 1){
            music_arr[0].play();
        }else{
            music_arr[i+1].play();
        }
    })
})

music__pause__btn.addEventListener('click', ()=>{
    let music_length = music_arr.length;

    for(let i = 0; i < music_length; i++){
        if(music_arr[i].paused == 'false'){
            music_arr[i].pause();
        }
    }
})