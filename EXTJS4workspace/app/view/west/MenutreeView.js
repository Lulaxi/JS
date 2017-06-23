Ext.define('AM.view.west.MenutreeView', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.menutreeview',
    border: false,
    //是否显示根节点
    rootVisible:true,
    //数据集
    store:'Menutreestore',
    //菜单样式
    bodyStyle: {
        background: '#ffc',
        padding: '10px'
    }

});
