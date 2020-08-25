var _0x17bd = [
  "abort",
  "FRAG_LOAD_ERROR",
  "onerror",
  "status",
  "Send\x20it:\x20Live\x20endpoint\x20currently\x20down",
  "fatal",
  "senditVideo",
  "ERROR",
  "DONE",
  "readyState",
  "canPlayType",
  "errorVideo",
  "details",
  "destroy",
  "categories",
  "online",
  "OTHER_ERROR",
  "debug",
  "addEventListener",
  "getElementById",
  "application/vnd.apple.mpegurl",
  "Send\x20it:\x20Other\x20error,\x20we\x20trying\x20to\x20fix\x20it",
  "type",
  "search",
  "Send\x20it:\x20R",
  "recoverMediaError",
  "attachMedia",
  "bufferStalledError",
  "Events",
  "DefaultConfig",
  "ErrorTypes",
  "ErrorDetails",
  "url",
  "sources",
  "HEAD",
  "value",
  "get",
  "createElement",
  ".m3u8",
  "detachMedia",
  "Send\x20it:\x20Media\x20error,\x20we\x20trying\x20to\x20fix\x20it",
  "load",
  "src",
  "key",
  "MEDIA_ERROR",
  "MEDIA_ATTACHED",
  "loadedmetadata",
  "splice",
  "play",
  "log",
  "loadSource",
  "https://cfv.sendit.media/",
  "loop",
  "send",
  "videos",
  "Send\x20it:\x20Live\x20endpoint\x20is\x20up,\x20switching\x20to\x20it",
  "location",
  "loader",
];
(function (_0x3d607d, _0x17bd93) {
  var _0x1b463b = function (_0x56b05a) {
    while (--_0x56b05a) {
      _0x3d607d["push"](_0x3d607d["shift"]());
    }
  };
  _0x1b463b(++_0x17bd93);
})(_0x17bd, 0x166);
var _0x1b46 = function (_0x3d607d, _0x17bd93) {
  _0x3d607d = _0x3d607d - 0x0;
  var _0x1b463b = _0x17bd[_0x3d607d];
  return _0x1b463b;
};
var video = document[_0x1b46("0x9")](_0x1b46("0x36")),
  videoError = document["getElementById"](_0x1b46("0x1")),
  bufferStallErrors = 0x0,
  errorLoop = 0x0;
const queryString = window[_0x1b46("0x2e")][_0x1b46("0xd")],
  urlParams = new URLSearchParams(queryString),
  key = urlParams[_0x1b46("0x1a")](_0x1b46("0x21"));
var videoSrc = _0x1b46("0x29") + key + _0x1b46("0x1c"),
  videoErrorSrc = "https://error.sendit.media/hls/error.m3u8",
  liveOnline = !![],
  hls,
  element2Monitor = document[_0x1b46("0x1b")]("input");
(element2Monitor[_0x1b46("0xc")] = "hidden"),
  (element2Monitor["value"] = _0x1b46("0x5")),
  document["body"]["appendChild"](element2Monitor);
var element2MonitorStartValue = _0x1b46("0x5"),
  element2Monitor4Reload = !![];
