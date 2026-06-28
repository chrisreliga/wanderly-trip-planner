import { useState } from "react";

export const useActiveTab = () => {
  const [activeTab, setActiveTab] = useState("board");

  return { activeTab, setActiveTab };
};
