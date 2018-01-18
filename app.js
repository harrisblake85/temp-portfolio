const app = angular.module("PortfolioApp",[]);

app.controller("MainController",["$http",function($http) {
  this.hello = "hello"
  this.projects = [
  {
    name : "ToolieBox",
    roles: "Backend, Tool & Tag Page",
    img:"images/tooliebox.png",
    desc:"Find code snippets by language or technology!",
    technologies :["Ruby on Rails","Angular","Angular Materials","JS","HTML","CSS"],
    live_link:"https://tooliebox.herokuapp.com/",
    live_repo:"https://github.com/tg970/tooliebox_frontend",
    backend_link:"https://tooliebox.herokuapp.com/",
    backend_repo:"https://github.com/harrisblake85/tooliebox_api",
    sep_backend:true
  },
  {
    name : "Profile Games",
    roles: "Full Stack, Game",
    img:"images/profile-games.png",
    desc:"Play a Multiplayer Game With Your Friends",
    technologies :["Node.js","Express.js","MongoDB","Mongoose","Angular","JS","HTML","CSS"],
    live_link:"https://profile-games.herokuapp.com/",
    live_repo:"https://github.com/harrisblake85/profile-games",
    sep_backend:false
  },
  {
    name : "Finish Stories",
    roles: "Full Stack Solo",
    img:"images/finish-stories.png",
    desc:"A Back and Forth Story Telling App!",
    technologies :["Node.js","Express.js","MongoDB","Mongoose","EJS","JS","HTML","CSS","JQuery"],
    live_link:"https://finish-stories.herokuapp.com/threads",
    live_repo:"https://github.com/harrisblake85/Finish-Stories",
    sep_backend:false
  },
  {
    name : "Economics The Game",
    roles: "Front End Solo",
    img:"images/thegame.png",
    desc:"Compete Against The AI In A Game To Become Rich",
    technologies :["JS","HTML","CSS","JQuery"],
    live_link:"https://harrisblake85.github.io/Economics_The_Game/",
    live_repo:"https://github.com/harrisblake85/Economics_The_Game",
    sep_backend:false
  }
];

// end controller
}]);
