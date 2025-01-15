import { useDispatch, useSelector } from "react-redux";
import {
  onAddNewEvent,
  onDeleteEvent,
  onSetActiveEvent,
  onUpdateEvent,
} from "../store";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    //* TODO: llegar al Backend
    //* Todo bien

    if (calendarEvent._id) {
      // Actualizar
      dispatch(onUpdateEvent({ ...calendarEvent }));
    } else {
      //creando
      dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }));
    }
  };

  const startDeletingEvent = () => {
    // * TODO: llegar al Backend
    dispatch(onDeleteEvent());
  };
  return {
    //* Propiedades
    activeEvent,
    events,
    hasEventSelected: !!activeEvent,
    //* Métodos
    startDeletingEvent,
    setActiveEvent,
    startSavingEvent,
  };
};
