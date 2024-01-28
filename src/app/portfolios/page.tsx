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
    <div className="portfolio-page w-full">
      {portfolios &&
        portfolios.map((e: portfolioData) => (
          <Row key={e.id}>
            <Link href={`portfolios/${e.id}`}>
              <Col key={e.id} md="4">
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
