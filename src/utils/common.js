// import saveStore from '../config/mUtils.js'

export function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    var r = window.location.search.substr(1).match(reg)
    if (r != null) return unescape(r[2]);
    return null
}

export function toFeishu() {
    // saveStore.removeStore('dmpUserName')
    const target = process.env.NODE_ENV;
    const buildUrl = 'https://open.feishu.cn/open-apis/authen/v1/index?redirect_uri=http%3A%2F%2Fdmp.naxions.com&app_id=cli_a0d871e09578900d&state=naxions'
    const testUrl = 'https://open.feishu.cn/open-apis/authen/v1/index?redirect_uri=http%3A%2F%2Fdmp-test.naxions.com/&app_id=cli_a0113387dfb8500c&state=naxions'
    // const devUrl = 'https://open.feishu.cn/open-apis/authen/v1/index?redirect_uri=http%3A%2F%2F10.101.1.108:8888/&app_id=cli_a0113387dfb8500c&state=naxions';
    const devUrl = 'https://open.feishu.cn/open-apis/authen/v1/index?redirect_uri=http%3A%2F%2F10.101.0.71%3A6060%2F/&app_id=cli_a0113387dfb8500c&state=naxions123'
    let url;
    console.log(target)
    switch (target) {
        case 'production':
            url = buildUrl;
            break;
        case 'test':
            url = testUrl;
            break;
        default:
            url = devUrl;
    }
    location.href = url;
}


export function getDateNDayAgo(n) {
    const date = new Date();
    const time = date.getTime();
    const agoTime = time + (60 * 60 * 24 * (n || 0) * 1000);
    const agoDate = new Date(agoTime);
    const y = agoDate.getFullYear();
    const m = agoDate.getMonth() + 1;
    const d = agoDate.getDate();
    const mm = m < 10 ? '0' + m : m;
    const dd = d < 10 ? '0' + d : d;
    return y + '-' + mm + '-' + dd;
}
