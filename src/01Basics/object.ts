// const User = {
//     name: "felis",
//     email: "felis@chaos.dev",
//     isAvtive: true
// }

// function createUser({name: string, isPaid: boolean}){}

// let newUser = {name: "felis", isPaid: false, email: "felis@chaos.dev"}

// createUser(newUser)

// function createCourse():{name: string, price: number}{
//     return {name: "reactjs", price: 3990}
// }

// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }

// function createUser(user: User): User{
//     return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  credcardDetails?: number;
};

let myUser: User = {
  _id: "1245",
  name: "felisChaos",
  email: "felis@chaos.dev",
  isActive: false,
};

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

myUser.email = "felis@chaos.dev";
// myUser._id = "asa"

export {};
