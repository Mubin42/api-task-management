export function sort(req, res, next) {
  const sort = req.query.sort ? req.query.sort : '-createdAt';
  const page = req.query.page
    ? req.query.page > 0
      ? parseInt(req.query.page)
      : 1
    : 1;
  const perPage = req.query.perPage ? parseInt(req.query.perPage) : 10;

  const skip = (page - 1) * perPage;
  req.meta = {
    sort,
    page,
    perPage,
    skip,
  };

  next();
}
