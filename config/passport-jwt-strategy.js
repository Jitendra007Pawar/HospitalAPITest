const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const doctorsDb = require('../models/doctorsSchema');


let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'hospital'
}


passport.use(new JWTStrategy(opts, function(jwtPayLoad, done){

    doctorsDb.findById(jwtPayLoad._id, (err, user)=>{
        if (err)
        {
            console.log('Error in finding user from JWT');
            return;
        }

        if (user)
        {
            return done(null, user);
        }
        else
        {
            return done(null, false);
        }
    })

}));

module.exports = passport;