import React, { useRef, useState, useEffect } from "react";
import "./Header.css";
import {useDispatch , useSelector} from 'react-redux'
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import Button from "@mui/material/Button";
import DatePicker from "react-datepicker";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "react-datepicker/dist/react-datepicker.css";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import {openModal} from '../../actions/modalAction'
import Login from "../Login";

const Header = () => {
  const dispatch = useDispatch()
  
  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin
  const openModalHandle = () =>{
    dispatch(openModal("open", <Login/>))
  }
  const [showSearch, setShowSearch] = useState(false);

  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const [guestCount, setGuestCount] = useState(1);
  const [showGuestPopup, setShowGuestPopup] = useState(false);
  const popupRef = useRef(null);

  const handleGuestChange = (operation) => {
    setGuestCount((prevCount) => {
      const newCount =
        operation === "increment" ? prevCount + 1 : prevCount - 1;
      return Math.max(1, Math.min(10, newCount));
    });
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowGuestPopup(false);
    }
  };

  useEffect(() => {
    if (showGuestPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showGuestPopup]);

  return (
    <div className="header">
      <div className="top-header">
        <div className="header-first-section">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png" />
        </div>
        <div className="header-middle-section">
          <p>Stays</p>
          <p>Experiences</p>
        </div>
        <div className="header-last-section">
          <p>Airbnb your home</p>
          <div className="dropdown">
            <ExpandMoreIcon className="dropbtn"/>
            <div className="dropdown-content">
              {userInfo ?(
                  <>
                  <span>Account</span>
                  <span>Log out</span>
                  </>
              ) : (
               <>
               <span>Sign Up</span>
               <span onClick={openModalHandle}>log in</span>
               </>
              )}
              <span>Help</span>
            </div>
          </div>
          
          
          <LanguageIcon className="language-icon" />
          <div className="header-profile-menu">
            <MenuIcon className="menu-icon" />
            <AccountCircleIcon className="account-icon" />
            
          </div>
        </div>
      </div>

      {/*Search bar toggle button*/}
      <div className="banner-search">
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner-search-button"
          variant="outlined"
        >
          {showSearch ? "Hide" : "Search Date"}
        </Button>
      </div>
      {showSearch && (
        <div className="bottom-header">
          <div className="header-search">
            <div className="search-where">
              <p>Where</p>
              <input
                className="search-input"
                placeholder="search destination"
              />
            </div>
            <div className="search-checkin">
              <p>Check In</p>
              <DatePicker
                selected={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                placeholderText="Select check-in date"
                className="date-picker"
              />
            </div>
            <div className="search-checkin">
              <p>Check Out</p>
              <DatePicker
                selected={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                placeholderText="Select check-Out date"
                className="date-picker"
              />
            </div>
            <div className="search-who">
              <p>Who</p>
              <button
                className="search-button"
                onClick={() => setShowGuestPopup(true)}
              >
                {guestCount > 0 ? `${guestCount} Guests` : `${guestCount}Guest`}
              </button>

              {showGuestPopup && (
                <div className="guest-popup" ref={popupRef}>
                  <div className="guest-selector">
                    <button
                      className="guest-button"
                      onClick={() => handleGuestChange("decrement")}
                    >
                      <RemoveIcon />
                    </button>
                    <input
                      type="number"
                      value={guestCount}
                      readOnly
                      className="guest-input"
                    />
                    <button
                      className="guest-button"
                      onClick={() => handleGuestChange("increment")}
                    >
                      <AddIcon />
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="search-icon-container">
              <SearchIcon className="search-icon" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
