function lockedProfile() {

    let profiles = document.getElementsByClassName('profile');

    for (let i = 0; i < profiles.length; i++) {
        let hiddenFields = document.getElementById(`user${i + 1}HiddenFields`);

        let lockedRadio = profiles[i].querySelectorAll(`input[name="user${i + 1}Locked"]`)[0];

        let button = profiles[i].querySelector('button');

        button.addEventListener('click', () => {
            if (lockedRadio.checked) {
                return
            }
            // this is some weirdness for style detection, declared in .css file
            if (window.getComputedStyle(hiddenFields).display === 'none') {
                button.innerText = 'Hide It'
                hiddenFields.style.display = 'block'
            } else {
                button.innerText = 'Show more'
                hiddenFields.style.display = 'none'
            }
        })
    }
}
