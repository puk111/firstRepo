import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../UI/Loading";
import classes from "./DogList.module.css";

export default function DogList(props) {
  const [img, setImg] = useState([]);
  const [randomImage, setRandomImage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let link = props.breed;

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://dog.ceo/api/breeds/image/random/10")
      .then(function (response) {
        setRandomImage((prev) => [...response.data.message]);
        setIsLoading(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    axios
      /* .get("https://dog.ceo/api/breed/hound/images") */
      .get(`https://dog.ceo/api/breed/${link}/images/random/10`)
      .then(function (response) {
        // handle success
        setImg((prev) => [...response.data.message]);
        setIsLoading(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setIsLoading(false);
      });
  }, [link]);

  const randomHandler = () => {
    setIsLoading(true);
    axios
      .get("https://dog.ceo/api/breeds/image/random/10")
      .then(function (response) {
        setImg((prev) => [...response.data.message]);
        setIsLoading(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setIsLoading(false);
      });
  };

  return (
    <>
      {isLoading && <Loading />}
      <button onClick={randomHandler} className={classes.randomBtn}>
        Random
      </button>
      {img.length == 0 && (
        <ul className={classes.dogList}>
          {randomImage.map((item) => {
            return (
              <li key={item}>
                <div className={classes.dogImgContainer}>
                  <img className={classes.dogImg} alt={item} src={item}></img>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      {img.length > 0 && (
        <ul className={classes.dogList}>
          {img.map((item) => {
            return (
              <li key={item}>
                <div className={classes.dogImgContainer}>
                  <img className={classes.dogImg} alt={item} src={item}></img>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
