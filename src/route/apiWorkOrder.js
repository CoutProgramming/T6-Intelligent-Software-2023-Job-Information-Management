import express from "express";
let router = express.Router();
import APIWorkOrder from "../controller/workOrderController";

const initAPIWorkOrder = (app) => {
  router.get("/workOrders", APIWorkOrder.getALLWorkOrders);
  router.post("/create-workOrder", APIWorkOrder.createNewWorkOrder);
  router.put("/update-workOrder", APIWorkOrder.updateWorkOrder);
  router.delete("/delete-workOrder/:id", APIWorkOrder.deleteWorkOrder);

  //Tiền tố phía trước router
  return app.use("/api/v1", router);
};

export default initAPIWorkOrder;