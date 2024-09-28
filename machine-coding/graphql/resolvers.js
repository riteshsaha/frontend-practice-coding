const data = {
    authors: [
      { id: "1", name: "Amish Tripathi", bookIds: ["101", "102", "103", "104"] },
      { id: "2", name: "Monika Halan", bookIds: ["201"] },
    ],
    books: [
      { id: "101", title: "Ram - Scion of Ikshvaku", publishedYear: 2020, authorId: "1" },
      { id: "102", title: "Sita - Warrior of Mithila", publishedYear: 2021, authorId: "1" },
      { id: "103", title: "Ravan - Enemy of Aryavarta", publishedYear: 2022, authorId: "1" },
       { id: "201", title: "Let's Talk Mutual Funds", publishedYear: 2021, authorId: "2" },
    ],
  };
  

export const resolvers = {
    Book: {
        author: (root, args, context, info) => {
            console.log("Root : " + JSON.stringify(root));
            console.log("Arguments : " + JSON.stringify(args));
            console.log("Context: " + JSON.stringify(context));
           // console.log("Information: " + JSON.stringify(info));

            return data.authors.find(authorDetail => authorDetail.id === root.authorId);
        }
    },

    Author: {
        books: (root, args, context, info) => {
            console.log("Root : " + JSON.stringify(root));
            console.log("Arguments : " + JSON.stringify(args));
            console.log("Context: " + JSON.stringify(context));
            // console.log("Information: " + JSON.stringify(info));

            return data.books.filter(book => root.bookIds.includes(book.id));
        }
    },
    Query: {
        authors: (root, args, context, info) => {
            return data.authors;
        },
        books: (root, args, context, info) => {
            return data.books;
        }
    },
    Mutation: {
        addBook: (root, args, context, info) => {
            console.log(args);
            const newBook = { ...args, id: data.books.length + 1 };
            data.books.push(newBook);
            return newBook;
        }
    }
}