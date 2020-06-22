const app = angular.module('BlogApp', [])

app.controller('BlogController', ['$http', function($http){
    this.username = ""
    this.img = ""
    this.entry = ""
    this.likes = 0;
    this.date = '' //Elektra will add a date function
    this.title = 'Wmxn Who Code'
    this.indexOfEditFormToShow = null;
    this.updatedEntry = '';
    const controller = this

//like button function
this.addLikes = function(blog) {
  $http(
    {
      method: 'PUT',
      url: '/wmxn/' + blog._id,
      data: {
        likes: blog.likes += 1
      }
    }
  ).then(
    function(response){
      console.log(response);
      controller.getBlog()

    },
    function(error){
      console.log(error);
    }
  )
}


//delete function
this.deleteBlog = function(blog) {
  $http(
    {
      method: 'DELETE',
      url: '/wmxn/' + blog._id
    }
  ).then(
    function(response){
      controller.getBlog();

  }, function(error) {
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
    }).then(
      function(response) {
        controller.getBlog()
        // console.log(response);

    }, function(error) {
      console.log(error);
    })
    this.indexOfEditFormToShow = null;
  }

//
//
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
          likes: this.likes,
          date: Date()
      }
    }).then((response) => {
      this.getBlog() // call get function
    }, (error) => {
      console.log(error);
    })//.then ends
    //this clears the input fields in create form
    this.username = ''
    this.img = ''
    this.entry = ''
    this.date = ''
  }//createBlog ends


  // get function
  this.getBlog = function() {
    $http(
      {
        method: 'GET',
        url: '/wmxn'
      }
    ).then(
      function(response) {
        for(const blog in response.data){
          response.data[blog].date = response.data[blog].date.replace(/\d\d:.*/, '')
        }
      //blog is term we'll use to store the data
      controller.blog = response.data
      console.log(controller.blog);

    }, function(error){
      console.log(error);
    })//.then ends
  }//getBlog ends


// call get function on page load
this.getBlog()

}])
