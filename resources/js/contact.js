const textingList = [
    'Linkedin: https://www.linkedin.com/in/emmanuel-uduma-781965229/',
    'Phone Number: +44 (0) 7310881537',
    'Email: udumakalz@gmail.com',
    'Github: https://github.com/Kalzud'
];

const ullist = document.getElementById('falling-text');

// Create and append list items with random positions
textList.forEach((text) => {
    const li = document.createElement('li');
    li.textContent = text;

    // Randomly position the falling elements
    li.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';

    ullist.appendChild(li);
});const textList = [
    'Linkedin: https://www.linkedin.com/in/emmanuel-uduma-781965229/',
    'Phone Number: +44 (0) 7310881537',
    'Email: udumakalz@gmail.com',
    'Github: https://github.com/Kalzud'
];

const ul = document.getElementById('falling-text');

// Create and append list items with random positions
textList.forEach((text, index) => {
    const li = document.createElement('li');
    li.textContent = text;

    // Randomly position the falling elements
    li.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';

    ul.appendChild(li);
});
