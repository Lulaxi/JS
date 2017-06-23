Ext.define('AM.model.MenutreeModel',{
    extend:'Ext.data.Model',
    fields:[
        {name:'expanded',type:'bool'},
        {name:'text',type:'string'},
        {name:'left',type:'bool'}
        ]
});