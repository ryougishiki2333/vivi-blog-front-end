module.exports = (api) => {
  // This caches the Babel config by environment.
  api.cache.using(() => process.env.NODE_ENV);
  return {
    presets: [
      [
        "@babel/preset-env",
        {
          useBuiltIns: "entry",
          corejs: "3.22",
        },
      ],
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
        },
      ],
      "@babel/preset-typescript",
    ],
    // ... other options
    plugins: [
      // ... other plugins
      // Applies the react-refresh Babel plugin on non-production modes only
      !api.env("production") && "react-refresh/babel",
    ].filter(Boolean),
  };
};
