import express from "express";
import { connection } from "../../database/mysql";

type pchiTiet = {
  id: string,
  sl: number
};
const router = express.Router();
export const themHoaDon = async (
  idorder: string,
  idkh: string,
  idvoucher: string,
  stt: string,
  chiTiet: pchiTiet[]
) => {
  const sql = "call themHoaDon (?,?,?,?)";
  const sql1 = "call themDetail (?,?,?)";
  try {
    const rs = await new Promise((resolve, reject) => {
      connection.query(
        sql,
        [idorder, idkh, idvoucher, stt],
        (err) => {
          if (err) reject(err);
          resolve(true);
        }
      );
    });
    if (rs) {
      const rs1 = await new Promise((resolve, reject) => {
        chiTiet.map((pchiTiet) =>
        connection.query(
          sql1,
          [pchiTiet.id, pchiTiet.sl, idorder],
          (err) => {
            if (err) reject(err);
            resolve(true);
          })
        );
      });
          if(rs1){
            return true;
          }
        }
    return false;
  } catch (error) {
    return false;
  }
};

export const themChiTietHoaDon = () => {
  return router.post(
    "/",
    async (req: express.Request, res: express.Response) => {
      try {
        const {
          idorder,
          idkh,
          idvoucher,
          stt,
          chiTiet
        } = req.body;
        const status = themHoaDon(
          idorder,
          idkh,
          idvoucher,
          stt,
          chiTiet
        );

        status.then((result) => {
          console.log(`result`, result)
          if (result) {
            res.json({
              status: 200,
              body: "success",
            });
          } else {
            // listen to the status of mysql
            res.json({ status: 500, body: "failed" });
          }
        });
      } catch (error) {
        res.json({
          status: 400,
          body: error,
        });
      }
    }
  );
};
