import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes";
import "./styles/global.css";

export default function App() {
  return (
    <>

      {/* tag 6.0.0 */}

      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}
