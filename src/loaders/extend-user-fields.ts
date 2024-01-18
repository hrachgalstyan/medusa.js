export default async function () {
  const imports = (await import('@medusajs/medusa/dist/api/routes/admin/users/index')) as any

  imports.allowedUsersFields = [
    ...imports.allowedUsersFields,
    'store_id',
  ]

  imports.defaultUsersFields = [
    ...imports.defaultUsersFields,
    'storeId',
  ]

  imports.allowedUserRelations = [
    ...imports.allowedUserRelations,
    'store',
  ]

  imports.defaultUserRelations = [
    ...imports.defaultUserRelations,
    'store',
  ]
}