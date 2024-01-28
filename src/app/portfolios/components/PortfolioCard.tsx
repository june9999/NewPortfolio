import { portfolioData } from "@/lib/interfaces";
import { Card, CardHeader, CardBody, CardText, CardTitle } from "reactstrap";

const PortfolioCard: React.FC<{ portfolio: portfolioData }> = ({
  portfolio,
}) => (
  <Card className=" portfolio-card w-[full] h-auto ">
    <CardHeader className="portfolio-card-header">{portfolio.type}</CardHeader>
    <CardBody className="md:h-[17rem]">
      <CardTitle className="portfolio-card-title">{portfolio.title}</CardTitle>
      <CardText className="portfolio-card-text">
        Description: <br />
        {portfolio.content}
      </CardText>

      <span className="">
        Status:
        {portfolio.status}
        <br />
        Last Update Date:
        {portfolio.endDate.getMonth() +
          1 +
          "-" +
          portfolio.endDate.getFullYear()}
      </span>
    </CardBody>
  </Card>
);

export default PortfolioCard;
