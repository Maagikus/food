
function openModal(modalSelector){
    const modal = document.querySelector(modalSelector);
        modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    // clearInterval(modalTimerId)
}
function closeModal(modalSelector){
    const modal = document.querySelector(modalSelector);
        modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = ''
}
function modalWindow(triggerSelector, modalSelector){
    const modalTrigger =document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        modalCloseBtn = document.querySelector('[data-close]');

    modalTrigger.forEach(item=>{
        item.addEventListener('click',()=> openModal(modalSelector))
    })


    modalCloseBtn.addEventListener('click',(e)=>{
        closeModal(modalSelector)

    })
    modal.addEventListener('click',(e)=>{
        if(e.target === modal){
            closeModal(modalSelector)

        }
    })
    // const modalTimerId = setTimeout(openModal,5000)
    function showModalByScroll (){
        if(window.scrollY + document.documentElement.clientHeight>= document.documentElement.scrollHeight){
            openModal(modalSelector);
            window.removeEventListener('scroll',showModalByScroll)
        }
    }

    window.addEventListener('scroll',showModalByScroll)

}

export default modalWindow;
export {closeModal};
export {openModal};