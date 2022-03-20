module.exports = ({ env }) => ({
  documentation: {
    config: {
      info: {
        version: "1.0.0",
      },
      "x-strapi-config": {
        path: "/documentation",
        showGeneratedFiles: true,
        plugins: ["email", "upload", "users-permissions"],
        pluginsForWhichToGenerateDoc: ["email", "upload", "users-permissions"],
      },
    },
  },
  upload: {
    config: {
      provider: "strapi-provider-upload-azure-storage",
      providerOptions: {
        account: env("STORAGE_ACCOUNT"),
        accountKey: env("STORAGE_ACCOUNT_KEY"),
        serviceBaseURL: env("STORAGE_URL"),
        containerName: env("STORAGE_CONTAINER_NAME"),
        cdnBaseURL: env("STORAGE_CDN_URL"),
        defaultPath: "assets",
        maxConcurrent: 10,
      },
    },
  },
});
