"use strict";
{
    //
    //type assertion
    let anything;
    anything = "next level web developer";
    anything; //.//akhane type onujari tar method show kortise.
    const kgTogm = (value) => {
        if (typeof value === "string") {
            const convertedString = parseFloat(value) * 1000;
            console.log(`The converted value is:${convertedString}`);
            return `The converted value is:${convertedString}`;
        }
        else if (typeof value === "number") {
            console.log(value * 1000);
            return value * 1000;
        }
    };
    const res1 = kgTogm(5);
    const res2 = kgTogm("21"); //ami j type bole debo seta vul holew typescript otai sotik manbe
    try {
    }
    catch (error) {
        console.log(error.message);
    }
    //
}
