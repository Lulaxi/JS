
Ext.define('AM.view.Viewport',{
    extend:'Ext.container.Viewport',
    layout:'border',
    alias: 'widget.viewport',
    initComponent:function(){
        this.items = [{
            title: 'South Region is resizable',
            region: 'south',     // position for region
            xtype: 'panel',
            height: 100,
            split: true,         // enable resizing
            margins: '0 5 5 5'
        },{

            title: 'West Region is collapsible',
            region:'west',
            xtype: 'menutreeview',
            margins: '5 0 0 5',
            width: 200,
            collapsible: true,   // make collapsible
            id: 'west-region-container',
            layout: 'fit'
        },{
            title: 'Center Region',
            region: 'center',     // center region is required, no width/height specified
            xtype: 'centertab',
            layout: 'fit',
            id:'center-region-container',
            margins: '5 5 0 0'
        },{
            title: 'North Region is resizable',
            region: 'north',     // position for region
            xtype: 'panel',
            height: 100,
            split: true,         // enable resizing

        }]

        console.log('调用了');
        this.callParent();

    }


});