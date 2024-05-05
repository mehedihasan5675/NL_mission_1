{
  //generic constraint with keyof operator
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; //manually type diye union use korlam
  type Owner2 = keyof Vehicle; //akhane Keyof diye same type er property k union a manage korlam
  const person: Owner = "car";
  const person2: Owner2 = "bike";

  //////=======
  const userP = {
    name: "mr mehedi",
    age: 22,
    address: "faridpur",
  };
  const fan = {
    model: "click",
    year: 2029,
  };
  // type UserP='name'|'age'|'address'
  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };
  const resultP = getPropertyValue(userP, "name");
  const resultF = getPropertyValue(fan, "model");
  //
}
