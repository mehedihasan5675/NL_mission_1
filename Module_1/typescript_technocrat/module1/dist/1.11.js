"use strict";
{
    //ternary operator ||optional chaining ||nalish coalescing
    const age = 15;
    if (age >= 18) {
        console.log("adult");
    }
    else {
        console.log("not adult");
    }
    const isAdult = age >= 18 ? "adult" : "not adult";
    console.log(isAdult, "isAdult");
}
