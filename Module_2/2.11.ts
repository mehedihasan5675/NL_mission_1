{
  //utily type
  //pick
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };
  type NameAge = Pick<Person, "name" | "age">;

  //omit ->remove
  type ContactInfo = Omit<Person, "name" | "age">;

  //required-->all required korbe
  type PersonRequred = Required<Person>;
  //partial
  type PersonPartial = Partial<Person>;

  //Read only

  type PersonReadyOnly = Readonly<Person>;
  const person1: PersonReadyOnly = {
    name: "Mr X",
    age: 200,
    contactNo: "017",
  };
  //   person1.name = "mehedi";

  //Record
  // type MyObj = {
  //     a: string;
  //     b:string
  // }

  type MyObj = Record<string, string>;
  const obj1: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
  };
  const EmptyObj: Record<string, unknown> = {};
  //
}
