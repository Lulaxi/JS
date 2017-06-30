
Ext.define('AM.controller.MenutreeController',{
    extend:'Ext.app.Controller',
    //requires:['AM.other.CenterpanelFactory'],
    stores:['Menutreestore','Scorestore'],
    models:['MenutreeModel'],
    views:['Viewport','west.MenutreeView','center.CentertabView','center.Homepage'],
    config:{
        //factory: Ext.create('AM.other.CenterpanelFactory')
        factory:null
    },

    init:function() {

        this.control({
            'menutreeview': {
                itemclick: this.clickfunctioncom,
            }

        });
    },
    clickfunctioncom:function(view,rec,item,index,e,eopts){

        var components = Ext.ComponentQuery.query('centertab');

        var tabpanel = components[0];
        //先查询存不存在
        var n = tabpanel.getComponent(rec.raw.id);
        //根据查询结果决定添不添加
        if (!n){
        tabpanel.add(this.getFactory().createpanel(rec.raw.id,rec.raw.text));
        };
        tabpanel.setActiveTab(rec.raw.id);

        console.log(n);

    },

    getFactory:function(){
        if(this.factory==null){

          this.factory = Ext.create('AM.other.CenterpanelFactory');
        }

    return this.factory;
    }

});

