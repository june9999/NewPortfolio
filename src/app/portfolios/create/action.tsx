"use server";
import { portfolioData } from "@/lib/interfaces";
import { createPortfolio } from "@/lib/portfolios";

export const submitPortfolioForm = (formdata: FormData) => {
  const today = Date.now;
  const rawformdata: portfolioData = {
    title: (formdata.get("title") as string) || "fs",
    type: (formdata.get("type") as string) || "fs",
    content: (formdata.get("content") as string) || "fs",
    status: (formdata.get("status") as string) || "fs",
    techstack: ([formdata.get("techstack")] as string[]) || ["ds"],
    imgUrl: "img",
    startDate: new Date(),
    endDate: new Date(),
    githubLink: "github",
  };
  createPortfolio(rawformdata);
};
