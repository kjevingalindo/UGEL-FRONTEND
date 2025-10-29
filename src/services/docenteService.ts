import api from "@/lib/axios";

export const crearDocente = async (docenteData: any) => {
  const res = await api.post("/docentes", docenteData);
  return res.data;
};

export const listarDocentes = async () => {
  const res = await api.get("/docentes");
  return res.data;
};
