{
  //union type and intersection type
  //union type
  type FrontendDeveloper = "fakibazDev" | "juniourDev";
  type FullStactDeveloper = "frontEndDev" | "ExpertDev";
  type Developer = FrontendDeveloper | FullStactDeveloper;
  const devoloper: Developer = "fakibazDev";
  console.log(devoloper);

  type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "A+" | "B+" | "O+";
  };
  const user1: User = {
    name: "mehedi",
    gender: "male",
    bloodGroup: "A+",
  };
  console.log(user1);

  //intersection type

  type FrontendDeveloperIn = {
    skills: string[];
    designation1: "Front End Developer";
  };

  type BackendDeveloperIn = {
    skills: string[];
    designation2: "Back End Developer";
  };

  type FullStackDeveloperI = FrontendDeveloperIn & BackendDeveloperIn;
  const fullstackdeveloper: FullStackDeveloperI = {
    skills: ["HTML", "CSS", "JS"],
    designation1: "Front End Developer",
    designation2: "Back End Developer",
  };

  console.log(fullstackdeveloper);
}
