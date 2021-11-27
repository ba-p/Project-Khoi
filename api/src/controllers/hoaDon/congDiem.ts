import express from "express";
import { connection } from "../../database/mysql";

const router = express.Router();

type Body = {
  idKh: string;
  point: number;
};

export const congDiem = () => {
  return router.post(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        const { data }: { data: Body[] } = req.body;
        const sql = "call congdiem (?, ?, ?)";
        const rs = await Promise.all(
          data.map((item) => {
            return new Promise((resolve, reject) => {
              connection.query(sql, [item.idKh, item.point], (err, result) => {
                if (err) reject(err);
                resolve(true);
              });
            });
          })
        );
        if (rs) {
          res.json({
            status: 200,
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  );
};
