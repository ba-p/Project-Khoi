import express from "express";
import { connection } from "../../database/mysql";

type pchiTiet = {
  id: string;
  sl: number;
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
  const sql2 = "call themLanDat (?)"
  const sql3 = "call tinhTien(?,?)";
  try {
    const rs = connection.query(sql, [idorder, idkh, idvoucher, stt], (err) => {
      if (err) throw err;
    });

    const rs1 = chiTiet.map((pchiTiet) => {
      connection.query(sql1, [pchiTiet.id, pchiTiet.sl, idorder], (err) => {
        return true;
      });
    });
    const rs2 = connection.query(sql2, [ idkh ], (err) => {
      if (err) throw err;
    });
    const rs3 = connection.query(sql3, [ idorder, idvoucher ], (err) => {
      if (err) throw err;
    });
    if (rs3) {
      return true;
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
        const { idorder, idkh, idvoucher, stt, chitiet } = req.body;
        const status = themHoaDon(idorder, idkh, idvoucher, stt, chitiet);
        const sql = "call congdiem (?)"; //idkh
        connection.query(sql, [idkh], (err) => {
          if (err) throw err;
        })
        const sql2 = 'select '
        
        status.then((result) => {
          console.log(`result`, result);
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
