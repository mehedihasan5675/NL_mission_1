{
  //
  // nullable type

  //
  const sentence = "My country name is Bangladesh";
  const result = sentence.split(" "); //'' space na dile each letter alada korbe
  console.log(result);
  //unknown type hole
  const getMycarSpeedInMPS = (value: unknown) => {
    if (typeof value === "number") {
      const carspeed = (value * 1000) / 3600;
      console.log(`The car Speed is ${carspeed} ms^-1`);
    } else if (typeof value === "string") {
      const [num, strings] = value.split(" ");
      console.log(num, strings);
      const carspeed = (parseFloat(num) * 1000) / 3600;
      console.log(`The car Speed is ${carspeed} ms^-1`);
    } else {
      console.log("Wrong Inpur");
    }
  };
  getMycarSpeedInMPS(null);

  //never type

  //
}
