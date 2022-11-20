# Photo Gallary App

This app is made in React Typescript. This App browse the photos from flicker api(https://www.flickr.com/services/api/flickr.photos.getRecent.htm) and show them. I am calling pictures from a gallary of flicker that has limited photos so after a point user can see duplicate photos.

the following image shows how app looks like 
![image](https://user-images.githubusercontent.com/99965138/202923953-c67f9815-779c-41d7-af45-1e8b094d355b.png)

We have two section here
1. All images - where user can scroll and see infinite pictures.
2. Favourite - user can also make picture favourite by hovering on any picture then click them. they can see these pictures either on all item/gallary tabs with highlighted tiles or they can seperatly see these items in favourite tab they cal also unfavourite items from any of these tabs.

Even if user refresh the page they wont lost their data as its stored in local storage for the time being.

## Dependency
- React
- TypeScript
- react-router-dom
- sass
- css modules and react context api (already included with create react app)
- localStorage


# Getting Started with Photo Gallary App

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

### `npm run build`

## Known issues and future plan
As this app uses gallary item with limited photos, if you make duplicate photo favourite it will always select the first one as we dont have unique id here. this can be solved in real scanario with unique photo or id. 
In future, we can also improve the storing functionality we can store user fav items at server(for now we are saving it in the local storage).
Also in this app I have tried to complete the functionality so we can also improve the look and feel based on the requirement.
