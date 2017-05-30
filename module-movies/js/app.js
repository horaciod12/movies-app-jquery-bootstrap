var myMovies = (function(){

	
	var movies = [];
	var movies2 = [];

	var titleWithFormat;
	var paragraphWithFormat;

	$("#sort-btn").hide();



	function cleaner() {

		$('#my-form').trigger('reset');
		$('#title').focus();

	}



	function addMovie() {

		$("#show-btn").prop('disabled', false);

		$("#sort-btn").hide();

		function Movie() {

			this.title = "";
			this.description = "";

		}

		var movie = new Movie();

		movie.title = $('#title').val().toUpperCase();
		movie.description = $('#description').val();

		if(!movie.title || !movie.description) {
			
			return false;

		} else if(duplicated(movie.title) === true) {
				
				alert('Sorry, there is already a movie with that name');
				return true;

		} else {

			movies.push(movie);
			movies2.push(movie);
			cleaner();
			return true;
		}
		
		cleaner();

	}


	function duplicated(title) {
		for (var i = 0; i < movies2.length; i++) {
			if(movies2[i].title == title) {
				return true;
			}
		}
	}

					

	function showMovie() {

		if (movies.length > 0) {

			$("#sort-btn").show();
			$("#show-btn").prop('disabled', true);
			
			for (var i = 0; i < movies.length; i++) {

				titleWithFormat = document.createElement('h2');
				paragraphWithFormat = document.createElement('p');
				titleWithFormat.append(movies[i].title);
				paragraphWithFormat.append(movies[i].description);
				$('#movies').append(titleWithFormat);
				$('#movies').append(paragraphWithFormat);

			}
			
			movies = [];
			cleaner();
			return true;

		} else {

			$("#sort-btn").hide();
			cleaner();
			return false;

		}

		$("#sort-btn").hide();

	}



	function deleteMovie() {

		if(movies2.length > 0) {
			
			$("#movies").empty();
			
			movies2 = [];
			movies = [];
			return true;

		} else {

			return false;

		}

	}



	function sortMovies() {

		$("#sort-btn").hide();
		
		if(movies2.length > 0) {

			$("#movies").empty();

			movies2.sort(function(a, b) {
		      var nameA = a.title.toUpperCase();
		      var nameB = b.title.toUpperCase();
		      if (nameA < nameB) {
		        return -1;
		      }
		      if (nameA > nameB) {
		        return 1;
		      }
		      return 0;
		    });
		
			for (var i = 0; i < movies2.length; i++) {

				titleWithFormat = document.createElement('h2');
				paragraphWithFormat = document.createElement('p');
				titleWithFormat.append(movies2[i].title);
				paragraphWithFormat.append(movies2[i].description);
				$('#movies').append(titleWithFormat);
				$('#movies').append(paragraphWithFormat);

			}

			return true;

		} else {

			return false;

		}

		

	}


	
	return {

		add: function() {
			if (addMovie()) {
				console.log('Movie has been added properly....');
			} else {
				alert('Both fields must be completed. A new movie has NOT been added');
			}
		},

		show: function(){
			if (showMovie()) {
				console.log('Loading movies....');
			} else {
				alert('Must add a new movie at least');
			}
		},

		deleteM: function(){
			if (deleteMovie()) {
				console.log('Movies have been deleted....');
			} else {
				alert('No movies for removal');
			}
		},

		sort: function(){
			if (sortMovies()) {
				console.log('Movies have been sorted....');
			} else {
				alert('No new movies for sorting');
			}
		}
		
	};

})();



$('#add-btn').click(myMovies.add);
$('#show-btn').click(myMovies.show);
$('#delete-btn').click(myMovies.deleteM);
$('#sort-btn').click(myMovies.sort);