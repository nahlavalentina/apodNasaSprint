// const requisicao = new XMLHttpRequest();
const url = "https://api.nasa.gov/planetary/apod?date="
const apiKey = "&api_key=f5EySbgzwGEYPyNUCE5AM0MKzNo0CZHAOwhhsgBd"
const dateInput = $("#user-date");

$("#submit-btn").click(function (event) {
  event.preventDefault();
  $.ajax({
    url: `${url + dateInput.val() + apiKey}`,
    success: function (resposta) {
      $("#result-date").text(resposta.date);
      $("#title").text(resposta.title);
      $("#result-img").attr("src", `${resposta.hdurl}`);
      $("#explanation").text(resposta.explanation);
    },
  });
});

// const btn = document.querySelector('#submit-btn');

// btn.addEventListener('click', function(event){
//   event.preventDefault();
//   requisicao.open("GET", url + dateInput.value + apiKey);

//   requisicao.onload = function () {
//     if (requisicao.status == 200) {
//       const respostaReq = JSON.parse(requisicao.responseText);
//       document.querySelector("#result-date").textContent = respostaReq.date;
//       document.querySelector("#title").textContent = respostaReq.title;
//       document.querySelector("#result-img").src = respostaReq.hdurl;
//       document.querySelector("#explanation").textContent = respostaReq.explanation;
//     } else {
//       console.log(requisicao);
//     }
//   };

//   requisicao.send();
// })

