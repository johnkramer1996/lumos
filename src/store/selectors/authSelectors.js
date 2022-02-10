const authSelectors = {
   getUser: ({ auth }) => auth.user,
   getToken: ({ auth }) => auth.token,
   getRolesId: ({ auth }) => auth.rolesId,
}

export default authSelectors
