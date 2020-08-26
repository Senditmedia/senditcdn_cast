var _0xd7f8 = [
  "MEDIA_ERROR",
  "loadedmetadata",
  "videos",
  "Send\x20it:\x20Media\x20error,\x20we\x20trying\x20to\x20fix\x20it",
  "recoverMediaError",
  "value",
  "online",
  "controls",
  "send",
  "hidden",
  "location",
  "getElementById",
  "MANIFEST_PARSED",
  "log",
  "appendChild",
  "true",
  "readyState",
  "play",
  "splice",
  "https://error.sendit.media/hls/error.m3u8",
  "HEAD",
  "NETWORK_ERROR",
  "Send\x20it:\x20Other\x20error,\x20we\x20trying\x20to\x20fix\x20it",
  "Send\x20it:\x20Network\x20error,\x20we\x20trying\x20to\x20fix\x20it",
  "setAttribute",
  "DefaultConfig",
  "status",
  "Send\x20it:\x20R",
  "input",
  "nativeHLS",
  "loadSource",
  "open",
  "Send\x20it:\x20Live\x20endpoint\x20is\x20up,\x20switching\x20to\x20it",
  "body",
  "DONE",
  "application/x-mpegURL",
  "remove",
  "attachMedia",
  "categories",
  "fatal",
  "detachMedia",
  "FRAG_LOAD_ERROR",
  "addEventListener",
  "ErrorDetails",
  "type",
  "load",
  "OTHER_ERROR",
  "ERROR",
  "destroy",
  "onerror",
  "sources",
  "senditVideo",
  "Send\x20it:\x20Fragment\x20ERROR\x20DECTECT",
  "key",
  "createElement",
  "https://cfv.sendit.media/",
  "errorVideo",
  "src",
  "abort",
  "url",
  "Events",
  "search",
  "loader",
  "VIDEO",
  "details",
  "MEDIA_ATTACHED",
  "ErrorTypes",
  "loop",
];
(function (_0x10533b, _0xd7f89c) {
  var _0x2c06c0 = function (_0x5807e0) {
    while (--_0x5807e0) {
      _0x10533b["push"](_0x10533b["shift"]());
    }
  };
  _0x2c06c0(++_0xd7f89c);
})(_0xd7f8, 0xa8);
var _0x2c06 = function (_0x10533b, _0xd7f89c) {
  _0x10533b = _0x10533b - 0x0;
  var _0x2c06c0 = _0xd7f8[_0x10533b];
  return _0x2c06c0;
};
var video = document[_0x2c06("0x2f")](_0x2c06("0x13")),
  nativeHLSelement = document[_0x2c06("0x16")](_0x2c06("0x1f")),
  videoError = document[_0x2c06("0x2f")](_0x2c06("0x18")),
  bufferStallErrors = 0x0,
  errorLoop = 0x0;
const queryString = window[_0x2c06("0x2e")][_0x2c06("0x1d")],
  urlParams = new URLSearchParams(queryString),
  key = urlParams["get"](_0x2c06("0x15"));
var videoSrc = _0x2c06("0x17") + key + ".m3u8",
  videoErrorSrc = _0x2c06("0x37"),
  liveOnline = !![],
  hls,
  somethingChanged = ![],
  element2Monitor = document[_0x2c06("0x16")](_0x2c06("0x40"));
(element2Monitor[_0x2c06("0xc")] = _0x2c06("0x2d")),
  (element2Monitor[_0x2c06("0x29")] = "online"),
  document[_0x2c06("0x1")]["appendChild"](element2Monitor);
var element2MonitorStartValue = _0x2c06("0x2a"),
  element2Monitor4Reload = !![],
  testing = ![],
  hlsOrHtmlPlayer = null;
