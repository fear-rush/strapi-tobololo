// "use strict";

// /**
//  *  blog-sulamadaha controller
//  */

// const { createCoreController } = require("@strapi/strapi").factories;
// // const { sanitizeEntity } = require('strapi-utils');

// module.exports = createCoreController(
//   "api::blog-sulamadaha.blog-sulamadaha",
//   ({ strapi }) => ({
//     async findOne(ctx) {
//       const { slug } = ctx.params;

//       const entity = await strapi.db
//         .query("api::blog-sulamadaha.blog-sulamadaha")
//         .findOne({
//           where: { slug },
//         });
//       const sanitizedEntity = await this.sanitizeOutput(entity);

//       return this.transformResponse(sanitizedEntity);
//     },
//   })
// );

"use strict";

/**
 *  post controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::blog-tobololo.blog-tobololo", ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;

    const query = {
      filters: { slug },
      ...ctx.query,
    };

    const post = await strapi.entityService.findMany("api::blog-tobololo.blog-tobololo", query);

    const sanitizedEntity = await this.sanitizeOutput(post);

    return this.transformResponse(sanitizedEntity[0]);
  },
}));
