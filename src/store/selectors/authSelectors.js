const authSelectors = {
   getUser: ({ auth }) => auth.user,
   getIsAuth: ({ auth }) => auth.isAuth,
   getToken: ({ auth }) => auth.token,
   getRolesId: ({ auth }) => auth.rolesId,
   getStep: ({ auth }) => auth.step,
}

export default authSelectors
