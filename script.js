function clock() {
    var i= new Date();
    var date= i.getDate();
    var month= i.getMonth()+1;
    var year= i.getFullYear();
    var day= i.getDay();
    var hour= i.getHours();
    var minute= i.getMinutes();
    var second= i.getSeconds();
    var meridiem= "AM";

    var days= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    day=days[day];
    
    if (hour == 0) {
        hour= 12;   
    }
    if(hour > 12){
        hour = hour - 12;
        meridiem = "PM";
    }

    hour= (hour < 10) ? "0" + hour : hour;
    minute= (minute < 10) ? "0" + minute : minute;
    second= (second < 10) ? "0" + second : second;

    document.getElementById("date").innerHTML= year+ "/" +month+ "/" +date+ " " +day;
    document.getElementById("time").innerHTML= hour+ ":" +minute+ ":" +second+ " " +meridiem;
    
    setInterval(clock, 1000);
}

clock();