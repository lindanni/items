var $li=$('.selector li');
var len=$li.length;
var $sel=$('.selector');
var $label=$('.selector li label');
$('#btn').on('click',function(){
	change();
})
for(var i=0;i<len;i++){
	(function(i){
	$($label[i]).on('click',function(){
		var inp=$($li[i]).find('input');
		if(!inp.prop('checked')){
			$($label[i]).css({
				backgroundColor:'#f40'
			})
		}else{
				$($label[i]).css({
				backgroundColor:'#fff'
			})
		}
	})
}(i))
}
function change(){
	$sel.toggleClass('open');  //切换效果，不存在则加上，存在则删除
	var deg=360/len;
	for(var i=0;i<len;i++){
		var d=deg*i;
		$sel.hasClass('open') ? rotate($li[i],d) : rotate($li[i],-360)
}
}
function rotate(l,d){
	$(l).css({
		transform:'rotate('+d+'deg)'
	}).find('label').css({
		transform:'rotate('+(-d)+'deg)'
	})
}