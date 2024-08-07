document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector('.menu-btn');
    const dropMenu = document.getElementById('dropMenu');
    const menuIcon = document.getElementById('menuIcon');
    const dropMenuList = document.getElementById('dropMenuList');

    // Create and add social media links to the dropdown menu
    const twitterMenuItem = document.createElement('li');
    const telegramMenuItem = document.createElement('li');

    twitterMenuItem.classList.add('social-link');
    telegramMenuItem.classList.add('social-link');

    twitterMenuItem.innerHTML = `<a href="#"><img src="/Assets/twitter-2.png" alt="Twitter"> Twitter</a>`;
    telegramMenuItem.innerHTML = `<a href="#"><img src="/Assets/telegram-2.png" alt="Telegram"> Telegram</a>`;

    dropMenuList.appendChild(twitterMenuItem);
    dropMenuList.appendChild(telegramMenuItem);

    // Function to handle showing/hiding social links when screen width is less than 770
    function handleResize() {
        if (window.innerWidth <= 770) {
            twitterMenuItem.classList.remove('hidden');
            telegramMenuItem.classList.remove('hidden');
        } else {
            twitterMenuItem.classList.add('hidden');
            telegramMenuItem.classList.add('hidden');
        }
    }

    // Initial check and event listener for resizing
    handleResize();
    window.addEventListener('resize', handleResize);

    // Toggle dropdown menu display
    menuBtn.addEventListener('click', function () {
        if (dropMenu.style.display === "none") {
            dropMenu.style.display = "block";
            menuIcon.src = "/Assets/close.png"; // Replace with your cancel icon 
        } else {
            dropMenu.style.display = "none";
            menuIcon.src = "/Assets/menu.png"; // Replace with your menu icon
        }
    });
});







