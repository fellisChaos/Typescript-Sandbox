
interface User {
  readonly dbId: number; 
  email: string;
  userId: number;
  googleId?: string; 
  startTrail(): string;
  getCoupon(couponname: string, value: number): number;
}

interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}


const felis: Admin = {
  dbId: 22, 
  email: "felis@chaos.com",
  userId: 2211,
  githubToken: "github", 
  role: "admin", 

  startTrail: () => {
    return "trail started";
  },

  getCoupon: (name: string, off: number) => {
    return off;
  },
};


felis.email = "felis@chaos.com";

export {}