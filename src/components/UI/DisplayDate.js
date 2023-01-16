import React from "react";
// converts a date to dd/mm/yyyy
const DisplayDate = (props) => {
  const date = new Date(props.date);
  const addZero = (digit) => {
    return digit < 10 ? "0" + digit : digit;
  };
  const day = addZero(date.getDate());
  const month = addZero(date.getMonth() + 1);
  const year = date.getFullYear();
  const hours = addZero(date.getHours());
  const min = addZero(date.getMinutes());

  return <span>{`${day}/${month}/${year} - ${hours}:${min}`}</span>;
};

export default DisplayDate;
