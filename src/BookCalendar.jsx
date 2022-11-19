import React, { useState } from "react";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";


const BookCalendar = () => {
  const [dates, setDates] = useState(null);
  const [mode, setMode] = useState("range");
  // const [bookedDay, setBookedDay] = useState([]);
  let today = new Date();
  // let month = today.getMonth();
  let year = today.getFullYear();

  console.log(dates);
  // console.log(bookedDay);
  const maxDate = new Date();
  maxDate.setFullYear(year + 1);

  const selectItems = [
    { label: "range date", value: "range" },
    { label: "single date", value: "single" },
    { label: "multiple date", value: "multiple" },
  ];
  function handleSelect(mode) {
    switch (mode) {
      case "range":
        return (mode = "range");
      case "single":
        return (mode = "single");
      case "multiple":
        return (mode = "multiple");
      default:
        return (mode = "range");
    }
  }
  // ! rezervasyonlar için uygula
  //   const dateTemplate = (date) => {
  //     if (date.day > 10 && date.day < 15) {
  //         return (
  //             <strong style={{ textDecoration: 'line-through' }}>{date.day}</strong>
  //         );
  //     }

  //     return date.day;
  // }

  return (
    <div className="p-fluid grid bg-primary">
      <div className="field col-4 md:col-4">
        <label htmlFor="range">Select Mode</label>
        <Dropdown
          value={mode}
          options={selectItems}
          onChange={(e) => setMode(e.value)}
          placeholder="Select a Mode"
        />
      </div>
      <div className="field col-12 md:col-4">
        <label htmlFor="range">Booking Calendar</label>
        <Calendar          
          id="range"
          value={dates}
          onChange={(e) => setDates(e.value)}
          selectionMode={handleSelect(mode)}
          minDate={today}
          maxDate={maxDate}
          // disabledDates={bookedDay}
          readOnlyInput
          dateFormat="dd/mm/yy"
          placeholder="select date.."
          showTime={mode === "single" ? true : null}
          inline={mode === "multiple" ? false : true}
          //   dateTemplate={dateTemplate}
          //   showIcon
        />
      </div>
    </div>
  );
};
export default BookCalendar;
