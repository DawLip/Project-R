export default (req, res, next) => {
  return {
    hello: () => {
      req.session.views = (req.session.views || 0) + 1;
      console.log('>>', req.session.views);
      return 'test';
    }
  };
};
