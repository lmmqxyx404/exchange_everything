import { NetworkProxy } from "./index"

export class Socks5 extends NetworkProxy {
  name: string
  readonly type: "socks5"

  validate(): boolean {
    return false
  }

  stringToProxy(): void {
    throw new Error("Socks5 stringToProxy not implemented.")
  }
}
