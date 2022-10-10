import { useState, useEffect } from "react";
import axios from "axios";

function UserAPI(token) {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [classdata, setClassdata] = useState([]);

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        try {
          const res = await axios.get("http://localhost:5000/user/getuser", {
            headers: { Authorization: token },
          });
          const res2 = await axios.get("http://localhost:5000/admin/getclass", {
            headers: { Authorization: token },
          });
          setClassdata(res2);
          setIsLogged(true);

          res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false);

          console.log(res);
        } catch (err) {
          alert(err.response.data.message);
        }
      };
      getUser();
    }
  }, [token]);

  console.log(isAdmin);

  return {
    isLogged: [isLogged, setIsLogged],
    isAdmin: [isAdmin, setIsAdmin],
    classdata: [classdata, setClassdata],
  };
}
export default UserAPI;
