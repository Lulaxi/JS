
Ext.define('AM.store.Scorestore',{
    extend:'Ext.data.Store',
    autoLoad:true,
    fields:['id', 'name', 'score','course'],
    pageSize: 5,
    proxy:{
        type:'ajax',
        url:'resources/data/score.json',
        reader:{
            type:'json',
            root:'score'
        }

    }


});