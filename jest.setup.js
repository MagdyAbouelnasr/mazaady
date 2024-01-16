// jest.setup.js
window.matchMedia =
  window.matchMedia ||
  function () {
    const mediaQueryList = {
      matches: false,
      media: "",
      onchange: null,
      addListener: function () {}, // Deprecated but still in use in some browsers
      removeListener: function () {}, // Deprecated but still in use in some browsers
      addEventListener: function () {},
      removeEventListener: function () {},
    };

    return mediaQueryList;
  };
