/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface IApiUnauthorized {
  /**
   * HTTP Status
   * @default 401
   */
  statusCode: object;
  /**
   * message
   * @default "Unauthorized"
   */
  message: object;
}

export interface IApiAudit {
  api_id: string;
  /** @format uuid */
  usu_id: string;
  api_method: string;
  api_url: string;
  api_payload: string;
}

export interface IAuditListApiResponse {
  total: object;
  page: object;
  pages: object;
  size: object;
  data: IApiAudit[];
}

export interface IActivityAudit {
  act_id: string;
  act_message: string;
  act_error: string;
  /** The user associated with the activity. */
  user: IUser;
  /** The project associated with the activity. */
  project: IProject;
  /**
   * The date and time the activity was created.
   * @format date-time
   * @example "2021-01-01T00:00:00.000Z"
   */
  created_at: string;
  /**
   * The date and time the activity was updated.
   * @format date-time
   * @example "2021-01-01T00:00:00.000Z"
   */
  updated_at: string;
}

export interface IPlatform {
  /** The unique identifier of a platform. */
  plt_id: string;
  /** Name of the platform, e.g., "ANDROID", "IOS". */
  plt_name: string;
  /** URL or path to the platform icon. */
  plt_icon: string;
  /** Color of the platform in HEX format, e.g. "#FFFFFF". */
  plt_color: string;
  /** Platform constant value. */
  plt_constant: IPlatformPltConstantEnum;
  /** List of versions associated with this platform. */
  versions: IVersion[];
}

export interface IVersion {
  /** The unique identifier of a version. */
  ver_id: string;
  /** Name of the version, e.g., v1.0.1. */
  ver_name: string;
  /** Determines if the upgrade is mandatory. */
  ver_force_upgrade: boolean;
  /** Determines if the version is enabled. */
  ver_enabled: boolean;
  /** Platform of the version. */
  platform: IPlatform;
  /** Internal notes for the version. */
  ver_internal_notes: string | null;
  /**
   * JSON of language of the title.
   * @example {"pt-br":"Uma nova versão disponível","en-us":"A new version is available"}
   */
  ver_translation_title: object;
  /** JSON of language of the message. */
  ver_translation_message: object | null;
  /** JSON of language of the button text. */
  ver_translation_update_button_text: object | null;
  /**
   * JSON of language of the dismiss button text.
   * @example {"pt-br":"Agora não","en-us":"Not now"}
   */
  ver_translation_dismiss_button_text: object;
  /**
   * The date the version was created.
   * @format date-time
   */
  created_at: string;
  /**
   * The date the version was last updated.
   * @format date-time
   */
  updated_at: string;
  /** The date the version was deleted. */
  deleted_at: object | null;
  /** Associated project of the version. */
  project: IProject;
}

export interface IProjectInvitation {
  /**
   * The unique ID of the invitation.
   * @format uuid
   * @example "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6"
   */
  prji_id: string;
  /**
   * The email address to which the invitation is sent.
   * @example "user@example.com"
   */
  prji_email: string;
  /**
   * The unique code for the invitation.
   * @example "INVITE123"
   */
  prji_invitation_code: string;
  /**
   * Whether the invitation has been accepted.
   * @example false
   */
  prji_accepted: boolean;
  /**
   * The ID of the project to which the user is invited.
   * @format uuid
   * @example "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6"
   */
  project: string;
  /**
   * The date and time when the invitation was created.
   * @format date-time
   * @example "2023-10-20T14:15:30Z"
   */
  created_at: string;
  /**
   * The date and time when the invitation was last updated.
   * @format date-time
   * @example "2023-10-21T10:00:00Z"
   */
  updated_at: string;
  /**
   * The date and time when the project was invitation, if applicable.
   * @format date-time
   * @example "2023-10-22T15:45:00Z"
   */
  deleted_at: string | null;
}

export interface IProjectTranslations {
  /**
   * The unique ID of the project translation.
   * @format uuid
   * @example "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6"
   */
  prt_id: string;
  /**
   * List of languages associated with the version.
   * @example {"pt-br":"Texto em português","en-us":"Text in English"}
   */
  prt_default_translated_messages: object;
  /**
   * JSON of language of the title.
   * @example {"pt-br":"Uma nova versão disponível","en-us":"A new version is available"}
   */
  prt_default_title: object;
  /**
   * JSON of language of the button text.
   * @example {"pt-br":"Atualizar agora","en-us":"Update now"}
   */
  prt_default_update_button_text: object;
  /**
   * JSON of language of the dismiss button text.
   * @example {"pt-br":"Agora não","en-us":"Not now"}
   */
  prt_default_dismiss_button_text: object;
  /**
   * The date and time when the project translation was created.
   * @format date-time
   * @example "2023-10-20T14:15:30Z"
   */
  created_at: string;
  /**
   * The date and time when the project translation was last updated.
   * @format date-time
   * @example "2023-10-21T10:00:00Z"
   */
  updated_at: string;
  /**
   * The date and time when the project translation was deleted, if applicable.
   * @format date-time
   * @example "2023-10-22T15:45:00Z"
   */
  deleted_at: string | null;
}

export interface IProjectValidationCounter {
  /**
   * The unique ID of the project validation counter.
   * @format uuid
   * @example "f2bdec4c-ddf9-41cc-9570-9e26f107cd4f"
   */
  pvc_id: string;
  /**
   * The month and year of the validation count.
   * @example "2022-01"
   */
  year_month: string;
  /**
   * The number of validations that have been done.
   * @example 0
   */
  validations_counter: number;
  /** The project that this validation counter belongs to. */
  project: IProject;
}

export interface IProject {
  /**
   * The unique ID of the project.
   * @format uuid
   * @example "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6"
   */
  prj_id: string;
  /**
   * The name of the project.
   * @maxLength 100
   * @uniqueItems false
   * @example "My Awesome Project"
   */
  prj_name: string;
  /**
   * A detailed description of the project.
   * @maxLength 100
   * @example "This project is about building a comprehensive platform for users."
   */
  prj_description: string | null;
  /**
   * The iOS bundle ID of the project.
   * @maxLength 100
   * @example "com.mycompany.myapp"
   */
  prj_ios_bundle_id: string | null;
  /**
   * The Android bundle ID of the project.
   * @maxLength 100
   * @example "com.mycompany.myapp"
   */
  prj_android_bundle_id: string | null;
  /**
   * The URL for the project in the app store.
   * @maxLength 100
   * @example "https://play.google.com/store/apps/details?id=com.mycompany.myapp"
   */
  prj_android_store_url: string;
  /**
   * The URL for the project in the app store.
   * @maxLength 100
   * @example "https://appstore.com/store/apps/details?id=com.mycompany.myapp"
   */
  prj_ios_store_url: string;
  /**
   * The API key associated with the project.
   * @maxLength 100
   * @example "12a34b56-c78d-90ef-12gh-34ij56kl78mn"
   */
  prj_api_key: string;
  /**
   * The date and time when the project was created.
   * @format date-time
   * @example "2023-10-20T14:15:30Z"
   */
  created_at: string;
  /**
   * The date and time when the project was last updated.
   * @format date-time
   * @example "2023-10-21T10:00:00Z"
   */
  updated_at: string;
  /**
   * The date and time when the project was deleted, if applicable.
   * @format date-time
   * @example "2023-10-22T15:45:00Z"
   */
  deleted_at: string | null;
  /** The list of users associated with the project. */
  projectUsers: IProjectUser[];
  /** List of activity audits associated with the project. */
  activityAudits: IActivityAudit[];
  /** The versions of the project. */
  versions: IVersion[];
  /** The invitations for the project. */
  invitations: IProjectInvitation[];
  /** The translations for the project. */
  projectTranslations: IProjectTranslations;
  /** The validation counters for this project. */
  validationCounters: IProjectValidationCounter[];
}

