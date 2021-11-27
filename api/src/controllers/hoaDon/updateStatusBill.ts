import express from "express";
import { connection } from "../../database/mysql";

const router = express.Router();

type Body = {
  idOrder: string;
  status: string;
};

export const updateStatusBill = () => {
  return router.post(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        const { data }: { data: Body[] } = req.body;
        const sql = "call updatestatus (?, ?)";
        const rs = await Promise.all(
          data.map((item) => {
            return new Promise((reject, resolve) => {
              connection.query(
                sql,
                [item.idOrder, item.status],
                (err, result) => {
                  if (err) reject(err);
                  resolve(true);
                }
              );
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
