//1
const block2 = document.querySelector('.block2')

let position = 0
let positionTop = 0

const move = () => {
    if (position <= 460 && positionTop === 0) {
        position +=16;
        block2.style.left = `${position}px`
        setTimeout(move, 100)
    } else if (position >= 460 && positionTop <= 460) {
        positionTop += 16;
        block2.style.top = `${positionTop}px`
        setTimeout(move, 100)
    } else if (position > 0 && positionTop >= 460){
        position -= 16
        block2.style.left = `${position}px`
        setTimeout(move, 100)
    } else if (position === 0 && positionTop <= 465) {
        positionTop -= 16
        block2.style.top = `${positionTop}px`
        setTimeout(move, 100)
    }    
}
move() 

//2

let sec = 1
setInterval(() => {
      console.log(sec++ + ' ' + 'sec');
    }, 1000);

//или

// setInterval(() => {
//       console.log("timer");
//     }, 1000);