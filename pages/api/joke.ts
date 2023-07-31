import { NextApiRequest, NextApiResponse } from "next";
import { JokeService } from "../../services/JokeService";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      try {
        const jokeService = new JokeService();
        const joke = await jokeService.getJoke();
        res.status(200).json(joke);
      } catch (error: any) {
        res.status(500).send({ error: error.message });
      }
      break;
    default:
      res.status(500).json({ error: "invalid HTTP method" });
      break;
  }
};

export default handler;
