/*{
  "name": "Matti Seppänen",
  "email": "matti@example.com",
  "password": "M@45mtg$",
  "phone_number": "+358401234567",
  "gender": "Male",
  "date_of_birth": "2000-01-15",
  "membership_status": "Active"
}*/

// data model

// 存放反馈数据的数组
let userArray = [];
// 自增 ID，从 1 开始
let currentId = 1;

// 获取所有反馈
const getAll = () => {
  return userArray;
}

const addOne = ({ name, email, password, phone_number, gender, date_of_birth, membership_status}) => {
  if (!name || !email || !password || !phone_number || !gender || !date_of_birth || !membership_status) {
    return false;
  }

  const newUser = {
    id: currentId++,
    name,
    email,
    password,
    phone_number,
    gender,
    date_of_birth,
    membership_status
  };

  userArray.push(newUser);
  return newUser;
};

const findById = (id) => {
  const numericId = Number(id);
  const user = userArray.find(item => item.id === numericId);
  return user || false;
};

const updateOneById = (id, updatedData) => {
  const user = findById(id);
  if (user) {
    if (updatedData.name) {
      user.name = updatedData.name;
    }
    if (updatedData.email) {
      user.email = updatedData.email;
    }
    if (updatedData.password) {
      user.password = updatedData.password;
    }
    if (updatedData.phone_number) {
      user.phone_number = updatedData.phone_number;
    }
    if (updatedData.gender) {
        user.gender = updatedData.gender;
      }
    if (updatedData.date_of_birth) {
    user.date_of_birth = updatedData.date_of_birth;
    }
    if (updatedData.membership_status) {
    user.membership_status = updatedData.membership_status;
    }
    return user;
  }
  return false;
};

const deleteOneById = (id) => {
  const user = findById(id);
  if (user) {
    const initialLength = userArray.length;
    userArray = userArray.filter(item => item.id !== Number(id));
    return userArray.length < initialLength;
  }
  return false;
};


// 导出模块
module.exports = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById
};



// 测试
if (require.main === module) {
  let result = addOne({
  name: "Matti Seppänen",
  email: "matti@example.com",
  password: "M@45mtg$",
  phone_number: "+35841894",
  gender: "Male",
  date_of_birth: "2000-01-05",
  membership_status: "Active"
});
  console.log("Add one user:",result);
  
  result = addOne({
  name: "Matti Seppänen",
  email: "matti@example.com",
  password: "M@45mtg$",
  phone_number: "+35841894",
  gender: "Male",
  date_of_birth: "2000-01-05",
  membership_status: "Active"
});
  console.log("Add another user:",result);

  console.log("getAll called:", getAll());

  console.log("findById called:", findById(1));

  console.log(
    "Update ID 1:", 
    updateOneById(1, {
        "name": "Peter",
        "email": "Peter@example.com",
        "password": "123456",
        "phone_number": "+358123456",
        "date_of_birth": "2000-01-10"
        })
    );
  console.log("Find by ID (1) again:", findById(1));

  console.log("Delete ID 1:", deleteOneById(1));
  
  console.log("Get all after delete:", getAll());
}