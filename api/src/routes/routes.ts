import { themMonAn } from './../controllers/monAn/themMonAn';
import express from "express";
import { serverInit } from "../config/config";
import { themChiTietHoaDon } from '../controllers/hoaDon/themChiTietHoaDon';
import { themVoucher } from '../controllers/voucher/themVoucher';
import { doiTen } from '../controllers/monAn/doiTen';
import { doiGia } from '../controllers/monAn/doiGia';
import { updateHang } from '../controllers/khachHang/updateHang';
import { xoaMonAn } from '../controllers/monAn/xoaMonAn';
import { xemThongTin } from '../controllers/khachHang/xemThongTin';
// import { get_all_babers } from "../controllers/Babers/get_all_babers";
import { checkVoucher } from '../controllers/voucher/checkVoucher';
import { congDiem } from '../controllers/hoaDon/congDiem';
import { taoCustomer } from '../controllers/khachHang/taoCustomer';
import { themRate } from '../controllers/hoaDon/themRate';
import { updateStatusBill } from '../controllers/hoaDon/updateStatusBill';
import { xemHoaDon } from '../controllers/hoaDon/xemHoaDon';
import { xemMonAn } from '../controllers/monAn/xemMonAn';
import { xemVoucher } from '../controllers/voucher/xemVoucher';

const app = express();

export const routes = () => {
  serverInit(app);
// select
  app.use("/api/xemThongTin", xemThongTin());
  app.use("/api/xemhoadon", xemHoaDon());
  app.use("/api/xemMonAn", xemMonAn());
  app.use("/api/xemVoucher", xemVoucher());
// insert
  app.use("/api/themMonAn", themMonAn());
  app.use("/api/themChiTietHoaDon", themChiTietHoaDon());
  app.use("/api/themVoucher", themVoucher());
// edit
  app.use("/api/doiTen", doiTen());
  app.use("/api/doiGia", doiGia());
  app.use("/api/updateHang", updateHang());
// delete
  app.use("/api/xoaMonAn", xoaMonAn());

  app.use("/api/taotaikhoan", taoCustomer());
  app.use("/api/danhgia", themRate());
  app.use("/api/checkvoucher", checkVoucher());
  app.use("/api/updatestatus", updateStatusBill());
  app.use("/api/congdiem", congDiem());
  // app.use('/api/', fn())
};