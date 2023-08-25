const form = document.querySelector('.footer__contacts-formspree');
    
async function handleSubmit(event) {
  event.preventDefault();
  const status = document.querySelector('.footer__contacts-status');
  const response = await fetch('https://formspree.io/f/xpzyvoez', {
    method: 'POST',
    body: new FormData(event.target),
    headers: {
        'Accept': 'application/json'
    }
  })
  if (response.ok) {
    status.innerHTML = "Thanks for your submission!";
    form.reset()
  } else {
    status.innerHTML = "ERROR";
  }
}

form.addEventListener("submit", handleSubmit);
