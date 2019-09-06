
export abstract class BaseEntity {

  /**
   * Entity unique identifier
   */
  public id: string;

  public constructor() {
  }

  public static copyProperties(source, destination, overwrite = true) {
    for (var key in source) {
      try {
        if (overwrite || destination[key] === undefined) {
          destination[key] = source[key];
        }
      } catch { }
    }
  }

  public static isEmpty(str): boolean {
    var isNullOrEmpty: boolean = ((str == undefined) || (str == null) || (str == ""));
    return isNullOrEmpty;
  }

  public static isNotEmpty(str): boolean {
    return !BaseEntity.isEmpty(str);
  }
}
