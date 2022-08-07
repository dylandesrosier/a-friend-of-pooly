import { NextApiRequest, NextApiResponse } from "next";

export function validateMethod(
  req: NextApiRequest,
  res: NextApiResponse,
  methods: string[]
): void {
  if (!req.method) {
    res.status(400).json(undefined);
  } else if (!methods.includes(req.method)) {
    res.status(405).json(undefined);
  }
}

export function validateContentType(
  req: NextApiRequest,
  res: NextApiResponse,
  contentTypes: string[]
): void {
  if (
    !req.headers["content-type"] ||
    !contentTypes.includes(req.headers["content-type"])
  ) {
    res.status(400).json(undefined);
  }
}

export function returnError(res: NextApiResponse, e: any): void {
  if (typeof e === "string") {
    res.status(500).json({ error: e });
  } else if (e instanceof Error) {
    res.status(500).json({ error: e.message });
  }
}
