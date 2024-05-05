"use strict";
{
    //constraints ->forced kora
    const addCourseToDifferentStudent = (student) => {
        const course = "Next level web developer.";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToDifferentStudent({
        id: 252,
        name: "mehedi",
        email: "m@gmail.com",
        devType: "nextLevel",
    });
    const student2 = addCourseToDifferentStudent({
        id: 366,
        name: "mehedi",
        email: "m@gmail.com",
        watch: true,
    });
    const student3 = addCourseToDifferentStudent({
        id: 255,
        email: "hd",
        name: "amni",
    });
    //
}
