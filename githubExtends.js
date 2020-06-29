// Get all the input fields on the settings page.
const allInputs = document.querySelectorAll('p > input');

// Trim extra input — all required ones has 2 classes.
const filteredInputs = Array.from(allInputs).filter(e => e.classList.length === 2);

// Grab the repo name.
const inputValue = document.location.href.split('/').slice(3,5).join('/');

// Attach the button.
const updatedInputs = filteredInputs.map(e => {
    const btn = createBtn();
    e.parentElement.classList.add('sa-flex');
    e.parentElement.appendChild(btn);
})

function createBtn() {
    const btn = document.createElement('img');
    btn.classList.add('sa-icon');
    btn.src = 'https://clipboardjs.com/assets/images/clippy.svg';
    btn.addEventListener('click', function(e) {
        e.target.parentElement.firstElementChild.value = inputValue;
        simulateChangeEvent(btn);
    });
    return btn;
}

function simulateChangeEvent(el) {
    el.dispatchEvent(
        new Event('change', {
            bubbles: true,
    }))
}
