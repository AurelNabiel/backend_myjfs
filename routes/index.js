const express = require("express");
const router = express.Router();

const {
  register,
  registerStudent,
  login,
  loginUser,
  bayaranBulanan,
  AddEvent,
  AddProfile,
  authme,
  AddNotice,
  AddNews,
  Bulanan,
} = require("../controller/AuthController");
const {
  user,
  event,
  news,
  notice,
  destroy,
  destroyevent,
  destroynews,
  destroynotice,
  updateevent,
  updatenotice,
  updatenews,
  payment,
  transcation,
  updatepayment,
  updateuserpayment,
} = require("../controller/UserController");
// const validationMiddleware = require("../middleware/ValidationMiddleware");
// const { registerValidator} = require("../validator/AuthValidator");
// const jwtMiddleware = require("../middleware/jwtMiddleware");

router.get("/", (req, res) => {
  res.json({
    status: "Ok",
  });
});
// REGISTER //
router.post("/register", register);
// REGISTER //
router.post("/user/register", registerStudent);
// LOGIN //
router.post("/login", login);
// LOGIN //
router.post("/user/login", loginUser);
//TRANCATION//
router.post("/transcation", bayaranBulanan);
//TRANCATION//
router.post("/payment", Bulanan);
//ADD EVENT//
router.post("/event", AddEvent);
//ADD NOTICE//
router.post("/notice", AddNotice);
// ADD NEWS //
router.post("/news", AddNews);
// ADD PROFILE//
router.post("/user/profile",AddProfile)





// router.use(jwtMiddleware)
// GET USER ALL //
router.get("/user/student", user);
// AUTHME //
router.get("/authme", authme);
// GET USER EVENT //
router.get("/user/event", event);
//GET USER NEWS//
router.get("/user/news", news);
//GET USER NOTICE//
router.get("/user/notice", notice);
//GET USER Payment//
router.get("/user/payment", payment);
//GET USER NOTICE//
router.get("/user/transcation", transcation);
//DELETE//
router.delete("/user/:id", destroy);
router.delete("/user/event/:id", destroyevent);
router.delete("/user/news/:id", destroynews);
router.delete("/user/notice/:id", destroynotice);
// UPDATE //
router.put("/user/event/update/:id", updateevent);
router.put("/user/notice/update/:id", updatenotice);
router.put("/user/news/update/:id", updatenews);
router.put("/admin/payment/update/:id", updatepayment);
router.put("/user/payment/update/:bulan", updateuserpayment);



module.exports = {router};
