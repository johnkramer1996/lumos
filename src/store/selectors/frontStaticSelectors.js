const frontStaticSelectors = {
   getData: ({ frontStatic }) => frontStatic.data,
   getFaq: ({ frontStatic }) => frontStatic.faq,
   getContacts: ({ frontStatic }) => frontStatic.contacts,
}

export default frontStaticSelectors
