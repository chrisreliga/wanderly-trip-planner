import { useState } from "react";
import { trip } from "../data.js";

const useTrip = () => {
  const [tripInfo, setTripInfo] = useState(trip);

  function handleAddDay() {
    setTripInfo({
      ...tripInfo,
      days: [
        ...tripInfo.days,
        {
          label: "",
          date: "",
          id: Date.now(),
          cards: [],
        },
      ],
    });
  }

  function handleAddDayHeader(dayId, draft) {
    setTripInfo({
      ...tripInfo,
      days: tripInfo.days.map((day) => {
        if (day.id === dayId)
          return {
            ...day,
            label: draft.label,
            date: draft.date,
          };
        else return day;
      }),
    });
  }

  function handleAddPlace(dayId, draft) {
    setTripInfo({
      ...tripInfo,
      days: tripInfo.days.map((day) => {
        if (day.id === dayId)
          return {
            ...day,
            cards: [
              ...day.cards,
              {
                name: draft.name,
                category: draft.category,
                note: draft.note,
                id: draft.id,
              },
            ],
          };
        else return day;
      }),
    });
  }

  function handleDeleteDay(dayId) {
    setTripInfo({
      ...tripInfo,
      days: tripInfo.days.filter((day) => {
        return dayId !== day.id;
      }),
    });
  }

  return {
    handleAddDay,
    handleAddDayHeader,
    handleAddPlace,
    handleDeleteDay,
    tripInfo,
  };
};

export default useTrip;
