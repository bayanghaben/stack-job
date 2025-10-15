import React from "react";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import WorkIcon from "@mui/icons-material/Work";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import Person2Icon from "@mui/icons-material/Person2";
import LogoutIcon from "@mui/icons-material/Logout";
import { Logout } from "@mui/icons-material";
import styles from "./style.module.css";
import { Link } from "react-router";
function SideMenu() {
  return (
    <div className={styles["side-menu"]}>
      <Link to={"/"} className={styles.itemWrapper}>
        <HomeFilledIcon />
        <p>Home</p>
      </Link>
      <Link to={"add-job"} className={styles.itemWrapper}>
        <WorkIcon />
        <p>Add A job</p>
      </Link>
      <Link to="/todo" className={styles.itemWrapper}>
        <PlaylistAddCheckIcon />
        <p>To Do</p>
      </Link>
      <Link to={"/profile"} className={styles.itemWrapper}>
        <Person2Icon />
        <p>View profile</p>
      </Link>
      <div className={styles.itemWrapper}>
        <Logout />
        <p>sign out</p>
      </div>
    </div>
  );
}

export default SideMenu;
