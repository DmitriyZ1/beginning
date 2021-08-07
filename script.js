let arr = ['igor', 'ivan', 'svetlana', 'edik', 'yarik'];


arr.forEach((el)=>{
    let div = document.createElement('div');
    div.classList.add('cart');
    let p = document.createElement('p');
    
    //let text = el.split('');
    //text.splice(0,1,text[0].toUpperCase());
    //text[0] = text[0].toUpperCase();
    //text = text.join('');
   
    let text = el.toLowerCase();
    text = text.replace(/^[a-zа-яё]/, (e) => e.toUpperCase());
    
    p.textContent = text;
    
    div.append(p);
    document.querySelector('body').append(div);
})