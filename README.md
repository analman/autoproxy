# autoproxy

A configuration file ([PAC](https://en.wikipedia.org/wiki/Proxy_auto-config)) for working with a proxy in your browser, which allows you to visit .onion, .i2p and other sites.

You can configure a list of sites that will be proxied through a tor-proxy to bypass locks.

# Dependency

- Installing [Tor Source](https://www.torproject.org/docs/tor-doc-unix.html.en#using)
- Installing [i2p](https://geti2p.net/en/download/debian) or [i2pd](https://github.com/PurpleI2P/i2pd)

# Settings

## Firefox
**Preferences** > **Advanced** > **Network** > **Connections** > **Automatic proxy configuration URL**

- input *file:///path/to/your/main.pac*

- enable checkbox **Proxy DNS when using SOCKS v5**

## Chromium 
Command-line options for proxy settings:

```chromium-browser --proxy-pac-url="path/to/your/main.pac"```