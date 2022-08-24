import  Player  from '@vimeo/player';
import throttle from 'lodash.throttle';

const TIME_K = 'videoplayer-current-time';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

if (localStorage.getItem(TIME_K)) {
    setCurrentTime();
}

function onPlay({ seconds }) {
     localStorage.setItem(TIME_K, seconds)
}

function setCurrentTime() {
    player.setCurrentTime(localStorage.getItem(TIME_K))
}