// 依存性の注入

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
  constructor(private messengerRepository: IFMessengerRepository) {
    this.messengerRepository = messengerRepository;
  }

  sendMessage(msg: string): void {
    this.messengerRepository.send(msg);
  }
}

const messengerRepository = new MessengerRepository();
const messengerDomain = new MessengerDomain(messengerRepository); // 注入
