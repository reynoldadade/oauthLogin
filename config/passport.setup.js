const passport = require('passport');
const googleStrategy = require('passport-google-oauth20');

passport.use(
    new googleStrategy({
    //options for the strategy
}), () => {
    //passport callback pasport
})