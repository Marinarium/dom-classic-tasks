const toolbar = document.querySelector('.js-buttons-container');

toolbar.addEventListener('click', (event) => {
    const button = event.target.closest('button');

    if (!button) {
        return;
    }

    const {settingCmd, settingTarget} = button.dataset;

    const element = document.querySelector(settingTarget);
    if (element) {
        element.classList.toggle(settingCmd);
    }
});