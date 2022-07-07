import { prismaClient } from "../prisma";

class CreateMessageService {
  async execute(text: string, user_id: string) {
    const message = await prismaClient.message.create({
      data: {
        text,
        user_id,
      },
      include: {
        user: {
          select: {
            name: true,
            github_id: true,
          },
        },
      },
    });
    return message;
  }
}

export { CreateMessageService };
