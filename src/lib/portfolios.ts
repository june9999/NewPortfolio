"use server";
import prisma from "./db";
import { error, portfolioData } from "./interfaces";

export const createPortfolio = async (portfolio: portfolioData) => {
  try {
    const res = await prisma.portfolio.create({
      data: portfolio,
    });
    console.log("successfully created data");
    // Return response to action
    return {
      message: "work sucssfully created in db",
    };
  } catch (error) {
    console.log(error);
    // from serve component to client component, only plain text is allowed
    return {
      error: { message: "Wrong Connection! Please try it again later" },
    };
  }
};

export const getPortfolio = async (): Promise<portfolioData[] | error> => {
  try {
    const res = await prisma.portfolio.findMany({
      orderBy: {
        endDate: "desc",
      },
    });
    const data: portfolioData[] = res;
    console.log("successfully find data");
    // Return response to action
    return data;
  } catch (error) {
    console.log(error);
    return {
      error: { message: "Wrong Connection! Please try it again later" },
    };
  }
};

export const getPortfolioById = async (
  slug: string
): Promise<portfolioData | error> => {
  console.log("id");
  console.log(slug);
  try {
    const res = await prisma.portfolio.findUnique({
      where: {
        id: slug,
      },
    });
    if (!res) {
      return {
        error: { message: "No data" },
      };
    }
    console.log("find it");
    return res;
  } catch (error) {
    console.log(error);
    // Return response to action
    return {
      error: { message: "Wrong Connection! Please try it again later" },
    };
  }
};
