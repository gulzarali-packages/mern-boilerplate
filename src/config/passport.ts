import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import config from './config';

passport.serializeUser((user, done) => {
    done(null, user);
})
passport.deserializeUser(function (user, done) {
    done(null, user);
});

if (config.googleAuth && config.googleAuth.clientID) {
    passport.use(new GoogleStrategy({
        clientID: config.googleAuth.clientID, 
        clientSecret: config.googleAuth.clientSecret, 
        callbackURL: config.googleAuth.callbackURL,
        passReqToCallback: true
    },
        function (request, accessToken, refreshToken, profile, done) {
            return done(null, profile);
        }
    ));
}