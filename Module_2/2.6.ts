{
  //constraints ->forced kora
  const addCourseToDifferentStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next level web developer.";
    return {
      ...student,
      course,
    };
  };
  const student1 = addCourseToDifferentStudent({
    id: 252,
    name: "mehedi",
    email: "m@gmail.com",
    devType: "nextLevel",
  });
  const student2 = addCourseToDifferentStudent<{
    name: string;
    id: number;
    email: string;
    watch: boolean;
  }>({
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
