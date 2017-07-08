/////////////////////
// Auto header anchor
/////////////////////

const anchorForId = function (id) {
    const anchor = document.createElement('a');
    anchor.className = 'header-link';
    anchor.href      = '#' + id;
    anchor.innerHTML = '<i class="fa fa-link"></i>';
    return anchor;
}

const linkifyAnchors = function () {
    for (let level = 1; level <= 6; level++) {
        const headers = document.getElementsByTagName('h' + level);
        Array.from(headers).forEach(header  => {
            if (typeof header.id !== 'undefined' && header.id !== '') {
                header.appendChild(anchorForId(header.id));
            }
        })
    }
}

export default linkifyAnchors
