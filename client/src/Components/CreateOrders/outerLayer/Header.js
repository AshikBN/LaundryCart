import "../outerLayer/Header.css";
import home from "../../../assets/home.svg";
import more from "../../../assets/more.svg";
import list from "../../../assets/list.svg";

const Header = () => {
  return (
    <>
      <div className="header_container">
        <div className="header_name">LAUNDRY</div>
        <div className="header_links">
          <div>Pricing</div>
          <div>Career</div>
          <div className="user_name">User Name</div>
        </div>
      </div>
      <div className="sidebar_container">
        <img src={home} alt="home" />
        <div>
          <img src={list} alt="list" />
        </div>

        <img src={more} alt="more" />
      </div>
    </>
  );
};

export default Header;