if (Hls["isSupported"]()) {
  hlsOrHtmlPlayer = !![];
  var hls = new Hls({
    debug: ![],
    enableWorker: !![],
    startLevel: -0x1,
    autoLevelEnabled: !![],
    pLoader: function (_0x17cdc9) {
      let _0x522445 = new Hls[_0x2c06("0x3d")][_0x2c06("0x1e")](_0x17cdc9);
      (this[_0x2c06("0x1a")] = () => _0x522445[_0x2c06("0x1a")]()),
        (this[_0x2c06("0x10")] = () => _0x522445[_0x2c06("0x10")]()),
        (this[_0x2c06("0xd")] = (_0x6a9ab, _0x55004f, _0x57218d) => {
          let { type: _0x30e881, url: _0x270c4f } = _0x6a9ab;
          _0x522445[_0x2c06("0xd")](_0x6a9ab, _0x55004f, _0x57218d);
        });
    },
  });
  hls[_0x2c06("0x42")](videoSrc),
    (mediaContents =
      mediaJSON[_0x2c06("0x6")][0x0][_0x2c06("0x26")][0x0][_0x2c06("0x12")]),
    mediaContents["splice"](0x0, 0x1, videoSrc),
    hls[_0x2c06("0x5")](video),
    hls["on"](Hls["Events"][_0x2c06("0x21")], function () {
      hls["on"](Hls[_0x2c06("0x1c")][_0x2c06("0x30")], function (
        _0x16417f,
        _0x1029c9
      ) {});
    }),
    hls["on"](Hls[_0x2c06("0x1c")][_0x2c06("0xf")], function (
      _0x482643,
      _0x3e0593
    ) {
      var _0x3c4271 = _0x3e0593["type"],
        _0x386155 = _0x3e0593["details"],
        _0x39de4b = _0x3e0593[_0x2c06("0x7")];
      switch (_0x3e0593[_0x2c06("0x20")]) {
        case Hls[_0x2c06("0xb")][_0x2c06("0x9")]:
          console["debug"](_0x2c06("0x14"));
          break;
        default:
          break;
      }
      if (_0x386155 == "bufferStalledError") {
        if (errorLoop > 0x0) {
        } else errorLoop++;
      }
      if (_0x3e0593["fatal"])
        switch (_0x3c4271) {
          case Hls["ErrorTypes"][_0x2c06("0x39")]:
            console[_0x2c06("0x31")](_0x2c06("0x3b"));
            hls["url"] == videoSrc &&
              (hls[_0x2c06("0x8")](),
              hls[_0x2c06("0x42")](videoErrorSrc),
              (mediaContents =
                mediaJSON["categories"][0x0][_0x2c06("0x26")][0x0][
                  _0x2c06("0x12")
                ]),
              mediaContents[_0x2c06("0x36")](0x0, 0x1, videoErrorSrc),
              hls[_0x2c06("0x5")](video),
              (video["loop"] = !![]),
              (element2Monitor[_0x2c06("0x29")] = "offline"));
            errorLoop = 0x0;
            break;
          case Hls[_0x2c06("0x22")][_0x2c06("0x24")]:
            console[_0x2c06("0x31")](_0x2c06("0x27")), hls[_0x2c06("0x28")]();
            break;
          case Hls["ErrorTypes"][_0x2c06("0xe")]:
            console[_0x2c06("0x31")](_0x2c06("0x3a")), hls[_0x2c06("0x28")]();
            break;
          default:
            hls[_0x2c06("0x10")]();
            break;
        }
    });
  function track_change() {
    element2Monitor[_0x2c06("0x29")] != element2MonitorStartValue &&
      ((element2MonitorStartValue = element2Monitor[_0x2c06("0x29")]),
      (somethingChanged = !![]),
      onlineMonitor());
  }
  setInterval(function () {
    track_change();
  }, 0x64),
    onlineMonitor();
} else
  (hlsOrHtmlPlayer = ![]),
    nativeHLSelement[_0x2c06("0x3c")]("id", _0x2c06("0x41")),
    nativeHLSelement[_0x2c06("0x3c")](_0x2c06("0x2b"), _0x2c06("0x33")),
    nativeHLSelement[_0x2c06("0x3c")](_0x2c06("0x19"), videoSrc),
    nativeHLSelement[_0x2c06("0x3c")](_0x2c06("0xc"), _0x2c06("0x3")),
    document[_0x2c06("0x2f")]("imageSub")[_0x2c06("0x32")](nativeHLSelement),
    video[_0x2c06("0x4")](),
    document[_0x2c06("0x2f")]("media_control")[_0x2c06("0x4")](),
    nativeHLSelement[_0x2c06("0xa")](_0x2c06("0x25"), function () {
      nativeHLSelement[_0x2c06("0x35")]();
    });
function onlineMonitor() {
  if (hls[_0x2c06("0x1b")] == videoErrorSrc) {
    var _0x36e2d3 = new XMLHttpRequest();
    _0x36e2d3[_0x2c06("0x43")](_0x2c06("0x38"), videoSrc),
      (_0x36e2d3["onreadystatechange"] = function () {
        if (this[_0x2c06("0x34")] == this[_0x2c06("0x2")]) {
          if (this[_0x2c06("0x3e")] == 0x194 && hls["url"] == videoErrorSrc)
            console[_0x2c06("0x31")](
              "Send\x20it:\x20Live\x20endpoint\x20currently\x20down",
              videoSrc
            );
          else
            this[_0x2c06("0x3e")] == 0xc8 &&
              hls[_0x2c06("0x1b")] == videoErrorSrc &&
              (console["log"](_0x2c06("0x0")),
              (element2Monitor[_0x2c06("0x29")] = _0x2c06("0x2a")),
              (somethingChanged = ![]),
              (video[_0x2c06("0x23")] = ![]),
              hls["detachMedia"](),
              hls[_0x2c06("0x42")](videoSrc),
              (mediaContents =
                mediaJSON[_0x2c06("0x6")][0x0][_0x2c06("0x26")][0x0][
                  _0x2c06("0x12")
                ]),
              mediaContents[_0x2c06("0x36")](0x0, 0x1, videoSrc),
              hls[_0x2c06("0x5")](video),
              video[_0x2c06("0x35")]());
        }
      }),
      _0x36e2d3[_0x2c06("0x2c")](),
      setTimeout(onlineMonitor, 0x7d0);
  }
}
function reloadMedia() {
  console[_0x2c06("0x31")](_0x2c06("0x3f")),
    hls[_0x2c06("0x8")](),
    hls[_0x2c06("0x42")](videoSrc),
    hls[_0x2c06("0x5")](video);
}
video[_0x2c06("0x11")] = function () {
  hlsOrHtmlPlayer && reloadMedia();
};