if (Hls["isSupported"]()) {
  var hls = new Hls({
    debug: ![],
    enableWorker: !![],
    startLevel: -0x1,
    autoLevelEnabled: !![],
    pLoader: function (_0x177e1d) {
      let _0x458b82 = new Hls[_0x1b46("0x13")][_0x1b46("0x2f")](_0x177e1d);
      (this[_0x1b46("0x30")] = () => _0x458b82[_0x1b46("0x30")]()),
        (this[_0x1b46("0x3")] = () => _0x458b82[_0x1b46("0x3")]()),
        (this[_0x1b46("0x1f")] = (_0x6a6965, _0x18f214, _0x178cc9) => {
          let { type: _0xd9cebe, url: _0x2be2ae } = _0x6a6965;
          _0x458b82["load"](_0x6a6965, _0x18f214, _0x178cc9);
        });
    },
  });
  hls[_0x1b46("0x28")](videoSrc),
    (mediaContents =
      mediaJSON[_0x1b46("0x4")][0x0][_0x1b46("0x2c")][0x0][_0x1b46("0x17")]),
    mediaContents[_0x1b46("0x25")](0x0, 0x1, videoSrc),
    hls[_0x1b46("0x10")](video),
    hls["on"](Hls["Events"][_0x1b46("0x23")], function () {
      hls["on"](Hls["Events"]["MANIFEST_PARSED"], function (
        _0x40a6c6,
        _0x90aaae
      ) {});
    }),
    hls["on"](Hls[_0x1b46("0x12")][_0x1b46("0x37")], function (
      _0x29bf76,
      _0x25b70f
    ) {
      var _0x3e337e = _0x25b70f[_0x1b46("0xc")],
        _0x5e069b = _0x25b70f["details"],
        _0x31e575 = _0x25b70f[_0x1b46("0x35")];
      switch (_0x25b70f[_0x1b46("0x2")]) {
        case Hls[_0x1b46("0x15")][_0x1b46("0x31")]:
          console[_0x1b46("0x7")]("Fragment\x20ERROR\x20DECTECT");
          break;
        default:
          break;
      }
      if (_0x5e069b == _0x1b46("0x11")) {
        if (errorLoop > 0x0) {
        } else errorLoop++;
      }
      if (_0x25b70f[_0x1b46("0x35")])
        switch (_0x3e337e) {
          case Hls["ErrorTypes"]["NETWORK_ERROR"]:
            console[_0x1b46("0x27")](
              "Send\x20it:\x20Network\x20error,\x20we\x20trying\x20to\x20fix\x20it"
            );
            hls[_0x1b46("0x16")] == videoSrc &&
              (hls[_0x1b46("0x1d")](),
              hls[_0x1b46("0x28")](videoErrorSrc),
              (mediaContents =
                mediaJSON[_0x1b46("0x4")][0x0][_0x1b46("0x2c")][0x0][
                  _0x1b46("0x17")
                ]),
              mediaContents[_0x1b46("0x25")](0x0, 0x1, videoErrorSrc),
              hls[_0x1b46("0x10")](video),
              (video[_0x1b46("0x2a")] = !![]),
              (element2Monitor["value"] = "offline"));
            errorLoop = 0x0;
            break;
          case Hls["ErrorTypes"][_0x1b46("0x22")]:
            console[_0x1b46("0x27")](_0x1b46("0x1e")),
              hls["recoverMediaError"]();
            break;
          case Hls[_0x1b46("0x14")][_0x1b46("0x6")]:
            console[_0x1b46("0x27")](_0x1b46("0xb")), hls[_0x1b46("0xf")]();
            break;
          default:
            hls[_0x1b46("0x3")]();
            break;
        }
    });
} else
  video[_0x1b46("0x0")](_0x1b46("0xa")) &&
    ((video[_0x1b46("0x20")] = videoSrc),
    video[_0x1b46("0x8")](_0x1b46("0x24"), function () {}));
var somethingChanged = ![];
function track_change() {
  element2Monitor[_0x1b46("0x19")] != element2MonitorStartValue &&
    ((element2MonitorStartValue = element2Monitor[_0x1b46("0x19")]),
    (somethingChanged = !![]),
    onlineMonitor());
}
setInterval(function () {
  track_change();
}, 0x64);
function onlineMonitor() {
  if (hls[_0x1b46("0x16")] == videoErrorSrc) {
    var _0x2ec993 = new XMLHttpRequest();
    _0x2ec993["open"](_0x1b46("0x18"), videoSrc),
      (_0x2ec993["onreadystatechange"] = function () {
        if (this[_0x1b46("0x39")] == this[_0x1b46("0x38")]) {
          if (this["status"] == 0x194 && hls[_0x1b46("0x16")] == videoErrorSrc)
            console[_0x1b46("0x27")](_0x1b46("0x34"), videoSrc);
          else
            this[_0x1b46("0x33")] == 0xc8 &&
              hls[_0x1b46("0x16")] == videoErrorSrc &&
              (console[_0x1b46("0x27")](_0x1b46("0x2d")),
              (element2Monitor["value"] = _0x1b46("0x5")),
              (somethingChanged = ![]),
              (video["loop"] = ![]),
              hls["detachMedia"](),
              hls[_0x1b46("0x28")](videoSrc),
              (mediaContents =
                mediaJSON["categories"][0x0][_0x1b46("0x2c")][0x0][
                  _0x1b46("0x17")
                ]),
              mediaContents[_0x1b46("0x25")](0x0, 0x1, videoSrc),
              hls["attachMedia"](video),
              video[_0x1b46("0x26")]());
        }
      }),
      _0x2ec993[_0x1b46("0x2b")](),
      setTimeout(onlineMonitor, 0x7d0);
  }
}
onlineMonitor();
function reloadMedia() {
  console[_0x1b46("0x27")](_0x1b46("0xe")),
    hls[_0x1b46("0x1d")](),
    hls["loadSource"](videoSrc),
    hls[_0x1b46("0x10")](video);
}
video[_0x1b46("0x32")] = function () {
  reloadMedia();
};
