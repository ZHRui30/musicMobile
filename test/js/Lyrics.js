 /*function getLrc(timer){
 	console.log(timer);
 	$.ajax({
		type:'GET',
		url:'http://www.wwtliu.com/sxtstu/music/baidu/lrc.php?mid='+songId,
			success:function(res,timer){
			console.log(res);
			var lyric=res.lrcContent.split('\r\n');
			// console.log(lyric);
			var timerArr=[];
			var lrcArr=[];
			
			for(var i=0;i<lyric.length;i++){
				// console.log(lyric[i])
				var lyricStr=lyric[i];
				var starIndex=lyricStr.indexOf('[');
				var endIndex=lyricStr.indexOf(']');
				var timestr=lyricStr.substring(starIndex,endIndex).slice(1,6);
				var lrcStr=lyricStr.slice(endIndex+1);
				timerArr.push(timestr)
				lrcArr.push(lrcStr)
				/*console.log(timestr);
				console.log(lrcStr);*/
			// }
			/*for(var k=0;k<timerArr.length;k++){
				
				if(lrcArr[k]==$('.nowTime').html()){
					console.log(timerArr[k])
					// $(lrcArr[k]).appendTo('.songLyrics')
				}
			}
		}
	})	
 }*/
       