export interface IRole {
  /** The unique ID of the role. */
  role_id: string;
  /**
   * The name of the role.
   * @example "Admin"
   */
  role_name: string;
  /**
   * A brief description of the role.
   * @example "Has access to all functionalities."
   */
  role_description: string;
  /**
   * The type of the role.
   * @example "OWNER"
   */
  role_constant: IRoleRoleConstantEnum;
  /**
   * Date when the role was created.
   * @format date-time
   */
  created_at: string;
  /**
   * Date when the role was last updated.
   * @format date-time
   */
  updated_at: string;
  /**
   * Date when the role was deleted (if applicable).
   * @format date-time
   */
  deleted_at: string;
}

export interface IProjectUser {
  /** The unique identifier of a project user. */
  id: string;
  /** The user associated with a project. */
  user: IUser;
  /** The project associated with a user. */
  project: IProject;
  /** The role of a user in a project. */
  role: IRole;
}

export interface IStripeProduct {
  /** The unique identifier of a stripe_product. */
  stp_id: string;
  /** The ID of the product item in Stripe. */
  stp_product_id: string;
  /** The ID of the pricing/plan item in Stripe. */
  stp_product_price_id: string;
  /** The chosen plan for the product. */
  stp_plan_type: IStripeProductStpPlanTypeEnum;
  /**
   * The date the product was created.
   * @format date-time
   */
  created_at: string;
  /** The date the product was last updated. */
  deleted_at: object;
  /** List of billings associated with the stripe product. */
  billings: string[];
}

export interface IBilling {
  /** The unique identifier for a billing record. */
  blg_id: string;
  /** Indicates if the billing (subscription) is active or not. */
  blg_subscription_status: string;
  /** The ID of the subscription item in Stripe. */
  blg_subscription_price_id: string;
  /** The ID of the customer in Stripe. */
  blg_customer_id: string;
  /** The user associated with the billing. */
  user: IUser;
  /** The stripe product (subscription) associated with the billing. */
  stripeProduct: IStripeProduct;
  /**
   * The date the billing record was created.
   * @format date-time
   */
  created_at: string;
  /**
   * The date the billing record was last updated.
   * @format date-time
   */
  updated_at: string;
}

export interface ILoginAudit {
  /**
   * The user id (usu_id) associated with the login.
   * @example "35680c0b-47d7-4076-ae26-73013125d7ea"
   */
  lga_id: string;
  /**
   * The linked provider ID (for example, "google.com" for the Google provider).
   * @example "google.com"
   */
  lga_type: string;
  /**
   * The ip address of the login.
   * @example "95.130.17.84"
   */
  lga_ip_address: string;
  /**
   * The client of the login.
   * @example "Chrome, Mac OS 10.15.7"
   */
  lga_client: string;
  /** The user associated with the login. */
  user: IUser;
  /**
   * The date and time the login was created.
   * @format date-time
   * @example "2021-01-01T00:00:00.000Z"
   */
  created_at: string;
  /**
   * The date and time the login was updated.
   * @format date-time
   * @example "2021-01-01T00:00:00.000Z"
   */
  updated_at: string;
}

export interface IUser {
  /** The unique identifier of a user. */
  usu_id: string;
  /** Firebase UID of the user. */
  firebase_uid: string | null;
  /** Name of the user. */
  usu_name: string | null;
  /** Email of the user. */
  usu_email: string | null;
  /** Profile photo of the user. */
  usu_profile_photo: string | null;
  /**
   * The date the user was created.
   * @format date-time
   */
  created_at: string;
  /**
   * The date the user was last updated.
   * @format date-time
   */
  updated_at: string;
  /** The date the user was deleted. */
  deleted_at: object | null;
  /** List of projects associated with the user. */
  projectUsers: IProjectUser[];
  /** The billing associated with the user. */
  billing: IBilling;
  /** List of activity audits associated with the user. */
  activityAudits: IActivityAudit[];
  /** List of login audits associated with the user. */
  loginAudits: ILoginAudit[];
  /**
   * User config
   * @example {"bb1aaa45-3e9e-40d0-9a1f-0f4848bec21d":{"value":"true"},"b727ccb4-969d-4ab0-9306-c787e80fb308":{"value":"false"}}
   */
  config: object;
}

export interface IAuditListActivitiesResponseDto {
  act_id: string;
  act_message: string;
  act_error: string;
  /** The user associated with the activity. */
  user: IUser;
  /** The project associated with the activity. */
  project: IProject;
  /**
   * The date and time the activity was created.
   * @format date-time
   * @example "2021-01-01T00:00:00.000Z"
   */
  created_at: string;
  /**
   * The date and time the activity was updated.
   * @format date-time
   * @example "2021-01-01T00:00:00.000Z"
   */
  updated_at: string;
  /**
   * A message describing the activity.
   * @example "The user created a new project."
   */
  message: string;
}

export interface IAuditListActivitiesResponse {
  total: object;
  page: object;
  pages: object;
  size: object;
  data: IAuditListActivitiesResponseDto[];
}

export interface IOmitTypeClass {
  /** The unique identifier of a Twilio audit. */
  twl_id: string;
  /** User ID associated with the Twilio audit. */
  usu_id: string | null;
  /** Recipient of the Twilio message. */
  twl_to: string;
  /** Data sent in the Twilio message. */
  twl_data_send: string | null;
  /** Data received from the Twilio message. */
  twl_data_received: string | null;
  /** Error message, if any, from the Twilio message. */
  twl_error: string | null;
  /**
   * The date the Twilio audit was created.
   * @format date-time
   */
  created_at: string;
  /**
   * The date the Twilio audit was last updated.
   * @format date-time
   */
  updated_at: string;
  /**
   * The date the Twilio audit was deleted.
   * @format date-time
   */
  deleted_at: string | null;
}

export interface IAuditListTwilioResponse {
  total: object;
  page: object;
  pages: object;
  size: object;
  data: IOmitTypeClass[];
}

export interface IAuditListLoginResponse {
  total: object;
  page: object;
  pages: object;
  size: object;
  data: ILoginAudit[];
}

export interface IAuthDto {
  /**
   * The Firebase idToken provided by front-end integration
   * @format uid
   * @example "eyJhbGciOiJSUzI1NiIsImtpZCI6InRCME0yQSJ9.eyJpc3MiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGUuY29tLyIsImF1ZCI6ImdyaXR6a28tZDYzZjAiLCJpYXQiOjE2ODM0NjQwNzUsImV4cCI6MTY4NDY3MzY3NSwidXNlcl9pZCI6ImZiNHlmbXhyVnlaSzUxYkFLek55OXphbGFkQzIiLCJlbWFpbCI6ImNsaWVudGVAcGVuc2VhcHAuY29tLmJyIiwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIiwidmVyaWZpZWQiOmZhbHNlfQ.PAmIT2IYJQr69KQ2Nf9SU48CtEFhCfO2xn-XOeCB-CFyTIt5XfoaHDNHkwLm8oQH2QqyAR3wcve1QPMipzKEc6VaWYjPTrY6FVCRGk-IyGggxIhkGNRLeFpywXp-EH2rGk7bETf3bUS8yzvXvBQZ_UdjayCO8xzUhnqix_Y5sYHtCj-Qgf3EMmyR3wyE8nJHPxy-tm5y0nP65psN1wzTeSClRmcsBB8P-myOkPMG0mylJWxqdtH1D32cwBRlexvwi0MgFeF0miWaCrMb3mYyM9umATtJg4YByeJt1qzynFUp1EzQY0dlG2A_ag0DPuOhtpIbfFXFiEfEEy7eZcreIA"
   */
  firebase_idToken: string;
}

export interface IAuthLoginResponse {
  /** @format jwt */
  token: string;
  user: IUser;
}

export interface IAuthInfoResponse {
  user: IUser;
}

export interface IAuthExternalDto {
  /** @example "test@ratlab.com" */
  email: string;
  /** @example "q1w2e3" */
  password: string;
}

export interface IAuthRegisterDto {
  /**
   * The user name
   * @example "John"
   */
  name: string;
  /**
   * The user email
   * @example "john.doe@example.com"
   */
  email: string;
  /**
   * The user password
   * @example "password123"
   */
  password: string;
  /**
   * Acceptance of user policy
   * @example true
   */
  policy: boolean;
  /**
   * Firebase USER uid
   * @example "1234567890"
   */
  firebase_uid: string;
}

