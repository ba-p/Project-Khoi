import express from "express";
import { connection } from "../../database/mysql";

const router = express.Router();

export const taoCustomer = () => {
  return router.post(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        const { name, phone } = req.body;
        const sql = "call TAOTAIKHOAN (?, ?)";
        connection.query(sql, [name, phone], (err, result) => {
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
