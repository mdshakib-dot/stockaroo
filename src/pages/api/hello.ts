import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../utils/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const s = await prisma.test.findFirst({
    where: { id: 1 },
    select: { name: true },
  })
  res.json(s)
}
