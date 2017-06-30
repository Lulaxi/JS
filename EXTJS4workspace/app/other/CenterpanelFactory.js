
Ext.define('AM.other.CenterpanelFactory',{
    extend:'Ext.Base',
    createpanel:function(id,title){
        if(title =='detention') {

            this.createcontroller(id,title);
         var panel = Ext.create('AM.view.center.Detentiontab',{
             id:id,
             title:title,
             closable: true

         });

          return panel;
        }
    },
    createcontroller:function(id,title){
        if(title=='detention'){
         var controller = Ext.create('AM.controller.DetentionController');
        }
    }
});
