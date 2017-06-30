
Ext.define('AM.other.CenterpanelFactory',{
    extend:'Ext.Base',
    createpanel:function(id,title){
        if(title =='detention') {
         var panel = Ext.create('AM.view.center.Detentiontab',{
             id:id,
             title:title,
             closable: true

         });
            //console.log("工厂方法调用了");
          return panel;
        }
    }
});
