import { generate } from "../app.js";

export const llmResponse = async (req: any, res: any) => {
  try {
    const { message } = req.body;

    const result = await generate(message);

    res.json({ message: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};
