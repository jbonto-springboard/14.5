function createInstructor(firstName, lastName){
    return {
        firstName,
        lastName
    };
}

var favoriteNumber = 42;

var instructor = {
    firstName : 'colt',
    [favoriteNumber] : 'that is my favorite'
}

var instructor = {
    firstName : 'colt',
    sayHi(){
        return "hi!";
    },
    sayBye(){
        return this.firstName + " says bye"; 
    }
}

function createAnimal(animal, verb, noise){
    return {
        animal,
        [verb] : function(){
            return noise;
        }
    }
}