import React, { useState } from "react";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
 
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 
export const UZDatePicker = ( { sinceDate, handleDateChange } ) => {
  const [startDate, setStartDate] = useState(sinceDate);
  return (
    <DatePicker selected={startDate} onChange={date => {
        // console.log('Date picker: new date selected', date)
        setStartDate(date)
        handleDateChange(date)
    }} />
  );
};