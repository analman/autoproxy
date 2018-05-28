function FindProxyForURL(url, host) {
    var sites = [
        'rutracker.org',
        'flibusta.is',
        'flibusta.net',
        'telegram.org',
        'linkedin.com',
        'hdrezka.ag',
        'ivbt.ru',
    ];
    if (dnsDomainIs(host, '.onion')) {return 'SOCKS 127.0.0.1:9050';}
    if (dnsDomainIs(host, '.i2p')) {return 'PROXY 127.0.0.1:4444';}

    for (var site of sites) {
        if (dnsDomainIs(host, site)) {return 'SOCKS 127.0.0.1:9050';}
    }

    return 'DIRECT';
}
