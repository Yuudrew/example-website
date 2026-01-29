import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const sendInquiry = mutation({
    args: {
        name: v.string(),
        email: v.string(),
        message: v.string(),
    },
    returns: v.null(),
    handler: async (ctx, args) => {
        await ctx.db.insert("inquiries", {
            name: args.name,
            email: args.email,
            message: args.message,
        });
        return null;
    },
});
