import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
import { Col, Row } from "reactstrap";
import PortfolioForm from "./components/PortfolioForm";

export default withPageAuthRequired(
  async function page() {
    return (
      <Row>
        <Col md="8">
          <PortfolioForm />
        </Col>
      </Row>
    );
  },
  { returnTo: "/portfolios/create" }
);
