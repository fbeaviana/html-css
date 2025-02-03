const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if (className == "light-theme") {
        this.textContent = "Alterar tema";
    }
    else {
     this.textContent = "Alterar tema";
    } 
    console.log('current class name' + className);
});
