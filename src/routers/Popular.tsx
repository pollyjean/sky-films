import { APIResponse, getPopular } from "@/api";
import { useQuery } from "react-query";
import { ErrorPage, Loading } from ".";

const Popular = () => {
  const { isLoading, isError, data } = useQuery<APIResponse>({ queryKey: ["popular"], queryFn: getPopular });
  const page = data?.page;
  const movieList = data?.results;
  if (isError) return <ErrorPage />;
  return isLoading ? (
    <Loading />
  ) : (
    <>
      <ul>
        {movieList?.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <div>{page}</div>
    </>
  );
};

export default Popular;
