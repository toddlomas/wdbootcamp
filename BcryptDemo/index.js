const bcrypt = require("bcrypt");

const hashPassword = async (pw) => {
  const salt = await bcrypt.genSalt(12);
  const hash = await bcrypt.hash(pw, salt);
  console.log(salt);
  console.log(hash);
};

const login = async (pw, hashedPassword) => {
  const result = await bcrypt.compare(pw, hashedPassword);
  if (result) {
    console.log("LOGGED IN!");
  } else {
    console.log("oh no");
  }
};

// hashPassword("monkey");

login("monkey", "$2b$10$Za27vBeJpiJjEHpk1q0OzeFrkHiuRBfsO9pw5NAXveuWIbDAmr9E2");
