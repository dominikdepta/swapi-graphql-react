import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery } from "@apollo/client";
import { FilmRow } from "./FilmRow";
import { ALL_FILMS } from "./gql";
import { NoDataAlert } from "./NoDataAlert";
import { Spinner } from "@/components/ui/spinner";

export const AllFilms = () => {
  const { loading, data } = useQuery(ALL_FILMS);

  if (loading) return <Spinner message="Loading films..." />;
  if (!data?.allFilms?.films) return <NoDataAlert />;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Release date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.allFilms.films.map((film) => (
          <FilmRow film={film} />
        ))}
      </TableBody>
    </Table>
  );
};
