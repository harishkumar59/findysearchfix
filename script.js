// // DOM element references
// const menuButton = document.querySelector('.menu-button');
// const mobileMenu = document.querySelector('.mobile-menu');
// const searchInput = document.getElementById('searchInput');
// const websiteGrid = document.getElementById('websiteGrid');

// // Event listener for mobile menu toggle
// menuButton.addEventListener('click', () => {
//     mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
// });

// // Event listener for search functionality
// searchInput.addEventListener('input', () => {
//     const searchTerm = searchInput.value.toLowerCase();
//     const cards = websiteGrid.querySelectorAll('.card');

//     cards.forEach(card => {
//         const name = card.querySelector('h2').textContent.toLowerCase();
//         const description = card.querySelector('p').textContent.toLowerCase();
//         const hashtags = Array.from(card.querySelectorAll('.hashtag')).map(tag => tag.textContent.toLowerCase());

//         if (name.includes(searchTerm) || description.includes(searchTerm) || hashtags.some(tag => tag.includes(searchTerm))) {
//             card.style.display = 'block';
//         } else {
//             card.style.display = 'none';
//         }
//     });
// });



// Event listener for search functionality
const searchInput = document.getElementById('searchInput');
const websiteGrid = document.getElementById('websiteGrid');
const notFoundMessage = document.getElementById('notFoundMessage');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const cards = websiteGrid.querySelectorAll('.card');
    let found = false;

    cards.forEach(card => {
        const name = card.querySelector('h2').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        const hashtags = Array.from(card.querySelectorAll('.hashtag')).map(tag => tag.textContent.toLowerCase());

        if (name.includes(searchTerm) || description.includes(searchTerm) || hashtags.some(tag => tag.includes(searchTerm))) {
            card.style.display = 'block';
            found = true;
        } else {
            card.style.display = 'none';
        }
    });

    if (!found) {
        notFoundMessage.style.display = 'block';
        websiteGrid.style.display = 'none';
    } else {
        notFoundMessage.style.display = 'none';
        websiteGrid.style.display = 'grid';
    }
});
