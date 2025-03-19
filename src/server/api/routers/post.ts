import { TRPCError } from "@trpc/server";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  put: protectedProcedure
    .input(
      z.object({
        id: z.number().optional(),
        title: z.string(),
        body: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      if (input.id) {
        const existingPost = await ctx.db.blogPost.findUnique({
          where: { id: input.id },
        });

        if (!existingPost) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: `Not blog post with id ${input.id} was found.`,
          });
        }

        const updatedPost = await ctx.db.blogPost.update({
          where: { id: input.id },
          data: {
            title: input.title,
            body: input.body,
          },
        });

        return updatedPost;
      }

      const post = ctx.db.blogPost.create({
        data: {
          title: input.title,
          body: input.body,
          createdBy: { connect: { id: ctx.session.user.id } },
        },
      });

      return post;
    }),

  get: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      return await ctx.db.blogPost.findUnique({ where: { id: input.id } });
    }),

  getLatest: protectedProcedure.query(async ({ ctx }) => {
    const post = await ctx.db.blogPost.findFirst({
      orderBy: { createdAt: "desc" },
      where: { createdBy: { id: ctx.session.user.id } },
    });

    return post ?? null;
  }),
});
