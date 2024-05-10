// 依存関係: MessengerRepository <- MessengerDomain

class MessengerRepository {
  constructor() {}

  send(msg: string): void {
    console.log(msg);
  }
}

class MessengerDomain {
  private messengerRepository: MessengerRepository;

  constructor() {
    this.messengerRepository = new MessengerRepository();
  }

  sendMessage(msg: string): void {
    this.messengerRepository.send(msg);
  }
}
