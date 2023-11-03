import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes";

export default function App() {
  return (
    <>

    {/* tag 2.1.0 */}

      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}
