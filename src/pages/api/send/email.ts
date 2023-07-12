// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import sg from '@sendgrid/mail'
import { NextResponse } from 'next/server'
sg.setApiKey("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")

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.body)
  // const msg = {
  //   to: {
  //     email: 'chris.abs96@gmail.com',
  //     name: 'chris abbott',
  //   },
  //   from: {
  //     email: req.body.email,
  //     name: req.body.name
  //   },
  //   subject: `Contact request from ${req.body.name}`,
  //   text: req.body.message,
  //   html: `<p>${req.body.message}</p>`,
  //   content: [
  //     {
  //       type: 'text/html',
  //       value: '<p>Hello from Twilio SendGrid!</p><p>Sending with the email service trusted by developers and marketers for <strong>time-savings</strong>, <strong>scalability</strong>, and <strong>delivery expertise</strong>.</p><p>%open-track%</p>'
  //     }
  //   ],
  // }

  const msg = {
    to: 'chris.abs@gmail.com', // Change to your recipient
    from: req.body.email,
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }

  try {
    const response = await sg.send(msg)
    console.log(response)
    res.status(204)
  } catch (err: any) {
    console.log(err.response.body)

    return res.status(400)
  }
}