export interface IOption {
  id: string;
  value: string;
}

export interface IAutocompleteDefaultResponse {
  options: IOption[];
}

export interface IProjectUpsertDto {
  /**
   * The project UUID. If empty or not present will create a new project, if present with a valid UUID, will update project values
   * @example "32fe5547-09c2-43be-bb0d-2a7ff5675c78"
   */
  prj_id: string | undefined;
  /**
   * The name of the project
   * @example "My Awesome Project"
   */
  prj_name: string;
  /**
   * A detailed description of the project
   * @example "This project is about building a comprehensive platform for users."
   */
  prj_description: string | null;
  /**
   * The Android bundle ID for the project
   * @example "com.example.myapp.android"
   */
  prj_android_bundle_id: string | null;
  /**
   * The URL where the project or its application is available on a store
   * @example "https://play.google.com/store/apps/details?id=com.example.myapp"
   */
  prj_android_store_url: string | null;
  /**
   * The iOS bundle ID for the project
   * @example "com.example.myapp.ios"
   */
  prj_ios_bundle_id: string | null;
  /**
   * The URL where the project or its application is available on a store
   * @example "https://apps.apple.com/us/app/myapp/id1234567890"
   */
  prj_ios_store_url: string | null;
}

export interface IUpsertProjectTranslationsDto {
  /**
   * The unique ID of the project translation.
   * @format uuid
   * @example "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6"
   */
  prt_id?: string;
  /**
   * List of languages associated with the version.
   * @example {"pt-br":"Texto em português","en-us":"Text in English"}
   */
  prt_default_translated_messages: object;
  /**
   * JSON of language of the title.
   * @example {"pt-br":"Uma nova versão disponível","en-us":"A new version is available"}
   */
  prt_default_title: object;
  /**
   * JSON of language of the button text.
   * @example {"pt-br":"Atualizar agora","en-us":"Update now"}
   */
  prt_default_update_button_text: object;
  /**
   * JSON of language of the dismiss button text.
   * @example {"pt-br":"Agora não","en-us":"Not now"}
   */
  prt_default_dismiss_button_text: object;
  /**
   * The unique ID of the associated project.
   * @format uuid
   * @example "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6"
   */
  prj_id: string;
}

export interface IProjectDeleteDto {
  /**
   * A valid UUID for a project ID
   * @example "a21114a9-a457-4085-a48a-5afddfac8e9d"
   */
  prj_id: string;
}

export interface IProjectGenerateApiKeyDto {
  /**
   * The project UUID. If empty or not present will create a new project, if present with a valid UUID, will update project values
   * @example "32fe5547-09c2-43be-bb0d-2a7ff5675c78"
   */
  prj_id: string;
}

export interface IProjectInviteDto {
  /**
   * A valid UUID for a project ID
   * @example "a21114a9-a457-4085-a48a-5afddfac8e9d"
   */
  prj_id: string;
  /**
   * A valid email address
   * @example "johndoe@example.com"
   */
  email: string;
  /**
   * The type of the role.
   * @example "DEVELOPER"
   */
  role_constant: IProjectInviteDtoRoleConstantEnum;
}

export interface IProjectAcceptInvitationDto {
  /**
   * A valid UUID for a project ID
   * @example "a21114a9-a457-4085-a48a-5afddfac8e9d"
   */
  prj_id: string;
  /**
   * The unique code for the invitation.
   * @example "INVITE123"
   */
  prji_invitation_code: string;
}

export interface IProjectInviteCancelDto {
  /**
   * A valid UUID for a project ID
   * @example "a21114a9-a457-4085-a48a-5afddfac8e9d"
   */
  prj_id: string;
  /**
   * A valid UUID for a project-invitation ID
   * @example "03b77a2f-48a5-4a5b-bd7f-0bc38bac87fa"
   */
  prji_id: string;
}

export type IUpdateResult = object;

export interface IProjectUninviteDto {
  /**
   * A valid UUID for a project ID
   * @example "a21114a9-a457-4085-a48a-5afddfac8e9d"
   */
  prj_id: string;
  /**
   * A valid UUID for a project ID
   * @example "a21114a9-a457-4085-a48a-5afddfac8e9d"
   */
  usu_id: string;
}

export interface IProjectUserPermissionDto {
  /**
   * A valid UUID for a project ID
   * @example "a21114a9-a457-4085-a48a-5afddfac8e9d"
   */
  prj_id: string;
  /**
   * A valid UUID for a project ID
   * @example "a21114a9-a457-4085-a48a-5afddfac8e9d"
   */
  usu_id: string;
}

export interface IProjectUserPermissionResponseDto {
  /**
   * A valid UUID for a project ID
   * @example "a21114a9-a457-4085-a48a-5afddfac8e9d"
   */
  prj_id: string;
  /**
   * A valid UUID for a project ID
   * @example "a21114a9-a457-4085-a48a-5afddfac8e9d"
   */
  usu_id: string;
  /**
   * Whether the user is an admin in the project
   * @example true
   */
  is_admin: boolean;
  /**
   * Whether the user is a developer in the project
   * @example true
   */
  is_developer: boolean;
  /**
   * Whether the user is a viewer in the project
   * @example true
   */
  is_viewer: boolean;
}

export interface IUsage {
  /**
   * The amount used
   * @example 10
   */
  used: number;
  /**
   * The limit
   * @example 100
   */
  limit: number;
  /**
   * The usage percentage
   * @example "10%"
   */
  amount_percentage_string: string;
  /**
   * The usage percentage
   * @example 10
   */
  amount_percentage_value: number;
  /**
   * The color of the usage percentage
   * @example "#FF0000"
   */
  amount_percentage_color: string;
  /**
   * The remaining amount
   * @example 90
   */
  remaining: number;
  /**
   * The severity of the usage percentage
   * @example "warning"
   */
  severity: IUsageSeverityEnum;
  /**
   * Show warning
   * @example true
   */
  show_warning: boolean;
}

export interface IProjectUsageResponse {
  /**
   * A valid UUID for a project ID
   * @example "a21114a9-a457-4085-a48a-5afddfac8e9d"
   */
  prj_id: string;
  /** Actual usage */
  validations: IUsage;
  /** Collaborators usage */
  collaborators: IUsage;
  /** Versions usage */
  versions: IUsage;
}

export interface IPaginatedMetaDocumented {
  /** Number of items per page */
  itemsPerPage: number;
  /** Total number of items */
  totalItems: number;
  /** Current requested page */
  currentPage: number;
  /** Total number of pages */
  totalPages: number;
  /** Sorting by columns */
  sortBy?: (string | IPaginatedMetaDocumentedSortByEnum)[][];
  /** Search by fields */
  searchBy?: string[];
  /** Search term */
  search?: string;
  /** List of selected fields */
  select?: string[];
  /** Filters that applied to the query */
  filter?: object;
}

export interface IPaginatedLinksDocumented {
  /** Link to first page */
  first?: string;
  /** Link to previous page */
  previous?: string;
  /** Link to current page */
  current?: string;
  /** Link to next page */
  next?: string;
  /** Link to last page */
  last?: string;
}

export interface IPaginatedDocumented {
  /** Array of entities */
  data: object[];
  /** Pagination Metadata */
  meta: IPaginatedMetaDocumented;
  /** Links to pages */
  links: IPaginatedLinksDocumented;
}

