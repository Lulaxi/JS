Ext.define('AM.view.center.Detentiontab', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.detention',
    autoscroll:false,
    bodyStyle :'overflow-x:hidden;overflow-y:scroll',
    items:[{
       xtype:'form',
       title:'information',
        bodyPadding: '5 5 0',
        width: 350,
        fieldDefaults: {
            msgTarget: 'side',
            labelWidth: 75
        },
        defaults: {
            anchor: '100%'
        },
        items: [{
            xtype:'fieldset',
            checkboxToggle:true,
            title: '用户信息',
            defaultType: 'textfield',
            collapsed: true,
            layout: 'anchor',
            defaults: {
                anchor: '100%'
            },
            items :[{
                fieldLabel: '姓名',
                allowBlank:false
            },{
                fieldLabel: '年龄',
                xtype: 'numberfield',
                minValue: 0,
                maxValue: 100,
                tooltip: 'Enter your age'
            },{
                fieldLabel: '生日',
                xtype: 'datefield',
                tooltip: 'Enter your date of birth'
            }, {
                fieldLabel: 'Email',
                vtype:'email'
            },{
                xtype: 'radiogroup',
                fieldLabel: '性别',
                items: [
                    {boxLabel: '男', name: 'sex',checked: true},
                    {boxLabel: '女', name: 'sex'}
                ]
            },{
                xtype: 'checkboxgroup',
                fieldLabel: '班级',
                // Put all controls in a single column with width 100%
                columns: 1,
                items: [
                    {boxLabel: '一班', name: 'first'},
                    {boxLabel: '二班', name: 'second', checked: true},
                    {boxLabel: '三班', name: 'thrid'}
                ]
            }]
        },{
            xtype:'fieldset',
            title: '考试信息',
            collapsible: true,
            defaultType: 'textfield',
            layout: 'anchor',
            defaults: {
                anchor: '100%'
            },
            items :[{
                fieldLabel: '课程',
                xtype:'combobox',
                allowBlank: false,
                blankText: '请选择课程',
                editable: false,
                displayField: 'name',
                valueField: 'courseid',
                store:'Coursestore',

            },{
                fieldLabel: '分数',
                xtype: 'numberfield',
                minValue: 0,
                maxValue: 100,
                tooltip: 'Enter your score'
            },{
                fieldLabel: '编号',
            },{
                fieldLabel: '考试时间',
                xtype: 'datefield',
                tooltip: 'Enter time'
            }]
        }],

        buttons: [{
            text: 'Save'
        },{
            text: 'Cancel'
        }]

    }]
});

