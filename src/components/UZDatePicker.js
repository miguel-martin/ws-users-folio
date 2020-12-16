import React, { useState } from "react";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

import { registerLocale, setDefaultLocale, getDefaultLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';
registerLocale('es', es)


 
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 
export const UZDatePicker = ( { sinceDate, handleDateChange } ) => {
  setDefaultLocale('es');
  // console.log(getDefaultLocale()); // dev 
  const [startDate, setStartDate] = useState(sinceDate);
  return (
    <DatePicker 
      dateFormat='dd/MM/yyyy'
      locale='es' 
      selected={startDate} 
      onChange={date => {
        // console.log('Date picker: new date selected', date)
        setStartDate(date)
        handleDateChange(date)
    }} />
  );
};