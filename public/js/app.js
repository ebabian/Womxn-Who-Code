const app = angular.module('BlogApp', [])

app.controller('BlogController', ['$http', function($http){
    this.username = ""
    this.img = ""
    this.entry = ""
    this.likes = 0 //Elektra will add a like function
    this.date = '' //Elektra will add a date function

//delete function
this.deleteBlog = function() {
  $http(
    {
      method: 'DELETE',
      url: '/wmxn/' + blog._id
    }
  ).then((response) => {
    console.log(response.data);
    this.getBlog();
  }, error => {
    console.log(error);
  })
}

//edit function
this.editBlog = function(blog){
  $http(
    {
      method: 'PUT',
      url: '/wmxn/' + blog._id,
      data: {
        entry: this.updatedEntry
      }
    }).then((response) => {
      this.getBlog()
    }, (error) => {
      console.log(error);
    })
  }



// create function
  this.createBlog = function() {
    $http(
      {
        method: 'POST',
        url: '/wmxn',
        data: {
          username: this.username,
          img: this.img,
          entry: this.entry,
      }
    ).then((response) => {
      this.getBlog() // call get function
    }, (error) => {
      console.log(error);
    })//.then ends
    //this clears the input fields in create form
    this.username = ''
    this.img = ''
    this.entry = ''
  }//createBlog ends


  // get function
  this.getBlog = function() {
    $http(
      {
        method: 'GET',
        url: '/wmxn'
      }
    ).then((response) => {
      //this.blog is term we'll use to store the data
      this.blog = response.data
      console.log(this.blog);
    }, error => {
      console.log(error);
    })//.then ends
  }//getBlog ends




// call get function on page load
this.getBlog()

}])
