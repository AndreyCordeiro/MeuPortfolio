function atualizarCopyright() {
    const copyrightDiv = document.getElementById('copyright');

    copyrightDiv.textContent = '© ' + new Date().getFullYear() + ' Andrey Cordeiro';
}