const API_URL = "https://api.punkapi.com/v2/beers";

const getBeers = (
  filterByABV,
  filterByClassicRange,
  filterByAcidity,
  searchTerm
) => {
  const url = new URL(API_URL);
  if (filterByABV) {
    url.searchParams.append("abv_gt", 6);
  }
  if (filterByClassicRange) {
    url.searchParams.append("brewed_before", "12-2009");
  }
  if (searchTerm !== undefined && searchTerm !== "" && searchTerm !== " ") {
    url.searchParams.append("beer_name", searchTerm);
  }
  return fetch(url.href)
    .then((res) => res.json())
    .then((beers) => {
      if (filterByAcidity) {
        return beers.filter((beer) => beer.ph < 4);
      } else {
        return beers
      }
    });
};

export default getBeers;
