function getData(type,count,offset){
		$.ajax({
			type:'GET',
			url:'http://www.wwtliu.com/sxtstu/music/baidu/list.php?type='+type+'&count='+count+'&offset='+offset,
			async:false,
			dataType:'json',
			success:function(res) {
				// console.log(res)
				var billboardData=res.billboard;
				var songListData=res.song_list;
				$('<div class="musicBox">'+
						'<div class="musicImgBox">'+
							'<img src="'+billboardData.pic_s192+'" alt="">'+
							'<div class="playBtn">'+
								'<a href="musicList.html?musicType='+billboardData.billboard_type+'"  class="iconfont">&#xe615;</a>'+
							'</div>'+
						'</div>'+
						'<div class="threeMusicList">'+
							'<ul>'+
								'<li>'+
									'<i class="musicId">1</i>'+
									'<a href="#">'+songListData[0].title+'-<span>'+songListData[0].author+'</span></a>'+
								'</li>'+
								'<li>'+
									'<i class="musicId">2</i>'+
									'<a href="#">'+songListData[1].title+'-<span>'+songListData[1].author+'</span></a>'+
								'</li>'+
								'<li>'+
									'<i class="musicId">3</i>'+
									'<a href="#">'+songListData[2].title+'-<span>'+songListData[2].author+'</span></a>'+
								'</li>'+
							'</ul>'+
						'</div>'+
					'</div>').appendTo('.musicContent');
			}
		})
	}
	var typeData=[1,2,11,12,21,22,23,24,25];
	for(var i=0;i<typeData.length;i++){
		getData(typeData[i],'3','0');
	}