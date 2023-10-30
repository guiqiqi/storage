var Direct = "DIRECT";
var SocksProxy = "SOCKS5 192.168.7.1:8080";
var domains = [
    "whatismyipaddress.com",
    "bard.google.com",
    "*.openai.com",
    "oaistatic.com",
    "chat.openai.com.cdn.cloudflare.net",
    "openaiapi-site.azureedge.net",
    "production-openaicom-storage.azureedge.net"
];

function FindProxyForURL(url, host) {
    for (var index = domains.length - 1; i >= 0; i--) {
        if (shExpMatch(host, domains[i]))
            return SocksProxy;
    }
    return Direct;
}
