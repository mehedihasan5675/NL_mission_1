"use strict";
{
    //function with generics
    const createArray = (param) => {
        return [param];
    };
    const res = createArray("52");
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const resWithGeneric = createArrayWithGeneric("true");
    const resGenericObject = createArrayWithGeneric({
        id: 1524,
        name: "Mehedi",
    });
    console.log(resGenericObject);
    //function with generic with tuple
    const createArrayWithGenericWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const resWithGenericWithTuple = createArrayWithGenericWithTuple("true", 25);
    const resGenericObjectwithTuple = createArrayWithGenericWithTuple(215, {
        id: 1524,
        name: "Mehedi",
    });
    console.log(resGenericObjectwithTuple);
    //=============
    const addCourseToDifferentStudent = (student) => {
        const course = "Next level web developer.";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToDifferentStudent({
        name: "mehedi",
        email: "m@gmail.com",
        devType: "nextLevel",
    });
    const student2 = addCourseToDifferentStudent({
        name: "mehedi",
        email: "m@gmail.com",
        watch: true,
    });
    console.log(student1, student2);
    //=============
    //
}
