const UserModel = require("../models").admin;
const User = require("../models").user
const Payment = require("../models").payment
const TEvent = require("../models").event
const TNotice = require("../models").notice
const TNews = require("../models").news
const TProfile = require("../models").profile


const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const { validationResult } = require("express-validator");
const { sequelize } = require("../models");
const user = require("../models/user");



const register = async (req, res) => {
  try {
    let body = req.body;
    body.password = await bcrypt.hashSync(body.password, 10);
    const users = await UserModel.create(body);
    console.log(users);
    const token = jwt.sign({id:users.id, email:users.email,status:users.status},process.env.JWT_ACCESS_TOKEN)

    res.status(200).json({
      status: "Success",
      messege: "Register Berhasil",
      token
    });
  } catch (error) {}
};


const registerStudent = async (req, res) => {
  try {
    let body = req.body;
    body.password = await bcrypt.hashSync(body.password, 10);
    const users2 = await User.create(body);
    console.log(users2);
    const token = jwt.sign({id:users2.id, email:users2.email,status:users2.status},process.env.JWT_ACCESS_TOKEN)
    res.status(200).json({
      status: "Success",
      messege: "Register Berhasil",
      token
    });
  } catch (error) {}
};

const bayaranBulanan = async (req, res) => {
  try {
    let body = req.body;
    const users3 = await Transaction.create(body);
    console.log(users3);

    res.status(200).json({
      status: "Success",
      messege: "pembayaran terkirim",
    });
  } catch (error) {
    console.log(error);
  }
};

const Bulanan = async (req, res) => {
  try {
    let body = req.body;
    const users3 = await Payment.create(body);
    console.log(users3);

    res.status(200).json({
      status: "Success",
      messege: "pembayaran terkirim",
    });
  } catch (error) {
    console.log(error);
  }
};
// const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const data = await UserModel.findOne({
//       where: { email: email },
//     });
//     if (!data) return res.status(442).json({ messege: "tidak terdaftar" });
//     const verify = await bcrypt.compareSync(password, data.password);
//     if (!verify) return res.status(442).json({ messege: "password salah" });
//     const token = jwt.sign(
//       { id: data.id, email: data.email },
//       process.env.JWT_ACCESS_TOKEN,
//       {
//         expiresIn: "1d",
//       }
//     );
//     res.status(200).json({
//       messege: "berhasil",
//       token: token,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

const login = async (req, res) => {
 try {
   const {email,password }= req.body
   const data = await UserModel.findOne({email:email})
   if(!data)return res.status(404).json({message:"email tidak ditemukan"})
   const verify = bcrypt.compareSync(password, data.password)
   if(!verify) return res.status(442).json({message:"password salah"})
   const token = jwt.sign({id:data.id, email:data.email},process.env.JWT_ACCESS_TOKEN)
   return res.status(200).json({token})
 } catch (er) {
   console.log(er);
 }
};

const loginUser = async (req, res) => {
  try {
    const {email,password }= req.body
    const data = await User.findOne({email:email})
    if(!data)return res.status(404).json("tidak ditemukan")
    const verify = bcrypt.compareSync(password, data.password)
    if(!verify) return res.status(442).json("password salah")
    const token = jwt.sign({id:data.id, email:data.email},process.env.JWT_ACCESS_TOKEN)
    return res.status(200).json({token})
  } catch (er) {
    console.log(er);
  }
};

const authme = async (req, res) => {
  const { authorization } = req.headers;
  const token = authorization.split(" ")[1];
  jwt.verify(token, process.env.JWT_ACCESS_TOKEN, async (err, decode) => {
    if (err) {
      return res.status(401).json({
        status: "fail",
        msg: "invalid",
        data: err,
      });
    } else {
      try {
        req.email = decode?.email;
        const token = jwt.sign(
          {
            email: req.email,
          },
          process.env.JWT_ACCESS_TOKEN,
          { expiresIn: "1d" }
        );
        return res.json({
          status: "succes",
          msg: "Berhasil mendapat Token baru",
          token: token,
        });
      } catch (error) {
        return res.status(401).json({
          status: "fail",
          msg: "invalid",
          data: error,
        });
      }
    }
  });
};

const AddEvent = async (req, res) => {
  try {
    let body = req.body;
    const users3 = await TEvent.create(body);
    console.log(users3);

    res.status(200).json({
      status: "Succes",
      messege: "Event terkirim",
    });
  } catch (error) {
    console.log(error);
  }
};

const AddNotice = async (req, res) => {
  try {
    let body = req.body;
    const users4 = await TNotice.create(body);
    console.log(users4);

    res.status(200).json({
      status: "Succes",
      messege: "Notice terkirim",
    });
  } catch (error) {
    console.log(error);
  }
};

const AddNews = async (req, res) => {
  try {
    let body = req.body;
    const users5 = await TNews.create(body);
    console.log(users5);

    res.status(200).json({
      status: "Succes",
      messege: "News terkirim",
    });
  } catch (error) {
    console.log(error);
  }
};

const AddProfile = async (req, res) => {
  try {
    let body = req.body;
    const users5 = await TProfile.create(body);
    console.log(users5);

    res.status(200).json({
      status: "Succes",
      messege: "News terkirim",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  register,
  registerStudent,
  login,
  loginUser,
  bayaranBulanan,
  Bulanan,
  AddProfile,
  AddEvent,
  AddNotice,
  AddNews,
  authme,
};
