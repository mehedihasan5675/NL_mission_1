"use strict";
{
    // const rollnumbers1: Generic = [1, 5, 9];
    //   const rollnumbers1: Array<number> = [1, 5, 9];
    const rollnumbers1 = [1, 5, 9]; //when dynamic type needed
    //   const mentors: string[] = ["Mr.Z", "Mr.X", "Mr.Y"];
    //   const mentors: Array<string> = ["Mr.Z", "Mr.X", "Mr.Y"];
    const mentors = ["Mr.Z", "Mr.X", "Mr.Y"]; //when dynamic type needed
    //   const boolArray: boolean[] = [true, false, true];
    //   const boolArray: Array<boolean> = [true, false, true];
    const boolArray = [true, false, true]; //when dynamic type needed
    //array of object ew generic type user kora jai orthat dynamic type use kora jai
    // const user:GenericArray<object> = [
    //   {
    //     name: "mehedi",
    //     age: 25,
    //   },
    //   {
    //       name: "hasan",
    //       age: '54',
    //       role:'manager'
    //   },
    // ];
    const user = [
        {
            name: "mehedi",
            age: 25,
            role: "bg",
        },
        {
            name: "hasan",
            age: 23,
            role: "manager",
        },
    ];
    const genericTuple = [1234, { name: "mehedi", email: "a@gmail.com", age: 25 }];
    console.log(genericTuple);
    //
}
