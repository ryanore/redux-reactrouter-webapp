export default () => (

  /**
   * Warning from React Router, caused by react-hot-loader.
   * The warning can be safely ignored, so filter it from the console.
   * Otherwise you'll see it every time something changes.
   * See https://github.com/gaearon/react-hot-loader/issues/298
   */
    const isString = require('./utils/checks').isString;

    const orgError = console.error; // eslint-disable-line no-console
    console.error = (...args) => { // eslint-disable-line no-console
      if (args && args.length === 1 && isString(args[0]) && args[0].indexOf('You cannot change <Router routes>;') > -1) {
        // React route changed
      } else {
        // Log the error as normally
        orgError.apply(console, args);
      }
    };


    module.hot.accept("./components/app", () => {
    const NextApp = require("./components/app").default;
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      MOUNT_NODE);
    });

)();
