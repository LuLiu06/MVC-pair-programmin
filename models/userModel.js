let users = [];
let nextId = 1;


function getAll() {
  return users;
}

function addOne(userData) {
  const {
    name,
    email,
    password,
    phone_number,
    gender,
    date_of_birth,
    membership_status,
  } = userData;

 
  if (!name || !email || !password || !phone_number || !gender || !date_of_birth || !membership_status) {
    return false;
  }

  const newUser = {
    id: nextId++,
    ...userData,
  };

  users.push(newUser);
  return newUser;
}

function findById(id) {
  return users.find((u) => u.id === Number(id)) || false;
}

function updateOneById(id, updatedData) {
  const user = findById(id);
  if (user) {
    Object.assign(user, updatedData);
    return user;
  }
  return false;
}

function deleteOneById(id) {
  const initialLength = users.length;
  users = users.filter((u) => u.id !== Number(id));
  return users.length < initialLength;
}

// Test the model
if (require.main === module) {
  let result = addOne({
    name: "Matti Seppänen",
    email: "matti@example.com",
    password: "M@45mtg$",
    phone_number: "+358401234567",
    gender: "Male",
    date_of_birth: "2000-01-15",
    membership_status: "Active"
  });
  console.log("Add user result:", result);

  const allUsers = getAll();
  console.log("All users:", allUsers);

  const user = findById(1);
  console.log("Find by ID:", user);

  const updated = updateOneById(1, { membership_status: "Inactive" });
  console.log("Updated user:", updated);

  const deleted = deleteOneById(1);
  console.log("Deleted:", deleted);

  const afterDeletion = findById(1);
  console.log("After deletion:", afterDeletion);
}

const User = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};

module.exports = User;
