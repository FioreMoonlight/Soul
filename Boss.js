function Boss(){
    this.name="Vgil";
    this.AD=11;
    this.HP=150;
    this.evil=0;
    this.holy=0;
    this.ADspeed=1;
    this.equipment = [];
    this.temp = 0;
    this.tempbefore = 0;
    var t2 = null;
}
}
Boss.prototype={
    Attack:function(enemyHP){
        enemyHP -= this.AD;
        this.tempbefore = this.temp;//150
        this.temp -= this.AD;//140
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
        t2 = setInterval(function(){self._Attck(this.temp)},this.ADspeed*1000);
    },
    HPlook:function(){
        console.log(this.HP);
    }
}