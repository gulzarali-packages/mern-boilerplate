import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import config from './config';

passport.serializeUser((user, done) => {
    done(null, user);
})
passport.deserializeUser(function (user, done) {
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: config.googleAuth.clientID, // Your Credentials here.
    clientSecret: config.googleAuth.clientSecret, // Your Credentials here.
    callbackURL: config.googleAuth.callbackURL,
    passReqToCallback: true
},
    function (request, accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }
));
