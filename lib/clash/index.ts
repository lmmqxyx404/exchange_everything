import { ClashBasic } from "./basic"
import { ClashDns } from "./dns"
import { NetworkProxy } from "./proxy"
import { ClashProxyGroup } from "./proxy-groups"
import { ClashRule } from "./rules"

interface Default {
  /**每个类需要独立去实现相关的静态方法 */
  default(): any
}

interface CommenUtil extends Default {
  toString(): string
  toJson(): JSON
}

/* 
interface Custom<T> {
  default(): T
}
 */
class ClashConfig implements CommenUtil {
  private basic: ClashBasic
  private dns: ClashDns
  private proxies: NetworkProxy[]
  private ["proxy-groups"]: ClashProxyGroup[]
  private rules: ClashRule[]
  /**
   * If you do not know
   * @param basic
   * @param dns
   */
  constructor(
    basic: ClashBasic,
    dns: ClashDns,
    proxies: NetworkProxy[],
    proxy_groups: ClashProxyGroup[]
  ) {
    this.basic = basic
    this.dns = dns
    this.proxies = proxies
    this["proxy-groups"] = proxy_groups
  }
  /** 静态方法，返回一个实例 */
  static default(): ClashConfig {
    let clashInstance = new ClashConfig(new ClashBasic(), new ClashDns(), [], [])

    return clashInstance
    // console.log("hello")
  }

  default() {
    return ClashConfig.default() as ClashConfig
  }

  toString(): string {
    return JSON.stringify(this)
  }

  toJson(): JSON {
    return JSON.parse(this.toString())
  }
}

export { ClashBasic, ClashConfig, ClashDns, ClashRule, ClashProxyGroup }
