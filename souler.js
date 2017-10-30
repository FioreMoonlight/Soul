function Souler(){
    this.name="Fiore";
    this.AD=10;
    this.HP=100;
    this.evil=0;
    this.holy=0;
    this.ADspeed=.5;
    this.equipment = [];
    this.temp = 0;
    this.tempbefore = 0;
    var t1 = null;
}
Souler.prototype={
    _Attck:function(){
            this.tempbefore = this.temp;//150
            this.temp -= this.AD;//140
            
            // this.tempafter = this.temp;
            // setInterval(function(){
                // if(this.temp <= this.tempbefore){

                    // this.numid.html(this.tempbefore);

                    // this.tempbefore--;
                // }else{
                     // this.numid.innerHTML = this.temp ;
                // }
            // },8);
            $F.numgrowth(10,this.tempbefore,this.temp,"BHP")
            console.log(this.temp);
            //clearInterval(t1);
            if(this.temp <= 0){
                console.log("Boss已死亡");
               clearInterval(t1);
            }

    },
    Attackspeed:function(enemyHP){
        var self = this;
        this.temp = enemyHP;
        // this.ehp = enemyHP;
        t1 = setInterval(function(){self._Attck(this.temp)},this.ADspeed*1000);

        // while(true){
        //     if(enemyHP <= 0){
        //         console.log("souler已死亡");
        //         break;
        //     }else{
                
        //         // setInterval(function(){
        //             enemyHP -= this.AD;
        //             console.log(enemyHP);
        //         // },this.ADspeed*1000)
                
        //     }
        // }
        
    },
    HPlook:function(){
        console.log(this.HP);
    }
}