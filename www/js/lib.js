// system library
var g_orders = [];
// test ///////////////////
gg_orders = [];
for(let i = 30;i>0;i--) {
    gg_orders.push(
        {
            id: i,
            date: i+'.06.2019 20:'+(i+10)+':00',
            type: i%2 ? 'Заведение заявки в Jira' : 'Заведение заявки в Bitrix',
            status: Math.floor((30-i)/10),
        }
    );
}
// test ///////////////////

function LoadOrders(prms) {
    if (prms === undefined) var prms = {};
    if(prms.func_before!==undefined) prms.func_before();

    g_orders = gg_orders;

    if(prms.func_after!==undefined) prms.func_after();
}

var g_templates = [];
function LoadTemplates(prms) {
    if (prms === undefined) var prms = {};
    if(prms.func_before!==undefined) prms.func_before();
console.log('load templates');
    // test ///////////////////
    g_templates = [
        {
            id: 1,
            name: 'Заведение заявки в JIRA',
            status: 2,
        },
        {
            id: 2,
            name: 'Заведение заявки в Bitrix',
            status: 2,
        },
        {
            id: 3,
            name: 'Заведение контрагента',
            status: 1,
        },
    ];
    // test ///////////////////

    if(prms.func_after!==undefined) prms.func_after();
}