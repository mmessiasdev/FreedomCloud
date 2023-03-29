'use strict';

/**
 *  post controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::post.post', ({Strapi}) => ({
    async createMe(ctx) {
        try {
            const user = ctx.state.user;

            if(!user){
                return ctx.badRequest(401, [{ messages: "No athorized user found!"}]);
            }
            const result = await strapi.entityService.create('api::post.post', {
                data: {
                    content: ctx.request.body.content,
                    email: user.email,
                }
            });
            return result;
        } catch (err){
            return ctx.badRequest(500, [{ messages: [{ id: err.message}]}]);
        }
    },
    async getMe(ctx) {
        try {
            const user = ctx.state.user;
            if(!user){
                return ctx.badRequest(401, [{ messages: "No athorized user found!"}]);
            }
            const result = await strapi.db.query('api::post.post').findOne({
                where: {
                    user: {
                        id: {
                            $eq: user.id
                        }   
                    }
                },
            });
            return result;
        } catch (err){
            return ctx.badRequest(500, [{ messages: [{ id: 'Error'}]}]);
        }
    }
}));