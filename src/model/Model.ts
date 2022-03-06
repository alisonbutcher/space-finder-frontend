export interface User {
  userName: string;
  email: string;
}

export interface UserAttribute {
  Name: string;
  Attribute: string;
}

export interface Space {
  spaceId: string;
  name: string;
  location: string;
  photoUrl?: string;
}
