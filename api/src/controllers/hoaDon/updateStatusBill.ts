import express from "express";
import { connection } from "../../database/mysql";

const router = express.Router();

type Body = {
  id: string;
  status: string;
};

export const updateStatusBill = () => {
  return router.post(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        const { data }: { data: Body[] } = req.body;
        const sql = "call updatestatus (?, ?)";
        console.log(`data`, data);
        data.map((item) => {
          connection.query(sql, [item.id, item.status], (err, result) => {
            if (err) throw err;
          });
        });

        res.json({
          status: 200,
        });
      } catch (error) {
        console.log(error);
      }
    }
  );
};
