// 深度克隆
function deepClone(origin,target){
	if(typeof origin!="object")return
	var target=target||{};
	for(var i in origin){
		if(origin.hasOwnProperty(i)){
			if(typeof origin[i]=="object"){
				if(Object.prototype.toString.call(origin[i])=="[object Object]"){
					target[i]={}
				}else{
					target[i]=[]
				}
				deepClone(origin[i],target[i])
			}else{
				target[i]=origin[i]
			}
		}
	}
	return target;
}
// 判断类型
function getDataType(value){
	let type=typeof value;
	if(type=="object"){
		let o=Object.prototype.toString.call(value),
		obj=o.split(' ')[1],
		res=obj.slice(0,obj.length-1);
		return res;
	}else{
		return type;
	}
}
//数组排序，可根据关键字排序
function keySort(arr,key){
	arr.sort((a,b)=>{
		let o=a,t=b;
		if(key){
			 o=a[key];
			 t=b[key];
		}
		if(o<t){return -1}
		else if(o==t){
			return 0
			}
		else{
			return 1
		}
	})
	return arr;
}
// 获取当前时间
function getNowTime(){
	let date=new Date(),
	year=date.getFullYear(),
	month=date.getMonth()<10?'0'+date.getMonth():date.getMonth(),
	day=date.getDay()<10?'0'+date.getDay():date.getDay(),
	hours=date.getHours()<10?'0'+date.getHours():date.getHours(),
	minus=date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes(),
	second=date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds();
	// function getDate(){
	// 	return `${year}-${month}-${day} ${hours}:${minus}:${second}`;
	// }
	// function getYMD(){
	// 	return `${year}-${month}-${day}`;
	// }
	return `${year}-${month}-${day} ${hours}:${minus}:${second}`;
}