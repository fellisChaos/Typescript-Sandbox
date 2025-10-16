let score: number | string = 33;
score = 44;
score = "55";

type firstUser = {
  name: string;
  id: number;
};

type firstAdmin = {
  username: string;
  id: number;
};

let hitesh: firstUser | firstAdmin = { name: "felis", id: 334 };

hitesh = { username: "fc", id: 334 };

// function getDbId(id: number | string){
//     console.log(`DB id is: ${id}`);
// }
getDbId(3);
getDbId("3");

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

//array

const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: (string | number | boolean)[] = ["1", "2", 3, true];

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
// seatAllotment = "crew"
