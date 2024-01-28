import { portfolioData } from "@/lib/interfaces";
import { getPortfolio, getPortfolioById } from "@/lib/portfolios";
import { Metadata, ResolvingMetadata } from "next";
import "./../../../styles/project.scss";
import Image from "next/image";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const data = (await getPortfolioById(slug)) as portfolioData;
  const title = data.title;
  return {
    title: `My project ${title} -Wenjun`,
  };
}

export const dynamicParams = false;

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const portfolios = await getPortfolio();
  if (Array.isArray(portfolios)) {
    const data: portfolioData[] = portfolios;
    const slugs = data.map((e) => ({
      slug: e.id as string,
    }));
    return slugs;
  }
  // If no object is found, do not have page
  return [];
}

export default async function Page(params: any) {
  console.log(params);
  console.log(params.params.slug);
  const data = await getPortfolioById(params.params.slug);
  const portfolio = data as portfolioData | undefined;
  console.log(portfolio);
  return (
    <div className="w-full">
      <h2>Project Detail</h2>
      {portfolio && (
        <>
          <div className="portfolio-detail w-full">
            <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
              <main role="main" className="inner page-cover">
                <h1 className="cover-heading">{portfolio.title}</h1>
                {/* <p className="lead dates">dates</p> */}
                <p className="lead info mb-0">
                  Main TechStack: <br />
                  {portfolio.techstack.map((e) => (
                    <span key={e}>{e} </span>
                  ))}
                </p>
                <div className="flex">
                  {portfolio.imgUrl && (
                    <img
                      className="w-[30rem]"
                      src={portfolio.imgUrl}
                      alt={`${portfolio.title} photo`}
                    />
                  )}
                  <p className="lead">{portfolio.content}</p>
                </div>

                {portfolio.githubLink && (
                  <p className="lead">
                    <a
                      href={portfolio.githubLink}
                      target="_"
                      className="btn btn-lg btn-secondary"
                    >
                      Read more on Github
                    </a>
                  </p>
                )}
              </main>
            </div>
          </div>
        </>
      )}
    </div>
  );
}