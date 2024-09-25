const linkGscript = 'https://script.google.com/macros/s/AKfycbzit_U8x2MGlj74LOExgfdVhEr9pZNqwDOv7p8pyzdGI_7AGxZpTgDkMuXaw9ps_lMH/exec'
const form = document.getElementById('formregis')

form.addEventListener('submit', e =>{

  const email = document.getElementById('email')

  fetch(linkGscript, {
    method: 'POST',
    headers: { 'Content-Type': 'aplication/x-www-form-urlencoded'},
    body: new URLSearchParams({'email': email})  
  })
  .then(response => {
    alert('Anda sudeh register!')
    form.reset()
  })
  .catch(error => console.error('Error!', error.message));
})