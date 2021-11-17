window.addEventListener("DOMContentLoaded", ()=>{
  function req(e) {
    e.preventDefault(e);
    const request = new XMLHttpRequest();
    request.open("GET",'http://localhost:3004/people');
    request.setRequestHeader('Content-type', 'application/json; charser=utf-8')
    request.send();
    request.addEventListener('readystatechange', ()=>{
      if(request.readyState ===4 && request.status ==200) {
        let data = JSON.parse(request.response);
        console.log(data);
        data.forEach(item => {
          let card = document.createElement('div');
          card.classList.add('card');
          card.innerHTML =`
            <img src="${item.photo}" alt="photo">
            <div class="name">${item.name} ${item.surname}</div>
            <div class="sex">
              <img src="icons/${item.sex}.png" alt="male">
            </div>
            <div class="age"> ${item.age}</div>
          `;
          document.querySelector('.app').appendChild(card);
        })
      } else {
        console.error('Что-то пошло не так')
      }
    })
    this.remove();
  }
  // req();
  document.querySelector('button').addEventListener('click', req, {"once": true});
})
// json-server --watch db.json --port 3004