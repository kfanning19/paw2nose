var models = require("./Models");
module.exports = function() {
    models.User.findById(1).then((user) => {
        // if(!user){console.log("no user")}
        //     else{
        //         console.log(user);
        //     }

        models.Pet.findById(1).then((pet) => {
            // console.log(pet)
            user.addPet([pet]).then((data) => {
                models.User.findOne({
                    where: { id: 1 },
                    include: models.Pet
                }).then((checking) => {
                    // console.log(checking)
                });
            });
        });
    });
    models.User.findById(1).then((user) => {
        models.Pet.findById(2).then((pet) => {
            console.log(pet)
            user.addPet([pet]).then((data) => {
                models.User.findOne({
                    where: { id: 1 },
                    include: models.Pet
                }).then((checking) => {
                    
                });
            });
        });
    });
    models.User.findById(2).then((user) => {
        // if (!user) { console.log("no user") } else {
        //     // console.log(user);
        // }

        models.Pet.findById(2).then((pet) => {
            console.log(pet)
            user.addPet([pet]).then((data) => {
                models.User.findOne({
                    where: { id: 1 },
                    include: models.Pet
                }).then((checking) => {
                    
                });
            });
        });
    });
    models.User.findById(2).then((user) => {

        models.Pet.findById(1).then((pet) => {
            console.log(pet)
            user.addPet([pet]).then((data) => {
                models.User.findOne({
                    where: { id: 1 },
                    include: models.Pet
                }).then((checking) => {
                    
                });
            });
        });
    });
}