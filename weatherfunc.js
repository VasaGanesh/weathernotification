function weather()
{
  var request=new XMLHttpRequest();
  var city=document.getElementById("cid").value;
  console.log(city)
  var apikey='c1e23d032ec7b3b89e8e55df332b5414';
  let url=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apikey}`;
  request.open("GET",url,true);
  request.send()
  let table=document.createElement("TABLE")
  request.onload=function()
  {
      table.border="1"
      let row=table.insertRow(-1);
      let sno=row.insertCell(-1);
      let temperature=row.insertCell(-1);
      let date=row.insertCell(-1)
      let time=row.insertCell(-1)
      temperature.innerHTML = "Temperature"
        date.innerHTML = "Date"
        time.innerHTML = "Time"
        sno.innerHTML = "S.No"
        table.border = "1"
        let result = JSON.parse(this.response);
      result.list.forEach(day=> {
        let date = day.dt_txt.split(" ");
        let row = table.insertRow(-1);
        let sno = row.insertCell(-1)
        let temperatureDisplay = row.insertCell(-1)
        let dateDisplay = row.insertCell(-1)
        let timeDisplay = row.insertCell(-1)
        timeDisplay.innerHTML = date[1]
        sno.innerHTML = result.list.indexOf(day)+1
                temperatureDisplay.innerHTML=day.main.temp
                dateDisplay.innerHTML = date[0]
      });
  }
  dispTable = document.getElementById("data")
  dispTable.append(table)
}
