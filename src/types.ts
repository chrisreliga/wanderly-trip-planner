export type PlaceCardDraft = {
  name: string;
  category: string;
  note: string;
  time: string;
  id: number;
};

export type DayHeaderDraft = {
  label: string;
  date: string;
};

export type PlaceCardProps = {
  card: {
    name: string;
    category: string;
    note: string;
    time: string;
    id: number;
  };
  dayId: number;
  setShowForm: (value: boolean) => void;
};

export type DayProps = {
  day: {
    label: string;
    date: string;
    id: number;
    cards: PlaceCardDraft[];
  };
  id: number;
};
