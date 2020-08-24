var _0x55e4 = [
  "loadSource",
  ".m3u8",
  "offline",
  "splice",
  "createElement",
  "DONE",
  "Send\x20it:\x20Live\x20endpoint\x20is\x20up,\x20switching\x20to\x20it",
  "Send\x20it:\x20Network\x20error,\x20we\x20trying\x20to\x20fix\x20it",
  "OTHER_ERROR",
  "https://cfvb.sendit.media/",
  "Send\x20it:\x20Live\x20endpoint\x20currently\x20down",
  "input",
  "attachMedia",
  "destroy",
  "appendChild",
  "readyState",
  "isSupported",
  "x6wN8y6jbjyRQLAJ",
  "detachMedia",
  "open",
  "search",
  "categories",
  "abort",
  "onreadystatechange",
  "Events",
  "Send\x20it:\x20Other\x20error,\x20we\x20trying\x20to\x20fix\x20it",
  "url",
  "hidden",
  "videos",
  "recoverMediaError",
  "log",
  "NETWORK_ERROR",
  "loop",
  "play",
  "addEventListener",
  "fatal",
  "Send\x20it:\x20Media\x20error,\x20we\x20trying\x20to\x20fix\x20it",
  "errorVideo",
  "MEDIA_ATTACHED",
  "sources",
  "ERROR",
  "body",
  "debug",
  "MANIFEST_PARSED",
  "application/vnd.apple.mpegurl",
  "senditVideo",
  "MEDIA_ERROR",
  "https://error.sendit.media/hls/error.m3u8",
  "canPlayType",
  "ErrorTypes",
  "loader",
  "value",
  "send",
  "load",
  "online",
  "bufferStalledError",
  "type",
  "status",
  "onerror",
  "getElementById",
];
(function (_0x16d716, _0x55e4bc) {
  var _0x27868f = function (_0x41ef2c) {
    while (--_0x41ef2c) {
      _0x16d716["push"](_0x16d716["shift"]());
    }
  };
  _0x27868f(++_0x55e4bc);
})(_0x55e4, 0xc4);
var _0x2786 = function (_0x16d716, _0x55e4bc) {
  _0x16d716 = _0x16d716 - 0x0;
  var _0x27868f = _0x55e4[_0x16d716];
  return _0x27868f;
};
var video = document[_0x2786("0x2b")](_0x2786("0x1d")),
  videoError = document["getElementById"](_0x2786("0x15")),
  bufferStallErrors = 0x0,
  errorLoop = 0x0;
const queryString = window["location"][_0x2786("0x4")],
  urlParams = new URLSearchParams(queryString),
  key = _0x2786("0x1");
var videoSrc = _0x2786("0x35") + key + _0x2786("0x2d"),
  videoErrorSrc = _0x2786("0x1f"),
  liveOnline = !![],
  hls,
  element2Monitor = document[_0x2786("0x30")](_0x2786("0x37"));
(element2Monitor[_0x2786("0x28")] = _0x2786("0xb")),
  (element2Monitor[_0x2786("0x23")] = _0x2786("0x26")),
  document[_0x2786("0x19")][_0x2786("0x3a")](element2Monitor);
var element2MonitorStartValue = _0x2786("0x26"),
  element2Monitor4Reload = !![];
