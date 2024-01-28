"use server";
import { portfolioData } from "@/lib/interfaces";
import { createPortfolio } from "@/lib/portfolios";

export const submitPortfolioForm = (formdata: FormData) => {
  const today = Date.now;
  const rawformdata: portfolioData = {
    title: (formdata.get("title") as string) || "undefined",
    type: (formdata.get("type") as string) || "undefined",
    content: (formdata.get("content") as string) || "undefined",
    status: (formdata.get("status") as string) || "undefined",
    techstack: ([formdata.get("techstack")] as string[]) || ["undefined"],
    imgUrl: (formdata.get("imgUrl") as string) || "undefined",
    startDate: new Date(),
    endDate: new Date(),
    githubLink: formdata.get("githubLink") as string,
    productLink: (formdata.get("productLink") as string) || "undefined",
    other: formdata.get("other") as string,
  };
  createPortfolio(rawformdata);
};
