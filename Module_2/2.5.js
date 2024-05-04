"use strict";
{
    //function with generics
    const createArray = (param) => {
        return [param];
    };
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const res = createArray("52");
    const resWithGeneric = createArrayWithGeneric("52");
    console.log(resWithGeneric);
    //
}
