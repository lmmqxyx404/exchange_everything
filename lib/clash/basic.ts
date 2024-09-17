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
  constructor() {
    this["mixed-port"] = 7890
  }
}
