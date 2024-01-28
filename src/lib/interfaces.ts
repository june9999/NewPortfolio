export interface portfolioData {
  id?: string;
  title: string;
  type: string;
  content: string;
  status: string;
  techstack: string[];
  imgUrl: string | null;
  startDate: Date;
  endDate: Date;
  githubLink: string | null;
}

export interface error {
  error: {
    message: string;
  };
}
