function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, ".onion")) {
      return "SOCKS 127.0.0.1:9050";
    } else if (dnsDomainIs(host, ".i2p")) {
      return "PROXY 127.0.0.1:4444";
    } else {
      var arr = new Array(
                            "rutracker.org",
                            "flibusta.is",
                            "flibusta.net",
                            "linkedin.com",
                                                );
      for (var i=0; i < arr.length; i++){
        if (dnsDomainIs(host, arr[i])) {
          return "SOCKS 127.0.0.1:9050";
        }
      }
    return "DIRECT";
    }
}
