import express from "express";
import { connection } from "../../database/mysql";

const router = express.Router();

export const checkVoucher = () => {
  return router.post(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        const { idVoucher } = req.body;
        const sql = "call checkvoucher (?)";
        connection.query(sql, [idVoucher], (err, result) => {
          if (err) throw err;
          let checked = false;
          if (result[0].toLowerCase() === "valid") {
            checked = true;
          }
          res.json({
            status: 200,
            checked,
          });
        });
      } catch (error) {
        console.log(error);
      }
    }
  );
};
