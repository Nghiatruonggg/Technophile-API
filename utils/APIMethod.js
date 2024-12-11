class APIMethod {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    // Basic Query
    const filterObject = { ...this.queryString };
    const excludedQuery = ['sort', 'limit', 'fields', 'page'];

    excludedQuery.forEach((el) => delete filterObject[el]);

    // Advanced Query
    let filterString = JSON.stringify(filterObject);
    filterString = filterString.replace(
      /\b(gte|gt|lte|lt)\b/g,
      (match) => `$${match}`,
    );

    const queryKey = Object.keys(JSON.parse(filterString));
    const queryValue = Object.values(JSON.parse(filterString));

    const finalFilterObject = {};

    // Loop through queryKey and queryValue
    for (let i = 0; i < queryKey.length; i++) {
      if (queryKey[i] === 'price' || queryKey[i] === 'rating_numbers') {
        finalFilterObject[queryKey[i]] = queryValue[i];
      } else {
        finalFilterObject[queryKey[i]] = {
          $regex: queryValue[i],
          $options: 'i',
        };
      }
    }

    this.query = this.query.find(finalFilterObject);

    return this;
  }

  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join(' ');
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort('-createdAt');
    }

    return this;
  }

  limitFields() {
    if (this.queryString.fields) {
      const limitedFields = this.queryString.fields.split(',').join(' ');
      this.query = this.query.select(limitedFields);
    } else {
      this.query = this.query.select('-__v');
    }
    return this;
  }

  page() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 6;

    const skipProduct = (page - 1) * limit;
    this.query = this.query.skip(skipProduct).limit(limit);

    return this;
  }
}

module.exports = APIMethod;
