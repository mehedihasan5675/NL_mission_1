{
  //mapped types
  const arrOfNumber: number[] = [1, 4, 5];
  // const arrOfString:string[]=["1","4","5"]//manual
  const affOfString: string[] = arrOfNumber.map((number) => number.toString());
  console.log(affOfString);

  //
  type AreaNumber = {
    height: number;
    width: number;
    depth: number;
  };
  //if i need to area type in string then we need to do create another type with string type like that
  // type AreaString = {
  //     height: string;
  //     width: string;
  // }

  //but we can do it dynamically with use typescript mapped type
  type AreaString = {
    [key in keyof AreaNumber]: string;
  };

  type AreaStringLookUp<T> = {
    [key in keyof T]: T[key];
  };
  const area1: AreaStringLookUp<{ height: string; width: number }> = {
    height: "25",
    width: 20,
  };
  //look up type
  type height = AreaNumber["height"];

  //
}
