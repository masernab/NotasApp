import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { activeNotes } from "../../actions/notes";
export const JournalEntry = ({ title, body, date, id, url }) => {
  const noteDate = moment(date);
  const dispatch = useDispatch();
  const handleEntryClick = () => {
    dispatch(activeNotes(id, { title, body, date, url }));
  };
  return (
    <div className="journal__entry pointer" onClick={handleEntryClick}>
      {url && (
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${url})`,
          }}
        ></div>
      )}
      <div className="journal__entry-body">
        <p className="journal__entry-title">{title}</p>
        <p className="journal__entry-content">{body}</p>
      </div>
      <div className="journal__entry-date-box">
        <span>{noteDate.format("dddd")}</span>
        <h4>{noteDate.format("DD")}</h4>
      </div>
    </div>
  );
};
