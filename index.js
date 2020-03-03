jQuery(function($){
var tok='4849882957.a5b1219.c98a4cdf4f404505948ee9754138b367',userid=4849882957,kolichestvo=12;
$.ajax({url:'https://api.instagram.com/v1/users/'+userid+'/media/recent',
dataType:'jsonp',
type:'GET',
data:{access_token:tok,count:kolichestvo},
success:function(result){
console.log(result);
for(x in result.data){
$('.instagram').append('<div class="instagram-img"><a href="'+result.data[x].images.low_resolution.url+'" data-fancybox><img src="'+result.data[x].images.low_resolution.url+'"></a></div>');
}},error:function(result){
console.log(result);
}});
});
