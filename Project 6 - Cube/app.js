let x = 0;
let isSlideshowRunning = false;
let playPauseInterval;

const rotateCubes = (angles, playWhileSlideshowRuns = false) => {
    if (!playWhileSlideshowRuns && isSlideshowRunning) return;

    x += angles;

    const cubes = document.querySelectorAll('.cube');
    Array.from(cubes).forEach(cube => {
        cube.style.transform = `rotateY(${x}deg)`;
    })
}

const changePlayPauseIcon = () => {
    const playPauseButton = document.querySelector('.play-pause i');

    if (isSlideshowRunning) {
        playPauseButton.classList.remove('fa-play');
        playPauseButton.classList.add('fa-pause');
    } else {
        playPauseButton.classList.remove('fa-pause');
        playPauseButton.classList.add('fa-play');
    }
}

const playPause = () => {
    if (isSlideshowRunning) {
        clearInterval(playPauseInterval);
        isSlideshowRunning = false;
    } else {
        playPauseInterval = setInterval(() => {
            rotateCubes(-90, true);
        }, 3000);
        isSlideshowRunning = true;
    }
}

document.querySelector('.left-arrow')
    .addEventListener('click', () => {
        rotateCubes(90);
    });

document.querySelector('.left-arrow')
    .addEventListener('mouseenter', () => {
        rotateCubes(25, true);
    });

document.querySelector('.left-arrow')
    .addEventListener('mouseleave', () => {
        rotateCubes(-25, true);
    });

document.querySelector('.right-arrow')
    .addEventListener('click', () => {
        rotateCubes(-90);
    });

document.querySelector('.right-arrow')
    .addEventListener('mouseenter', () => {
        rotateCubes(-25, true);
    });

document.querySelector('.right-arrow')
    .addEventListener('mouseleave', () => {
        rotateCubes(25, true);
    });

document.querySelector('.play-pause')
    .addEventListener('click', () => {
        playPause();
        changePlayPauseIcon();
    });

