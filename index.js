function resizeBlock() {
    let head = document.querySelector('.head');
    let new_height = document.querySelector(".head__left").offsetHeight;
    head.style.height = new_height + "px";
}
resizeBlock();
window.onresize = resizeBlock;

