import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes";

export default function App() {
  return (
    <>

    {/* tag 5.0.0 */}

      <BrowserRouter>
      
        <AppRouter />
      </BrowserRouter>
    </>
  );
}
