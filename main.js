function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Error en " + url);
    });
    req.send(null);
}



window.addEventListener('load', function(e){

    e.preventDefault();

    // STORE 1

    ajaxGet("https://fakestoreapi.com/products/category/jewelery", function (response) {

      let data = JSON.parse(response);
      let count = Object.keys(data).length;
      
      for (let i = 0; i < count; i++) {

        let card = document.createElement('div');
        card.classList.add('card');

        let imgCont = document.createElement('div');
        imgCont.classList.add('imgCont');
        imgCont.style.backgroundImage = 'url('+data[i]['image']+')';
        let title = document.createElement('h5');
        title.innerHTML = data[i]['title'];
        let info = document.createElement('div');
        info.classList.add('info');
        let price = document.createElement('span');
        price.classList.add('price');
        price.innerHTML = data[i]['price'];
        let rating = document.createElement('div');
        rating.classList.add('rating');
        let rate = document.createElement('span');
        rate.classList.add('rate');
        rate.innerHTML = data[i]['rating']['rate'];
        let ct = document.createElement('span');
        ct.classList.add('count');
        ct.innerHTML = '('+data[i]['rating']['count']+')';

        card.appendChild(imgCont);
        card.appendChild(title);
        info.appendChild(price);
        info.appendChild(rating);
        rating.appendChild(rate);
        rating.appendChild(ct);
        card.appendChild(info);
        
        let store1 = document.getElementsByClassName('store1')[0];
        store1.appendChild(card);

        console.log(data[i]);
      }

    });   
    

    // STORE 2

    ajaxGet("https://fakestoreapi.com/products/category/electronics", function (response) {

        let data = JSON.parse(response);
        let count = Object.keys(data).length;
        
        for (let i = 0; i < count; i++) {
  
          let card = document.createElement('div');
          card.classList.add('card');
  
          let imgCont = document.createElement('div');
          imgCont.classList.add('imgCont');
          imgCont.style.backgroundImage = 'url('+data[i]['image']+')';
          let title = document.createElement('h5');
          title.innerHTML = data[i]['title'];
          let info = document.createElement('div');
          info.classList.add('info');
          let price = document.createElement('span');
          price.classList.add('price');
          price.innerHTML = data[i]['price'];
          let rating = document.createElement('div');
          rating.classList.add('rating');
          let rate = document.createElement('span');
          rate.classList.add('rate');
          rate.innerHTML = data[i]['rating']['rate'];
          let ct = document.createElement('span');
          ct.classList.add('count');
          ct.innerHTML = '('+data[i]['rating']['count']+')';
  
          card.appendChild(imgCont);
          card.appendChild(title);
          info.appendChild(price);
          info.appendChild(rating);
          rating.appendChild(rate);
          rating.appendChild(ct);
          card.appendChild(info);
          
          let store2 = document.getElementsByClassName('store2')[0];
          store2.appendChild(card);
  
          console.log(data[i]);
        }

    }); 
    

});








function dropMenu(){
    let menuMobile = document.getElementsByClassName('mobile')[0];

    if (menuMobile.classList.contains('drop') == true) {
        menuMobile.style.paddingTop = "0px";
        menuMobile.classList.remove('drop');
    } else {
        menuMobile.classList.add('drop');
        menuMobile.style.paddingTop = "75px";
    }

    
}