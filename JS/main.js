const modal= document.querySelector('.modal')
const loginBtn= document.querySelector('.login-btn')
const closeBtn= document.querySelector('.close')

loginBtn.addEventListener('click',openModel)
closeBtn.addEventListener('click',closeModel)
window.addEventListener('click',outsideClick)

function openModel(){
    modal.style.display='block'
}

function closeModel(){
    modal.style.display = 'none'
}

function outsideClick(e){
    if (e.target == modal){
        closeModel
    }
}
