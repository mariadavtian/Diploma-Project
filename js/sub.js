const scriptURL = 'https://script.google.com/macros/s/AKfycbzsQ9X2BVb2w0lnUGQ5TDC3-pY3TE14bSrpHpxB_PJJ6K3vY2S1UW0r8FOZ7EPc440m0g/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('sub_msg')
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = `Շնորհակալություն Բաժանաորդագրության համար։`
    })
    .catch(error => console.error('Error!', error.message))
})
