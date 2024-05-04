{
  //
  //type assertion

  let anything: any;
  anything = "next level web developer";
  anything as string; //.//akhane type onujari tar method show kortise.

  const kgTogm = (value: string | number): number | string | undefined => {
    if (typeof value === "string") {
      const convertedString = parseFloat(value) * 1000;
      console.log(`The converted value is:${convertedString}`);
      return `The converted value is:${convertedString}`;
    } else if (typeof value === "number") {
      console.log(value * 1000);
      return value * 1000;
    }
  };
  const res1 = kgTogm(5) as number;
  const res2 = kgTogm("21") as number; //ami j type bole debo seta vul holew typescript otai sotik manbe

  //   const res3 = kgTogm(undefined);

  type CustomError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }
  //
}
