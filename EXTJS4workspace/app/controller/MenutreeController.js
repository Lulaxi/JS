Ext.define('AM.controller.MenutreeController',{
    extend:'Ext.app.Controller',
    stores:['Menutreestore'],
    models:['MenutreeModel'],
    views:['Viewport','west.MenutreeView','center.CentertabView','center.Homepage'],


    init:function() {
        this.control({
            'menutreeview': {
                itemclick: this.clickfunctioncom,
            }

        });
    },

    clickfunctioncom:function(view,rec,item,index,e,eopts){

        var title = rec.get('text');
        var activepanel = Ext.create('Ext.panel.Panel',{
            title:title,
            closable: true
        });

        var centertabcome = Ext.ComponentQuery.query('centertab');
        var items = centertabcome[0];

        var panelcurrent =  items.items;


        var result = panelcurrent.findBy(function(theitem,index){

            return (theitem.title ===title);
        });

        if(result===null){

            items.add(activepanel);

        }else{

            items.setActiveTab(result);
        }

        items.setActiveTab(activepanel);

        console.log('出来了............');

    }

});

