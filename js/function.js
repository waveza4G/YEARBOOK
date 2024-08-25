function goToPage(pageId, imgSrc) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        if (pageId === 'page-3' && imgSrc) {
            document.getElementById('fullScreenImg').src = imgSrc;
        }
        checkFooterVisibility();
    }
}

function nextPage(element) {
    const currentPage = element.closest('.page');
    const nextPage = currentPage.nextElementSibling;
    if (nextPage && nextPage.classList.contains('page')) {
        currentPage.classList.remove('active');
        nextPage.classList.add('active');
        checkFooterVisibility();
    }
}

function createCards(containerId, imageUrls, count, cardText, startNumber, pageId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; 
    for (let i = 0; i < count; i++) {
        const imageUrl = imageUrls[i];
        if (imageUrl) {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src="${imageUrl}" class="card-img-top" alt="Image ${i + 1}" onclick="goToPage('${pageId}', '${imageUrl}')">
                <div class="card-body">
                    <p class="card-text">${cardText} ${startNumber + i}</p>
                </div>`;
            container.appendChild(card);
        }
        checkFooterVisibility();
    }
}

function checkFooterVisibility() {
    const footer = document.getElementById('footer');
    const scrollPosition = window.innerHeight + window.scrollY;
    const bodyHeight = document.body.scrollHeight;

    if (scrollPosition >= bodyHeight) {
        footer.style.display = 'block';
    } else {
        footer.style.display = 'none';
    }
}

function animateCard(card) {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    setTimeout(() => {
        card.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        card.style.opacity = 1;
        card.style.transform = 'translateY(0)';
    }, 100);
}

function updateNavUnderline() {
    const activeLink = document.querySelector('.nav-link.active');
    if (activeLink) {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => link.style.backgroundSize = '0% 2px'); // Hide underline for all links
        activeLink.style.backgroundSize = '100% 2px'; // Show underline for active link
    }
}

// Event listeners
window.onscroll = checkFooterVisibility;

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => animateCard(card));
});

// Define image URLs
const imagesPage1 = ['images/1.jpeg', 'images/2.jpeg', 'images/3.jpeg', 'images/4.jpeg', 'images/5.jpeg', 'images/6.jpeg', 'images/7.jpeg', 'images/8.jpg', 'images/9.jpg', 'images/10.jpg',
    'images/11.jpg', 'images/12.jpg', 'images/13.jpg', 'images/14.jpg', 'images/15.jpg', 'images/16.jpg', 'images/17.jpg', 'images/18.jpg', 'images/19.jpg', 'images/20.jpg',
    'images/21.jpg', 'images/22.jpg', 'images/23.jpg', 'images/24.jpg', 'images/25.jpg', 'images/26.jpg', 'images/27.jpg', 'images/28.jpg', 'images/29.jpg', 'images/30.jpg'];
const imagesPage2 = ['images/ (1).jpeg', 'images/ (2).jpeg', 'images/ (98).jpeg', 'images/(4).jpeg', 'images/ (99).jpeg', 'images/ (6).jpeg', 'images/ (7).jpeg', 'images/ (8).jpeg', 'images/ (9).jpeg', 'images/ (10).jpeg',
    'images/ (11).jpeg', 'images/ (12).jpeg', 'images/ (13).jpeg', 'images/ (14).jpeg', 'images/ (15).jpeg', 'images/ (16).jpeg', 'images/ (17).jpeg', 'images/ (18).jpeg', 'images/ (19).jpeg', 'images/ (20).jpeg',
    'images/ (21).jpeg', 'images/ (22).jpeg', 'images/ (23).jpeg', 'images/ (24).jpeg', 'images/ (25).jpeg', 'images/ (26).jpeg', 'images/ (27).jpeg', 'images/ (28).jpeg', 'images/ (29).jpeg', 'images/ (30).jpeg',
    'images/ (31).jpeg', 'images/ (32).jpeg', 'images/ (33).jpeg', 'images/ (34).jpeg', 'images/ (35).jpeg', 'images/ (36).jpeg', 'images/ (37).jpeg', 'images/ (38).jpeg', 'images/ (39).jpeg', 'images/ (40).jpeg',
    'images/ (41).jpeg', 'images/ (42).jpeg', 'images/ (43).jpeg', 'images/ (44).jpeg', 'images/ (45).jpeg', 'images/ (46).jpeg', 'images/ (47).jpeg', 'images/ (48).jpeg', 'images/ (49).jpeg', 'images/ (50).jpeg',
    'images/ (51).jpeg', 'images/ (52).jpeg', 'images/ (53).jpeg', 'images/ (54).jpeg', 'images/ (55).jpeg', 'images/ (56).jpeg', 'images/ (57).jpeg', 'images/ (58).jpeg', 'images/ (59).jpeg', 'images/ (60).jpeg',
    'images/ (61).jpeg', 'images/ (62).jpeg', 'images/ (63).jpeg', 'images/ (64).jpeg', 'images/ (65).jpeg', 'images/ (66).jpeg', 'images/ (67).jpeg', 'images/ (68).jpeg', 'images/ (69).jpeg', 'images/ (70).jpeg',
    'images/ (71).jpeg', 'images/ (72).jpeg', 'images/ (73).jpeg', 'images/ (74).jpeg', 'images/ (75).jpeg', 'images/ (76).jpeg', 'images/ (77).jpeg', 'images/ (78).jpeg', 'images/ (79).jpeg', 'images/ (80).jpeg',
    'images/ (81).jpeg', 'images/ (82).jpeg', 'images/ (83).jpeg', 'images/ (84).jpeg', 'images/ (85).jpeg', 'images/ (86).jpeg', 'images/ (87).jpeg', 'images/ (88).jpeg', 'images/ (89).jpeg', 'images/ (90).jpeg',
    'images/ (91).jpeg', 'images/ (92).jpeg', 'images/ (93).jpeg', 'images/ (94).jpeg', 'images/ (95).jpeg', 'images/ (96).jpeg', 'images/ (97).jpeg', 'images/(3).jpeg', 'images/(5).jpeg', 'images/ (100).jpeg',];

createCards('card-container-1', imagesPage1, 30, 'Generation', 1, 'page-2');
createCards('card-container-2', imagesPage2, 100, 'No.', 1, 'page-3');
