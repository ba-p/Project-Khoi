import express from "express";
import { serverInit } from "../config/config";
import { checkVoucher } from '../controllers/checkVoucher';
import { congDiem } from '../controllers/congDiem';
import { taoCustomer } from '../controllers/taoCustomer';
import { themRate } from '../controllers/themRate';
import { updateStatusBill } from '../controllers/updateStatusBill';

const app = express();

export const routes = () => {
  serverInit(app);

  app.use("/api/taotaikhoan", taoCustomer());
  app.use("/api/danhgia", themRate());
  app.use("/api/checkvoucher", checkVoucher());
  app.use("/api/updatestatus", updateStatusBill());
  app.use("/api/congdiem", congDiem());
  // app.use('/api/', fn())
};