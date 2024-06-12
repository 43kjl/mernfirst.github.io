const {z} = require("zod");

const signupSchema=z.object({
    username: z
    .string({required_error:"name is required"})
    .trim()
    .min(3,{message:"name must be of atleast 3 chars"})
    .max(250,{message:"name mustnot be more than 250 chars"}),

    email: z
    .string({required_error:"email is required"})
    .trim()
    .min(3,{message:"email must be of atleast 3 chars"})
    .max(250,{message:"email mustnot be more than 250 chars"}),

    password: z
    .string({required_error:"password is required"})
    .trim()
    .min(3,{message:"password must be of atleast 3 chars"})
    .max(250,{message:"password mustnot be more than 250 chars"}),

    phone: z
    .string({required_error:"phonenumber is required"})
    .trim()
    .min(3,{message:"phonenumber must be of atleast 10 chars"})
    .max(250,{message:"phonenumber mustnot be more than 250 chars"}),
});

module.exports=signupSchema;