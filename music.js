var music1 = new Audio("assets/music/music_1.mp3");
var music2 = new Audio("assets/music/music_2.mp3");
var music3 = new Audio("assets/music/music_3.mp3");
var music4 = new Audio("assets/music/music_4.mp3");
var music5 = new Audio("assets/music/music_5.mp3");

const music__container = document.querySelector('.music__container');
const music__play__btn = document.querySelector('.play')
const music__pause__btn = document.querySelector('.pause')
const track_titles = document.querySelectorAll('.track-title');

let music_arr = [music1, music2, music3, music4, music5];
let current_track;
let current_sec = 0;

// Function 1 : 각각의 트랙 이름을 클릭하면 해당하는 곡이 재생된다. 

track_titles.forEach((e, i)=>{
    e.addEventListener('click', ()=>{
        for(let i = 0; i < track_titles.length; i++){
            music_arr[i].pause();
        }
        music_arr[i].currentTime = 0;
        music_arr[i].play();
        current_track = music_arr[i];
    })
})

// Function 2 : 음악 플레이가 완료되면 다음 곡을 재생한다.

music_arr.forEach((e, i)=>{
    e.addEventListener('ended', ()=>{
        if(i == track_titles.length - 1){
            music_arr[0].currentTime = 0;
            music_arr[0].play();
            current_track = music_arr[0];
        }else{
            music_arr[i+1].currentTime = 0;
            music_arr[i+1].play();
            current_track = music_arr[i+1];
        }
    })
})

let current_time = 0;

// 하단의 재생 및  정지버튼에 따른 인터랙션 구현

music__pause__btn.addEventListener('click', async ()=>{
    let music_length = music_arr.length;

    for(let i = 0; i < music_length; i++){
        let track_stat = await checkMusicStatus(music_arr[i]);
        if(!track_stat){
            music_arr[i].pause();
            current_track = music_arr[i]
            await saveCurrentTrack(current_track);
        }
    }
})

music__play__btn.addEventListener('click', async ()=>{
    current_track.currentTime = current_time;
    current_track.play();
})



async function checkMusicStatus(track) {
    return track.paused
}

async function saveCurrentTrack(track){
    current_time = track.currentTime;
}
