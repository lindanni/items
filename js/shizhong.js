function Index(use24Hours){
	this.column=Array.from(($('.column')));
	this.use24Hours=use24Hours;
	this.classList=['visible','far','dis','dis'];
	this.init();
}
Index.prototype.init=function(){
	//当前每一位与dom结构相对应
	var self=this;
	setInterval(function(){
		var c=self.getClock();
		self.column.forEach(function(ele,i){
			var n = + c[i];
			var offset = n * 76;
			$(ele).css({
				"-webkit-transform":"translateY(calc(50vh - "+offset+"px - 13px))"
			});
			//forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数。
			Array.from(ele.children).forEach(function(ele2,i2){ //ele2是当前元素 i2是当前元素的下标
				var className=self.getClassName(n,i2);
				$(ele2).attr('class',className);    //设置被选元素的属性和值
			})
		})
	},200);
}
Index.prototype.getClock=function(){
	var d=new Date();
	return [this.use24Hours ? d.getHours() : d.getHours() % 12 || 12, d.getMinutes(), d.getSeconds()].reduce(function(p,n){
		return (p+('0'+n).slice(-2));
	},'');
}
Index.prototype.getClassName=function(n,i2){
	var className=this.classList.find(function(ele,index){
		return i2-index===n || i2+index===n;
	});
	return className ||'';
}
new Index(true);
//获取时分秒-->修改时间格式-->当前每一位与dom结构相对应-->滑动+透明度改变