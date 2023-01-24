global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      matches: false,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn()
    };
  };
