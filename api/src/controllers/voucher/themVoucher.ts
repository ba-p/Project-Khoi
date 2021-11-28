import express from "express";
import { connection } from "../../database/mysql";
type voucher = {
  id: String;
  giam: number;
};
const router = express.Router();
export const themVoucher = () => {
  return router.post(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        const { data }: { data: voucher[] } = req.body;
        const sql1 = "select * from voucher";
        connection.query(sql1, async (err, result) => {
          const existed = result.map((item: any) => item.idvoucher);

          const rs = await Promise.all(
            data.map((item) => {
              if (existed.includes(item.id)) return;
              const sql = "call themVoucher (?,?)";
              return new Promise((resolve, reject) => {
                connection.query(
                  sql,
                  [item.id, item.giam],
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
        });
      } catch (error) {
        console.log(`error`, error);
        res.json({
          status: 400,
          body: error,
        });
      }
    }
  );
};
