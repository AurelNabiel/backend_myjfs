const User = require("../models").user;
const EventModel = require("../models").event;
const NewsModel = require("../models").news;
const NoticeModel = require("../models").notice;
const PaymentModel = require("../models").payment;
const TranscationModel = require("../models").transaction;

const bcrypt = require("bcrypt");
const { promise } = require("bcrypt/promises");

const { Op } = require("sequelize");

const user = async (req, res) => {
  try {
    // let { keyword , page, pageSize,orderBy,sortBy,pageActive } = req.query;
    const dataUser = await User.findAndCountAll({
      attributes: ["id", "name", "email", "status"],
      where: {
        status: {
          [Op.eq]: "student",
        },
      },
    });
    console.log(dataUser);
    return res.json({
      status: "Berhasil",
      messege: "Berikut Daftar Users",
      data: dataUser,
    });
  } catch (error) {
    console.log(error);
    res.status(403).json({
      status: "Fail",
      messege: "Ada Kesalahan",
    });
  }
};

const event = async (req, res) => {
  try {
    // const id = req.params.id;
    const dataEvent = await EventModel.findAll({
      attributes: ["imglink", "event_name", "message", "link"],
    });
    if (dataEvent === null) {
      return res.json({
        status: "Gagal",
        messege: "Data Event Tidak Ditemukan",
      });
    }
    return res.json({
      status: "Berhasil",
      messege: "Berikut Event",
      data: dataEvent,
    });
  } catch (error) {
    console.log(error);
    res.status(403).json({
      status: "Fail",
      messege: "Ada Kesalahan",
    });
  }
};

const news = async (req, res) => {
  try {
    // const id = req.params.id;
    const dataNews = await NewsModel.findAll({
      attributes: ["foto1", "foto2", "score1", "score2", "link"],
    });
    if (dataNews === null) {
      return res.json({
        status: "Gagal",
        messege: "Data News Tidak Ditemukan",
      });
    }
    return res.json({
      status: "Berhasil",
      messege: "Berikut News",
      data: dataNews,
    });
  } catch (error) {
    console.log(error);
    res.status(403).json({
      status: "Fail",
      messege: "Ada Kesalahan",
    });
  }
};

const notice = async (req, res) => {
  try {
    // const id = req.params.id;
    const dataNotice = await NoticeModel.findAll({
      attributes: ["message", "release_date"],
    });
    if (dataNotice === null) {
      return res.json({
        status: "Gagal",
        messege: "Data Notice Tidak Ditemukan",
      });
    }
    return res.json({
      status: "Berhasil",
      messege: "Berikut Notice",
      data: dataNotice,
    });
  } catch (error) {
    console.log(error);
    res.status(403).json({
      status: "Fail",
      messege: "Ada Kesalahan",
    });
  }
};

const payment = async (req, res) => {
  try {
    // const id = req.params.id;
    const dataPayment = await PaymentModel.findAll({
      attributes: ["month_p", "status_p", "image_bill", "message_bill"],
    });
    if (dataPayment === null) {
      return res.json({
        status: "Gagal",
        messege: "Data Payment Tidak Ditemukan",
      });
    }
    return res.json({
      status: "Berhasil",
      messege: "Berikut Payment",
      data: dataPayment,
    });
  } catch (error) {
    console.log(error);
    res.status(403).json({
      status: "Fail",
      messege: "Ada Kesalahan",
    });
  }
};

const transcation = async (req, res) => {
  try {
    // const id = req.params.id;
    const dataTranscation = await TranscationModel.findAll({
      attributes: ["image_bill", "bill_msg"],
    });
    if (dataTranscation === null) {
      return res.json({
        status: "Gagal",
        messege: "Data Transcation Tidak Ditemukan",
      });
    }
    return res.json({
      status: "Berhasil",
      messege: "Berikut Transcation",
      data: dataTranscation,
    });
  } catch (error) {
    console.log(error);
    res.status(403).json({
      status: "Fail",
      messege: "Ada Kesalahan",
    });
  }
};

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await User.destroy({
      where: {
        id: id,
      },
    });
    if (users === 0) {
      return res.status(200).json({
        status: "Gagal",
        msg: "Data User tidak ditemukan",
      });
    }
    return res.json({
      status: "Berhasil",
      msg: "Data User ditemukan",
      data: users,
    });
  } catch (error) {
    console.log(error);
    return res.status(403).json({
      status: "Gagal",
      msg: "ada Sebuah kesalahan",
    });
  }
};

const destroyevent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await EventModel.destroy({
      where: {
        id: id,
      },
    });
    if (event === 0) {
      return res.status(200).json({
        status: "Gagal",
        msg: "Data Event tidak ditemukan",
      });
    }
    return res.json({
      status: "Berhasil",
      msg: "Data event ditemukan",
      data: event,
    });
  } catch (error) {
    console.log(error);
    return res.status(403).json({
      status: "Gagal",
      msg: "ada Sebuah kesalahan",
    });
  }
};

