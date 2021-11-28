import express from "express";
import { connection } from "../../database/mysql";

const router = express.Router();

export const xemMonAn = () => {
  return router.get(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        
        const sql = "select * from monAn";
        connection.query(sql, (err, result) => {
          if (err) throw err;
          res.json(result);
        });
      } catch (error) {
        console.log(error);
      }
    }
  );
};
