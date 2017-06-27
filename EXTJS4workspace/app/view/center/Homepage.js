Ext.define('AM.view.center.Homepage',{
    extend:'Ext.grid.Panel',
    alias:'widget.homepage',
    title:'主页',
    store:'Scorestore',
    height: 310,
    width: 400,
    stripeRows: true,

    //加上单选框,选中
    selModel: {
        injectCheckbox: 0,
        mode: "SIMPLE",
        checkOnly: true
    },
    selType: "checkboxmodel",
   //实现分页
    bbar: { xtype: "pagingtoolbar", store:'Scorestore', displayInfo: true },

    columnLines: true,
    columns:[
        //增加序号列
        { xtype: "rownumberer", text: "序号", width:40 },

        {text:'编号',dataIndex:'id'},
        {text:'姓名',dataIndex:'name'},
        {text:'分数',dataIndex:'score'},
        {text:'课程',dataIndex:'course'}
    ]

});

