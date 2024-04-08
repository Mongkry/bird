//获取标签
var danjia=document.getElementsByName("price");//单价
var jian=document.getElementsByName("minus");//-
var add=document.getElementsByName("amount");//数量
var jia=document.getElementsByName("plus");//+
var zongjia1=document.getElementById("price0");//总价1
var zongjia2=document.getElementById("price1");//总价2
var zongjia=document.getElementById("totalPrice");//合计:
var jiesuan=document.getElementsByTagName("span");//关闭按钮和结算按钮
var js=document.getElementById("cc");//结算页面
//函数封装
function sum() {
    zongjia1.innerText="￥"+Math.round(danjia[0].value*add[0].value*1)+".00";//1.单价*数量
    zongjia2.innerText="￥"+danjia[1].value*add[1].value+"."+"00";//2.单价*数量
}
function fn1(){
    var sum1=Math.round(danjia[0].value*add[0].value*100)/100+danjia[1].value*add[1].value;
    zongjia.innerHTML="￥"+sum1+".00";
    js.innerHTML="<p>您本次购买的信息如下:</p><p>茶馆/我这一辈子:"+zongjia1.innerText+"</p> <p>岛上书店: "+zongjia2.innerText+"</p><p>商品总计:"+zongjia.innerText+"</p>";
}
//--单击事件
for(var i=0;i<jian.length;i++){
    jian[i].index=i;
    jian[i].onclick=function() {
        console.log(this.index);
       if(add[this.index].value<=1){
           alert("数里最小值为1");
       } else{
           add[this.index].value--;
           sum();
       }
    }
}
//++单击事件
for(var i=0;i<jia.length;i++){//数量无上限
    jia[i].index=i;
    jia[i].onclick=function() {
        console.log(this.index);
            add[this.index].value++;
            sum();

    }
}

//结算事件
jiesuan[1].onclick=fn1;
//关闭事件
jiesuan[0].onclick=function() {
    window.close();//关闭整个浏览器;
};

