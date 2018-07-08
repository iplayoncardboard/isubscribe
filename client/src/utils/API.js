import axios from "axios";

export default {
  // Gets all books
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the book with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Adds a user to the db
  addUser: (userData) => {
    return axios.post('/api/users',userData);
  },
  //Add a subscription to the database
  addSubscription: (subscriptionData) => {
    return axios.post('/api/subscriptions',subscriptionData);
  },
  getSubscriptions: function() {
    return axios.get("/api/subscriptions/");
  },

  //ADD FOR EACH CATEGORY
  getMusic: function() { 
    return axios.get("/api/subscriptions/music/");
  },
  getFood: function() { 
    return axios.get("/api/subscriptions/food/");
  },
  getFashion: function() { 
    return axios.get("/api/subscriptions/fashion/");
  },
  getVideo: function() { 
    return axios.get("/api/subscriptions/video/");
  },

  // Gets the book with the given id
  getSubscription: function(id) {
    return axios.get("/api/subscriptions/" + id);
  },
  getCategories: () => {
    return axios.get('/api/categories/');
  }
  
  // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
};
