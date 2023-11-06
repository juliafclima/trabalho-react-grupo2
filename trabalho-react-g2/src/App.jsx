import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes";
import "./styles/global.css";

export default function App() {
  return (
    <>

      {/* tag 5.17.3 */}

      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}
