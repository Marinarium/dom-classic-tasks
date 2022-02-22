const feedbackForm = document.querySelector('.feedback');
const textField = document.querySelector('#other-answer');

const formChangeHandler = (event) => {
    const item = event.target.closest('input[type="radio"]');

    if (!item) {
        return;
    }

    textField.toggleAttribute('disabled', item.id !== 'other' || !item.checked);
}

feedbackForm.addEventListener('change', formChangeHandler);