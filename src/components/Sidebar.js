import React from "react";
import "../App.css";
import { SidebarData } from "./SidebarData";
const Sidebar = () => {
  return (
    <>
      <aside className="Sidebar">
        <div>
          <ul className="SidebarList">
            {SidebarData.map((val, key) => {
              return (
                <li
                  key={key}
                  className="row"
                  onClick={() => {
                    window.location.pathname = val.link;
                  }}
                >
                  <div id="title">{val.title}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
