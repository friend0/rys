const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../db");
const authenticationMiddleware = require('./middleware');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    db("users")
        .where({ id })
        .first()
        .then(user => {
            done(null, user);
        })
        .catch(err => {
            done(err, null);
        });
});

const options = {};
function initPassport() {
    passport.use(
        new LocalStrategy(options, (username, password, done) => {
            db("users")
                .where({ username })
                .andWhere("password", db.raw(`crypt(?, password)`, [password]))
                .first()
                .then(user => {
                    if (!user) { 
                        return done(null, false) 
                    }
                    else {
                        return done(null, user);
                    }
                })
                .catch(err => {
                    return done(err);
                });
        })
    );
    passport.authenticationMiddleware = authenticationMiddleware;
}

module.exports = initPassport;
