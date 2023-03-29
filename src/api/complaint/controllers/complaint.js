'use strict';

/**
 *  complaint controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::complaint.complaint', ({Strapi}) => ({
    async createMe(ctx) {
        try {
            const user = ctx.state.user;
            if(!user){
                return ctx.badRequest(401, [{ messages: "No athorized user found!"}]);
            }
            const result = await strapi.entityService.create('api::complaint.complaint', {
                data: {
                    type: ctx.request.body.type,
                    email: user.email,
                    desc: ctx.request.body.desc,
                    nivel: ctx.request.body.nivel,

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
            const result = await strapi.db.query('api::complaint.complaint').findOne({
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