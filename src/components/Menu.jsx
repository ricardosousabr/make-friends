import React, { useState } from 'react';
import '../styles/menu.scss';

export function Menu() {
  const [menu, SetMenu] = useState(false);

  return (
    <div>
      <div>
        <button onClick={() => SetMenu(!menu)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"
              fill="rgba(255,255,255,1)"
            />
          </svg>
        </button>
      </div>
      <div>
        <ul className={`${menu ? 'menu' : ''}`}>
          <li>
            <a href="#">Profile</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">Information</a>
          </li>
          <li>
            <a href="#">configurations</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
