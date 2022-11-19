import "./App.css";
import BookCalendar from "./BookCalendar";

import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

const App = () => {
  return (
    <div className="bg-success">     
      <BookCalendar />
    </div>
  );
};

export default App;
