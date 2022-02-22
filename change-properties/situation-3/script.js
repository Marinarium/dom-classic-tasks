const content = document.querySelector('.content');

const moreLinkClickHandler = (evt) => {
    const element = evt.target.closest('button.more');

    if (!element) {
        return;
    }

    const descriptionElement = document.querySelector('.description');

    if (descriptionElement) {
        descriptionElement.classList.toggle('description-short');
        element.textContent = descriptionElement.classList.contains('description-short') ? 'Ещё' :  'Свернуть';
    }
};

content.addEventListener('click', moreLinkClickHandler);