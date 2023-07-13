// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import sg from '@sendgrid/mail'
import { NextResponse } from 'next/server'
sg.setApiKey(`${process.env.SG_APIKEY}`)

type Data = {
  name: string
  email: string
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {email, message, name} = req.body as Data
  console.log(req.body)


  const msg = {
    to: 'chris.abs96@gmail.com', // Change to your recipient
    replyTo: req.body.email,
    from: 'support@em6014.chrisabbott.dev',
    subject: `Contact from ${req.body.email}`,
    text: `Email from ${req.body.email} with message ${req.body.message}`,
    html: `<strong>${req.body.message}</strong>`,
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
