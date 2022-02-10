const authSelectors = {
   getUser: ({ auth }) => auth.user,
   getToken: ({ auth }) => auth.token,
   getRole: ({ auth }) => auth.role,
}

export default authSelectors
