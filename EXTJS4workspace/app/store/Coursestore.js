
Ext.define('AM.store.Coursestore',{
    extend:'Ext.data.Store',
    autoLoad:true,
    fields:['courseid','name'],
    proxy:{
        type:'ajax',
        url:'resources/data/course.json',
        reader:{
            type:'json',
        }

    }
});

