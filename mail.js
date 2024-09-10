const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_vi2epuq';
   const templateID = 'template_5za1ptf';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Message Sucssusfully Sented!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

document.getElementById('form').addEventListener('submit', function(event) {
  let isValid = true;

  // Clear previous errors
  const fields = document.querySelectorAll('.field');
  fields.forEach(field => {
      const errorSpan = field.querySelector('.error');
      if (errorSpan) {
          errorSpan.remove();
      }
  });

  // Validate name
  const name = document.querySelector('input[name="from_name"]').value;
  if (name.trim() === '') {
      showError('from_name', 'Name is required');
      isValid = false;
  }

  // Validate email
  const email = document.querySelector('input[name="from_email"]').value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
      showError('from_email', 'Invalid email address');
      isValid = false;
  }

  // Validate message
  const message = document.querySelector('textarea[name="message"]').value;
  if (message.trim() === '') {
      showError('message', 'Message is required');
      isValid = false;
  }

  if (!isValid) {
      event.preventDefault();
  }
});

function showError(fieldName, errorMessage) {
  const field = document.querySelector(`[name="${fieldName}"]`).parentElement;
  const errorSpan = document.createElement('span');
  errorSpan.className = 'error';
  errorSpan.innerText = errorMessage;
  field.appendChild(errorSpan);
}
