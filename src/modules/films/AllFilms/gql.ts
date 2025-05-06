import { gql } from "@/__generated__";

export const ALL_FILMS = gql(`
  query AllFilms {
    allFilms {
      films {
        id
        title
        releaseDate
      }
    }
  }
`);
