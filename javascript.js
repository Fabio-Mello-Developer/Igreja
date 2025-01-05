function clickMenu() {

    if (navi.style.display == "block") {
        navi.style.display = "none"
    } else {
        navi.style.display = "block"
    }
}    
function mudouTamanho() {
    if (window.innerWidth >= 600) {
        navi.style.display = 'flex'
    
    }
    else {
        navi.style.display = 'none'
    }

}