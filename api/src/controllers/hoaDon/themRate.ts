import express from "express";
import { connection } from "../../database/mysql";

const router = express.Router();

export const themRate = () => {
  return router.post(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        const { idOrder, date, star } = req.body;
        const sql = "call danhgia (?, ?, ?)";
        connection.query(sql, [idOrder, date, star], (err, result) => {
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
