enum ClashRunningMode {
  Rule = "Rule",
  Global = "Global",
  Direct = "Direct"
}

export class ClashBasic {
  "mixed-port": number
  "allow-lan": boolean
  "bind-address": string
  // todo: change to enum
  mode: ClashRunningMode
  // todo: change to enum
  "log-level": string
  "external-controller": string
  constructor(obj: any) {
    this["mixed-port"] = obj['mixed-port'] ?? 7890
    this["allow-lan"] = obj['allow-lan'] ?? false
    this["bind-address"] = obj['bind-address'] ?? '*'
    this["mode"] = obj['mode'] ?? ClashRunningMode.Direct
    this["log-level"] = obj['log-level'] ?? 'info'
    this["external-controller"] = obj['external-controller'] ?? '127.0.0.1:9090'
  }

  static default(): ClashBasic {
    const params = {
      "mixed-port": 7890
    }
    const res = new ClashBasic(params)
    return res
  }
}
