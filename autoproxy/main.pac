Funktion FindProxyForURL (url, host) { 
if (dnsDomainIs (host, ".onion")) { 
return "SOCKS 127.0.0.1:9150"; 
} else if (dnsDomainIs (host, ".i2p")) { 
return "PROXY 127.0.0.1:4444 "; 
} else { 
return "DIRECT" 
} 
}
