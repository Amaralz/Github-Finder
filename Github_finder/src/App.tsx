import { AppRoutes } from "./routes";
import classes from './App.module.css'


export function App() {
  

  return (
    <div className={classes.app}>
    <h1>Github Finder</h1>
    <AppRoutes></AppRoutes>
    </div>
  );
}


