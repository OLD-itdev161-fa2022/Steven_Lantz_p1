
//Send PUT request when button is clicked
const update = document.querySelector('#update-button')

//Trigger a PUT req by using fetch api
update.addEventListener('click', _ => {
  fetch('/quotes', {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Darth Vadar',
      quote: 'I find your lack of faith disturbing.'
    })
  })
})
