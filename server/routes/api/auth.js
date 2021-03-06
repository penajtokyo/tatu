const router = require('express').Router();
const authController = require('../../controllers/authController');

router.route('/signup')
  .post(authController.customerOrArtist)

router.route('/login')
  .post(authController.login)

router.route('/session')
  .get(authController.session)

router.route('/logout')
  .get(authController.logout)

module.exports = router;