import { MONTH } from "./constants";

export const dateStringCreator = () => {
  const recentDate = new Date();
  let olderDate = new Date();
  olderDate.setMonth(olderDate.getMonth() - 6);

  return `${MONTH[olderDate.getMonth()].slice(0, 3)}
     ${String(olderDate.getFullYear()).slice(2, 4)} - ${MONTH[
    recentDate.getMonth()
  ].slice(0, 3)} ${String(recentDate.getFullYear()).slice(2, 4)}`;
};
