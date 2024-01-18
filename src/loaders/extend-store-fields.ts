export default async function () {
  const imports = (await import('@medusajs/medusa/dist/api/routes/store/index')) as any

  imports.allowedStoreFields = [
    ...imports.allowedStoreFields,
    'members',
  ]

  imports.defaultStoreFields = [
    ...imports.defaultStoreFields,
    'members',
  ]

  imports.allowedStoreRelations = [
    ...imports.allowedStoreRelations,
    'members',
  ]

  imports.defaultStoreRelations = [
    ...imports.defaultStoreRelations,
    'members',
  ]
}