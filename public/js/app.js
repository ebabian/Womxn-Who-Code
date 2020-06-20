const app = angular.module('BlogApp', [])

app.controller = ('BlogController', ['$http', function($http){
  this.createPost = {
    this.img = "",
    this.username = "",
    this.entry = ""
  }


  this.createBlog = () => {
    $http(
      {
        method: 'POST',
        url: '/wmxn',
        data: this.createPost
      }
    ).then((response) => {
      this.createPost = {}
    }, (error) => {
      console.log(error);
    })//.then ends
  }//createBlog ends


  this.getBlog = () => {
    $http(
      {
        method: 'GET',
        url: '/wmxn'
      }
    ).then((response) => {
      this.response = response.data
    }, error => {
      console.log(error);
    })//.then ends
  }//getBlog ends





this.getBlog()

}])
