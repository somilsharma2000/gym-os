self.__BUILD_MANIFEST = {
  "__rewrites": {
    "afterFiles": [
      {
        "source": "/gym-os/dashboard",
        "destination": "/gym-os/dashboard/index.html"
      },
      {
        "source": "/gym-os/dashboard/",
        "destination": "/gym-os/dashboard/index.html"
      }
    ],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()