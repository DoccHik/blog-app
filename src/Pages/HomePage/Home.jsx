import React from "react";
import styles from "./Home.module.scss";
const Home = () => {
  const authorInfo = {
    imageURL: "./img/author.jpg",
    name: "John",
    skill: "Creative Technologist",
    about:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  };

  return (
    <>
      <div className={styles["main-page"]}>
        <div className="container">
          <section className={styles["main-page__author"]}>
            <div className={styles["main-page__author-row"]}>
              <div className={styles["main-page__author-info"]}>
                <h1 className={styles["main-page__author-title"]}>
                  Hi, I am {authorInfo.name}, {authorInfo.skill}
                </h1>
                <p className={styles["main-page__author-description"]}>
                  {authorInfo.about}
                </p>
                <button className={styles["main-page__author-btn"]}>
                  Download Resume
                </button>
              </div>
              <div className={styles["main-page__author-image"]}>
                <img src={authorInfo.imageURL} alt="Avatar" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
