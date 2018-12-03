var musicType=window.location.href.split('=')[1];
	function getMusicList(type,count,offset){
		$.ajax({
			type:'GET',
			url:'http://www.wwtliu.com/sxtstu/music/baidu/list.php?type='+type+'&count='+count+'&offset='+offset,
			success:function(res){
				console.log(res)
				$('.titleBox img').attr('src',res.billboard.pic_s210)
				document.title=res.billboard.name;
				var musicListData=res.song_list;
				for(var i=0;i<musicListData.length;i++){
					$('<div class="m_musicBox">'+
						'<span class="m_musicId">'+(i+1)+'</span>'+
						'<i class="musicState iconfont">&#xe60d;</i>'+
						'<div class="musicTextBox">'+
							'<p class="musicTitle">'+
								'<a href="musicPlay.html?songId='+musicListData[i].song_id+'">'+musicListData[i].title+'</a>'+
							'</p>'+
							'<span class="musicAnthor">'+musicListData[i].author+'</span>'+
						'</div>'+
						'<span class="downloadIcon">'+
							'<i class="iconfont">&#xe60c;</i>'+
						'</span>'+
					'</div>').appendTo('.m_musicListBox')
				}

			}

		})
		flage=true;
	}
	
getMusicList(musicType,'15','0');
