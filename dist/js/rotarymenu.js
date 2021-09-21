document.body.addEventListener('mousedown', e => {
    if(e.which === 2) {
        document.styleSheets[0].cssRules[314].style.top = e.clientY + 300 + 'px';
        document.styleSheets[0].cssRules[314].style.left = e.clientX - 200 + 'px';
        document.styleSheets[0].cssRules[314].style.display = 'grid';
        setTimeout(() => document.styleSheets[0].cssRules[314].style.display = 'none', 2000)
    }
});