var proxy = 'SOCKS5 192.168.7.1:8080; DIRECT';
var rules = [
    "whatismyipaddress.com",
    "bard.google.com",
    ".openai.com",
    ".oaistatic.com",
    "chat.openai.com.cdn.cloudflare.net",
    "openaiapi-site.azureedge.net",
    "openaicom-api-bdcpf8c6d2e9atf6.z01.azurefd.net",
    "openaicomproductionae4b.blob.core.windows.net",
    "production-openaicom-storage.azureedge.net"
];

function FindProxyForURL(url, host) {
    for (var i = 0; i < rules.length; i++) {
        if (dnsDomainIs(host, rules[i]))
            return proxy;
    }
    return 'DIRECT';
}
