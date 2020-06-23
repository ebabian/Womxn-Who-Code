const app = angular.module('BlogApp', [])

app.controller('BlogController', ['$http', function($http){
    this.username = ""
    this.user = ""
    this.img = ""
    this.entry = ""
    this.snippet = ""
    this.likes = 0;
    this.comment = ""
    this.date = '' //Elektra will add a date function
    this.title = `Coder's Choice`
    this.indexOfEditFormToShow = null;
    this.indexOfSEdditFormToShow = null;
    this.indexOfCreateFormToShow = null;
    this.indexOfSnippetFormToShow = null;
    this.updatedSnippet = ''
    this.updatedEntry = '';
    const controller = this

//==================================
//        Snippet Functions       //
//==================================
this.snippetLikes = function(snippet) {
  $http(
    {
      method: 'PUT',
      url: '/snippet/' + snippet._id,
      data: {
        likes: snippet.likes += 1
      }
    }
  ).then(
    function(response){
      console.log(response);
      controller.getSnippet()

    },
    function(error){
      console.log(error);
    }
  )
}


//delete blog function
this.deleteSnippet = function(snippet) {
  $http(
    {
      method: 'DELETE',
      url: '/snippet/' + snippet._id
    }
  ).then(
    function(response){
      controller.getSnippet();
      console.log(response);

  }, function(error) {
      console.log(error);
  })
}

//edit blog function
this.editSnippet = function(snippet){
  $http(
    {
      method: 'PUT',
      url: '/snippet/' + snippet._id,
      data: {
        snippet: this.updatedSnippet
      }
    }).then(
      function(response) {
        controller.getSnippet()
        // console.log(response);

    }, function(error) {
      console.log(error);
    })
    this.indexOfSEdditFormToShow = null;
  }

// create blog function
  this.createSnippet = function() {
    $http(
      {
        method: 'POST',
        url: '/snippet',
        data: {
          user: this.user,
          snippet: this.snippet,
          likes: this.likes,
          date: Date()
      }
    }).then((response) => {
      this.getSnippet() // call get function
    }, (error) => {
      console.log(error);
    })//.then ends
    //this clears the input fields in create form
    this.user = ''
    this.snippet = ''
    this.date = ''
  }//createBlog ends


  // get blog function
  this.getSnippet = function() {
    $http(
      {
        method: 'GET',
        url: '/snippet'
      }
    ).then(
      function(response) {
        for(const blog in response.data){
          response.data[blog].date = response.data[blog].date.replace(/\d\d:.*/, '')
        }
      //blog is term we'll use to store the data
      controller.snippet = response.data

      // console.log(controller.snippet);

    }, function(error){
      console.log(error);
    })//.then ends
  }//getSnippet ends




//==================================
//          Blog functions        //
//==================================

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


//delete blog function
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

//edit blog function
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

// create blog function
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
          comment: this.comment,
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
    this.comment = ''
    this.date = ''
    // this.indexOfCreateFormToShow = null;
  }//createBlog ends


  // get blog function
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
this.getSnippet()
}])
