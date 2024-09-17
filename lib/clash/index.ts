import { ClashBasic } from "./basic"
import { ClashDns } from "./dns"

class ClashConfig {
  constructor(basic: ClashBasic, dns: ClashDns) {}
}

export { ClashBasic, ClashConfig, ClashDns }
