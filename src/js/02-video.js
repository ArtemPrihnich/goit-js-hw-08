import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

player.on('timeupdate', throttle(onCurrentTime, 1000))

function onCurrentTime (data) {
    const viewedTime = data.seconds;
    console.log(viewedTime)
    localStorage.setItem('videoplayer-current-time', `${viewedTime}`)
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
