const input = document.getElementById('link-input');
const linkForm = document.getElementById('link-form');
const errMsg = document.getElementById('err-msg');

//linkForm.addEventListener('submit', formSubmit);
linkForm.onsubmit = formSubmit;

// Validate a URL
function validURL(str) {
    var pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$',
      'i'
    )
    return !!pattern.test(str)
  }

function formSubmit(e) {
    e.preventDefault();
    if(input.value === '') {
        errMsg.innerHTML = 'Please enter something';
        input.classList.add('border-red');
    } else if(!validURL(input.value)) {
        errMsg.innerHTML = 'Please enter a valid url';
        input.classList.add('border-red');
    } else {
        input.classList.remove('border-red');
        errMsg.innerHTML = '';
    }

}

const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

btn.addEventListener('click', navToggle);

function navToggle() {
    btn.classList.toggle('open');
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
}