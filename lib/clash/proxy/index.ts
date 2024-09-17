import { Socks5 } from "./socks5"
import { Trojan } from "./trojan"

abstract class NetworkProxy {
  // 校验
  abstract validate(): boolean
  abstract stringToProxy(): void
}

export { NetworkProxy, Socks5, Trojan }
