// Context menu data
// const contextData = {
//     'items_object_sample': [
//         {
//             name: 'Custom context menu',
//             code: "() => { console.log('hello'); }",
//         },
//         {
//             name: 'Item 2',
//             code: "() => { console.log('HELLO 2'); }",
//         },
//         { type: 'divider', },
//         {
//             name: 'EEee',
//             code: "() => { console.log('EEee -EEee'); }",
//         },
//     ],
// };


const elContextMenu = dom('context_menu');
function contextMenu(event) {
    event.preventDefault();

    let y = event.clientY;
    let x = event.clientX;
    let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    if(x + 240 >= vw) {
        // x -= 240;
        x = vw - 240;
    }

    // Update page
    // populateContextMenu(event.srcElement.id);
    elContextMenu.style.top = `${y}px`;
    elContextMenu.style.left = `${x}px`;
    elContextMenu.focus();

    /** Populate context menu */
    function populateContextMenu(id) {
        let html = '';
        let data = contextData?.[id];
        if(data == undefined) return;
        for(i = 0; i < data.length; i++) {
            console.log(data.name);
            console.log(data.code);
            html += `<div class="context_item" tabindex="0" role="button" onclick="${data.code}">${data.name}</div>`;
        }
        elContextMenu.innerHTML = html;
    }
}

/** Keydown */
document.addEventListener('keydown', event => {
    let key = event.key;
    if(key == 'Escape') { elContextMenu.blur(); } 
});