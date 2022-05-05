trackMouse();


const elContextMenu = dom('context_menu');
function contextMenu(event) {
    event.preventDefault();

    let y = mouseY;
    let x = mouseX;
    let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    if(mouseX + 240 >= vw) {
        // x -= 240;
        x = vw - 240;
    }
    elContextMenu.style.top = `${y}px`;
    elContextMenu.style.left = `${x}px`;
    elContextMenu.focus();
}

document.addEventListener('keydown', event => {
    let key = event.key;
    if(key == 'Escape') { elContextMenu.blur(); } 
});