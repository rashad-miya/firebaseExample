

let tablinks = document.getElementsByClassName('tab-links');
let tabContents = document.getElementsByClassName('tab-contents');

function openTab(tabName) {
    for (tablink of tablinks) {
        tablink.classList.remove('active-link')
    }
    for (tabContent of tabContents) {
        tabContent.classList.remove('active-tab')
    }

    event.currentTarget.classList.add('active-link');
    document.getElementById(tabName).classList.add('active-tab')
}

const openMenu = () => {
    let sideMenu = document.getElementById('sidemenu');

    sideMenu.style.right = "0"

}

const closeMenu = () => {
    let sideMenu = document.getElementById('sidemenu');

    sideMenu.style.right = "-70%"
}
