//Find the date and format it

//To activate it, just create a constant, like "const date = require(__dirname+ 'where it is'") and then run when needed as date()


//This one is to get the full date
exports.getDate = function (){
    
    const today = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    };

    return today.toLocaleDateString("en-GB", options);
};

//This one is to get the day of the week
exports.getDayOfTheWeek = function (){
    const today = new Date();
    
    const options = {
        weekday: "long",
    };

    return today.toLocaleDateString("en-GB", options);
};




