import { Film } from "@/__generated__/graphql";
import { TableCell, TableRow } from "@/components/ui/table";

export interface FilmRowProps {
  film: Film | null;
}

export const FilmRow = ({ film }: FilmRowProps) => {
  if (!film) return null;

  return (
    <TableRow key={film.id}>
      <TableCell>{film.title}</TableCell>
      <TableCell>{film.releaseDate}</TableCell>
    </TableRow>
  );
};
