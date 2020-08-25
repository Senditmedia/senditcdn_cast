var _0x1f83 = [
  "FRAG_LOAD_ERROR",
  "attachMedia",
  "url",
  "ErrorDetails",
  "Send\x20it:\x20Live\x20endpoint\x20currently\x20down",
  "status",
  "NETWORK_ERROR",
  "DONE",
  "abort",
  "open",
  "log",
  "send",
  "recoverMediaError",
  "isSupported",
  "key",
  "https://cfv.sendit.media/",
  "location",
  "Send\x20it:\x20Media\x20error,\x20we\x20trying\x20to\x20fix\x20it",
  "online",
  "type",
  "ErrorTypes",
  "loadSource",
  "value",
  "https://error.sendit.media/hls/error.m3u8",
  "MEDIA_ATTACHED",
  ".m3u8",
  "details",
  "load",
  "categories",
  "play",
  "Send\x20it:\x20Live\x20endpoint\x20is\x20up,\x20switching\x20to\x20it",
  "Fragment\x20ERROR\x20DECTECT",
  "ERROR",
  "onerror",
  "Events",
  "createElement",
  "input",
  "src",
  "get",
  "destroy",
  "loop",
  "MEDIA_ERROR",
  "OTHER_ERROR",
  "onreadystatechange",
  "MANIFEST_PARSED",
  "getElementById",
  "senditVideo",
  "videos",
  "Send\x20it:\x20Network\x20error,\x20we\x20trying\x20to\x20fix\x20it",
  "addEventListener",
  "Send\x20it:\x20Other\x20error,\x20we\x20trying\x20to\x20fix\x20it",
  "sources",
  "debug",
  "fatal",
  "HEAD",
  "splice",
  "DefaultConfig",
  "search",
  "detachMedia",
  "canPlayType",
  "appendChild",
];
(function (_0x4cc3f5, _0x1f8363) {
  var _0x40d702 = function (_0xe036bd) {
    while (--_0xe036bd) {
      _0x4cc3f5["push"](_0x4cc3f5["shift"]());
    }
  };
  _0x40d702(++_0x1f8363);
})(_0x1f83, 0x1a6);
var _0x40d7 = function (_0x4cc3f5, _0x1f8363) {
  _0x4cc3f5 = _0x4cc3f5 - 0x0;
  var _0x40d702 = _0x1f83[_0x4cc3f5];
  return _0x40d702;
};
var video = document[_0x40d7("0x32")](_0x40d7("0x33")),
  videoError = document[_0x40d7("0x32")]("errorVideo"),
  bufferStallErrors = 0x0,
  errorLoop = 0x0;
const queryString = window[_0x40d7("0x15")][_0x40d7("0x1")],
  urlParams = new URLSearchParams(queryString),
  key = urlParams[_0x40d7("0x2b")](_0x40d7("0x13"));
var videoSrc = _0x40d7("0x14") + key + _0x40d7("0x1e"),
  videoErrorSrc = _0x40d7("0x1c"),
  liveOnline = !![],
  hls,
  element2Monitor = document[_0x40d7("0x28")](_0x40d7("0x29"));
(element2Monitor[_0x40d7("0x18")] = "hidden"),
  (element2Monitor[_0x40d7("0x1b")] = _0x40d7("0x17")),
  document["body"][_0x40d7("0x4")](element2Monitor);
var element2MonitorStartValue = _0x40d7("0x17"),
  element2Monitor4Reload = !![];