export interface IVersionUpsertDto {
  /**
   * The version UUID. If empty or not present will create a new version, if present with a valid UUID, will update version values
   * @example "32fe5547-09c2-43be-bb0d-2a7ff5675c78"
   */
  ver_id: string | null;
  /**
   * The name of the version
   * @example "v1.0.1"
   */
  ver_name: string;
  /**
   * Indicates if the update is mandatory
   * @example true
   */
  ver_force_upgrade: boolean;
  /**
   * Indicates if the version is enabled
   * @example true
   */
  ver_enabled: boolean;
  /**
   * The platform for the version (e.g., ANDROID, IOS)
   * @example "ANDROID"
   */
  plt_constant: IVersionUpsertDtoPltConstantEnum;
  /**
   * Internal notes for the version
   * @example "These are internal version notes."
   */
  ver_internal_notes: string | null;
  /**
   * List of languages associated with the version.
   * @example {"pt-br":"Texto em português","en-us":"Text in English"}
   */
  ver_default_translated_messages: object;
  /**
   * JSON of language of the title.
   * @example {"pt-br":"Uma nova versão disponível","en-us":"A new version is available"}
   */
  ver_default_title: object;
  /**
   * JSON of language of the button text.
   * @example {"pt-br":"Atualizar agora","en-us":"Update now"}
   */
  ver_default_update_button_text: object;
  /**
   * JSON of language of the dismiss button text.
   * @example {"pt-br":"Agora não","en-us":"Not now"}
   */
  ver_default_dismiss_button_text: object;
  /**
   * The project UUID associated with the version
   * @example "32fe5547-09c2-43be-bb0d-2a7ff5675c78"
   */
  prj_id: string;
}

export interface IVersionUEnableOrDisableDto {
  /**
   * The version UUID. If empty or not present will create a new version, if present with a valid UUID, will update version values
   * @example "32fe5547-09c2-43be-bb0d-2a7ff5675c78"
   */
  ver_id: string | null;
  /**
   * Indicates if the version is enabled
   * @example true
   */
  ver_enabled: boolean;
}

export interface IVersionForceUpgradeEnableDisable {
  /**
   * The version UUID. If empty or not present will create a new version, if present with a valid UUID, will update version values
   * @example "32fe5547-09c2-43be-bb0d-2a7ff5675c78"
   */
  ver_id: string | null;
  /**
   * Indicates if the update is mandatory
   * @example true
   */
  ver_force_upgrade: boolean;
}

export interface IVersionDeleteDto {
  /**
   * A valid UUID for a version ID
   * @example "a21114a9-a457-4085-a48a-5afddfac8e9d"
   */
  ver_id: string;
}

export interface IBillingStatusPlan {
  /** The unique slug of the billing plan */
  slug: IBillingStatusPlanSlugEnum;
  /** The label of the billing plan */
  label: string;
}

export interface IBillingStatusDto {
  /** The subscription status title of the user */
  title: string;
  /**
   * The informative message about the billing status
   * @example "Your subscription is active."
   */
  message: string;
  /**
   * The color corresponding to the billing status (for frontend display purposes)
   * @example "success"
   */
  color: string;
  /**
   * Flag indicating if a warning should be displayed on the frontend
   * @default false
   * @example true
   */
  should_show_warning: boolean;
  /** The detailed billing object associated with the user */
  billing: IBilling;
  /** The billing plan associated with the user */
  plan: IBillingStatusPlan;
}

export interface IStripeFeatureDto {
  /**
   * The name of the feature
   * @example "feature #1"
   */
  name: string;
}

export interface IStripeProductDto {
  /**
   * Unique identifier for the product
   * @example "prod_Oru1rZAKLBRHxQ"
   */
  id: string;
  /**
   * Type of the object
   * @example "product"
   */
  object: string;
  /**
   * Whether the product is currently available for purchase
   * @example true
   */
  active: boolean;
  /**
   * Array of attributes for the product
   * @example []
   */
  attributes: string[];
  /**
   * Time at which the object was created (Unix timestamp)
   * @example 1698014024
   */
  created: number;
  /**
   * ID of the default price for this product
   * @example "price_1O4ADMBX1OXnOEq92IkcYhlj"
   */
  default_price: string;
  /**
   * Product description
   * @example null
   */
  description: string;
  /**
   * Array of features for the product
   * @example [{"name":"Feat #1"},{"name":"Feat #2"},{"name":"Feat #3"}]
   */
  features: IStripeFeatureDto[];
  /**
   * Array of URLs for images of the product
   * @example []
   */
  images: string[];
  /**
   * Whether the object exists in live mode
   * @example false
   */
  livemode: boolean;
  /**
   * Metadata associated with the product
   * @example {}
   */
  metadata: object;
  /**
   * Product's name
   * @example "free"
   */
  name: string;
  /**
   * Dimensions of the product for shipping purposes
   * @example null
   */
  package_dimensions: object;
  /**
   * Whether this product is shipped (physical goods)
   * @example null
   */
  shippable: boolean;
  /**
   * Statement descriptor for the product
   * @example null
   */
  statement_descriptor: string;
  /**
   * Tax code ID
   * @example null
   */
  tax_code: string;
  /**
   * Type of the product (good or service)
   * @example "service"
   */
  type: string;
  /**
   * Label representing units of the product
   * @example null
   */
  unit_label: string;
  /**
   * Time at which the object was last updated (Unix timestamp)
   * @example 1698014024
   */
  updated: number;
  /**
   * URL of a publicly-accessible webpage for the product
   * @example null
   */
  url: string;
}

export interface IStripeRecurringDto {
  /**
   * Specifies how to compute the usage aggregation for the price.
   * @example null
   */
  aggregate_usage: string;
  /**
   * The frequency with which a subscription is billed.
   * @example "year"
   */
  interval: string;
  /**
   * The number of intervals between each subscription billing.
   * @example 1
   */
  interval_count: number;
  /**
   * The number of days in a trial period or `null` if the price is not on trial.
   * @example null
   */
  trial_period_days: number;
}

export interface IStripePriceDto {
  /**
   * Unique identifier for the object.
   * @example "price_1HzlVZGK5jyOzuO3d81YVvT1"
   */
  id: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   * @example "price"
   */
  object: string;
  /**
   * Whether the price can be used for new purchases.
   * @example true
   */
  active: boolean;
  /**
   * Describes how to compute the price per period.
   * @example "per_unit"
   */
  billing_scheme: string;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   * @example 1622524800
   */
  created: number;
  /**
   * Three-letter ISO currency code, in lowercase. Must be a supported currency.
   * @example "usd"
   */
  currency: string;
  /**
   * Prices defined in each available currency option.
   * @example {"usd":{"unit_amount":1000}}
   */
  currency_options: object;
  /** Configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links. */
  custom_unit_amount: object;
  /**
   * Has the value true if the object exists in live mode or the value false if the object exists in test mode.
   * @example true
   */
  livemode: boolean;
  /**
   * A lookup key used to retrieve prices dynamically from a static string.
   * @example "spring_sale"
   */
  lookup_key: string;
  /**
   * Set of key-value pairs that you can attach to an object.
   * @example {"size":"medium","color":"blue"}
   */
  metadata: object;
  /**
   * A brief description of the price, hidden from customers.
   * @example "Monthly subscription"
   */
  nickname: string;
  /**
   * The ID of the product this price is associated with.
   * @example "prod_Oru1rZAKLBRHxQ"
   */
  product: string;
  /** The recurring components of a price such as interval and usage_type. */
  recurring: IStripeRecurringDto;
  /**
   * Specifies whether the price is considered inclusive of taxes or exclusive of taxes.
   * @example "exclusive"
   */
  tax_behavior: string;
  /** Each element represents a pricing tier. */
  tiers: string[];
  /**
   * Defines if the tiering price should be graduated or volume based.
   * @example "volume"
   */
  tiers_mode: string;
  /** Apply a transformation to the reported usage or set quantity before computing the amount billed. */
  transform_quantity: object;
  /**
   * One of one_time or recurring depending on whether the price is for a one-time purchase or a recurring (subscription) purchase.
   * @example "recurring"
   */
  type: string;
  /**
   * The unit amount in cents to be charged, represented as a whole integer if possible.
   * @example 1000
   */
  unit_amount: number;
  /**
   * The unit amount in cents to be charged, represented as a decimal string with at most 12 decimal places.
   * @example "1000.00"
   */
  unit_amount_decimal: string;
}

