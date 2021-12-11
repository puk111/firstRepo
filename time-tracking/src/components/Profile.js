import React, { useState } from "react";
import classes from "./Porfile.module.css";

export default function Profile(props) {
  const [dailyActive, setDailyActive] = useState(false);
  const [weeklyActive, setWeeklyActive] = useState(true);
  const [monthlyActive, setMonthlyActive] = useState(false);

  const onClickDailyHandler = () => {
    props.optionDayHandler();
    setDailyActive(true);
    setWeeklyActive(false);
    setMonthlyActive(false);
  };
  const onClickWeeklyHandler = () => {
    props.optionWeeklyHandler();
    setDailyActive(false);
    setWeeklyActive(true);
    setMonthlyActive(false);
  };
  const onClickMonthlyHandler = () => {
    props.optionMonthlyHandler();
    setDailyActive(false);
    setWeeklyActive(false);
    setMonthlyActive(true);
  };
  return (
    <section className={classes.mainContainer}>
      <header className={classes.profileContainer}>
        <div className={classes.profileImg}></div>
        <div className={classes.profileRaport}>
          <p>Raport for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </header>
      <nav className={classes.navContainer}>
        <button
          className={`${classes.navBtn} ${dailyActive && classes.btnActive}`}
          onClick={onClickDailyHandler}
        >
          Daily
        </button>
        <button
          className={`${classes.navBtn} ${weeklyActive && classes.btnActive}`}
          onClick={onClickWeeklyHandler}
        >
          Weekly
        </button>
        <button
          className={`${classes.navBtn} ${monthlyActive && classes.btnActive}`}
          onClick={onClickMonthlyHandler}
        >
          Monthly
        </button>
      </nav>
    </section>
  );
}
