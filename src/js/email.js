// import { formBtn } from './domElements';
import { btnFading } from './animations/gsap';

export const sendMail = () => {
  const tempParams = {
    user_name: document.getElementById('user_name').value,
    user_email: document.getElementById('user_email').value,
    message: document.getElementById('message').value,
  };

  emailjs.send('pro_gmail', 'contact_form', tempParams).then((res) => {
    console.log('email send', res);
    if (res.status === 200) {
      btnFading();
    }
  });
};
