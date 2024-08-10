import { Calendar } from "./components/ui/calendar.jsx";
import { useState } from "react";

function App() {

  const [date, setDate] = useState(new Date())

  return (
    <div className="App">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"></Calendar>
    </div>
  );
}

export default App;
