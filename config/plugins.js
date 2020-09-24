module.exports = ({ env }) => ({
  upload: {
    provider: "azure-storage",
    providerOptions: {
      account: "ows",
      accountKey: env("STORAGE_ACCOUNT_KEY"),
      serviceBaseURL: "https://ows.blob.core.chinacloudapi.cn",
      containerName: "files",
      defaultPath: "assets",
      maxConcurrent: 10,
    },
  },
});
