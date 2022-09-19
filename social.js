// sidebar
const menuItems = document.querySelectorAll('.menu-item');

//messages
const messagesNotification = document.querySelectorAll('#messages-notification'); 
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.messages');
const  messageSearch = document.querySelector('#message-search');

// remove active class from all menu items 
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    }) 
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != "notification"){
            document.querySelector('.not-popup').style.display = 'none';
        } else{
            document.querySelector('.not-popup').style.display = 'block';
            document.querySelector('#notification .notification-count').style.display = 'none';

        }
    })
})

// ======================== messages ====================
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})


const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    console.log(val);
    message.forEach(chat => {
        let name = chat.querySelectorAll('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display ='flex';
        } else{
            chat.style.display ='none';
        }
    })
}





messageSearch.addEventListener('keyup', searchMessage);