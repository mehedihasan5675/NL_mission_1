{
  //type guards
  //typeof-->type guard
  type ALphaneumeric = string | number;
  const add = (param1: ALphaneumeric, param2: ALphaneumeric): ALphaneumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };
  const res1 = add(2, 2);
  console.log(res1);

  //in gurad
  type NormalUser = {
    name: string;
  };
  type AdminUser = {
    name: string;
    role: string;
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`my name is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`my name is ${user.name} `);
    }
  };

  const normalUser: NormalUser = {
    name: "Mr Normal",
  };
  const adminUser: AdminUser = {
    name: "Mr Admin",
    role: "Admin",
  };

  const resAd = getUser(adminUser);
  //
}
