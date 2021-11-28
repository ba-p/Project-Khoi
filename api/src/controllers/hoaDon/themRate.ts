import express from "express";
import { connection } from "../../database/mysql";

const router = express.Router();

export const themRate = () => {
  return router.post(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        const { idOrder, today, value } = req.body;
        const sql = "call danhgia (?, ?, ?)";
        connection.query(sql, [idOrder, today, value], (err, result) => {
          if (err) throw err;
          res.json({
            status: 200,
          });
        });
      } catch (error) {
          console.log(error);
      }
    }
  );
};
