
export function hello (request, response) {
  response.success("Hello world!");
}

export function recentUsers(request, response) {
  var query = new Parse.Query(Parse.User);
  query.descending("createdAt");
  query.find({
    success: function(users) {
      response.success(users);
    },
    error: function(error) {
        alert("Error: " + error.code + " " + error.message);
    }
  });
}

export function GameScore_alltime_high(request, response) {
  var query = new Parse.Query(Parse.User);
  query.find({
    success: function(users) {
      response.success(users);
    },
    error: function(error) {
        alert("Error: " + error.code + " " + error.message);
    }
  });
}

