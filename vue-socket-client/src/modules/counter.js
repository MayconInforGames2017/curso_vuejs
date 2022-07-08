const counterModule = {
  state: {
    count: 0
  },

  //
  mutations: {
    SOCKET_COUNTER_INCREMENT (state, counter) {
      state.count = state.counter;
    },
    SOCKET_COUNTER_DECREMENT (state, counter) {
      state.count = state.counter;
    }
  },

  // Emitimos ações do nosso aplicativo para o servidor nodejs com socket.io
  actions: {
    socket_increment: ({state, rootState}) => {
      rootState.io.emit('increment', state.count) // Emitimos o evento de incremento para o servidor
    },
    socket_increment: ({state, rootState}) => {
      rootState.io.emit('decrement', state.count) // Emitimos o evento de decremento para o servidor
    }
  }
};

export default counterModule;
r
