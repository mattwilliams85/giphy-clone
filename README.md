# Giphy Code Challenge

## Task

Build a react app that
1. has a search input field and a 'Search' button.
2. queries the giphy API [https://developers.giphy.com/explorer/](https://developers.giphy.com/explorer/) using the term in the input field when the user clicks Search. 
3. displays the results from the search in a grid. You'll need to figure out which url from giphy can be used in your results - the API returns a whole lot of options and some are not useable as img src's.
4. caches search results and re-uses them if the same query happens twice.
5. has pagination controls for search results below the grid.

## Installation

```sh
git clone https://github.com/mattwilliams85/giphy-react.git
cd giphy-react
yarn install
yarn start
```

Open your browser and go to the url `localhost:3000`
