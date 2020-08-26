var _0x2c5b = [
  "nativeHLS",
  "bufferStalledError",
  "loadedmetadata",
  "VIDEO",
  "value",
  "location",
  ".m3u8",
  "DefaultConfig",
  "imageSub",
  "search",
  "onerror",
  "splice",
  "recoverMediaError",
  "Send\x20it:\x20Network\x20error,\x20we\x20trying\x20to\x20fix\x20it",
  "MEDIA_ERROR",
  "log",
  "controls",
  "senditVideo",
  "loadSource",
  "Send\x20it:\x20Media\x20error,\x20we\x20trying\x20to\x20fix\x20it",
  "NETWORK_ERROR",
  "open",
  "hidden",
  "readyState",
  "getElementById",
  "MANIFEST_PARSED",
  "src",
  "application/x-mpegURL",
  "setAttribute",
  "status",
  "detachMedia",
  "load",
  "ErrorTypes",
  "destroy",
  "Events",
  "HEAD",
  "play",
  "get",
  "offline",
  "videos",
  "Send\x20it:\x20Other\x20error,\x20we\x20trying\x20to\x20fix\x20it",
  "Send\x20it:\x20R",
  "fatal",
  "categories",
  "online",
  "errorVideo",
  "body",
  "onreadystatechange",
  "type",
  "https://error.sendit.media/hls/error.m3u8",
  "attachMedia",
  "loader",
  "OTHER_ERROR",
  "url",
  "true",
  "details",
  "remove",
  "key",
  "sources",
  "addEventListener",
  "Send\x20it:\x20Live\x20endpoint\x20currently\x20down",
  "ErrorDetails",
  "appendChild",
  "createElement",
  "DONE",
  "https://cfv.sendit.media/",
  "isSupported",
  "abort",
];
(function (_0x3f7c8b, _0x2c5bbd) {
  var _0x1c23a0 = function (_0x44664b) {
    while (--_0x44664b) {
      _0x3f7c8b["push"](_0x3f7c8b["shift"]());
    }
  };
  _0x1c23a0(++_0x2c5bbd);
})(_0x2c5b, 0x16e);
var _0x1c23 = function (_0x3f7c8b, _0x2c5bbd) {
  _0x3f7c8b = _0x3f7c8b - 0x0;
  var _0x1c23a0 = _0x2c5b[_0x3f7c8b];
  return _0x1c23a0;
};
var video = document[_0x1c23("0x42")](_0x1c23("0x3b")),
  nativeHLSelement = document[_0x1c23("0x25")](_0x1c23("0x2d")),
  videoError = document[_0x1c23("0x42")](_0x1c23("0x13")),
  bufferStallErrors = 0x0,
  errorLoop = 0x0;
const queryString = window[_0x1c23("0x2f")][_0x1c23("0x33")],
  urlParams = new URLSearchParams(queryString),
  key = urlParams[_0x1c23("0xb")](_0x1c23("0x1f"));
var videoSrc = _0x1c23("0x27") + key + _0x1c23("0x30"),
  videoErrorSrc = _0x1c23("0x17"),
  liveOnline = !![],
  hls,
  somethingChanged = ![],
  element2Monitor = document[_0x1c23("0x25")]("input");
(element2Monitor[_0x1c23("0x16")] = _0x1c23("0x40")),
  (element2Monitor[_0x1c23("0x2e")] = _0x1c23("0x12")),
  document[_0x1c23("0x14")]["appendChild"](element2Monitor);
var element2MonitorStartValue = _0x1c23("0x12"),
  element2Monitor4Reload = !![],
  testing = ![],
  hlsOrHtmlPlayer = null;
