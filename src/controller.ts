import { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient({ errorFormat: "pretty" });

export const getAllMessage = async (request: Request, response: Response) => {
  try {
    const get = await prisma.post.findMany();

    response
      .json({
        status: true,
        message: `Pesan berhasil ditampilkan`,
        data: get,
      })
      .status(200);
    return;
  } catch (error) {
    response
      .json({
        status: false,
        massage: `Terjadi sebuah kesalahan. ${error}`,
      })
      .status(400);
    return;
  }
};

export const newMessage = async (request: Request, response: Response) => {
  try {
    const { author, message } = request.body;
    const uuid = uuidv4();

    const post = await prisma.post.create({
      data: {
        author,
        message,
        uuid,
      },
    });

    response.json({
      status: true,
      message: `Pesan baru telah ditambahkan`,
      data: post,
    });
  } catch (error) {
    response
      .json({
        status: false,
        massage: `Terjadi sebuah kesalahan. ${error}`,
      })
      .status(400);
    return;
  }
};
