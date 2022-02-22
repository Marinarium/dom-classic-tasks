const nav = document.querySelector('.services__navigation');
const navItems = document.querySelectorAll('.services__navigation-link');
const pages = document.querySelectorAll('.page');

const setActivePage = (anchor) => {
    navItems.forEach((navItem) => {
        navItem.classList.toggle('item-active', anchor === navItem.getAttribute('href'));
    });

    pages.forEach((page) => {
        page.classList.toggle('page-active', anchor === ('#' + page.id));
    });
}

const navClickHandler = (evt) => {
    const link = evt.target.closest('a');

    if (!link) {
        return;
    }

    const anchor = link.getAttribute('href');

    setActivePage(anchor);
}

const init = () => {
    nav.addEventListener('click', navClickHandler);
}

init();