const systemSelectors = {
   getReferences: ({ system }) => system.references,
   getSocUrl: ({ system }) => system.socUrls,
   getUserSettings: ({ system }) => system.userSettings,
}

export default systemSelectors
