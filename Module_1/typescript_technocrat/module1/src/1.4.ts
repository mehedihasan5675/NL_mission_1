let coordinates: [number, number] = [1, 5];
let man: [number, string] = [25, "Mahedi"];
console.log(coordinates, man);

//Reference type

const user: {
  readonly company: "ph";
  firstName: string;
  middleName?: string;
  lastName: string;
  isMarried: boolean;
} = {
  firstName: "mehedi hasan",
  company: "ph",
  lastName: "chanchal",
  isMarried: false,
};

console.log(user);
