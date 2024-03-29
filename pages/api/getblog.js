// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";

export default function handler(req, res) {
  fs.readFile(`blogdata/${req.query.slug}.json`, "utf8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "No Such Blog Found!" });
      return;
    }
    res.status(200).json(JSON.parse(data));
  });
}
