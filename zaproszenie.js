// let f = () => {
//     let audio = new Audio('./sources/music.mp3');
//     audio.play();
// }
let colors = ["#0e5ec7", "#bf0254", "#02bf05", "#d60000", "#7600d6"]

let i = 0 
setInterval(() => {
    document.querySelector(".modal").style.backgroundColor = colors[i]
    i++
    if(i == colors.length) i = 0
}, 414)