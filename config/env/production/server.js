// module.exports = ({ env }) => ({
//  url: env('https://api-sulamadaha.herokuapp.com/')
// });

module.exports = ({ env }) => ({
  url: env("PUBLIC_URL"),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS"),
  },
});
 
