import  Player  from '@vimeo/player';
import throttle from 'lodash.throttle';

const TIME_K = 'videoplayer-current-time';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

const savedTime = localStorage.getItem(TIME_K);

if (savedTime) {
    setCurrentTime();
}

function onPlay({ seconds }) {
     localStorage.setItem(TIME_K, seconds)
}

function setCurrentTime() {
    player.setCurrentTime(savedTime)
}