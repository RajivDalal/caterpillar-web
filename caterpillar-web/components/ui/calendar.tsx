import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme(
  {
    palette: {
      primary: { main: '#000000' },
    },
    typography: {
      fontFamily: 'Monospace',
      fontSize: 16,
    }
  }
);

export default function Calendar() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
      <DateCalendar value={value} onChange={(newValue) => setValue(newValue)}
          views={['year', 'month', 'day']}
          />
      </ThemeProvider>
    </LocalizationProvider>
  );
}