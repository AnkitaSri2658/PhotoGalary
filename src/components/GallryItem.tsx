import { useContext } from "react";
import { FavContext } from "../store/favourite-context";
import gallaryData from "../model/gallaryData";
import classes from "./GallaryItem.module.scss";

const GallaryItem: React.FC<{
  item: gallaryData;
  imgSize: string;
}> = (props) => {
  const ctx = useContext(FavContext);
  const fav = props.item.fav || false;
  return (
    <div
      className={fav === true ? `${classes.tile} ${classes.fav}` : classes.tile}
    >
      <img
        alt={props.item.title}
        src={`https://live.staticflickr.com/${props.item.server}/${props.item.id}_${props.item.secret}_${props.imgSize}.jpg`}
      />
      <div className={classes.hoverContainer}>
        <p>{props.item.title || "Graphics"}</p>
        <hr></hr>
        <p className={classes.italic}>{props.item.owner}</p>
        <button onClick={() => ctx.toggleFav(props.item)}>
          {fav ? "Remove Favourite" : "Favourite"}
        </button>
      </div>
    </div>
  );
};

export default GallaryItem;
