import React from "react"
import { Link } from "react-router-dom";

export default function ShortCut(){
    return (        
        <ul className="menu-list nav navbar-nav flex-row text-center menu-footer-link">
          <li className="nav-item flex-fill p-2">
            
              <Link to="/"  className="d-inline-block w-100 color-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M7.5 1v7h1V1h-1z" />
                <path
                  className="fill-secondary"
                  d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z"
                />
              </svg>
              </Link>
           
          </li>
          
        </ul>
    );
}