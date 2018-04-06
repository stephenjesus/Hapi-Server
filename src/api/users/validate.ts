import * as Joi from 'joi';

export default {
    getuserbyid: {
        params: {
            rollno: Joi.string().required(),
        }
    },
    getuserlist: {
        query: { page: Joi.number().required().max(1),
            datalimit : Joi.number().required().min(2)
        }
    },
    Createuser: {
        payload : {
            Name: Joi.string().required(),
            rollno: Joi.string().required().min(1),
            mobilenumber: Joi.number().required().min(10)
        }
    },
    searchuser: {
        payload : Joi.string().optional(),
    },
    updateById: {
        // params: {
        //     rollno: Joi.string().required(),
        // },
        payload: {
            mobilenumber: Joi.number()
                .min(10)
                .optional(),
            Name: Joi.string().optional(),
            rollno: Joi.string().required().min(1),
        },
    },
    deleteById: {
        params: {
            id: Joi.string().required(),
        },
    },
};
