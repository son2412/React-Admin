import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IStateType } from "../../store/models/root.interface";
import Cookies from 'js-cookie';

function TopMenuAccount(): JSX.Element {
  const email: string = useSelector((state: IStateType) => state.account.email);
  const [isShow, setShow] = useState(false);

  return (

    <li className="nav-item dropdown no-arrow">
      <a className="nav-link dropdown-toggle"
        onClick={() => {
          setShow(!isShow);
        }}
        href="# "
        id="userDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        <span className="mr-2 d-none d-lg-inline small cadet">{email}</span>
        <img className="img-profile rounded-circle" alt=""
          src="https://source.unsplash.com/QAB-WJcbgJk/60x60" />
      </a>

      <div className={`dropdown-menu dropdown-menu-right shadow animated--grow-in ${(isShow) ? "show" : ""}`}
        aria-labelledby="userDropdown">
        <a className="dropdown-item"
        onClick={() => Cookies.remove('token')}
        href="# " 
        data-toggle="modal"
        data-target="#logoutModal">
          <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
          Logout
        </a>
      </div>
    </li>
  );
};

export default TopMenuAccount;
