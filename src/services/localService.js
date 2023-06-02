export const addUser = (email, password) => {
  localStorage.setItem("demo-user-email", email);
  localStorage.setItem("demo-user-password", password);
};

export const getUser = () => {
  const email = localStorage.getItem("demo-user-email");
  return email;
};

export const removeUser = () => {
  localStorage.removeItem("demo-user-email");
  localStorage.removeItem("demo-user-password");
};
