export type Author = {
  name: string;
};

export type Book = {
  title: string;
  imageUrl: string;
  authors: Author[];
};

export type Shelf = {
  name: string;
  books: Book[];
};
