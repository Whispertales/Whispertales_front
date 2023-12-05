import { getAllBooksFDB } from "./fetch";

export interface books {
   storyName: string;
   storyId: string;
}

export let booksShow: books[] = [
   {
      storyId: "653e9fb2e8ca16364a145320",
      storyName: "熊熊的冒險之旅"
   },
   {
      storyId: "653f68f9f31802b2f2fc92da",
      storyName: "公主大變身"
   },
];

export const Allbooks = async() => {
   const books:books[] = await getAllBooksFDB();
   // if (books){
   //    console.log(`books = ${JSON.stringify(books)}`);
   // }
   return books;
};
