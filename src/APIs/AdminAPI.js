import { useState, useEffect } from "react";
import axios from "axios";

function AdminAPI(token) {
  const [taskdata, setTaskdata] = useState([]);
  useEffect(() => {
    if (token) {
      const getUser = async () => {
        try {
          const res = await axios.get("http://localhost:5000/user/getuser", {
            headers: { Authorization: token },
          });
          setTaskdata(res);
          console.log(res);
        } catch (err) {
          alert(err.response.data.message);
        }
      };
      getUser();
    }
  }, [token]);

  return {
    classdata: [taskdata, setTaskdata],
  };
}
export default AdminAPI;
