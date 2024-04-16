import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import AllApps from "./pages/AllApps";
import Expenditure from "./pages/Expenditure";
import Settings from "./pages/Settings";
import Statement from "./pages/Statement";
import Vehicles from "./pages/Vehicles";
import Incomes from "./pages/Incomes";
import Expenses from "./pages/Expenses";

function App() {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<AllApps />} />
        <Route path="/expenditure" element={<Expenditure />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/statement" element={<Statement />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/incomes/:bID" element={<Incomes />} />
        <Route path="/expenses/:aID" element={<Expenses />} />
      </Routes>
    </RootLayout>
  );
}

export default App;
