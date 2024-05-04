{
  //function with generics
  const createArray = (param: string): string[] => {
    return [param];
  };
  const res = createArray("52");

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };
  const resWithGeneric = createArrayWithGeneric<string>("true");
  //
  type User = {
    id: number;
    name: string;
  };
  const resGenericObject = createArrayWithGeneric<User>({
    id: 1524,
    name: "Mehedi",
  });
  console.log(resGenericObject);

  //function with generic with tuple

  const createArrayWithGenericWithTuple = <T, X>(
    param1: T,
    param2: X
  ): [T, X] => {
    return [param1, param2];
  };
  const resWithGenericWithTuple = createArrayWithGenericWithTuple<
    string,
    number
  >("true", 25);
  //
  type User11 = {
    id: number;
    name: string;
  };
  const resGenericObjectwithTuple = createArrayWithGenericWithTuple<
    number,
    User
  >(215, {
    id: 1524,
    name: "Mehedi",
  });
  console.log(resGenericObjectwithTuple);

  //=============
  const addCourseToDifferentStudent = <T>(student: T) => {
    const course = "Next level web developer.";
    return {
      ...student,
      course,
    };
  };
  const student1 = addCourseToDifferentStudent({
    name: "mehedi",
    email: "m@gmail.com",
    devType: "nextLevel",
  });
  const student2 = addCourseToDifferentStudent<{
    name: string;
    email?: string;
    watch: boolean;
  }>({
    name: "mehedi",
    email: "m@gmail.com",
    watch: true,
  });
  console.log(student1, student2);
  //=============
  //
}
