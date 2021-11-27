import express from "express";
import { connection } from "../../database/mysql";

const router = express.Router();

export const xemHoaDon = () => {
  return router.get(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        
        const sql = "call xemhoadon()";
        connection.query(sql, (err, result) => {
          if (err) throw err;
          res.json(result[0]);
        });
      } catch (error) {
        console.log(error);
      }
    }
  );
};
