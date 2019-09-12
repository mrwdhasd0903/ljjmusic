
var audios = document.getElementsByTagName("audio");
// 暂停函数
function pauseAll() {
    var self = this;
    [].forEach.call(audios, function (i) {
        // 将audios中其他的audio全部暂停
        i !== self && i.pause();
    })
}
// 给play事件绑定暂停函数
[].forEach.call(audios, function (i) {
    i.addEventListener("play", pauseAll.bind(i));
})


document.getElementById("TF").addEventListener("mouseover",lokTime);
document.getElementById("TF").addEventListener("mouseout",cleTime);

function cleTime(){
	document.getElementById("time").style.opacity="0";
	document.getElementById("time").style.height="0px";
	document.getElementById("time").style.animation=null;
}

function lokTime(){
	document.getElementById("time").style.opacity=".5";
	document.getElementById("time").style.height="400px";
	document.getElementById("time").style.animation="5s move2 infinite";
	startTime();
}

function startTime(){
			var today = new Date();
			var y = today.getFullYear();
			var mo = today.getMonth()+1;
			var d = today.getDate();
			var h = today.getHours();
			var m = today.getMinutes();
			var s = today.getSeconds();
			mo = checkTime(mo);
			d = checkTime(d);
			m = checkTime(m);
			s = checkTime(s);
			document.getElementById("time").innerHTML=y+"-"+mo+"-"+d+"</br>"+h+":"+m+":"+s;
			setTimeout(function(){
				startTime();
			},300);
		}
		
function checkTime(i){
			if (i<10) {
				i="0"+i;
			}
			return i;
		}