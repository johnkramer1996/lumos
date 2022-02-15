const frontStaticSelectors = {
   getFaqData: ({ frontStatic }) => frontStatic.faqData,
   getFaq: ({ frontStatic }) => frontStatic.faq,
   getContacts: ({ frontStatic }) => frontStatic.contacts,
   getBlogCategoryData: ({ frontStatic }) => frontStatic.blogCategoryData,
   getBlogCategory: ({ frontStatic }) => frontStatic.blogCategory,
   getPagesData: ({ frontStatic }) => frontStatic.pagesData,
   getPages: ({ frontStatic }) => frontStatic.pages,
   getPage: ({ frontStatic }) => frontStatic.page,
}

export default frontStaticSelectors
