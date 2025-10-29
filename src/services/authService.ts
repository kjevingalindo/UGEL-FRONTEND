import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

// Interceptor para enviar token automáticamente
api.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// LOGIN
export const apiLogin = async (email: string, password: string) => {
  const res = await api.post("/login", { email, password });
  localStorage.setItem("token", res.data.token);
  return res.data;
};

// REGISTER
export const apiRegister = async (name: string, email: string, password: string, password_confirmation: string) => {
  const res = await api.post("/register", { name, email, password, password_confirmation });
  localStorage.setItem("token", res.data.token);
  return res.data;
};

// OBTENER USUARIO AUTENTICADO
export const getUser = async () => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No token found");
  const res = await api.get("/me");
  return res.data;
};

// LOGOUT
export const apiLogout = async () => {
  await api.post("/logout");
  localStorage.removeItem("token");
};

export default api;
