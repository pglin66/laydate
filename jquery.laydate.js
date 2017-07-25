	/*		 
	 * layerdate新增定位元素 {pos:$('#')}
	 * */
	$.extend({
		laydate:function(data){
        	laydate(data);		        
	        if(typeof data.pos==='object'){		        	
		        var top=data.pos.offset().top+data.pos.outerHeight(),left=data.pos.offset().left;
		        $('#laydate_box').css({'left':left+'px','top':top+'px'})
	        }
		},
	    laydateRange:function(config){	    	
	    	var option={
	    		start:{
				  istime: true,
				  istoday: false,
				  issure:false,
				  isclear: false,
				},
	    		end:{
				  istime: true,
				  istoday: false,
				  issure:false,
				  isclear: false,
				}
	    	}	    	
	    	$.extend(true,option,config,{
	    		start:{
				  choose: function(datas){
				  	option.start.pos?option.start.pos.val(datas+'至'):'';
				  	this.datas=datas;
				    option.end.min = datas; //开始日选好后，重置结束日的最小日期
				    typeof config.start.choose==='function'?config.start.choose(datas,option):'';
				    $.laydate(option.end);
				  }
				},
	    		end:{
				  choose: function(datas){
				  	option.start.pos?option.start.pos.val(option.start.pos.val()+datas):'';
				  	typeof config.end.choose==='function'?config.end.choose(datas,option):'';
				  }
				}
	    	})
	    	$.laydate(option.start);
	    }
	})