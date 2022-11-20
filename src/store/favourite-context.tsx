import React, { useState, useEffect } from "react";
import gallaryData from "../model/gallaryData";

type FavContextObj = {
  item: gallaryData[];
  toggleFav: (item: gallaryData) => void;
  imgSize: string;
};

export const FavContext = React.createContext<FavContextObj>({
  item: [],
  toggleFav: () => {},
  imgSize: "",
});

const PAGE_NUMBER: number = 1;

let gallaryItems:gallaryData[] = JSON.parse(localStorage.getItem("gallaryItems") || '[]');


const FavContextProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [gallaryItem, setgallaryItem] = useState<gallaryData[]>(gallaryItems);
  const [page, setPage] = useState<number>(PAGE_NUMBER);

  useEffect(() => {
    //in real api we will change page no but in this gallary I only have limited photo so I am calling same sets again
    const page_num = 1; //page
    fetch(
      `https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=71542c171848da257b3caa214f7ed00f&gallery_id=66911286-72157659914179024&format=json&nojsoncallback=1&page=${page_num}&per_page=20`
    )
      .then((response) => response.json())
      .then((data) => {
        setgallaryItem([...gallaryItem, ...data.photos.photo]);
        localStorage.setItem("gallaryItems", JSON.stringify([...gallaryItem, ...data.photos.photo]));
      });
    console.log(gallaryItem);
  }, [page]);

  //incrementing page number on window scroll
  const scrollToEnd = () => setPage(page + 1);

  window.onscroll = function () {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      scrollToEnd();
    }
  };

  const toggleItemToFavorite = (favItem: gallaryData) => {
    const existingItem: any = gallaryItem.find(
      (item: gallaryData) => item.id === favItem.id
    );
    const existingItemIndex: number = gallaryItem.findIndex(
      (item) => item.id === favItem.id
    );
    const fav = existingItem.fav ? existingItem.fav : false;
    console.log(fav);
    const updatedItem = {
      ...existingItem,
      fav: !fav,
    };
    console.log(updatedItem);
    const updatedItems = [...gallaryItem];
    updatedItems[existingItemIndex] = updatedItem;
    setgallaryItem(updatedItems);
    localStorage.setItem("gallaryItems", JSON.stringify(updatedItems));
  };

  const contextValue: FavContextObj = {
    item: gallaryItem,
    toggleFav: toggleItemToFavorite,
    imgSize: "q", ////thumbnail	150	cropped square -> https://www.flickr.com/services/api/misc.urls.html
  };

  return (
    <FavContext.Provider value={contextValue}>
      {props.children}
    </FavContext.Provider>
  );
};

export default FavContextProvider;
