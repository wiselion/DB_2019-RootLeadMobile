// system library
var g_orders = [];
function LoadOrders(prms) {
    if (prms === undefined) var prms = {};
    if(prms.func_before!==undefined) prms.func_before();

    // test ///////////////////
    g_orders = [];
    for(let i = 30;i>0;i--) {
        g_orders.push(
            {
                id: i,
                date: i+'.06.2019 20:'+(i+10),
                type: i%2 ? 'Заведение заявки в Jira' : 'Заведение заявки в Bitrix',
                status: Math.floor((30-i)/10),
            }
        );
    }
    // test ///////////////////

    if(prms.func_after!==undefined) prms.func_after();
}

var g_templates = [];
function LoadTemplates(prms) {
    if (prms === undefined) var prms = {};
    if(prms.func_before!==undefined) prms.func_before();

    // test ///////////////////
    g_orders = [];
    for(let i = 30;i>0;i--) {
        g_orders.push(
            {
                id: i,
                date: i+'.06.2019 20:'+(i+10),
                type: i%2 ? 'Заведение заявки в Jira' : 'Заведение заявки в Bitrix',
                status: Math.floor((30-i)/10),
            }
        );
    }
    // test ///////////////////

    if(prms.func_after!==undefined) prms.func_after();
}