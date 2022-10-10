import { Box, Typography } from "@mui/material";
import React from "react";
import Navbar from "../../admin/client/components/Navbar";
import PieChart from "./components/PieChart";
import { useContext } from "react";
import { GlobalState } from "../../Globalstate.js";
import BarChart from "./components/BarChart";

export default function EmployeeDashboard() {
  // const state = useContext(GlobalState);

  // const [taskdata] = state.userAPI.taskdata;
  // console.log(taskdata.data);
  return (
    <>
      <Navbar title="Employee Dashboard" />
      <Typography
        variant="h4"
        fontFamily={"serif"}
        fontWeight="800"
        align="center"
        marginTop="50px"
      >
        User Data Analysis
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          height: "1000px",
          marginTop: "100px",
        }}
      >
        <PieChart />
        <PieChart />
      </Box>
      <Box sx={{ marginTop: "-380px" , padding: '20px'}}>
        <BarChart/>
      </Box>
    
    </>
  );
}
