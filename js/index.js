console.log("USA,CANADA");

var send = document.getElementById('send');

send.addEventListener('click', buttonClickHandeler);

function buttonClickHandeler() {
  console.log("CANADA");
  const xhr = new XMLHttpRequest();

  // GET
  const urlGet = 'https://corona.lmao.ninja/v3/covid-19/all';

  const urlPost = 'http://dummy.restapiexample.com/api/v1/create';

  // Setup Request
  xhr.open('GET', urlGet, true);

  // xhr.open('POST', urlPost, true);
  // xhr.getResponseHeader('content-type', 'application/json');

  xhr.onprogress = function() {
    console.log("Put here loadingBar(spinner) if you want. \nAfter this result will show.");
  }

  xhr.onload = function() {
    if (this.status === 200) {
      console.log(this.responseText);
      try {
        const obj = JSON.parse(this.responseText);
        console.log(obj);
        // console.log(`${this.status},  ${this.statusText}`);
        // alert(this.responseText);
      } catch (e) {
        console.warn(e);
      }
    } else {
      console.warn("Error AALA AHE");
    }
  }

  // var param = `{"name":"Software Engineer","salary":"786","age":"10"}`;
  // xhr.send(param);
  xhr.send();
}














var receive = document.getElementById('receive');

receive.addEventListener('click', popHandeler);

function popHandeler() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://corona.lmao.ninja/v3/covid-19/countries", true);

  xhr.onload = function(){
    if(this.status === 200){
      var obj = JSON.parse(this.responseText);
      console.log(obj);
      var list = document.getElementById('list');
      let str = "";
      for (key in obj){
        str += `<li>${obj[key].country}, ${obj[key].cases} , ${obj[key].undefined}, ${obj[key].countryInfo.iso3}</li>`;
      }
      list.innerHTML = str;
    } else {
      console.warn(this.statusText);
    }
  }

  xhr.send();
}
