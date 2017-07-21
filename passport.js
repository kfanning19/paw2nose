//load bcrypt
var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    bcrypt = require('bcryptjs'),
    models = require('./Models')

module.exports = function(app) {
  app.use(passport.initialize())
  app.use(passport.session())

  // Declare passport-local as the login strategy
  passport.use('login', new LocalStrategy(
    function(username, password, done) {
      //Finds user in models based on username (which is the email in models)
      models.User.findOne({ 
        where: {
          email: username
        }
      }).then(function (data) {
          //Returns error if there is no user when login attempted.
          if (!data) { 
            console.log("This email is not in the system");
            return done(null, false, { message: 'This email is not in the system.' })
          }
        var user = data.dataValues;
        if(user.password) {
            var userpassword = user.password
            //Encrypts the password the user entered in login attempt, checks it against the encrypted string stored in database to see if a match.
            //Original user password is never known/shown for security.
            bcrypt.compare(password, userpassword, function(err, res) {
              if (err)
                  throw err;
              if (res){
                console.log(user.first_name + " is LOGGED IN!")
                return done(null, user)
              } else {
                return done(null, false, { message: 'Incorrect credentials. please login again.' })
              }
            })
        } else {return done(null, false, { message: "This email is not in the system." })}
     
        })
    }
  ))


//Serializes user as their UserID
  passport.serializeUser(function(user, done){
    console.log("PASSPORT SERIALIZE USER: ", user);
    done(null, user.id)
  });

 //Deserializes user on page load using their UserID to get full user info, which can be used with req.user
  passport.deserializeUser(function(id, done) {
    models.User.findOne({
      where: {
        id: id
      }
    },{include:[{model:models.Pet}]
    }).then(function (user) {
      console.log("PASSPORT USER NAME: ", user.first_name);
      if (user == null) {
        done(new Error('Wrong user id.'))
      }      
      done(null, user)
    })
  })
      //User Sign In Strategy
    passport.use('signin', new LocalStrategy(

        {

            // by default, local strategy uses username and password, we will override with email
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },

        function(req, email, password, done) {

            var User = User;

            var isValidPassword = function(userpass, password) {
                return bCrypt.compareSync(password, userpass);
            }

            User.findOne({ where: { email: email } }).then(function(user) {

                if (!user) {
                    return done(null, false, req.flash('loginMessage', 'No user found.'));
                }

                if (!isValidPassword(user.password, password)) {

                    return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));

                }

                var userinfo = user.get();

                return done(null, userinfo);

            }).catch(function(err) {

                console.log("Error:", err);

                return done(null, false, req.flash('loginMessage', 'Oops! Something went wrong'));


            });

        }
    ));
}
