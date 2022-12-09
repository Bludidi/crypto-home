import Store from '../Redux/ConfigureStore'

describe('Cryptos redux state tests', () => {
  it('Should initially set cryptos to an empty string', () => {
    const state = Store.getState().cryptoReducer;
    expect(state.cryptoReducer).toEqual();
  });
});