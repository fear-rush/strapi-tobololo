module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a331be22d090174264b52f7ffb198b0f'),
  },
});
