import axios from "axios";
import { Todo } from "../redux/types/types";

// const base_url = "http://localhost:4000";
const base_url = "https://todo-app-mern-e1gg.onrender.com";

const requestApi = axios.create({
	baseURL: base_url,
});

export const fetchTodos = () => requestApi.get<Todo[]>("/get-todos");
