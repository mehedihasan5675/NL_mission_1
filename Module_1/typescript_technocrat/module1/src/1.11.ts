{
  //ternary operator ||optional chaining ||nalish coalescing
  const age = 15;
  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("not adult");
  }
  const isAdult = age >= 18 ? "adult" : "not adult";
  console.log(isAdult, "isAdult");
  //nulish coalescing operator
  //null / undefined-->decision making

  const isAuthenticated = "";
  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? "verified" : "Guest";
  console.log({ result1 }, { result2 });

  type User = {
    name: string;
    age: number;
    address: {
      presentAddress: string;
      permanentAddress?: string;
    };
  };
  const user: User = {
    name: "mehedi",
    age: 25,
    address: {
      presentAddress: "faridpur",
    },
  };
  //ternary operator

  // const permanantaddress = user?.address?.permanentAddress
  //   ? user.address.permanentAddress
  //   : "No permanent Address";
  const permanantaddress =
    user?.address?.permanentAddress ?? "No permanent Address"; //nulish coalescing operator
  console.log({ permanantaddress });
  //
}
