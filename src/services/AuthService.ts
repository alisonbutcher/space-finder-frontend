import { User, UserAttribute } from "../model/Model";

export class AuthService {
  public async login(
    userName: string,
    password: string
  ): Promise<User | undefined> {
    if (userName === "user" && password === "1234") {
      return {
        userName: userName,
        email: "some@email.com",
      };
    } else {
      return undefined;
    }
  }

  public async getUserAttributes(user: User): Promise<UserAttribute[]> {
    const result: UserAttribute[] = [];
    result.push({
      Name: "description",
      Attribute: "Best user ever!",
    });
    result.push({
      Name: "job",
      Attribute: "Engineer",
    });
    result.push({
      Name: "age",
      Attribute: "44",
    });
    result.push({
      Name: "experience",
      Attribute: "17 years",
    });
    return result;
  }
}