let elMusicResluts = document.querySelector('.music-results');
let elMusicVideo = document.querySelector('.video-music')



fetch("../music.json")
.then((res) => res.json())
.then((data) => {
    data.forEach((music) => {
        console.log(music);
        elMusicResluts.innerHTML += `
        <li data-id=${music.id} class="list-group-item mb-4 border">${music.title}</li>
        `
    })
    
})



elMusicResluts.addEventListener('click', (evt) => {
    let musicId =  evt.target.dataset.id;
    
    fetch("../music.json")
    .then((res) => res.json())
    .then((data) => {
        data.forEach((music) => {
            if(musicId == music.id){
                elMusicVideo.src = music.video_url
            }
            
        })
    })
    
    
    
    
})