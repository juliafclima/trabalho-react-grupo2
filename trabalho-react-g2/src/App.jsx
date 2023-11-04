import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes";

export default function App() {
  return (
    <>

    {/* tag 4.0.0 */}

      <BrowserRouter>
      
        <AppRouter />
      </BrowserRouter>
    </>
  );
}
