console.log("welcome to  js");
let songs = [
    'songs.spo/1.mp3',
    'songs.spo/1.mp3',
    'songs.spo/1.mp3',
    'songs.spo/1.mp3',
    'songs.spo/1.mp3',
    'songs.spo/1.mp3',
    'songs.spo/1.mp3'
];
let Index=0;
let audioElement= new Audio(songs[Index])
let audioClick = document.getElementById('first').addEventListener('click',togglePlayPause);
let audioClick2 = document.getElementById('second').addEventListener('click',togglePlayPause);
let audioClick3 = document.getElementById('third').addEventListener('click',togglePlayPause);
let audioClick4 = document.getElementById('forth').addEventListener('click',togglePlayPause);
let audioClick5 = document.getElementById('fifth').addEventListener('click',togglePlayPause);
let audioClick6 = document.getElementById('six').addEventListener('click',togglePlayPause);
let audioClick7 = document.getElementById('seven').addEventListener('click',togglePlayPause);
let mainplaypause = document.getElementById('mainPausePlay');
let myProgress = document.getElementById('myProgressBar');
function togglePlayPause()
    {
    if(audioElement.paused || audioElement<=0){
        audioElement.play();

    }else{  audioElement.pause();}
        
    
}
mainplaypause.addEventListener('click',()=>{
     if(audioElement.paused || audioElement<=0){
        audioElement.play();
        mainplaypause.classList.remove("fa-circle-play");
         mainplaypause.classList.add("fa-circle-pause");

    }else{  audioElement.pause();
         mainplaypause.classList.add("fa-circle-play");
           mainplaypause.classList.remove("fa-circle-pause");
    }
        
})

audioElement.addEventListener('timeupdate',()=>{
    console.log("timeupdate");
     progres= parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgress.value= progres;
    
})
myProgress.addEventListener('change',()=>{
    audioElement.currentTime=myProgress.value*audioElement.duration/100; 
})

let forword = document.querySelector('.forword');
forword.addEventListener('click',playNextSong);
forword.addEventListener('ended',playNextSong)
function playNextSong() {
   Index++;
  
    if (Index >= songs.length) {
        Index = 0; // go back to first song
    }
    audioElement.src = songs[Index];
    audioElement.play();
}


 
