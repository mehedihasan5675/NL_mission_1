{
  //Generic type
  //   type Generic = number[];
  // type Generic=Array<string>
  type GenericArray<T> = Array<T>; //when dynamic type needed

  // const rollnumbers1: Generic = [1, 5, 9];
  //   const rollnumbers1: Array<number> = [1, 5, 9];
  const rollnumbers1: GenericArray<number> = [1, 5, 9]; //when dynamic type needed

  //   const mentors: string[] = ["Mr.Z", "Mr.X", "Mr.Y"];
  //   const mentors: Array<string> = ["Mr.Z", "Mr.X", "Mr.Y"];
  const mentors: GenericArray<string> = ["Mr.Z", "Mr.X", "Mr.Y"]; //when dynamic type needed

  //   const boolArray: boolean[] = [true, false, true];
  //   const boolArray: Array<boolean> = [true, false, true];
  const boolArray: GenericArray<boolean> = [true, false, true]; //when dynamic type needed

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

  const user: GenericArray<{ name: string; age: number; role: string }> = [
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

  //generic tuple
  // type GenericTupleArray<X,T>=Array<X,T>//Array<1type er beshi dewa jabe na>
  type GenericTupleArray<X, T> = [X, T];

  const genericTuple: GenericTupleArray<
    number,
    { name: string; email: string; age: number }
  > = [1234, { name: "mehedi", email: "a@gmail.com", age: 25 }];
  console.log(genericTuple);
  //
}
