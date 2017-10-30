/*fiore-2016/8/15*/
var $F = function(){};
$F.prototype = {
    /*一定区间内的随机数*/
    random:function(begin,end){
        return Math.floor(Math.random()*(end-begin))+begin;
    },
    /*生成随机字符串*/
    makerandomstr:function(num,type){
        var resultdata =[];
        var data=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
        var result="";
        for(var i=0; i<num;i++){
            var s=Math.floor(Math.random()*36);
            if(i<(num-1)&&i>=0)
            {
                result+=data[s]+","
            }
            else{
                result+=data[s]
            }
        }

        resultdata = result.split(",");
        if(type == "ary"){
            return resultdata;
        }else if( type == "str"||type == undefined)
        {
            return result;
        }else{
            return console.log("请输入ary[返回数组],或输入str[返回字符串]")
        }

    },
    /*数组去重[x]*/
   removeduplicate:function(ary){
       var obj = [];
       for( var i=0;i<ary.length;i++){
           var cur = ary[i];
           if(obj[cur]==cur){
               //ary.splice(i,1);
               ary[i]=ary[ary.length-1];
               ary.length--;
               i--;
               continue;
           }
           obj[cur]=cur;
       }
       return obj;
   },
    /*拷贝数组[x]*/
    copyary:function(resultdata){
        var arrnew = [];
        var temp={}
        var count=0;

            var copydata=resultdata;

            for(var i=0;i<resultdata.length;i++)
            {
                if(resultdata[i]!= -1){
                    temp= resultdata[i];
                    for(var j=0;j<resultdata.length;j++)
                    {

                        if(temp==resultdata[j])
                        {
                            count++;
                            resultdata[j]=-1;
                        }
                    }
                    arrnew.push(temp+":"+count);
                    count=0
                }
            }


           return resultdata;


    },
    /*对象转字符串(序列化)[需要优化]*/
    objtostr:function(obj){
        var str = JSON.stringify(obj,fn);
        function fn(name,value){
            if(name=='age')
                value = 14;
            return value
        }
        return str;
    },
    /*字符串转换对象*/
    strtoobj:function(str){
        var obj = JSON.parse(str,fn)
        function fn(name,value) {
            //console.log(name+":"+value);
            if (name == "age")
                value = 14;
            return value;
        }
        return obj; 
    },
    /*数字增长*/
    numgrowth:function(speed,startnum,endnum,id){
        var numid = document.getElementById(id);
           
        var t2 = setInterval(function(){
                if(startnum > endnum){
                    numid.innerHTML = startnum;
                    startnum--;
                    //clearInterval(t2);

                }else if(startnum < endnum){
                     numid.innerHTML = startnum ;
                     startnum++;
                     //clearInterval(t2);
                }else if(startnum == endnum){
                    numid.innerHTML = startnum ;
                    clearInterval(t2);
                }else if(startnum == 0){
                    numid.innerHTML = 0 ;
                    clearInterval(t2);
                }
            },speed);

            //

    }

}
$F = new $F();