declare module '@sf/auth' {
  export interface Security {
    username: string;
    password: string;
  }
  // export interface User {
  //   username: string;
  //   role: number;
  // }
  // export enum UserRoles {
  //   ADMIN,
  //   ORGCOMITEETE,
  //   JURI,
  //   USER
  // }

  export interface User {
    id?: number;
    name?: string;
    username: string;
    role: number;
    email?: string;
    address?: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone?: string;
    website?: string;
    company?: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  }
}

