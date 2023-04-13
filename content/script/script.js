let colorBtns=document.querySelectorAll('.button')

colorBtns.forEach(function(e){
    console.log(e);
    e.addEventListener('click',function(event){
        let btnColor=event.target.dataset.color;
        document.documentElement.style.setProperty('--theme-color',btnColor)
    })
})