// 510
module.exports.isLoggedIn = (req, res, next) => {
  console.log("req.user...", req.user);
  if (!req.isAuthenticated()) {
    console.log(req.path, req.originalUrl);
    // 514
    req.session.returnTo = req.originalUrl;
    req.flash("error", "You must be signed in");
    return res.redirect("/login");
  }
  next();
};
