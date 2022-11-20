import { useContext, useId } from "react";
import GallaryItem from "./GallryItem";
import { FavContext } from "../store/favourite-context";
import gallaryData from "../model/gallaryData";
import classes from "./Favourite.module.scss";

const Favourite : React.FC  = () => {
  const ctx = useContext(FavContext);
  const favItem = ctx.item.filter((item) => item.fav === true) || [];
  const id = useId(); 

  return (
    <div className={classes.favContainer}>
      <h2>Favourite Items</h2>
      <div>
        {favItem.length > 0 &&
          favItem.map((item: gallaryData, i: number) => (
            <GallaryItem key={id} item={item} imgSize={ctx.imgSize} />
          ))}
          {favItem.length === 0 && <p>Add favourite items from Gallary... </p>}
      </div>
    </div>
  );
};

export default Favourite;