if (Hls[_0x1c23("0x28")]()) {
  hlsOrHtmlPlayer = !![];
  var hls = new Hls({
    debug: ![],
    enableWorker: !![],
    startLevel: -0x1,
    autoLevelEnabled: !![],
    pLoader: function (_0x308286) {
      let _0xed55fa = new Hls[_0x1c23("0x31")][_0x1c23("0x19")](_0x308286);
      (this[_0x1c23("0x29")] = () => _0xed55fa[_0x1c23("0x29")]()),
        (this[_0x1c23("0x7")] = () => _0xed55fa[_0x1c23("0x7")]()),
        (this[_0x1c23("0x5")] = (_0x1d752d, _0x2359c5, _0x521d85) => {
          let { type: _0x22c6f0, url: _0x16c559 } = _0x1d752d;
          _0xed55fa[_0x1c23("0x5")](_0x1d752d, _0x2359c5, _0x521d85);
        });
    },
  });
  hls[_0x1c23("0x3c")](videoSrc),
    (mediaContents =
      mediaJSON[_0x1c23("0x11")][0x0][_0x1c23("0xd")][0x0][_0x1c23("0x20")]),
    mediaContents[_0x1c23("0x35")](0x0, 0x1, videoSrc),
    hls[_0x1c23("0x18")](video),
    hls["on"](Hls[_0x1c23("0x8")]["MEDIA_ATTACHED"], function () {
      hls["on"](Hls[_0x1c23("0x8")][_0x1c23("0x43")], function (
        _0x399680,
        _0x5f32c7
      ) {});
    }),
    hls["on"](Hls[_0x1c23("0x8")]["ERROR"], function (_0x3b63f9, _0x18149e) {
      var _0x449fb1 = _0x18149e[_0x1c23("0x16")],
        _0x5f1c12 = _0x18149e["details"],
        _0x4fb6d6 = _0x18149e[_0x1c23("0x10")];
      switch (_0x18149e[_0x1c23("0x1d")]) {
        case Hls[_0x1c23("0x23")]["FRAG_LOAD_ERROR"]:
          console["debug"]("Send\x20it:\x20Fragment\x20ERROR\x20DECTECT");
          break;
        default:
          break;
      }
      if (_0x5f1c12 == _0x1c23("0x2b")) {
        if (errorLoop > 0x0) {
        } else errorLoop++;
      }
      if (_0x18149e[_0x1c23("0x10")])
        switch (_0x449fb1) {
          case Hls["ErrorTypes"][_0x1c23("0x3e")]:
            console[_0x1c23("0x39")](_0x1c23("0x37"));
            hls[_0x1c23("0x1b")] == videoSrc &&
              (hls[_0x1c23("0x4")](),
              hls[_0x1c23("0x3c")](videoErrorSrc),
              (mediaContents =
                mediaJSON[_0x1c23("0x11")][0x0][_0x1c23("0xd")][0x0][
                  _0x1c23("0x20")
                ]),
              mediaContents["splice"](0x0, 0x1, videoErrorSrc),
              hls["attachMedia"](video),
              (video["loop"] = !![]),
              (element2Monitor["value"] = _0x1c23("0xc")));
            errorLoop = 0x0;
            break;
          case Hls[_0x1c23("0x6")][_0x1c23("0x38")]:
            console[_0x1c23("0x39")](_0x1c23("0x3d")), hls[_0x1c23("0x36")]();
            break;
          case Hls[_0x1c23("0x6")][_0x1c23("0x1a")]:
            console[_0x1c23("0x39")](_0x1c23("0xe")), hls[_0x1c23("0x36")]();
            break;
          default:
            hls["destroy"]();
            break;
        }
    });
  function track_change() {
    element2Monitor[_0x1c23("0x2e")] != element2MonitorStartValue &&
      ((element2MonitorStartValue = element2Monitor["value"]),
      (somethingChanged = !![]),
      onlineMonitor());
  }
  setInterval(function () {
    track_change();
  }, 0x64),
    onlineMonitor();
} else
  (hlsOrHtmlPlayer = ![]),
    nativeHLSelement["setAttribute"]("id", _0x1c23("0x2a")),
    nativeHLSelement[_0x1c23("0x2")](_0x1c23("0x3a"), _0x1c23("0x1c")),
    nativeHLSelement["setAttribute"](_0x1c23("0x0"), videoErrorSrc),
    nativeHLSelement[_0x1c23("0x2")]("type", _0x1c23("0x1")),
    document[_0x1c23("0x42")](_0x1c23("0x32"))[_0x1c23("0x24")](
      nativeHLSelement
    ),
    video[_0x1c23("0x1e")](),
    document["getElementById"]("media_control")[_0x1c23("0x1e")](),
    nativeHLSelement[_0x1c23("0x21")](_0x1c23("0x2c"), function () {
      nativeHLSelement[_0x1c23("0xa")]();
    });
function onlineMonitor() {
  if (hls[_0x1c23("0x1b")] == videoErrorSrc) {
    var _0x50b09c = new XMLHttpRequest();
    _0x50b09c[_0x1c23("0x3f")](_0x1c23("0x9"), videoSrc),
      (_0x50b09c[_0x1c23("0x15")] = function () {
        if (this[_0x1c23("0x41")] == this[_0x1c23("0x26")]) {
          if (
            this[_0x1c23("0x3")] == 0x194 &&
            hls[_0x1c23("0x1b")] == videoErrorSrc
          )
            console[_0x1c23("0x39")](_0x1c23("0x22"), videoSrc);
          else
            this[_0x1c23("0x3")] == 0xc8 &&
              hls[_0x1c23("0x1b")] == videoErrorSrc &&
              (console["log"](
                "Send\x20it:\x20Live\x20endpoint\x20is\x20up,\x20switching\x20to\x20it"
              ),
              (element2Monitor["value"] = "online"),
              (somethingChanged = ![]),
              (video["loop"] = ![]),
              hls[_0x1c23("0x4")](),
              hls[_0x1c23("0x3c")](videoSrc),
              (mediaContents =
                mediaJSON[_0x1c23("0x11")][0x0][_0x1c23("0xd")][0x0][
                  _0x1c23("0x20")
                ]),
              mediaContents[_0x1c23("0x35")](0x0, 0x1, videoSrc),
              hls[_0x1c23("0x18")](video),
              video[_0x1c23("0xa")]());
        }
      }),
      _0x50b09c["send"](),
      setTimeout(onlineMonitor, 0x7d0);
  }
}
function reloadMedia() {
  console[_0x1c23("0x39")](_0x1c23("0xf")),
    hls[_0x1c23("0x4")](),
    hls["loadSource"](videoSrc),
    hls[_0x1c23("0x18")](video);
}
video[_0x1c23("0x34")] = function () {
  hlsOrHtmlPlayer && reloadMedia();
};
