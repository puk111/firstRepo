import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";
import styles from "./Breeds.module.css";

export default function Dogs(props) {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then(function (res) {
        for (var a in res.data.message) {
          if (res.data.message[a].length > 0) {
            for (var b of res.data.message[a]) {
              breeds.push({ value: b + " " + a, label: b + " " + a });
            }
          }
          breeds.push({ value: a, label: a });
          setBreeds((prev) => [...breeds]);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  const selectBreedHandler = (event) => {
    const value = event.value;
    console.log(value);
    props.selectBreed(value);
  };

  return (
    <div className={styles.selectInputContainer}>
      <Select
        options={breeds}
        onChange={selectBreedHandler}
        className={styles.selectBar}
        placeholder="Choose the breed of dog ..."
      />
    </div>
  );
}
