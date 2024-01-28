"use client";
import { useDatabase } from "@/lib/hooks";
import { portfolioData } from "@/lib/interfaces";
import { getPortfolio } from "@/lib/portfolios";
import { Col, Row } from "reactstrap";
import Link from "next/link";
import PortfolioCard from "./components/PortfolioCard";
import "../../styles/portfolio.scss";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error, isLoading } = useDatabase(getPortfolio);

  const portfolios: portfolioData[] = data;
  console.log(portfolios);
  return (
    <div className="portfolio-page flex gap-[2rem] flex-wrap">
      {portfolios &&
        portfolios.map((e: portfolioData) => (
          <Row key={e.id} className="">
            <Link href={`portfolios/${e.id}`} className="no-underline">
              <Col key={e.id} className="w-[17rem] md:w-[30rem] ">
                <PortfolioCard portfolio={e} />
              </Col>
            </Link>
          </Row>
        ))}
      {isLoading && <div>loading...</div>}
      {error && <div>{error}</div>}
    </div>
  );
};

export default page;
