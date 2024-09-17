import { NetworkProxy } from "./index"

export class Trojan extends NetworkProxy {
  name: string
  readonly type: "trojan"

  validate(): boolean {
    return false
  }

  stringToProxy(): void {
    throw new Error("Trojan stringToProxy not implemented.")
  }
}
