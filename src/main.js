import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $('#getGIF').click(function() {
    const query = $('#searchTerm').val();
    $('#searchTerm').val("");

    let request = new XMLHttpRequest();
    const url=`https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=pg-13&lang=en`;
    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      $('.showGIF').html(`Here's a ${query} GIF:<br/> <img src="${response.data[0].images.original.url}" />`);
    }
  });
});


//
// var myArray = `${response.data[0]}`;
// var myIndex = 1;
// var print = document.getElementById('print');

// print.innerHTML = myArray[0]; //Print first value of array right away.

// function nextElement() {
//   if (myIndex < myArray.length) {
//     print.innerHTML = myArray[myIndex];
//     myIndex++;
//   }
//   else {
//     myIndex = 0;   
//   }
// };

{/* <p>The color is <span id="print"></span>.</p>  */}

{/* <a id="click" href="#" onclick="nextElement();">Click</a> */}