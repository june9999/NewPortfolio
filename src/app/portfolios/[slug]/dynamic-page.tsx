// try to do dynamic ?
// import { useDatabase } from "@/lib/hooks";
// import { portfolioData } from "@/lib/interfaces";

// export default async function page({ params }) {
//   const { id } = params;
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const { data, error, isLoading } = useDatabase(getPortfolioById, id);
//   const portfolio: portfolioData = data;
//   return (
//     <div>
//       {portfolio && (
//         <div>
//           {portfolio.id}
//           {portfolio.title}
//           {portfolio.content}
//         </div>
//       )}
//       {isLoading && <div>loading...</div>}
//       {/* when we got specfic error=> should return unfound component */}
//       {error && <div>{error}</div>}
//     </div>
//   );
// }
