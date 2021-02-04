import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../actions/auth";
import { StartNewNote } from "../../actions/notes";
import { JournalEntries } from "./JournalEntries";

export const Sidebar = () => {
  const dispatch = useDispatch();

  const { name } = useSelector((state) => state.auth);
  const handleLogout = () => {
    dispatch(startLogout());
  };

  const handleAddNew = () => {
    dispatch(StartNewNote());
  };
  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <h3>
          <i className="far fa-moon"></i>
          <span> {name} </span>
        </h3>
        <button onClick={handleLogout} className="btn">
          Logout
        </button>
      </div>
      <div onClick={handleAddNew} className="journal__new-entry">
        <i className="far fa-calendar-plus fa-5x"></i>
        <p className="mt-5">New entry</p>
      </div>

      <JournalEntries />
    </aside>
  );
};
