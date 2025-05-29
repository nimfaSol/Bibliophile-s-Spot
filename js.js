const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
})

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
})

function filterFunction() {
    var input, filter, dropdown, options, i;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    dropdown = document.getElementById("myDropdown");
    options = dropdown.getElementsByTagName("a");
    for (i = 0; i < options.length; i++) {
        options[i].style.display = 
            options[i].innerText.toUpperCase().includes(filter) ?
            "block" : "none";
    }
}

