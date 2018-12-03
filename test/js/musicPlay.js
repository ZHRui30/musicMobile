var songId=window.location.href.split('=')[1];
	$.ajax({
		type:'GET',
		url:'http://www.wwtliu.com/sxtstu/music/baidu/play.php?mid='+songId,
		success:function(res){
			console.log(res)
			var songinfo=res.songinfo;
			$('.headNav').html(songinfo.album_title);
			document.title=songinfo.album_title;
			$('.songAuthor').html(songinfo.author);
			$('.songImgBox img').attr('src',songinfo.pic_big)
			$('.songPlayBox audio').attr('src',res.bitrate.file_link)
			var audioPlay=document.querySelector('.songPlayBox audio');
			audioPlay.oncanplay=function(){
				var endTime=audioPlay.duration;
				$('.endTime').html(times(endTime))
			}
			var playBtn=document.querySelector('.playBtn');
			if(audioPlay.paused){
				$('.playBtn').html('&#xe615;');
			}
			playBtn.onclick=function(){
				if(audioPlay.paused){
					audioPlay.play();
					$('.playBtn').html('&#xe7af;');
				}else{
					audioPlay.pause();
					$('.playBtn').html('&#xe615;');
					// getLrc(times(audioPlay.currentTime));
				}
			}
			audioPlay.ontimeupdate=function(){
				$('.nowTime').html(times(audioPlay.currentTime));
				console.log(audioPlay.currentTime)
				var nowTimer=times(audioPlay.currentTime);
				getLrcdata(nowTimer);
				var D_value=audioPlay.currentTime/audioPlay.duration*100;
				$('.nowProgress').css('width',D_value+'%');
				$('.radius').css('left',audioPlay.currentTime/37.5+'rem');
			}

			function times(timeTemp){
				var m=Math.floor(timeTemp/60);
				var s=Math.floor(timeTemp%60);
				m=(m>=10)?m:'0'+m;
				s=(s>=10)?s:'0'+s;
				return m+':'+s;
			}

			function getLrcdata(timerTemp){
				var timer=timerTemp;
			 	$.ajax({
					type:'GET',
					url:'http://www.wwtliu.com/sxtstu/music/baidu/lrc.php?mid='+songId,
						success:function(res){
						// console.log(res);
						// console.log(timer);
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
						}
						for(var k=0;k<timerArr.length;k++){
							
							if(timerArr[k]==timer){
								console.log(lrcArr[k]);
								$('<p>'+lrcArr[k]+'</p>').appendTo('.songLyrics')
							}
						}
					}
				})	
 			}
		}
	})
