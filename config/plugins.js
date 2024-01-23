module.exports = ({ env }) => ({
    "netlify-deployments": {
      enabled: true,
      config: {
        accessToken: "nfp_7bjZFhTKHW9xhWmMNo9SDbKGGUok87Ljf4a1",
        sites: [
          {
            name: 'Krane Properties',
            id: "5ac656ce-8bff-4346-bb7a-1035311c1074",
            buildHook: "https://api.netlify.com/build_hooks/65b00fe627179f288a91910b",
            branch: 'master' // optional
          }
        ]
      },
    },
  });