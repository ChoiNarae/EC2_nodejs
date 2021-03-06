export function SocketController() {
  this.listeners = []; //
}

SocketController.prototype = {
  connect() {
    // 소켓 연결
    const socket = io();

    socket.on("edge1", (data) => {
      console.log("socket connect");
      this.listeners.forEach((listener) => listener(data));
    });
    socket.on("edge2", (data) => {
      console.log("socket connect2");
      this.listeners.forEach((listener) => listener(data));
    });
  },
  registerListener(listener) {
    this.listeners.push(listener);

    console.log(this.listeners);
  },
};
