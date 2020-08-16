import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000",
  //baseURL: "https://protected-falls-81498.herokuapp.com/",
});

export default instance;
