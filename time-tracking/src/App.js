import { useState } from "react";
import "./App.css";
import Profile from "./components/Profile";
import TimeList from "./components/TimeList";

import * as helper from "./helpers/ArryFunc";

function App() {
  const [option, setOption] = useState("weekly");
  const daily = helper.default.daily;
  const weekly = helper.default.weekly;
  const monthly = helper.default.monthly;

  const setDayHandler = () => {
    setOption("daily");
  };
  const setWeeklyHandler = () => {
    setOption("weekly");
  };
  const setMonthlyHandler = () => {
    setOption("monthly");
  };

  return (
    <div className="app-container">
      <div className="first_item">
        <Profile
          optionDayHandler={setDayHandler}
          optionWeeklyHandler={setWeeklyHandler}
          optionMonthlyHandler={setMonthlyHandler}
        />
      </div>

      <div className="second_item">
        {option === "daily" && <TimeList forDaily={daily} case={1} />}
        {option === "weekly" && <TimeList forDaily={weekly} case={2} />}
        {option === "monthly" && <TimeList forDaily={monthly} case={3} />}
      </div>
    </div>
  );
}

export default App;
