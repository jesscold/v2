// ==UserScript==
// @name       aboveground video
// @namespace  stt
// @version    0.1
// @description  yeah
// @match      http://theync.com/forum/register-new-member.htm?ug=*
// ==/UserScript==

var key = '872b3231580913cd074';
var player = function(id){
    return '<a href="http://media.theync.com/vids/video'+id+'.mp4">Download</a><br/><div id="divUWTVideoHolder"><a href="http://media.theync.com/vids/video'+id+'.mp4" style="display:block;width:510px;height:400px;" id="uwtVideoPlayer"><object width="100%" height="100%" id="uwtVideoPlayer_api" name="uwtVideoPlayer_api" data="/common/flowplayer/fp-uwt-surenews.swf" type="application/x-shockwave-flash"><param name="allowfullscreen" value="true"><param name="allowscriptaccess" value="always"><param name="quality" value="high"><param name="bgcolor" value="#000000"><param name="flashvars" value="config={&quot;key&quot;:&quot;'+key+'&quot;,&quot;clip&quot;:{&quot;url&quot;:&quot;http%3A%2F%2Fmedia.theync.com%2Fvids%2Fvideo'+id+'.mp4&quot;,&quot;thumbnail&quot;:{&quot;url&quot;:&quot;/videos/thumbs/video'+id+'.jpg&quot;,&quot;thumbWidth&quot;:128,&quot;thumbHeight&quot;:102},&quot;provider&quot;:&quot;psuedostream&quot;,&quot;autoPlay&quot;:false,&quot;autoBuffering&quot;:true},&quot;plugins&quot;:{&quot;controls&quot;:{&quot;autoHide&quot;:&quot;never&quot;},&quot;psuedostream&quot;:{&quot;url&quot;:&quot;/common/flowplayer/flowplayer.pseudostreaming-3.2.10.swf&quot;}},&quot;playerId&quot;:&quot;uwtVideoPlayer&quot;,&quot;playlist&quot;:[{&quot;url&quot;:&quot;http%3A%2F%2Fmedia.theync.com%2Fvids%2Fvideo'+id+'.mp4&quot;,&quot;thumbnail&quot;:{&quot;url&quot;:&quot;/videos/thumbs/video'+id+'.jpg&quot;,&quot;thumbWidth&quot;:128,&quot;thumbHeight&quot;:102},&quot;provider&quot;:&quot;psuedostream&quot;,&quot;autoPlay&quot;:false,&quot;autoBuffering&quot;:true}]}"></object></a></div><span style="display:none" id="divYNCFootAdHolder"></span>'
}
id = $("img[src^='/images/pageTNs/']").attr("src").match(/pageTN(\d+)/) ? RegExp.$1 : null;
if(id){
    $(".yncRtColAreaBGGrey").html(player(id));
}
