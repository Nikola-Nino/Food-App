import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShow} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="Some delicious meals"/>
      </div>
    </React.Fragment>
  );
};

export default Header;
