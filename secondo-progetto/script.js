let add = document.getElementById('aggiungere');
let remove = document.getElementById('diminuire');

let int = document.getElementById('numero');
let integer = 0;

add.addEventListener('click', function(){
  integer += 1;
  int.innerHTML = integer;
})

remove.addEventListener('click', function(){
  integer += -1;
  int.innerHTML = integer;
})
