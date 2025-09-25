// template_96kkyzq
// service_1gkrln5
// 0Kvg71VgxkqtGr17U


function contact(){
    event.preventDefault();
//     emailjs
//         .sendForm(
//            `service_1gkrln5`, 
//            `template_96kkyzq`,
//            event.target,
//            `0Kvg71VgxkqtGr17U`
//         ) .then(() => {
//             console.log(`this worked`)
//         })
const loading = document.querySelector(`modal__overlay--loading`)
const success = document.querySelector(`modal__overlay--success`)
loading.classList += ` modal__overlay--visible`
setTimeout(() => {
    loading.classList
    console.log(`it worked 1`)
}, 1000);
}
