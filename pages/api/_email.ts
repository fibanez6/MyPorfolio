import { SMTPClient } from 'emailjs';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, message } = req.body;
  console.log(process.env)

  const client = new SMTPClient({
    user: process.env.MAIL,
    password: process.env.PASSWORD,
    host: 'smtp.gmail.com',
    ssl: true,
    port: 465
  });

  const send = async () => {
    try {
      const message = await client.sendAsync({
        text: 'i hope this works',
        from: process.env.MAIL,
        to: email,
        subject: 'testing emailjs',
      });
      console.log(message);
      res.status(200).end(JSON.stringify({ message: 'Send Mail' }))
    } catch (err) {
      console.error(err);
      res.status(400).end(JSON.stringify({ message: "Error" }))
    }
  }

  send()
}

export default handler;