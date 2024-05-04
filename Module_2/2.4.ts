{
  //Generic with interface
  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseDate: number;
    };
    smartWatch: T;
    bike?: X;
  }

  const poorDeveloper: Developer<{
    brand: string;
    model: string;
    display: string;
  }> = {
    name: "Mehedi hasan",
    computer: {
      brand: "asus",
      model: "x255ui",
      releaseDate: 2012,
    },
    smartWatch: {
      brand: "Emilab",
      model: "kmw66",
      display: "OLED",
    },
  };
  //
  interface RichDevWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }
  interface RichBike {
    model: string;
    disk: string;
  }
  const richDeveloper: Developer<RichDevWatch, RichBike> = {
    name: "Rakib hasan",
    computer: {
      brand: "hp",
      model: "x255ui",
      releaseDate: 2018,
    },
    smartWatch: {
      brand: "apple",
      model: "45dsf",

      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "yamaha",
      disk: "double",
    },
  };

  //
}
