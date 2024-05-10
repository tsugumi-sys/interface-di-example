// 依存関係: MessengerRepository -> IFMessengerRepository <- MessengerDomain
// repository視点での依存方向が逆転した

interface IFMessengerRepository {
  send(msg: string): void;
}

class MessengerRepository implements IFMessengerRepository {
  constructor() {}

  send(msg: string): void {
    console.log(msg);
  }
}

class MessengerDomain {
  private messengerRepository: IFMessengerRepository;

  constructor() {
    this.messengerRepository = new MessengerRepository();
  }

  sendMessage(msg: string): void {
    this.messengerRepository.send(msg);
  }
}

const messengerDomain = new MessengerDomain();
