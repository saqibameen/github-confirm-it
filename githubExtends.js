// Get all the input fields on the settings page.
let allInputs = document.querySelectorAll('p > input');

let archiveInput = allInputs[3];

console.log("archiveInput", archiveInput);

// Select the input.
archiveInput.value = 'saqibameen/learn-next-js';
archiveInput.focus();

document.execCommand('insertText', false, 'saqibameen/learn-next-js');

// Check the value
console.log("archiveInput VALUE", archiveInput.value);
