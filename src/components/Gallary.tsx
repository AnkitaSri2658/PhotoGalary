import { useContext, useId } from "react";
import GallaryItem from "./GallryItem";
import gallaryData from "../model/gallaryData";
import classes from "./Gallary.module.scss";
import { FavContext } from "../store/favourite-context";

const Gallary: React.FC = () => {
  const ctx = useContext(FavContext);
  const id = useId();

  return (
    <div className={classes.gallaryContainer}>
      <h2>All items</h2>
      <div>
        {ctx.item.length > 0 &&
          ctx.item.map((item: gallaryData, i: number) => (
            <GallaryItem key={id} item={item} imgSize={ctx.imgSize} />
          ))}
      </div>
    </div>
  );
};

export default Gallary;