if (Hls[_0x2786("0x0")]()) {
  var hls = new Hls({
    debug: ![],
    enableWorker: !![],
    startLevel: -0x1,
    autoLevelEnabled: !![],
    pLoader: function (_0x51de4c) {
      let _0x4f2d08 = new Hls["DefaultConfig"][_0x2786("0x22")](_0x51de4c);
      (this[_0x2786("0x6")] = () => _0x4f2d08[_0x2786("0x6")]()),
        (this[_0x2786("0x39")] = () => _0x4f2d08[_0x2786("0x39")]()),
        (this[_0x2786("0x25")] = (_0x440589, _0x58856b, _0xf54cfc) => {
          let { type: _0x20b40b, url: _0x57a55f } = _0x440589;
          _0x4f2d08[_0x2786("0x25")](_0x440589, _0x58856b, _0xf54cfc);
        });
    },
  });
  hls[_0x2786("0x2c")](videoSrc),
    (mediaContents =
      mediaJSON[_0x2786("0x5")][0x0][_0x2786("0xc")][0x0][_0x2786("0x17")]),
    mediaContents[_0x2786("0x2f")](0x0, 0x1, videoSrc),
    hls[_0x2786("0x38")](video),
    hls["on"](Hls["Events"][_0x2786("0x16")], function () {
      hls["on"](Hls[_0x2786("0x8")][_0x2786("0x1b")], function (
        _0x4ad955,
        _0x1f5f28
      ) {});
    }),
    hls["on"](Hls[_0x2786("0x8")][_0x2786("0x18")], function (
      _0x379001,
      _0x43ec65
    ) {
      var _0x541b27 = _0x43ec65[_0x2786("0x28")],
        _0x4068e9 = _0x43ec65["details"],
        _0x2a7e7e = _0x43ec65["fatal"];
      switch (_0x43ec65["details"]) {
        case Hls["ErrorDetails"]["FRAG_LOAD_ERROR"]:
          console[_0x2786("0x1a")]("Fragment\x20ERROR\x20DECTECT");
          break;
        default:
          break;
      }
      if (_0x4068e9 == _0x2786("0x27")) {
        if (errorLoop > 0x0) {
        } else errorLoop++;
      }
      if (_0x43ec65[_0x2786("0x13")])
        switch (_0x541b27) {
          case Hls[_0x2786("0x21")][_0x2786("0xf")]:
            console[_0x2786("0xe")](_0x2786("0x33"));
            hls[_0x2786("0xa")] == videoSrc &&
              (hls[_0x2786("0x2")](),
              hls[_0x2786("0x2c")](videoErrorSrc),
              (mediaContents =
                mediaJSON[_0x2786("0x5")][0x0][_0x2786("0xc")][0x0]["sources"]),
              mediaContents[_0x2786("0x2f")](0x0, 0x1, videoErrorSrc),
              hls[_0x2786("0x38")](video),
              (video[_0x2786("0x10")] = !![]),
              (element2Monitor[_0x2786("0x23")] = _0x2786("0x2e")));
            errorLoop = 0x0;
            break;
          case Hls[_0x2786("0x21")][_0x2786("0x1e")]:
            console[_0x2786("0xe")](_0x2786("0x14")), hls[_0x2786("0xd")]();
            break;
          case Hls[_0x2786("0x21")][_0x2786("0x34")]:
            console[_0x2786("0xe")](_0x2786("0x9")), hls[_0x2786("0xd")]();
            break;
          default:
            hls["destroy"]();
            break;
        }
    });
} else
  video[_0x2786("0x20")](_0x2786("0x1c")) &&
    ((video["src"] = videoSrc),
    video[_0x2786("0x12")]("loadedmetadata", function () {}));
var somethingChanged = ![];
function track_change() {
  element2Monitor[_0x2786("0x23")] != element2MonitorStartValue &&
    ((element2MonitorStartValue = element2Monitor[_0x2786("0x23")]),
    (somethingChanged = !![]),
    onlineMonitor());
}
setInterval(function () {
  track_change();
}, 0x64);
function onlineMonitor() {
  if (hls["url"] == videoErrorSrc) {
    var _0xd4067d = new XMLHttpRequest();
    _0xd4067d[_0x2786("0x3")]("HEAD", videoSrc),
      (_0xd4067d[_0x2786("0x7")] = function () {
        if (this[_0x2786("0x3b")] == this[_0x2786("0x31")]) {
          if (this[_0x2786("0x29")] == 0x194 && hls["url"] == videoErrorSrc)
            console["log"](_0x2786("0x36"), videoSrc);
          else
            this[_0x2786("0x29")] == 0xc8 &&
              hls[_0x2786("0xa")] == videoErrorSrc &&
              (console[_0x2786("0xe")](_0x2786("0x32")),
              (element2Monitor[_0x2786("0x23")] = _0x2786("0x26")),
              (somethingChanged = ![]),
              (video[_0x2786("0x10")] = ![]),
              hls[_0x2786("0x2")](),
              hls[_0x2786("0x2c")](videoSrc),
              (mediaContents =
                mediaJSON[_0x2786("0x5")][0x0][_0x2786("0xc")][0x0]["sources"]),
              mediaContents["splice"](0x0, 0x1, videoSrc),
              hls[_0x2786("0x38")](video),
              video[_0x2786("0x11")]());
        }
      }),
      _0xd4067d[_0x2786("0x24")](),
      setTimeout(onlineMonitor, 0x7d0);
  }
}
onlineMonitor();
function reloadMedia() {
  console[_0x2786("0xe")]("LETS\x20RELOAD"),
    hls[_0x2786("0x2")](),
    hls[_0x2786("0x2c")](videoSrc),
    hls[_0x2786("0x38")](video);
}
video[_0x2786("0x2a")] = function () {
  reloadMedia();
};
