function handleClickVideo(e) {
  e.preventDefault();
  const video = e.currentTarget;
  video.classList.add('full-video');
}

function handleClickButton() {
  const videos = document.querySelectorAll('.video');
  videos.forEach((video) => {
    video.classList.remove('full-video');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const video1 = document.querySelector('#video-1');
  const video2 = document.querySelector('#video-2');
  const video3 = document.querySelector('#video-3');
  const video4 = document.querySelector('#video-4');
  const button = document.querySelector('#all-cameras');
  video1.addEventListener('click', handleClickVideo);
  video2.addEventListener('click', handleClickVideo);
  video3.addEventListener('click', handleClickVideo);
  video4.addEventListener('click', handleClickVideo);
  button.addEventListener('click', handleClickButton);
});
