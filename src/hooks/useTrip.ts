import { useState } from "react";
import { trip } from "../data.js";
import { PlaceCardDraft, DayHeaderDraft } from "../types";

export const useTrip = () => {
  const [tripInfo, setTripInfo] = useState(trip);
  const [customCategories, setCustomCategories] = useState<string[]>([]);

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

  function handleAddDayHeader({
    dayId,
    draft,
  }: {
    dayId: number;
    draft: DayHeaderDraft;
  }) {
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

  function handleAddPlace({
    dayId,
    draft,
  }: {
    dayId: number;
    draft: PlaceCardDraft;
  }): void {
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
                time: draft.time,
                id: draft.id,
              },
            ],
          };
        else return day;
      }),
    });
  }

  function handleDeleteDay(dayId: number) {
    setTripInfo({
      ...tripInfo,
      days: tripInfo.days.filter((day) => {
        return dayId !== day.id;
      }),
    });
  }

  function handleDeletePlace({
    dayId,
    cardId,
  }: {
    dayId: number;
    cardId: number;
  }) {
    setTripInfo({
      ...tripInfo,
      days: tripInfo.days.map((day) => {
        if (day.id === dayId)
          return {
            ...day,
            cards: day.cards.filter((card) => {
              return cardId !== card.id;
            }),
          };
        else return day;
      }),
    });
  }

  function handleAddCategory(category: string) {
    setCustomCategories([...customCategories, category]);
  }

  return {
    handleAddDay,
    handleAddDayHeader,
    handleAddPlace,
    handleDeleteDay,
    handleDeletePlace,
    handleAddCategory,
    customCategories,
    tripInfo,
  };
};
