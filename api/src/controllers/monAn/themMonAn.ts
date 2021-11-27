import express from "express";
import { connection } from "../../database/mysql";
type monAn = {
  id: String;
  ten: String;
  gia: number
};
const router = express.Router();
export const themMonAn = () => {
  return router.post(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        const { data }: { data: monAn[] } = req.body;

        const rs = await Promise.all(
          data.map((item) => {
            const sql = "call themMonAn (?,?,?)";
            return new Promise((resolve, reject) => {
              connection.query(
                sql,
                [
                  item.id,
                  item.ten,
                  item.gia,
                ],
                function (err, results) {
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
            message: "success",
          });
        }
      } catch (error) {
        console.log(`error`, error)
        res.json({
          status: 400,
          body: error,
        });
      }
    }
  );
};
