export class CalculateUtil {
  public static monthly(a: number, r: number, n: number) {
    console.log(n)
    return (
      a *
      (((r / 100 / 12) * Math.pow(1 + r / 100 / 12, n)) /
        (Math.pow(1 + r / 100 / 12, n) - 1))
    );
  }
}
