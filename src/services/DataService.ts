import { Space } from "../model/Model";

export class DataService {
  public async getSpaces(): Promise<Space[]> {
    const result: Space[] = [];
    result.push({
      location: "Paris",
      name: "Best Location",
      spaceId: "123",
    });
    result.push({
      location: "Los Angeles",
      name: "East Coast US",
      spaceId: "124",
    });
    result.push({
      location: "Auckland",
      name: "Kind of Kiwi",
      spaceId: "125",
    });
    result.push({
      location: "Sydney",
      name: "Very Aussie",
      spaceId: "126",
    });
    return result;
  }

  public async reserveSpace(spaceId: string): Promise<string | undefined> {
    if (spaceId === "123") {
      return "5555";
    } else {
      return undefined;
    }
  }
}
