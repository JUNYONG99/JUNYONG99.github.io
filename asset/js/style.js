const checkBox = document.querySelector('#checkBox');

checkBox.addEventListener('click', () => {
    // check 여부 확인
    const is_checked = checkBox.checked;
    if (is_checked == true) {
        setTimeout(() => {
            window.location.href = 'landing.html'
        }, 800);
    }
});