// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import sg from '@sendgrid/mail'
import { NextResponse } from 'next/server'
sg.setApiKey(`${process.env.SG_APIKEY}`)

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

}

