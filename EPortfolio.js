// template_96kkyzq
// service_1gkrln5
// 0Kvg71VgxkqtGr17U




//Dark-Theme function


let contrastToggle = false
function toggleContrast(){
    contrastToggle = !contrastToggle
    if (contrastToggle){
        document.body.classList += ` dark-theme`
    }
    else{
        document.body.classList.remove(`dark-theme`)
    }
}


// Contact Function



function contact(){
    event.preventDefault();
    const loading = document.querySelector(`.modal__overlay--loading`)
    const success = document.querySelector(`.modal__overlay--success`)
    loading.classList += ` modal__overlay--visible`;
    
    emailjs
        .sendForm(
           `service_1gkrln5`, 
           `template_96kkyzq`,
           event.target,
           `0Kvg71VgxkqtGr17U`
        ) .then(() => {
            loading.classList.remove(`modal__overlay--visible`);
            success.classList += ` modal__overlay--visible`;
        }).catch(() =>{
            loading.classList.remove(`modal__overlay--visible`);
            alert(`The email service is temporarily unavailable. Please contact me directly at langlois.raimey@gmail.com`

            )
        })
}

 



// Modal function


let isModalOpen = false
function toggleModal(){
    if (isModalOpen){
        isModalOpen = false
        return document.body.classList.remove(`modal--open`)
    }
    isModalOpen = true;
    document.body.classList += ` modal--open`
}






// Shape function



const scaleFactor = 1 / 20
function moveBackground(event){
    const shapes = document.querySelectorAll(`.shape`)
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    
    for (let i = 0; i < shapes.length; ++i){
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}
