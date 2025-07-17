console.log("welcome to  js");


let songs = [
  { title: 'Pehla Tu Dooja Tu', url: 'songs.spo/1.mp3' },
  { title: 'Nachdi', url: 'songs.spo/2.mp3' },
  { title: 'Saiyaara', url: 'songs.spo/3.mp3' },
  { title: 'Jab Tu Sajan', url: 'songs.spo/4.mp3' },
  { title: 'Bas Ek Dhadak', url: 'songs.spo/5.mp3' },
  { title: 'Humsaffur From Saiyaara', url: 'songs.spo/6.mp3' },
  { title: 'kabhi Na Kabhi', url: 'songs.spo/2.mp3' },
  
  // बाकी सूची...
];
let Index=0;
let audioElement= new Audio(songs[Index])
let songInfo = document.querySelector('.songinfo');


let mainplaypause = document.getElementById('mainPausePlay');
let myProgress = document.getElementById('myProgressBar');
const btnIds = ['first','second','third','forth','fifth','six','seven'];
btnIds.forEach((id, i) => {
  document.getElementById(id)
    .addEventListener('click', () => togglePlayPause(i));


});
function togglePlayPause(e)
{
        if(Index< 0 || Index >= songs.length)return;
        
            d=e;
            audioElement.pause();
          
            audioElement.src=songs[d].url;
              audioElement.currentTime=0;
              audioElement.play();
              songInfo.innerHTML= songs[d].title;
             



        
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



document.getElementById('forword').addEventListener('click', () => {
    audioElement.pause();
    playNextSong();
});


function playNextSong() {
   Index++;
  
    if (Index >= songs.length) {
        Index = 0; // go back to first song
    }
    audioElement.src = songs[Index].url;
    audioElement.play();
     songInfo.innerHTML= songs[Index].title;

}

let backfor = document.querySelector('#backfor');
backfor.addEventListener('click',()=>{
    audioElement.pause();
    playPreviousSong();
})

function playPreviousSong(){
    --Index;
    if(Index<0){
        Index=0;

    }
    audioElement.src=songs[Index].url;
    audioElement.play();
     songInfo.innerHTML= songs[d].title;

}

 
