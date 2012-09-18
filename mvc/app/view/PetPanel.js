Ext.define('Locale.view.PetPanel', {
    extend:'Ext.Panel',
    alias: 'widget.petListPanel',
    config:{
        layout:{
            type:'fit'
        },
        items:[
            {
                xtype:'toolbar',
                docked:'top',
                title:'Locale + PetFinder ',
                items: [
                    {
                        xtype: 'button',
                        text: 'yoo',
                        id: 'yo'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: "selectfield",
                        id: "localePicker",
                        align: "right",
                        displayField: "text",
                        valueField: "abbr",
                        value: "en",
                        store: {
                          fields: ["abbr", "text"],
                          data: Ux.locale.Manager.getAvailable(true)
                        }
                    }
                ]
            },
            {
                xtype:'list',
                store:'PetTracker',
                id:'PetList',
                itemId:'petList',
                emptyText: "<div>No Dogs Found</div>",
                //  onItemDisclosure: true,
                loadingText: "Loading Pets",
                itemTpl:[
                    '<div>{name} is a {description} and is located at {latitude} (latitude) and {longitude} (longitude)</div>'
                ]
            }
        ],
        // why having listeners the whole panel ?
        listeners:[
            {
                fn:'onPetsListItemTap',
                event:'itemtap',
                delegate:'#PetList'
            },
            {
                fn: 'onYooTap',
                event:'tap',
                delegate: '#yo'
            },
            {
                fn: 'onLocalePick',
                event: 'tap',
                delegate: '#localePicker'
            }
        ]
    },
    onPetsListItemTap:function (dataview, index, target, record, e, options) {
        this.fireEvent('petSelectCommand', this, record);
    },
    onYooTap: function () {
        alert('clicked yooo');
    },
    onLocalePick: function() {
        alert('pick locale');
    }
});
