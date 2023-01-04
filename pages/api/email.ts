// import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, message } = req.body;
  console.log(process.env)

  var templateParams = {
    name: name,
    email: email,
    message: message
  };

  emailjs.send(
    process.env.EMAIL_JS_SERVICE,
    process.env.EMAIL_JS_TEMPLATE,
    templateParams,
    process.env.EMAIL_JS_USER)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      res.status(200).end(JSON.stringify({ message: 'Send Mail' }))
    }, (err) => {
      console.log('FAILED...', err);
      res.status(400).end(JSON.stringify({ message: "Error" }))
    });
}

export default handler;