export interface IStripeMetadataDto {
  /** Stripe product metadata */
  stripe_product_metadata: IStripeProductDto;
  /** Stripe price metadata */
  stripe_price_metadata: IStripePriceDto;
}

export interface IStripeProductListDto {
  /** The unique identifier of a stripe_product. */
  stp_id: string;
  /** The ID of the product item in Stripe. */
  stp_product_id: string;
  /** The ID of the pricing/plan item in Stripe. */
  stp_product_price_id: string;
  /** The chosen plan for the product. */
  stp_plan_type: IStripeProductListDtoStpPlanTypeEnum;
  /**
   * The date the product was created.
   * @format date-time
   */
  created_at: string;
  /** The date the product was last updated. */
  deleted_at: object;
  /** List of billings associated with the stripe product. */
  billings: string[];
  /** Stripe product metadata */
  stripe_metadata: IStripeMetadataDto;
}

export interface IAvailablePlansDto {
  /**
   * Flag indicating if the plan is the current plan for the user
   * @default false
   * @example false
   */
  is_current_plan: boolean;
  /** The detailed product object */
  product: IStripeProductListDto;
  /**
   * The text to display on the button
   * @example "Upgrade | Downgrade | Manage subscription"
   */
  button_text: string;
}

export interface IUpdateUserDto {
  /** Name of the user. */
  usu_name?: string;
  /** Email of the user. */
  usu_email?: string;
  /** Profile photo of the user. */
  usu_profile_photo?: string;
}

export interface IConfig {
  /**
   * The configuration ID
   * @example "927869d9-d06d-4860-9278-f6b1e5263102"
   */
  conf_id: string;
  /** Type of config, e.g., "EMAIL", "SMS". */
  conf_type: IConfigConfTypeEnum;
  /** Title of the config. */
  conf_title: string;
  /** Description of the config. */
  conf_description: string;
  /** Default value of the config. */
  conf_default_value: string;
  /** Form type of the config. */
  conf_form_type: IConfigConfFormTypeEnum;
  /** Config category */
  conf_category: string;
}

export interface IUserConfigResponseDto {
  /**
   * The value associated with the configuration
   * @example "true"
   */
  value: string;
  /**
   * The configuration object
   * @example {"conf_id":"eac7c3ce-b63c-423e-b212-9967c075f67d","conf_type":"EMAIL","conf_title":"Billing updates","conf_description":"Updates about your billing and payments.","conf_default_value":"true","conf_form_type":"CHECKBOX","conf_category":"Email notifications"}
   */
  config: IConfig;
}

export interface IUserConfigGroupedByCategory {
  /**
   * The category of the configuration
   * @example "Email notifications"
   */
  category: string;
  /** The configurations associated with the category */
  configs: IUserConfigResponseDto[];
}

export interface IUserConfigUpdateDto {
  /**
   * The configuration ID
   * @example "927869d9-d06d-4860-9278-f6b1e5263102"
   */
  conf_id: string;
  /**
   * The new value for the configuration
   * @example "true"
   */
  new_value: string;
}

export interface IIPublicPlanAvailableDto {
  /** Metadata for yearly subscription plans in Stripe */
  year: IStripeMetadataDto[];
  /** Metadata for monthly subscription plans in Stripe */
  monthly: IStripeMetadataDto[];
}

export interface ICheckVersionDto {
  /**
   * The current version of the application.
   * @example "1.0.0"
   */
  version: string;
  /**
   * The platform on which the application is running. This can be any platform that the application supports.
   * @example "ANDROID"
   */
  platform: ICheckVersionDtoPlatformEnum;
  /**
   * The language that the application is currently using. This is optional and defaults to "en" if not provided.
   * @example "en"
   */
  language?: string;
  /**
   * The API key used to authenticate the request.
   * @example "727fb40897b3c11dce6be9f72b7e3cbaea73fe030565392084fbd7f449d09fd3"
   */
  api_key: string;
}

/** Platform constant value. */
export enum IPlatformPltConstantEnum {
  ANDROID = 'ANDROID',
  IOS = 'IOS',
}

/**
 * The type of the role.
 * @example "OWNER"
 */
export enum IRoleRoleConstantEnum {
  OWNER = 'OWNER',
  DEVELOPER = 'DEVELOPER',
  VIEWER = 'VIEWER',
}

/** The chosen plan for the product. */
export enum IStripeProductStpPlanTypeEnum {
  Free = 'free',
  Startup = 'startup',
  Enterprise = 'enterprise',
}

/**
 * The type of the role.
 * @example "DEVELOPER"
 */
export enum IProjectInviteDtoRoleConstantEnum {
  OWNER = 'OWNER',
  DEVELOPER = 'DEVELOPER',
  VIEWER = 'VIEWER',
}

/**
 * The severity of the usage percentage
 * @example "warning"
 */
export enum IUsageSeverityEnum {
  Success = 'success',
  Info = 'info',
  Warning = 'warning',
  Error = 'error',
}

export enum IPaginatedMetaDocumentedSortByEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}

/**
 * The platform for the version (e.g., ANDROID, IOS)
 * @example "ANDROID"
 */
export enum IVersionUpsertDtoPltConstantEnum {
  ANDROID = 'ANDROID',
  IOS = 'IOS',
}

/** The unique slug of the billing plan */
export enum IBillingStatusPlanSlugEnum {
  Free = 'free',
  Startup = 'startup',
  Enterprise = 'enterprise',
}

/** The chosen plan for the product. */
export enum IStripeProductListDtoStpPlanTypeEnum {
  Free = 'free',
  Startup = 'startup',
  Enterprise = 'enterprise',
}

/** Type of config, e.g., "EMAIL", "SMS". */
export enum IConfigConfTypeEnum {
  EMAIL = 'EMAIL',
  SMS = 'SMS',
}

/** Form type of the config. */
export enum IConfigConfFormTypeEnum {
  TEXT = 'TEXT',
  NUMBER = 'NUMBER',
  CHECKBOX = 'CHECKBOX',
}

/**
 * The platform on which the application is running. This can be any platform that the application supports.
 * @example "ANDROID"
 */
export enum ICheckVersionDtoPlatformEnum {
  ANDROID = 'ANDROID',
  IOS = 'IOS',
}

import type { AxiosInstance, AxiosRequestConfig, HeadersDefaults, ResponseType } from 'axios';
import axios from 'axios';

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || '' });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === 'object' && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<T> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === 'object') {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== 'string') {
      body = JSON.stringify(body);
    }

    return this.instance
      .request({
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
        },
        params: query,
        responseType: responseFormat,
        data: body,
        url: path,
      })
      .then((response) => response.data);
  };
}

