import { MoonLoader } from "react-spinners";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loaderWrapper}>
      Loader
      <MoonLoader color="#87ceeb" size={40} />
    </div>
  );
};

export default Loader;
