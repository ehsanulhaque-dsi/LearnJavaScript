var textElement = document.getElementById("getText");
var usersElement = document.getElementById("getUsers");
var postElement = document.getElementById("getPosts");
var outPut = document.getElementById("output");
var usersOutput = document.getElementById("usersOutput");

textElement.addEventListener("click",getText);
usersElement.addEventListener("click",getUsers);
postElement.addEventListener("click",getPosts);

function getText() {
    fetch('sample.txt')
    .then((txt) => txt.text())
    .then((data) => {
        outPut.innerHTML = data;
    })
}

function getUsersTest() {
    fetch('users.json')
    .then((usr) => usr.json())
    .then((data) => {
        let usersOutput = '<h2 class="mb-4">Users</h2>';
        data.forEach(user => {
            usersOutput += `
            <ul class="list-group mb-3">
                <li class="list-group-item">ID: ${user.id} </li>
                <li class="list-group-item">Name: ${user.name} </li>
                <li class="list-group-item">Email: ${user.email} </li>
            </ul>`;
        });
        usersOutput.innerHTML = usersOutput;
    })

}

function getUsers(){
    fetch('users.json')
    .then((res) => res.json())
    .then((data) => {
      let output = '<h2 class="mb-4">Users</h2>';
      data.forEach(function(user){
        if(user.name == "Glenn"){
            return;
        }
        output += `
          <ul class="list-group mb-3">
            <li class="list-group-item">ID: ${user.id}</li>
            <li class="list-group-item">Name: ${user.name}</li>
            <li class="list-group-item">Email: ${user.email}</li>
          </ul>
        `;
      });
      document.getElementById('output').innerHTML = output;
    })
  }

  function getPosts() {
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then((pst) => pst.json())
      .then((data) => {
          let postOutput = '<h2 style="color: black" class="mb-4">Posts</h2>';
          data.forEach(function(post) {
              postOutput += `
                <div class="card card-body mb-3">
                    <h4 style="color: green">${post.title}</h4>
                    <p >${post.body}</p>
                    <form action="" class="form-inline">
                        <div class="container">
                            <button type="button" class="btn btn-outline-dark btn-sm">Like</button>
                            <button type="button" class="btn btn-outline-dark btn-sm">Comment</button>
                            <input type="text" style="height: 33px; width: 300px" class="form-control" placeholder="Comment">
                        </div>
                    </form>
                </div>
                `;
          });
          document.getElementById("output").innerHTML = postOutput;
      })
  }