/**
 * @title Appupdate API
 * @version 1.0.0
 * @contact
 *
 * This API uses the concept of "upset". If the `UUID` is not present in the request, it indicates a creation action. If the `UUID` is present, it indicates an update action.
 *
 * ## TOKEN
 *
 * To generate a valid TOKEN to authorize these requests, you MUST first login to FIREBASE on frontend. Then, use the `/auth/login` endpoint to generate the token. Once you have the token, click the "Authorize" button below and paste the token value into the input field, then click "Authorize" again!.
 *
 * Actually this API does not have API-KEY for the requests, but is planned to have in the future to the paid plans.
 *
 * The only endpoint that requires an API-KEY is the `/check-version` endpoint. Which is the unique endpoint that your app will use.
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  audits = {
    /**
     * No description
     *
     * @tags Audits
     * @name AuditControllerListApiAudits
     * @request GET:/audits/api
     * @secure
     * @response `200` `IAuditListApiResponse`
     * @response `401` `IApiUnauthorized` Unauthorized response
     */
    auditControllerListApiAudits: (
      query: {
        /**
         * The page is the number to paginate response
         * @min 1
         * @default 1
         */
        page: number;
        /**
         * The ammount of data in the result
         * @min 10
         * @max 100
         * @default 10
         */
        size: number;
        /**
         * @format uuid
         * @example "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6"
         */
        usu_id: string;
        /** One of the API endpoints URI like `/maintenance/list` */
        api_uri: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<IAuditListApiResponse, IApiUnauthorized>({
        path: `/audits/api`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Audits
     * @name AuditControllerListActivities
     * @request GET:/audits/activities
     * @secure
     * @response `200` `IAuditListActivitiesResponse`
     * @response `401` `IApiUnauthorized` Unauthorized response
     */
    auditControllerListActivities: (
      query: {
        /**
         * The page is the number to paginate response
         * @min 1
         * @default 1
         */
        page: number;
        /**
         * The ammount of data in the result
         * @min 10
         * @max 100
         * @default 10
         */
        size: number;
        /**
         * A valid UUID for a project ID
         * @example "4bafbd2e-5907-4cdd-87c0-f83e1029ad46"
         */
        prj_id: string;
        /**
         * A valid UUID for a project ID
         * @example "a21114a9-a457-4085-a48a-5afddfac8e9d"
         */
        usu_id?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<IAuditListActivitiesResponse, IApiUnauthorized>({
        path: `/audits/activities`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Audits
     * @name AuditControllerListTwilio
     * @request GET:/audits/twilio
     * @secure
     * @response `200` `IAuditListTwilioResponse`
     * @response `401` `IApiUnauthorized` Unauthorized response
     */
    auditControllerListTwilio: (
      query: {
        /**
         * The page is the number to paginate response
         * @min 1
         * @default 1
         */
        page: number;
        /**
         * The ammount of data in the result
         * @min 10
         * @max 100
         * @default 10
         */
        size: number;
        /**
         * A valid User UUID
         * @format uuid
         */
        usu_id?: string;
        /** A valid phone number like `+5511123456789` */
        twl_to?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<IAuditListTwilioResponse, IApiUnauthorized>({
        path: `/audits/twilio`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Audits
     * @name AuditControllerListLogin
     * @request GET:/audits/login
     * @secure
     * @response `200` `IAuditListLoginResponse`
     * @response `401` `IApiUnauthorized` Unauthorized response
     */
    auditControllerListLogin: (
      query: {
        /**
         * The page is the number to paginate response
         * @min 1
         * @default 1
         */
        page: number;
        /**
         * The ammount of data in the result
         * @min 10
         * @max 100
         * @default 10
         */
        size: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<IAuditListLoginResponse, IApiUnauthorized>({
        path: `/audits/login`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  auth = {
    /**
     * No description
     *
     * @tags Auth
     * @name AuthControllerLogin
     * @request POST:/auth/login
     * @response `200` `IAuthLoginResponse`
     */
    authControllerLogin: (data: IAuthDto, params: RequestParams = {}) =>
      this.request<IAuthLoginResponse, any>({
        path: `/auth/login`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name AuthControllerValidate
     * @request GET:/auth/info
     * @secure
     * @response `200` `IAuthInfoResponse`
     * @response `401` `IApiUnauthorized` Unauthorized response
     */
    authControllerValidate: (params: RequestParams = {}) =>
      this.request<IAuthInfoResponse, IApiUnauthorized>({
        path: `/auth/info`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name AuthControllerFblogin
     * @request POST:/auth/fblogin
     * @response `200` `IAuthLoginResponse`
     * @response `401` `IApiUnauthorized` Unauthorized response
     */
    authControllerFblogin: (data: IAuthExternalDto, params: RequestParams = {}) =>
      this.request<IAuthLoginResponse, IApiUnauthorized>({
        path: `/auth/fblogin`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name AuthControllerRegister
     * @request POST:/auth/register
     * @response `200` `IAuthLoginResponse`
     * @response `401` `IApiUnauthorized` Unauthorized response
     */
    authControllerRegister: (data: IAuthRegisterDto, params: RequestParams = {}) =>
      this.request<IAuthLoginResponse, IApiUnauthorized>({
        path: `/auth/register`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  platform = {
    /**
     * No description
     *
     * @tags Platform
     * @name PlatformControllerList
     * @request GET:/platform
     * @secure
     * @response `200` `(IPlatform)[]` Returns all platforms
     * @response `401` `IApiUnauthorized` Unauthorized response
     */
    platformControllerList: (params: RequestParams = {}) =>
      this.request<IPlatform[], IApiUnauthorized>({
        path: `/platform`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  autocomplete = {
    /**
     * No description
     *
     * @tags Autocomplete
     * @name AutocompleteControllerRoles
     * @request GET:/autocomplete/roles
     * @secure
     * @response `200` `IAutocompleteDefaultResponse` List `ROLES` as options
     * @response `401` `IApiUnauthorized` Unauthorized response
     */
    autocompleteControllerRoles: (params: RequestParams = {}) =>
      this.request<IAutocompleteDefaultResponse, IApiUnauthorized>({
        path: `/autocomplete/roles`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Autocomplete
     * @name AutocompleteControllerPlatforms
     * @request GET:/autocomplete/platforms
     * @secure
     * @response `200` `IAutocompleteDefaultResponse` List `PLATFORMS` as options
     * @response `401` `IApiUnauthorized` Unauthorized response
     */
    autocompleteControllerPlatforms: (params: RequestParams = {}) =>
      this.request<IAutocompleteDefaultResponse, IApiUnauthorized>({
        path: `/autocomplete/platforms`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  healthCheck = {
    /**
     * No description
     *
     * @tags Health Check
     * @name HealthCheckControllerLiveness
     * @request GET:/health-check/liveness
     * @response `200` `void`
     */
    healthCheckControllerLiveness: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/health-check/liveness`,
        method: 'GET',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Health Check
     * @name HealthCheckControllerReadiness
     * @request GET:/health-check/readiness
     * @response `200` `void`
     */
    healthCheckControllerReadiness: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/health-check/readiness`,
        method: 'GET',
        ...params,
      }),
  };
  project = {
    /**
     * No description
     *
     * @tags Project
     * @name ProjectControllerList
     * @request GET:/project/list
     * @secure
     * @response `200` `(IProject)[]` List all projects
     * @response `401` `IApiUnauthorized` Unauthorized response
     */
    projectControllerList: (
      query?: {
        /**
         * The unique ID of the project
         * @format uuid
         * @example "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6"
         */
        prj_id?: string | null;
        /**
         * The name of the project
         * @example "My Awesome Project"
         */
        prj_name?: string | null;
        /**
         * A detailed description of the project
         * @example "This project is about building a comprehensive platform for users."
         */
        prj_description?: string | null;
        /**
         * A flag to return relationships of the project
         * @default false
         * @example true
         */
        with_relations?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<IProject[], IApiUnauthorized>({
        path: `/project/list`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Project
     * @name ProjectControllerUpsert
     * @request POST:/project/upsert
     * @secure
     * @response `200` `IProject` Upsert a project (Insert if not exists, update otherwise)
     * @response `401` `IApiUnauthorized` Unauthorized response
     */
    projectControllerUpsert: (data: IProjectUpsertDto, params: RequestParams = {}) =>
      this.request<IProject, IApiUnauthorized>({
        path: `/project/upsert`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Project
     * @name ProjectControllerUpsertTranslations
     * @request POST:/project/translations/upsert
     * @secure
     * @response `200` `IProject` Upsert a project translation (Insert if not exists, update otherwise)
     * @response `401` `IApiUnauthorized` Unauthorized response
     */
    projectControllerUpsertTranslations: (data: IUpsertProjectTranslationsDto, params: RequestParams = {}) =>
      this.request<IProject, IApiUnauthorized>({
        path: `/project/translations/upsert`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Project
     * @name ProjectControllerTranslations
     * @request POST:/project/translations/{prj_id}
     * @secure
     * @response `200` `IProjectTranslations` Get a project translations
     * @response `401` `IApiUnauthorized` Unauthorized response
     */
    projectControllerTranslations: (prjId: string, params: RequestParams = {}) =>
      this.request<IProjectTranslations, IApiUnauthorized>({
        path: `/project/translations/${prjId}`,
        method: 'POST',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Project
     * @name ProjectControllerDelete
     * @request POST:/project/delete
     * @secure
     * @response `200` `IProject` Delete a project by its id
     * @response `401` `IApiUnauthorized` Unauthorized response
     */
    projectControllerDelete: (data: IProjectDeleteDto, params: RequestParams = {}) =>
      this.request<IProject, IApiUnauthorized>({
        path: `/project/delete`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Project
     * @name ProjectControllerGenerateApiKey
     * @request POST:/project/generate/api-key
     * @secure
     * @response `200` `IProject` Upsert a project (Insert if not exists, update otherwise)
     * @response `401` `IApiUnauthorized` Unauthorized response
     */
    projectControllerGenerateApiKey: (data: IProjectGenerateApiKeyDto, params: RequestParams = {}) =>
      this.request<IProject, IApiUnauthorized>({
        path: `/project/generate/api-key`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Project
     * @name ProjectControllerInvite
     * @request POST:/project/invite
     * @secure
     * @response `200` `IProjectInvitation` Invite a user to a project
     * @response `401` `IApiUnauthorized` Unauthorized response
     */
    projectControllerInvite: (data: IProjectInviteDto, params: RequestParams = {}) =>
      this.request<IProjectInvitation, IApiUnauthorized>({
        path: `/project/invite`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Project
     * @name ProjectControllerAcceptInvite
     * @request POST:/project/invite/accept
     * @secure
     * @response `200` `IProjectInvitation` Invite a user to a project
     * @response `401` `IApiUnauthorized` Unauthorized response
     */
    projectControllerAcceptInvite: (data: IProjectAcceptInvitationDto, params: RequestParams = {}) =>
      this.request<IProjectInvitation, IApiUnauthorized>({
        path: `/project/invite/accept`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Project
     * @name ProjectControllerCancelInvite
     * @request POST:/project/cancel-invite
     * @secure
     * @response `200` `IUpdateResult` Cancel an invitation to a project
     * @response `401` `IApiUnauthorized` Unauthorized response
     */
    projectControllerCancelInvite: (data: IProjectInviteCancelDto, params: RequestParams = {}) =>
      this.request<IUpdateResult, IApiUnauthorized>({
        path: `/project/cancel-invite`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Project
     * @name ProjectControllerUninvite
     * @request POST:/project/uninvite
     * @secure
     * @response `200` `void` Uninvite a user from a project
     * @response `401` `IApiUnauthorized` Unauthorized response
     */
    projectControllerUninvite: (data: IProjectUninviteDto, params: RequestParams = {}) =>
      this.request<void, IApiUnauthorized>({
        path: `/project/uninvite`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Project
     * @name ProjectControllerUserPermissions
     * @request POST:/project/user/permissions
     * @secure
     * @response `200` `IProjectUserPermissionResponseDto` Get a user permissions in a project
     * @response `401` `IApiUnauthorized` Unauthorized response
     */
    projectControllerUserPermissions: (data: IProjectUserPermissionDto, params: RequestParams = {}) =>
      this.request<IProjectUserPermissionResponseDto, IApiUnauthorized>({
        path: `/project/user/permissions`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Project
     * @name ProjectControllerGetProjectUsage
     * @request GET:/project/usage/{prj_id}
     * @secure
     * @response `200` `IProjectUsageResponse` Get a project usage
     * @response `401` `IApiUnauthorized` Unauthorized response
     */
    projectControllerGetProjectUsage: (prjId: string, params: RequestParams = {}) =>
      this.request<IProjectUsageResponse, IApiUnauthorized>({
        path: `/project/usage/${prjId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Project
     * @name ProjectControllerGet
     * @request GET:/project/{prj_id}
     * @secure
     * @response `200` `IProject` Get a project by its id
     * @response `401` `IApiUnauthorized` Unauthorized response
     */
    projectControllerGet: (prjId: string, params: RequestParams = {}) =>
      this.request<IProject, IApiUnauthorized>({
        path: `/project/${prjId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  version = {
    /**
 * No description
 *
 * @tags Version
 * @name VersionControllerList
 * @request GET:/version
 * @secure
 * @response `200` `(IPaginatedDocumented & {
    data?: (IVersion)[],
    meta?: {
    select?: (string)[],
    filter?: {
    "platform.plt_constant"?: (string | (string)[]),
    "project.prj_id"?: (string | (string)[]),
    ver_id?: (string | (string)[]),

},

},

})`
 * @response `401` `IApiUnauthorized` Unauthorized response
 */
    versionControllerList: (
      query?: {
        /**
         * Page number to retrieve.If you provide invalid value the default page number will applied
         *         <p>
         *              <b>Example: </b> 1
         *           </p>
         *         <p>
         *              <b>Default Value: </b> 1
         *           </p>
         *
         */
        page?: number;
        /**
         * Number of records per page.
         *       <p>
         *              <b>Example: </b> 20
         *           </p>
         *       <p>
         *              <b>Default Value: </b> 20
         *           </p>
         *       <p>
         *              <b>Max Value: </b> 100
         *           </p>
         *
         *       If provided value is greater than max value, max value will be applied.
         *
         */
        limit?: number;
        /**
         * Filter by platform.plt_constant query param.
         *           <p>
         *              <b>Format: </b> filter.platform.plt_constant={$not}:OPERATION:VALUE
         *           </p>
         *           <p>
         *              <b>Example: </b> filter.platform.plt_constant=$not:$like:John Doe&filter.platform.plt_constant=like:John
         *           </p>
         *           <h4>Available Operations</h4><ul><li>$and</li>
         * <li>$or</li>
         * <li>$not</li>
         * <li>$eq</li>
         * <li>$gt</li>
         * <li>$gte</li>
         * <li>$in</li>
         * <li>$null</li>
         * <li>$lt</li>
         * <li>$lte</li>
         * <li>$btw</li>
         * <li>$ilike</li>
         * <li>$sw</li>
         * <li>$contains</li></ul>
         */
        filterPlatformPltConstant?: string[];
        /**
         * Filter by project.prj_id query param.
         *           <p>
         *              <b>Format: </b> filter.project.prj_id={$not}:OPERATION:VALUE
         *           </p>
         *           <p>
         *              <b>Example: </b> filter.project.prj_id=$not:$like:John Doe&filter.project.prj_id=like:John
         *           </p>
         *           <h4>Available Operations</h4><ul><li>$and</li>
         * <li>$or</li>
         * <li>$not</li>
         * <li>$eq</li>
         * <li>$gt</li>
         * <li>$gte</li>
         * <li>$in</li>
         * <li>$null</li>
         * <li>$lt</li>
         * <li>$lte</li>
         * <li>$btw</li>
         * <li>$ilike</li>
         * <li>$sw</li>
         * <li>$contains</li></ul>
         */
        filterProjectPrjId?: string[];
        /**
         * Filter by ver_id query param.
         *           <p>
         *              <b>Format: </b> filter.ver_id={$not}:OPERATION:VALUE
         *           </p>
         *           <p>
         *              <b>Example: </b> filter.ver_id=$not:$like:John Doe&filter.ver_id=like:John
         *           </p>
         *           <h4>Available Operations</h4><ul><li>$and</li>
         * <li>$or</li>
         * <li>$not</li>
         * <li>$eq</li>
         * <li>$gt</li>
         * <li>$gte</li>
         * <li>$in</li>
         * <li>$null</li>
         * <li>$lt</li>
         * <li>$lte</li>
         * <li>$btw</li>
         * <li>$ilike</li>
         * <li>$sw</li>
         * <li>$contains</li></ul>
         */
        filterVerId?: string[];
        /**
         * Parameter to sort by.
         *       <p>To sort by multiple fields, just provide query param multiple types. The order in url defines an order of sorting</p>
         *       <p>
         *              <b>Format: </b> fieldName:DIRECTION
         *           </p>
         *       <p>
         *              <b>Example: </b> sortBy=id:DESC&sortBy=createdAt:ASC
         *           </p>
         *       <p>
         *              <b>Default Value: </b> ver_id:DESC
         *           </p>
         *       <h4>Available Fields</h4><ul><li>ver_id</li>
         * <li>ver_name</li></ul>
         *
         */
        sortBy?: string[];
        /**
         * Search term to filter result values
         *         <p>
         *              <b>Example: </b> John
         *           </p>
         *         <p>
         *              <b>Default Value: </b> No default value
         *           </p>
         *
         */
        search?: string;
        /**
         * List of fields to search by term to filter result values
         *         <p>
         *              <b>Example: </b> ver_name
         *           </p>
         *         <p>
         *              <b>Default Value: </b> By default all fields mentioned below will be used to search by term
         *           </p>
         *         <h4>Available Fields</h4><ul><li>ver_name</li></ul>
         *
         */
        searchBy?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        IPaginatedDocumented & {
          data?: IVersion[];
          meta?: {
            select?: string[];
            filter?: {
              'platform.plt_constant'?: string | string[];
              'project.prj_id'?: string | string[];
              'ver_id'?: string | string[];
            };
          };
        },
        IApiUnauthorized
      >({
        path: `/version`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Version
     * @name VersionControllerUpsert
     * @request POST:/version/upsert
     * @secure
     * @response `200` `IVersion` Upsert a version (Insert if not exists, update otherwise)
     * @response `401` `IApiUnauthorized` Unauthorized response
     * @response `409` `void` Version with the same name and platform already exists for the project
     */
    versionControllerUpsert: (data: IVersionUpsertDto, params: RequestParams = {}) =>
      this.request<IVersion, IApiUnauthorized | void>({
        path: `/version/upsert`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Version
     * @name VersionControllerFind
     * @request POST:/version/find/{ver_id}
     * @secure
     * @response `200` `IVersion` Find a version by its id
     * @response `401` `IApiUnauthorized` Unauthorized response
     */
    versionControllerFind: (verId: string, params: RequestParams = {}) =>
      this.request<IVersion, IApiUnauthorized>({
        path: `/version/find/${verId}`,
        method: 'POST',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Version
     * @name VersionControllerEnableOrDisable
     * @request POST:/version/enable-or-disable
     * @secure
     * @response `200` `IVersion` Enable or disable a version by its id
     * @response `401` `IApiUnauthorized` Unauthorized response
     */
    versionControllerEnableOrDisable: (data: IVersionUEnableOrDisableDto, params: RequestParams = {}) =>
      this.request<IVersion, IApiUnauthorized>({
        path: `/version/enable-or-disable`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Version
     * @name VersionControllerForceUpgradeEnableOrDisable
     * @request POST:/version/force-upgrade/enable-or-disable
     * @secure
     * @response `200` `IVersion` Enable or disable a version by its id
     * @response `401` `IApiUnauthorized` Unauthorized response
     */
    versionControllerForceUpgradeEnableOrDisable: (
      data: IVersionForceUpgradeEnableDisable,
      params: RequestParams = {}
    ) =>
      this.request<IVersion, IApiUnauthorized>({
        path: `/version/force-upgrade/enable-or-disable`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Version
     * @name VersionControllerDelete
     * @request POST:/version/delete
     * @secure
     * @response `200` `IVersion` Delete a version by its id
     * @response `401` `IApiUnauthorized` Unauthorized response
     */
    versionControllerDelete: (data: IVersionDeleteDto, params: RequestParams = {}) =>
      this.request<IVersion, IApiUnauthorized>({
        path: `/version/delete`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  billing = {
    /**
     * @description Retrieve the billing status for a given user based on their unique ID (usu_id).
     *
     * @tags Billing
     * @name BillingControllerGetBillingStatus
     * @summary Get Billing Status
     * @request GET:/billing/status
     * @secure
     * @response `200` `IBillingStatusDto` Successfully retrieved billing status
     * @response `400` `void` Invalid request parameters
     * @response `401` `IApiUnauthorized` Unauthorized response
     * @response `404` `void` User or billing status not found
     */
    billingControllerGetBillingStatus: (params: RequestParams = {}) =>
      this.request<IBillingStatusDto, void | IApiUnauthorized>({
        path: `/billing/status`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Retrieve the available billing plans.
     *
     * @tags Billing
     * @name BillingControllerGetAvailablePlans
     * @summary Get Billing Plans
     * @request GET:/billing/plans
     * @secure
     * @response `200` `(IAvailablePlansDto)[]` Successfully retrieved billing plans
     * @response `400` `void` Invalid request parameters
     * @response `401` `IApiUnauthorized` Unauthorized response
     * @response `404` `void` Billing plans not found
     */
    billingControllerGetAvailablePlans: (params: RequestParams = {}) =>
      this.request<IAvailablePlansDto[], void | IApiUnauthorized>({
        path: `/billing/plans`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Retrieve the customer portal link.
     *
     * @tags Billing
     * @name BillingControllerGetCustomerPortal
     * @summary Get Customer Portal
     * @request GET:/billing/portal
     * @secure
     * @response `200` `string` Successfully retrieved customer portal link
     * @response `400` `void` Invalid request parameters
     * @response `401` `IApiUnauthorized` Unauthorized response
     * @response `404` `void` Customer portal link not found
     */
    billingControllerGetCustomerPortal: (params: RequestParams = {}) =>
      this.request<string, void | IApiUnauthorized>({
        path: `/billing/portal`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  users = {
    /**
     * No description
     *
     * @tags Users
     * @name UserControllerGetUserById
     * @summary Get user by ID
     * @request GET:/users
     * @response `200` `IUser` User fetched successfully.
     */
    userControllerGetUserById: (params: RequestParams = {}) =>
      this.request<IUser, any>({
        path: `/users`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UserControllerUpdateUser
     * @summary Change photo
     * @request PUT:/users
     * @response `200` `IUser` User updated successfully.
     */
    userControllerUpdateUser: (data: IUpdateUserDto, params: RequestParams = {}) =>
      this.request<IUser, any>({
        path: `/users`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UserControllerDeleteUser
     * @summary Delete user
     * @request DELETE:/users
     * @response `200` `void` User deleted successfully.
     */
    userControllerDeleteUser: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users`,
        method: 'DELETE',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UserControllerGetAllUsers
     * @summary Get all users
     * @request GET:/users/all
     * @response `200` `void` Users fetched successfully.
     */
    userControllerGetAllUsers: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users/all`,
        method: 'GET',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UserControllerGetUserConfig
     * @summary Get user config
     * @request GET:/users/config
     * @response `200` `(IUserConfigGroupedByCategory)[]` User config fetched successfully.
     */
    userControllerGetUserConfig: (params: RequestParams = {}) =>
      this.request<IUserConfigGroupedByCategory[], any>({
        path: `/users/config`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UserControllerUpdateUserConfig
     * @summary Update user config
     * @request PATCH:/users/config
     * @response `200` `(IUserConfigGroupedByCategory)[]` User config updated successfully.
     */
    userControllerUpdateUserConfig: (data: IUserConfigUpdateDto, params: RequestParams = {}) =>
      this.request<IUserConfigGroupedByCategory[], any>({
        path: `/users/config`,
        method: 'PATCH',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  publicApi = {
    /**
     * @description Retrieve the available plans for a given user based on their unique ID (usu_id).
     *
     * @name ApiControllerGetAvailablePlans
     * @summary Get Available Plans
     * @request GET:/public-api/plans
     * @response `200` `IIPublicPlanAvailableDto` Successfully retrieved available plans
     * @response `400` `void` Invalid request parameters
     */
    apiControllerGetAvailablePlans: (params: RequestParams = {}) =>
      this.request<IIPublicPlanAvailableDto, void>({
        path: `/public-api/plans`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  v1 = {
    /**
     * @description Check the current version of the application against the latest version.
     *
     * @tags Force Update
     * @name CheckVersionControllerCheckVersion
     * @summary Check Version
     * @request POST:/v1/check-version
     * @response `200` `void` Successfully checked version
     * @response `400` `void` Invalid request parameters
     * @response `401` `void` Unauthorized
     */
    checkVersionControllerCheckVersion: (data: ICheckVersionDto, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/v1/check-version`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  };
}
