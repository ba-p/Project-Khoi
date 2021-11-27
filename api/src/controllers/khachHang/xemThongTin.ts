import express from "express";
import { connection } from "../../database/mysql";

const router = express.Router();

export const  xemThongTin = () => {
  return router.post(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        const { idkh } = req.body;
        const sql = "call xemThongTin(?)";
        connection.query(sql, [idkh], function (err, results) {
          if (err) throw err;
          res.json(results.affectedRows);
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
