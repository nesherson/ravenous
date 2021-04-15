const Yelp = {
  search: async function (term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.hasOwnProperty('businesses')) {
          const { businesses } = jsonResponse;
          //console.log(businesses);

          return businesses.map((business) => {
            const newObj = {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count,
            };
            console.log(newObj);
            return newObj;
          });
        }
      });
  },
};

export default Yelp;
