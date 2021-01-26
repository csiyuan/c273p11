$(document).ready(function () {
    $("#btnSearch").click(function () {
        var title = $("#titlee").val();
        var year = $("#yearr").val();
        var plot = $("#plott").val();
        $.ajax({
            type: "GET",
            url: "http://www.omdbapi.com/",
            cache: false,
            dataType: "jsonp",
            data: "t=" + title + "&y=" + year + "&plot=" + plot + "&apikey=19c0fc0b",
            success: function (response) {
//                alert(JSON.stringify(response));
                var movies = JSON.parse(localStorage.getItem("movies"));
                if (movies === null) {
                    movies = [];
                }
                var movieReview = {
                    title: response.Title,
                    plot: response.Plot
                };
                movies.push(movieReview);
                localStorage.setItem("movies", JSON.stringify(movies));

                var message = "<b>Title: </b>" + response.Title + "</br>"
                        + "<b>Released: </b>" + response.Released + "</br>"
                        + "<b>Runtime: </b>" + response.Runtime + "</br>"
                        + "<b>Genre: </b>" + response.Genre + "</br>"
                        + "<b>Actors: </b>" + response.Actors + "</br>"
                        + "<b>Plot: </b>" + response.Plot + "</br>";
                $("#contents").html(message);
                var image = "<img src= " + response.Poster + "alt='poster'>";
                $("#poster").html(image);
            },
            error: function (obj, textStatus, errorThrown) {
                alert("Error " + textStatus + ": " + errorThrown);
                console.log("Error " + textStatus + ": " + errorThrown);
            }
        });

    });
});


