window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.classList.add("scroll-bg-black");
        header.classList.add("sticky");
    } else {
        header.classList.remove("scroll-bg-black");
        header.classList.remove("sticky");
    }
});

const burger = document.querySelector(".burger_menu");
const headerA = document.querySelector(".header_action");
burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    headerA.classList.toggle("open");
});
