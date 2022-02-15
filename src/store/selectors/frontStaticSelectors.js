const frontStaticSelectors = {
   getFaqData: ({ frontStatic }) => frontStatic.faqData,
   getFaq: ({ frontStatic }) => frontStatic.faq,
   getContacts: ({ frontStatic }) => frontStatic.contacts,
   getBlogCategoryData: ({ frontStatic }) => frontStatic.blogCategoryData,
   getBlogCategory: ({ frontStatic }) => frontStatic.blogCategory,
   getBlogs: ({ frontStatic }) => frontStatic.blogs,
   getBlog: ({ frontStatic }) => frontStatic.blog,
   getInterested: ({ frontStatic }) => frontStatic.interested,
   getPagesData: ({ frontStatic }) => frontStatic.pagesData,
   getPages: ({ frontStatic }) => frontStatic.pages,
   getPage: ({ frontStatic }) => frontStatic.page,
}

export default frontStaticSelectors
