$(document).ready(function (){
    // reading the typed data to the engine
    $('#search_id').on('keyup', function (e){

       let username = e.target.value;
       // making request to the github api
        $.ajax({
        url:'https://api.github.com/users/'+username,

        }).done(function (user){
            $('#profile').html(`
            <div class="panel panel-default">
    <div class="panel-heading">
    <h3 class="panel-title">${user.name}</h3>
    </div>
    <div class="panel-body">
    <div class="row">
    <div class="col-md-3">
    <img style="100%" src="${user.avatar_url}" class="img-thumbnail" alt="profilepic">
    <a target="_blank" class="btn btn-success btn-block" href="${user.html_url}">view profile</a>
    </div>
    <div class="col-md-9">
    <div>
    <h3>name: ${user.name}</h3>
    </div>
    <div><h3>public repos: ${user.public_repos}</h3></div>
    <div><h3>public gists: ${user.public_gists}</h3></div>
    <div><h3>followers: ${user.followers}</h3></div>
    <div><h3>following: ${user.following}</h3></div>
  
    </div>
    </div>
    </div>
    </div>
    </div>
            
            `);
        });

    });
});