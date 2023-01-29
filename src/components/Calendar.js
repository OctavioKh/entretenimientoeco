import * as React from 'react';
import Badge from '@mui/material/Badge';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import CheckIcon from '@mui/icons-material/Check';

import TextField from '@mui/material/TextField';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';


import {  ThemeProvider } from "@mui/material/styles";

import theme from './theme'



export default function Calendar({highlightedDays}) {
  const [value, setValue] = React.useState(null);



  return (
    <ThemeProvider theme={theme}>

    <LocalizationProvider   className='DatePicker' dateAdapter={AdapterDateFns}>
      <DatePicker 
      sx ={{
        color: theme.palette.primary.main
      }}
     className='DatePicker'
        // label="Basic example"
        value={value}
        // disableOpenPicker={false}
        renderLoading={	() => <span data-mui-test="loading-progress">...</span>}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        mask='__/__/____ __:__ _M'

        renderDay={(day, _value, DayComponentProps) => {
                    const isSelected =
                      !DayComponentProps.outsideCurrentMonth &&
                      highlightedDays.indexOf(day.getDate()) >= 0;
          
                    return (
                      <Badge 
                        key={day.toString()}
                        overlap='circular'
                        badgeContent={isSelected ? <CheckIcon	  sx ={{
                          color: theme.palette.primary.main
                        }}   /> : undefined}
                      >
                        <PickersDay    sx ={{
        color: theme.palette.secondary.main
      }}     day={true} selected={true} {...DayComponentProps} />
                      </Badge>
                    );
                  }}
        renderInput={(params) => <TextField   className='DatePicker' {...params}   />}
      />
    </LocalizationProvider>

    </ThemeProvider>

  );
}










// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// // import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import CalendarPickerSkeleton from '@mui/x-date-pickers/CalendarPickerSkeleton';


// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
// import Badge from '@mui/material/Badge';
// import { PickersDay } from '@mui/x-date-pickers/PickersDay';
// import CheckIcon from '@mui/icons-material/Check';

// const Calendar = ({highlightedDays}) => {
//   const [value, setValue] = useState(null);
//   const [isOpen, setIsOpen] = useState(false);


// //   alert(value);
//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <StaticDatePicker
//             //   onClose={() => {setIsOpen(false);}}

//         // mask='____/__/__'
//         // variant='static'
//         // orientation='portrait'
//         disableOpenPicker={false}
//         value={value}
//         // disableFuture
//         onChange={(newValue) => setValue(newValue)}
//                 // renderLoading={() => <CalendarPickerSkeleton />}
// // loading={() => <span data-mui-test="loading-progress">...</span>}


//         renderInput={(params) => {
//           <TextField 
          
//           {...params}
          
//           />;
//         }
//       }
//         renderDay={(day, selectedDays, DayComponentProps) => {
//           const isSelected =
//             !DayComponentProps.outsideCurrentMonth &&
//             highlightedDays.indexOf(day.getDate()) >= 0;

//           return (
//             <Badge
//               key={day.toString()}
//               overlap='circular'
//               badgeContent={isSelected ? <CheckIcon	 color='red' /> : undefined}
//             >
//               <PickersDay        day={true} selected={true} {...DayComponentProps} />
//             </Badge>
//           );
//         }}
//       />
//     </LocalizationProvider>
//   );
// };

// export default Calendar;




























// import { useState } from "react";
// // import dayjs from "dayjs";
// import TextField from "@mui/material/TextField";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
// import { PickersDay } from "@mui/x-date-pickers/PickersDay";

// import Badge from "@mui/material/Badge";

// export default function Calendar() {
//   // const fechas = ["2022-11-09","2022-11-11","2022-11-20"];

//   // const fechasFunc = (["2022-11-09T00:00","2022-11-11T00:00","2022-11-20T00:00"]).map(fecha => dayjs(fecha));

//   // const empty = [];

//   // empty.push(fechasFunc);

//   //   const date1 = dayjs("2022-11-09T00:00")
//   //   const date2 = dayjs("2022-11-11T00:00");

//   //   const valor = { date1, date2 };
//   const [value, setValue] = useState(new Date());
//   const [highlighted, setHighlighted] = useState([1, 2, 15]);


//   //   console.log(valor);
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <StaticDatePicker
//         openTo="day"
//         onChange={(newValue) => setValue(newValue)}
//         value={value}
//         renderInput={(params) => <TextField {...params} />}
//         renderDay={(day, _value, DayComponentProps) => {
//           const isSelected =
//             !DayComponentProps.outsideCurrentMonth &&
//             highlighted.indexOf(day.getDate()) >= 0;
//           return (
//             <Badge
//               key={day.toString()}
//               overlap="circular"
//               badgeContent={isSelected ? "ayo" : undefined}
//             >
//               <PickersDay  />
//             </Badge>
//           );
//         }}
//       />
//     </LocalizationProvider>
//   );
// }
