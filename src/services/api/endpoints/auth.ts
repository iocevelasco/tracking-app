import { baseApi as api } from '../baseApi'
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    authorizeToken: build.mutation<AuthorizeTokenApiResponse, AuthorizeTokenApiArg>({
      query: (queryArg) => ({
        url: `/Manager/v1/Authorize/Token`,
        method: 'POST',
        body: queryArg.managerAuthorizeRequest,
      }),
    }),
  }),
  overrideExisting: false,
})
export { injectedRtkApi as authApi }
export type AuthorizeTokenApiResponse = /** status 200  */ ManagerAuthorizeResponse
export type AuthorizeTokenApiArg = {
  managerAuthorizeRequest: ManagerAuthorizeRequest
}
export type ManagerAuthorizeResponse = {
  AuthToken?: string
}
export type ValueProviderResult = {
  AttemptedValue?: string
  Culture?: string
  RawValue?: any
}
export type Exception = {
  Message?: string
  InnerException?: Exception
  StackTrace?: string
  Source?: string
}
export type ModelError = {
  Exception?: Exception
  ErrorMessage?: string
}
export type ModelErrorCollection = ModelError[]
export type ModelState = {
  Value?: ValueProviderResult
  Errors?: ModelErrorCollection
}
export type ModelStateDictionary = {
  Count: number
  IsReadOnly: boolean
  IsValid: boolean
  Keys?: string[]
  Values?: ModelState[]
  Item?: ModelState
}
export type ManagerAuthorizeRequest = {
  Username: string
  Password: string
}
export const { useAuthorizeTokenMutation } = injectedRtkApi
