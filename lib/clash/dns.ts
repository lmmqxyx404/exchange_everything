class Ipv4 {

}

export class ClashDns {
  enable: boolean
  ipv6: boolean
  'default-nameserver': Ipv4[]

  constructor(param: any) {
    this.enable = param.enable ?? false
    this.ipv6 = param.ipv6 ?? false

  }

  static default(): ClashDns {
    const res = {};

    return new ClashDns(res)
  }
}
