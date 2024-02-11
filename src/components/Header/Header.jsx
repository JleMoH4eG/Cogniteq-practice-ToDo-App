import classes from "./Header.module.scss";
import userIcon from "./../../assets/userIcon.svg";

function Header() {
  return (
    <header className={classes.header}>
      <a href="/" className={classes.title}>
        ToDo
      </a>
      <div className={classes.userContainer}>
        <div className={classes.searchContainer}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            className={classes.searchSvg}
          >
            <path
              d="M16.436 15.085l3.94 4.01a1 1 0 01-1.425 1.402l-3.938-4.006a7.5 7.5 0 111.423-1.406zM10.5 16a5.5 5.5 0 100-11 5.5 5.5 0 000 11z"
              fill="currentColor"
              fillRule="evenodd"
            ></path>
          </svg>
          <input type="text" placeholder="Search" className={classes.search} />
        </div>
        <div className={classes.userIconContainer}>
          <img src={userIcon} alt="User Icon" className={classes.userIconImg} />
        </div>
      </div>
    </header>
  );
}

export default Header;
