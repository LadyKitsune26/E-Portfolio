// template_96kkyzq
// service_1gkrln5
// 0Kvg71VgxkqtGr17U


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

 
let isModalOpen = false
function toggleModal(){
    if (isModalOpen){
        isModalOpen = false
        return document.body.classList.remove(`modal--open`)
    }
    isModalOpen = true;
    document.body.classList += ` modal--open`
}
