'use strict';

/**
 *  place controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::place.place', ({Strapi}) => ({
    async createMe(ctx) {
        try {
            const user = ctx.state.user;
            if(!user){
                return ctx.badRequest(401, [{ messages: "No athorized user found!"}]);
            }
            const result = await strapi.entityService.create('api::place.place', {
                data: {
                    title: ctx.request.body.tile,
                    lat: ctx.request.body.lat,
                    long: ctx.request.body.long,
                    gender: ctx.request.body.gender,
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
            const result = await strapi.db.query('api::place.place').findOne({
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