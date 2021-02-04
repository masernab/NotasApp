import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeNotes, startDeleting } from "../../actions/notes";
import { useForm } from "../../hooks/useForm";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  const { active: note } = useSelector((state) => state.notes);

  const [formState, handleInputChange, reset] = useForm(note);
  const { title, body, id } = formState;
  const activeId = useRef(note.id);

  const dispatch = useDispatch();
  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  useEffect(() => {
    dispatch(activeNotes(formState.id, { ...formState }));
  }, [dispatch, formState]);

  const handleDelete = () => {
    dispatch(startDeleting(id));
  };

  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          name="title"
          type="text"
          placeholder="Titulo"
          className="notes__title-input"
          autoComplete="off"
          value={title}
          onChange={handleInputChange}
        ></input>
        <textarea
          name="body"
          placeholder="Descripcion"
          className="notes__textarea"
          value={body}
          onChange={handleInputChange}
        ></textarea>

        {note.url && (
          <div className="notes__image">
            <img src={note.url} alt="Imagen navideña" />
          </div>
        )}
      </div>
      <button onClick={handleDelete} className="btn btn-danger">
        Delete
      </button>
    </div>
  );
};
