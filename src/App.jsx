import { DefaultTemplate } from "./components/DefaultTemplate";
import { RoutesMain } from "./routes";
import "./styles/index.scss";

function App() {
   return (
      <>
         <DefaultTemplate>
            <RoutesMain />
         </DefaultTemplate>
      </>
   );
}

export default App;
