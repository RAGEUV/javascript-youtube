//Immediately Invocked Function Expression

(function chai(){
     //named iife 
    console.log("DB connected");
})();

(  (username) => {
    //unamed iife
    console.log(`DB connected TWO ${username}`);
}  )("ujjwal")
