import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = {
    service_id: process.env.EMAIL_JS_SERVICE,
    template_id: process.env.EMAIL_JS_TEMPLATE,
    user_id: process.env.EMAIL_JS_USER,
    accessToken: process.env.EMAIL_JS_KEY,
    template_params: req.body
  }

  await fetch(`https://api.emailjs.com/api/v1.0/email/send`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }})
    .then((response) => {
      console.log('API Response: ', response.status, response.statusText);
      if (response.status == 200) {
        res.status(200).end(JSON.stringify({ message: 'Send Mail' }))
      } else {
        res.status(response.status).end(JSON.stringify({ message: 'Error' }))
      }
    }, (err) => {
      console.log('FAILED...', err);
      res.status(400).end(JSON.stringify({ message: "Error" }))
    });
}

export default handler;
