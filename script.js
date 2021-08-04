let arr = ['igor', 'ivan', 'svetlana', 'edik'];


arr.forEach((el)=>{
    let div = document.createElement('div');
    div.classList.add('cart');
    let p = document.createElement('p');
    p.textContent = el;
    
    div.append(p);
    document.querySelector('body').append(div);
})