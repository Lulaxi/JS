Ext.define('AM.controller.MenutreeController',{
    extend:'Ext.app.Controller',
    stores:['Menutreestore'],
    models:['MenutreeModel'],
    views:['Viewport','west.MenutreeView']

});

