const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

function handleOpen() {
  console.log("DB연결이 성공했습니다.");
}

function handleError(error) {
  console.log("DB연결에 실패했습니다. 에러내용: " + error);
}

db.once("open", handleOpen);
db.error("error", handleError);
