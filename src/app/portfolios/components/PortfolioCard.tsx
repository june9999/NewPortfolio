import { portfolioData } from "@/lib/interfaces";
import { Card, CardHeader, CardBody, CardText, CardTitle } from "reactstrap";

const PortfolioCard: React.FC<{ portfolio: portfolioData }> = ({
  portfolio,
}) => (
  <Card className="portfolio-card">
    <CardHeader className="portfolio-card-header">{portfolio.type}</CardHeader>
    <CardBody>
      <CardTitle className="portfolio-card-title">{portfolio.title}</CardTitle>
      <CardText className="portfolio-card-text">
        Description: <br />
        {portfolio.content}
      </CardText>
      <span className="">
        Created Date:
        {portfolio.endDate.getMonth() +
          2 +
          "-" +
          portfolio.endDate.getFullYear()}
      </span>
    </CardBody>
  </Card>
);

export default PortfolioCard;
