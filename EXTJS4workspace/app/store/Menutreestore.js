Ext.define('AM.store.Menutreestore',{
    extend:'Ext.data.TreeStore',
    autoLoad:true,
    model:'AM.model.MenutreeModel',
    proxy:{
        type:'ajax',
        url:'resources/data/data.json',
        reader:{
            type:'json',
        }

    },
    root:{
        text:'root',
        checked:false
    }

});

