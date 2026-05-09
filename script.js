console.log("welcome to spotify");
let songIndex=0;
let audioElement= new Audio('songs/Paaro.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let masterPrev=document.getElementById("masterprev");
let masterNext=document.getElementById("masternext");
let masterSongName=document.getElementById("masterSongName");

let songs=[
    {songName: "Jhol",filePath: "songs/jhol.mp3", coverPath: "covers/cover1.jpg"},
    {songName: "Dooron Dooron",filePath: "songs/Dooron Dooron.mp3", coverPath: "covers/cover2.jpg"},
    {songName: "Finding Her",filePath: "songs/Finding Her.mp3", coverPath: "covers/cover3.jpg"},
    {songName: "Darkhast",filePath: "songs/Darkhast.mp3", coverPath: "covers/cover4.jpg"},
    {songName: "Paaro",filePath: "songs/Paaro.mp3", coverPath: "covers/cover5.jpg"},
    {songName: "Boyfriend",filePath: "songs/Boyfriend.mp3", coverPath: "covers/cover6.jpg"},
    {songName: "For A Reason" ,filePath: "songs/For A Reason.mp3", coverPath: "covers/cover7.jpg"}
]
songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
         gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;

})
myProgressBar.addEventListener('input',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play')
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        myProgressBar.value = 0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

masterNext.addEventListener('click',()=>{
    if(songIndex>=7){
        songIndex=0;
    }else{
        songIndex+=1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    myProgressBar.value = 0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause')
})

masterPrev.addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }else{
        songIndex-=1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    myProgressBar.value = 0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause')
})


