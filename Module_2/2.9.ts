{
  // conditional type
  type a1 = null;
  type b1 = undefined;
  type x = a1 extends null ? true : false;

  //car/bike/track ase kina check kori type condition er sahajje
  type Sheikh = {
    bike: string;
    car: string;
  };
  type CheckVehicle<T> = T extends keyof Sheikh ? true : false;
  type HasV = CheckVehicle<"car">;
  //
}
