import React, { useEffect, useState } from "react";
import classes from "./TimeList.module.css";

export default function TimeList(props) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (props.case === 1) {
      setText("daily");
      return;
    }
    if (props.case === 2) {
      setText("weekly");
      return;
    }
    if (props.case === 3) {
      setText("monthly");
      return;
    }
  }, []);

  return (
    <div>
      {props.forDaily.map((item) => {
        return (
          <ul>
            <li className={classes.listContainer}>
              <div className={classes.dataContainer}>
                <div className={classes.navData}>
                  <p>{item.title}</p>
                  <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                      fill="#BBC0FF"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
                <div className={classes.timeContainer}>
                  <p className={classes.timeTextCur}> {item.current} hrs</p>
                  <div className={classes.timeTextPrev}>
                    {text === "daily" && <p>Last Day - {item.previous} hrs</p>}
                    {text === "weekly" && (
                      <p>Last Week - {item.previous} hrs</p>
                    )}
                    {text === "monthly" && (
                      <p>Last Month - {item.previous} hrs</p>
                    )}
                  </div>
                </div>
              </div>
            </li>
          </ul>
        );
      })}
    </div>
  );
}
