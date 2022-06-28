import axios from "axios";

export const fetchUsers = async () => {
  let response;

  try {
    response = await axios.get("https://jsonplaceholder.typicode.com/users");
  } catch (e) {
    throw new Error(e.message);
  }

  return response.data ? response.data : null;
};
