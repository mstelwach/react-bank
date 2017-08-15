import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const MainNavigation = () => {
   return (
      <div className="main-navigation">
         <ul>
            <li>
               <Link to="/panel">
                  <div className="main-nav-widget">
                     <div className="main-nav-box">
                        <i className="ion-home" />
                     </div>
                     <span>Home</span>
                  </div>
               </Link>
            </li>
            <li>
               <Link to="/panel/accounts">
                  <div className="main-nav-widget">
                     <div className="main-nav-box">
                        <i className="ion-clipboard" />
                     </div>
                     <span>Accounts</span>
                  </div>
               </Link>
            </li>
            <li>
               <Link to="/panel/transactions">
                  <div className="main-nav-widget">
                     <div className="main-nav-box">
                        <i className="ion-arrow-swap" />
                     </div>
                     <span>Transactions</span>
                  </div>
               </Link>
            </li>
            <li>
               <Link to="/panel/cards">
                  <div className="main-nav-widget">
                     <div className="main-nav-box">
                        <i className="ion-card" />
                     </div>
                     <span>Cards</span>
                  </div>
               </Link>
            </li>
            <li>
               <Link to="/panel/messages">
                  <div className="main-nav-widget">
                     <div className="main-nav-box">
                        <i className="ion-chatbox-working" />
                     </div>
                     <span>Messages</span>
                  </div>
               </Link>
            </li>
            <li>
               <Link to="/panel/profile">
                  <div className="main-nav-widget">
                     <div className="main-nav-box">
                        <i className="ion-person" />
                     </div>
                     <span>Profile</span>
                  </div>
               </Link>
            </li>
            <li>
               <Link to="/panel/help">
                  <div className="main-nav-widget">
                     <div className="main-nav-box">
                        <i className="ion-help" />
                     </div>
                     <span>Help</span>
                  </div>
               </Link>
            </li>
         </ul>
      </div>
   );
}

export default MainNavigation;