
"use strict;"
// Access
export const imgContainer = document.querySelector('.images');

// Intersection Observer setup

let callback = (entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            loadLenMore(5);
        }
    })
}

let observer = new IntersectionObserver(callback, {
    root: null,
    rootMargin: '2000px',
    threshold: 0
})


//Utility function

function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

// Sometimes the random number results in a non-existent image

function imageNotFound(e) {
    e.target.src = `https://picsum.photos/id/${randomIntFromInterval(1,1000)}/200/300`;
    e.target.addEventListener('error', imageNotFound);
}

// Load more images

function loadLenMore(len) {
    Array.from({length: len}, (_, i) => i + 1).forEach((i) => {
        const image = new Image();
        image.src = `https://picsum.photos/id/${randomIntFromInterval(1,1000)}/200/300`;
        image.addEventListener('error', imageNotFound)
        const div = document.createElement('div');
        div.className = 'imageWrapper';
        div.appendChild(image);
        imgContainer.appendChild(div);
        });
    
    let target = document.querySelector('.imageWrapper:last-child')
    observer.observe(target);
}

// Start website with 3 images
loadLenMore(3);


