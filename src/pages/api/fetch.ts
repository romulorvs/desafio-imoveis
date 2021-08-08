import type { NextApiRequest, NextApiResponse } from 'next'
import { axios } from '_helpers'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> {
  try {
    const { data } = await axios.get(
      '/cryptocurrency/listings/latest',
      req.query
    )

    return res.status(200).json(data)
  } catch (error) {
    return res.status(401).json({ message: 'Could not get the prices' } as any)
  }
}
