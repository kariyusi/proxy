function FindProxyForURL(url, host)
{
  if (url.substring(0, 4) == "ftp:") {
    return "DIRECT";
  }
  else if (url.substring(0, 6) == "https:") {
    return "DIRECT";
  }
  else if (url.substring(0, 5) == "http:") {
    if (shExpMatch(host, "*.dmm.com")) {
      return "PROXY 127.0.0.1:8888";
    else
      return "DIRECT";
    }
  }
  else {
    return "DIRECT";
  }
}