const destroynews = async (req, res) => {
  try {
    const { id } = req.params;
    const news = await NewsModel.destroy({
      where: {
        id: id,
      },
    });
    if (news === 0) {
      return res.status(200).json({
        status: "Gagal",
        msg: "Data News tidak ditemukan",
      });
    }
    return res.json({
      status: "Berhasil",
      msg: "Data News ditemukan",
      data: news,
    });
  } catch (error) {
    console.log(error);
    return res.status(403).json({
      status: "Gagal",
      msg: "ada Sebuah kesalahan",
    });
  }
};

const destroynotice = async (req, res) => {
  try {
    const { id } = req.params;
    const notice = await NoticeModel.destroy({
      where: {
        id: id,
      },
    });
    if (notice === 0) {
      return res.status(200).json({
        status: "Gagal",
        msg: "Data Notice tidak ditemukan",
      });
    }
    return res.json({
      status: "Berhasil",
      msg: "Data Notice ditemukan",
      data: notice,
    });
  } catch (error) {
    console.log(error);
    return res.status(403).json({
      status: "Gagal",
      msg: "ada Sebuah kesalahan",
    });
  }
};

const updateevent = async (req, res) => {
  try {
    const { id } = req.params;
    const { imglink } = req.body;
    const { event_name } = req.body;
    const { message } = req.body;
    const { link } = req.body;
    const users = await EventModel.findByPk(id);
    if (users === null) {
      return res.json({
        status: "Gagal",
        msg: "Data Event tidak ditemukan",
      });
    }
    await EventModel.update(
      {
        imglink: imglink,
        event_name: event_name,
        message: message,
        link: link,
      },
      {
        where: {
          id: id,
        },
      }
    );
    return res.json({
      status: "berhasil",
      msg: "Data Event berhasil diperbarui",
    });
  } catch (err) {
    console.log(error);
    return res.status(403).json({
      status: "Gagal",
      msg: "ada Sebuah kesalahan",
    });
  }
};

const updatenews = async (req, res) => {
  try {
    const { id } = req.params;
    const { foto } = req.body;
    const { title } = req.body;
    const { link } = req.body;
    const users = await NewsModel.findByPk(id);
    if (users === null) {
      return res.json({
        status: "Gagal",
        msg: "Data News tidak ditemukan",
      });
    }
    await NewsModel.update(
      {
        foto: foto,
        title: title,
        link: link,
      },
      {
        where: {
          id: id,
        },
      }
    );
    return res.json({
      status: "berhasil",
      msg: "Data Event berhasil diperbarui",
    });
  } catch (err) {
    console.log(error);
    return res.status(403).json({
      status: "Gagal",
      msg: "ada Sebuah kesalahan",
    });
  }
};

const updatenotice = async (req, res) => {
  try {
    const { id } = req.params;
    const { user_id } = req.body;
    const { message } = req.body;
    const users = await NoticeModel.findByPk(id);
    if (users === null) {
      return res.json({
        status: "Gagal",
        msg: "Data Notice tidak ditemukan",
      });
    }
    await NoticeModel.update(
      {
        user_id: user_id,
        message: message,
      },
      {
        where: {
          id: id,
        },
      }
    );
    return res.json({
      status: "berhasil",
      msg: "Data Event berhasil diperbarui",
    });
  } catch (err) {
    console.log(error);
    return res.status(403).json({
      status: "Gagal",
      msg: "ada Sebuah kesalahan",
    });
  }
};

const updatepayment = async (req, res) => {
  try {
    const { id } = req.params;
    const { status_p } = req.body;
    const users = await PaymentModel.findByPk(id);
    if (users === null) {
      return res.json({
        status: "Gagal",
        msg: "Data Payment tidak ditemukan",
      });
    }
    await PaymentModel.update(
      {
        status_p: status_p,
      },
      {
        where: {
          id: id,
        },
      }
    );
    return res.json({
      status: "berhasil",
      msg: "Data Payment berhasil diperbarui",
    });
  } catch (err) {
    console.log(error);
    return res.status(403).json({
      status: "Gagal",
      msg: "ada Sebuah kesalahan",
    });
  }
};

const updateuserpayment = async (req, res) => {
  try {
    const { bulan } = req.params;
    const { image, message } = req.body;

    const users = await PaymentModel.findByPk(id);
    if (users === null) {
      return res.json({
        status: "Gagal",
        msg: "Data Payment tidak ditemukan",
      });
    }
    await PaymentModel.update(
      {
        image_bill: image,
        message_bill: message,
      },

      {
        where: {
          month_p: bulan,
        },
      }
    );
    return res.json({
      status: "berhasil",
      msg: "Data Payment berhasil diperbarui",
    });
  } catch (err) {
    console.log(error);
    return res.status(403).json({
      status: "Gagal",
      msg: "ada Sebuah kesalahan",
    });
  }
};

module.exports = {
  user,
  event,
  news,
  notice,
  transcation,
  payment,
  destroy,
  destroyevent,
  destroynews,
  destroynotice,
  updateevent,
  updatenews,
  updatenotice,
  updatepayment,
updateuserpayment };