if (Hls[_0x40d7("0x12")]()) {
  var hls = new Hls({
    debug: ![],
    enableWorker: !![],
    startLevel: -0x1,
    autoLevelEnabled: !![],
    pLoader: function (_0x2b4be9) {
      let _0x27e900 = new Hls[_0x40d7("0x0")]["loader"](_0x2b4be9);
      (this[_0x40d7("0xd")] = () => _0x27e900["abort"]()),
        (this[_0x40d7("0x2c")] = () => _0x27e900["destroy"]()),
        (this[_0x40d7("0x20")] = (_0x3bf7b9, _0x322bab, _0x1ecbee) => {
          let { type: _0xee6451, url: _0x10ad41 } = _0x3bf7b9;
          _0x27e900[_0x40d7("0x20")](_0x3bf7b9, _0x322bab, _0x1ecbee);
        });
    },
  });
  hls[_0x40d7("0x1a")](videoSrc),
    (mediaContents =
      mediaJSON[_0x40d7("0x21")][0x0][_0x40d7("0x34")][0x0][_0x40d7("0x38")]),
    mediaContents[_0x40d7("0x3c")](0x0, 0x1, videoSrc),
    hls[_0x40d7("0x6")](video),
    hls["on"](Hls[_0x40d7("0x27")][_0x40d7("0x1d")], function () {
      hls["on"](Hls[_0x40d7("0x27")][_0x40d7("0x31")], function (
        _0x843ed8,
        _0xec4aaf
      ) {});
    }),
    hls["on"](Hls[_0x40d7("0x27")][_0x40d7("0x25")], function (
      _0xbe2bac,
      _0x459c87
    ) {
      var _0x26fd9f = _0x459c87[_0x40d7("0x18")],
        _0x3986ae = _0x459c87["details"],
        _0x24fe45 = _0x459c87[_0x40d7("0x3a")];
      switch (_0x459c87[_0x40d7("0x1f")]) {
        case Hls[_0x40d7("0x8")][_0x40d7("0x5")]:
          console[_0x40d7("0x39")](_0x40d7("0x24"));
          break;
        default:
          break;
      }
      if (_0x3986ae == "bufferStalledError") {
        if (errorLoop > 0x0) {
        } else errorLoop++;
      }
      if (_0x459c87[_0x40d7("0x3a")])
        switch (_0x26fd9f) {
          case Hls[_0x40d7("0x19")][_0x40d7("0xb")]:
            console[_0x40d7("0xf")](_0x40d7("0x35"));
            hls[_0x40d7("0x7")] == videoSrc &&
              (hls[_0x40d7("0x2")](),
              hls["loadSource"](videoErrorSrc),
              (mediaContents =
                mediaJSON[_0x40d7("0x21")][0x0][_0x40d7("0x34")][0x0][
                  "sources"
                ]),
              mediaContents[_0x40d7("0x3c")](0x0, 0x1, videoErrorSrc),
              hls[_0x40d7("0x6")](video),
              (video[_0x40d7("0x2d")] = !![]),
              (element2Monitor["value"] = "offline"));
            errorLoop = 0x0;
            break;
          case Hls[_0x40d7("0x19")][_0x40d7("0x2e")]:
            console[_0x40d7("0xf")](_0x40d7("0x16")), hls[_0x40d7("0x11")]();
            break;
          case Hls[_0x40d7("0x19")][_0x40d7("0x2f")]:
            console[_0x40d7("0xf")](_0x40d7("0x37")), hls[_0x40d7("0x11")]();
            break;
          default:
            hls[_0x40d7("0x2c")]();
            break;
        }
    });
} else
  video[_0x40d7("0x3")]("application/vnd.apple.mpegurl") &&
    ((video[_0x40d7("0x2a")] = videoSrc),
    video[_0x40d7("0x36")]("loadedmetadata", function () {}));
var somethingChanged = ![];
function track_change() {
  element2Monitor[_0x40d7("0x1b")] != element2MonitorStartValue &&
    ((element2MonitorStartValue = element2Monitor["value"]),
    (somethingChanged = !![]),
    onlineMonitor());
}
setInterval(function () {
  track_change();
}, 0x64);
function onlineMonitor() {
  if (hls[_0x40d7("0x7")] == videoErrorSrc) {
    var _0x37f205 = new XMLHttpRequest();
    _0x37f205[_0x40d7("0xe")](_0x40d7("0x3b"), videoSrc),
      (_0x37f205[_0x40d7("0x30")] = function () {
        if (this["readyState"] == this[_0x40d7("0xc")]) {
          if (
            this[_0x40d7("0xa")] == 0x194 &&
            hls[_0x40d7("0x7")] == videoErrorSrc
          )
            console[_0x40d7("0xf")](_0x40d7("0x9"), videoSrc);
          else
            this[_0x40d7("0xa")] == 0xc8 &&
              hls[_0x40d7("0x7")] == videoErrorSrc &&
              (console[_0x40d7("0xf")](_0x40d7("0x23")),
              (element2Monitor[_0x40d7("0x1b")] = _0x40d7("0x17")),
              (somethingChanged = ![]),
              (video[_0x40d7("0x2d")] = ![]),
              hls[_0x40d7("0x2")](),
              hls[_0x40d7("0x1a")](videoSrc),
              (mediaContents =
                mediaJSON[_0x40d7("0x21")][0x0][_0x40d7("0x34")][0x0][
                  _0x40d7("0x38")
                ]),
              mediaContents[_0x40d7("0x3c")](0x0, 0x1, videoSrc),
              hls[_0x40d7("0x6")](video),
              video[_0x40d7("0x22")]());
        }
      }),
      _0x37f205[_0x40d7("0x10")](),
      setTimeout(onlineMonitor, 0x7d0);
  }
}
onlineMonitor();
function reloadMedia() {
  console[_0x40d7("0xf")]("LETS\x20RELOAD"),
    hls[_0x40d7("0x2")](),
    hls[_0x40d7("0x1a")](videoSrc),
    hls[_0x40d7("0x6")](video);
}
video[_0x40d7("0x26")] = function () {
  reloadMedia();
};
