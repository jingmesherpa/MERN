import { Router } from "express";
import {
  createOrder,
  deleteOrderController,
  getAllOrders,
  getSpecificOrderController,
  updateOrderController
} from "../Controller/orderController.js";

export const router = Router();

router.post("/create", createOrder);
router.get("/get", getAllOrders);
router.get("/:id", getSpecificOrderController);
router.put("/:update", updateOrderController);
router.delete("/:delete", deleteOrderController);


