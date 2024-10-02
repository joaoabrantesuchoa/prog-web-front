import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000";

const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return { headers: { Authorization: `Bearer ${token}` } };
};

export const getAllProjects = async () => {
  const response = await axios.get(`${API_URL}/projetos`, getAuthHeader());
  return response.data;
};

export const getProjectFromUserId = async (id: number) => {
  const response = await axios.get(
    `${API_URL}/projetos/${id}`,
    getAuthHeader()
  );
  return response.data;
};

export const createProject = async (projectData: {
  titulo: string;
  descricao: string;
}) => {
  const response = await axios.post(
    `${API_URL}/projetos`,
    projectData,
    getAuthHeader()
  );
  return response.data;
};

export const deleteProject = async (id: number) => {
  const response = await axios.delete(
    `${API_URL}/projetos/${id}`,
    getAuthHeader()
  );
  return response.data;
};

export const addStudentToProject = async (
  projectId: number,
  studentId: number
) => {
  const response = await axios.post(
    `${API_URL}/projetos/${projectId}/students/${studentId}`,
    {},
    getAuthHeader()
  );
  return response.data;
};

export const removeStudentFromProject = async (
  projectId: number,
  studentId: number
) => {
  const response = await axios.delete(
    `${API_URL}/projetos/${projectId}/students/${studentId}`,
    getAuthHeader()
  );
  return response.data;
};
