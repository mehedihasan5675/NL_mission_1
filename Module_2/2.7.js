"use strict";
{
    const person = "car";
    const person2 = "bike";
    //////=======
    const userP = {
        name: "mr mehedi",
        age: 22,
        address: "faridpur",
    };
    const fan = {
        model: "click",
        year: 2029,
    };
    // type UserP='name'|'age'|'address'
    const getPropertyValue = (obj, key) => {
        return obj[key];
    };
    const resultP = getPropertyValue(userP, "name");
    const resultF = getPropertyValue(fan, "model");
    //
}
