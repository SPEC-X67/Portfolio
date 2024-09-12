const btn = document.getElementById('btn-click');

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Form validation
  const name = document.getElementById('fname');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const name_error = document.getElementById('name_error');
  const email_error = document.getElementById('email_error');
  const message_error = document.getElementById('message_error');

  let name_check = /^[a-zA-Z\s]+$/;
  let email_check = /^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  // Reset error messages
  name_error.innerHTML = '';
  email_error.innerHTML = '';
  message_error.innerHTML = '';

  let valid = true;

  // Name validation
  if (name.value === '' || name.value == null) {
    name_error.innerHTML = "Name is Required";
    valid = false;
  } else if (!name_check.test(name.value)) {
    name_error.innerHTML = "Name Should not contain Numbers";
    valid = false;
  }

  // Email validation
  if (!email.value.match(email_check)) {
    email_error.innerHTML = "Valid Email is Required";
    valid = false;
  }

  // Message validation
  if (message.value.length <= 15) {
    message_error.innerHTML = "Message must be above 15 characters";
    valid = false;
  }

  if (!valid) {
    return;
  }

  // Sending email
  btn.value = 'Sending...';

  const serviceID = 'service_vi2epuq';
  const templateID = 'template_5za1ptf';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Message Successfully Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
