import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes";
import "./styles/global.css";

export default function App() {
  return (
    <>

      {/* tag 7.3.0 */}

      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}
