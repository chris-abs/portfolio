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
