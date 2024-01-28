export interface portfolioData {
  id?: string;
  title: string;
  type: string;
  content: string;
  status: string;
  techstack: string[];
  features?: string[];
  imgUrl: string | null;
  startDate: Date;
  endDate: Date;
  githubLink: string | null;
  productLink: string | null;
  other?: string;
}

export interface error {
  error: {
    message: string;
  };
}
