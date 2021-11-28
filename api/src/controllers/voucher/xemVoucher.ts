import express from "express";
import { connection } from "../../database/mysql";

const router = express.Router();

export const  xemVoucher = () => {
  return router.get(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        const { idkh } = req.body;
        const sql = "select * from voucher";
        connection.query(sql, function (err, results) {
          if (err) throw err;
          res.json(results);
        });

        // sql
        // const baber = {};
        // res.json(baber);
      } catch (error) {
        res.json({
          status: 400,
          body: error,
        });
      }
    }
  );
};