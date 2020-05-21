import bcrypt from 'bcrypt';
import User from '../../models/user.js';

export default (req, res, next) => ({
  login: ({ email, password }) => {
    return User.findOne({ email }).then(({ _doc }) => {
      if (bcrypt.compareSync(password, _doc.password)) {
        req.session.email = _doc.email;
        req.session.loggined = true;
        return 'SUCCESS';
      }
      return 'WRONG_EMAIL_OR_PASSWORD';
    });
  },
  register: ({ username, email, password }) => {
    return User.findOne({ email })
      .then(isUserAlreadyExist => {
        if (isUserAlreadyExist) return 'EMAIL_IS_ENGAGED';

        const newUser = {
          username,
          email,
          password: bcrypt.hashSync(password, 3),
          characters: [],
          campaignsAsPlayer: [],
          campaignsAsGM: []
        };

        User.create(newUser);

        req.session.email = email;
        req.session.loggined = true;

        return 'SUCCESS';
      })
      .catch(err => {
        console.log(err);
        return err;
      });
  }
});
