
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model CheckIn
 * 
 */
export type CheckIn = $Result.DefaultSelection<Prisma.$CheckInPayload>
/**
 * Model Gym
 * 
 */
export type Gym = $Result.DefaultSelection<Prisma.$GymPayload>
/**
 * Model CheckInGym
 * 
 */
export type CheckInGym = $Result.DefaultSelection<Prisma.$CheckInGymPayload>
/**
 * Model UserGym
 * 
 */
export type UserGym = $Result.DefaultSelection<Prisma.$UserGymPayload>
/**
 * Model UserCheckIn
 * 
 */
export type UserCheckIn = $Result.DefaultSelection<Prisma.$UserCheckInPayload>
/**
 * Model UserGymCheckIn
 * 
 */
export type UserGymCheckIn = $Result.DefaultSelection<Prisma.$UserGymCheckInPayload>
/**
 * Model UserGymCheckInHistory
 * 
 */
export type UserGymCheckInHistory = $Result.DefaultSelection<Prisma.$UserGymCheckInHistoryPayload>
/**
 * Model UserGymCheckInHistoryDetail
 * 
 */
export type UserGymCheckInHistoryDetail = $Result.DefaultSelection<Prisma.$UserGymCheckInHistoryDetailPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.checkIn`: Exposes CRUD operations for the **CheckIn** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CheckIns
    * const checkIns = await prisma.checkIn.findMany()
    * ```
    */
  get checkIn(): Prisma.CheckInDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gym`: Exposes CRUD operations for the **Gym** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gyms
    * const gyms = await prisma.gym.findMany()
    * ```
    */
  get gym(): Prisma.GymDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.checkInGym`: Exposes CRUD operations for the **CheckInGym** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CheckInGyms
    * const checkInGyms = await prisma.checkInGym.findMany()
    * ```
    */
  get checkInGym(): Prisma.CheckInGymDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userGym`: Exposes CRUD operations for the **UserGym** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserGyms
    * const userGyms = await prisma.userGym.findMany()
    * ```
    */
  get userGym(): Prisma.UserGymDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userCheckIn`: Exposes CRUD operations for the **UserCheckIn** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserCheckIns
    * const userCheckIns = await prisma.userCheckIn.findMany()
    * ```
    */
  get userCheckIn(): Prisma.UserCheckInDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userGymCheckIn`: Exposes CRUD operations for the **UserGymCheckIn** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserGymCheckIns
    * const userGymCheckIns = await prisma.userGymCheckIn.findMany()
    * ```
    */
  get userGymCheckIn(): Prisma.UserGymCheckInDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userGymCheckInHistory`: Exposes CRUD operations for the **UserGymCheckInHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserGymCheckInHistories
    * const userGymCheckInHistories = await prisma.userGymCheckInHistory.findMany()
    * ```
    */
  get userGymCheckInHistory(): Prisma.UserGymCheckInHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userGymCheckInHistoryDetail`: Exposes CRUD operations for the **UserGymCheckInHistoryDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserGymCheckInHistoryDetails
    * const userGymCheckInHistoryDetails = await prisma.userGymCheckInHistoryDetail.findMany()
    * ```
    */
  get userGymCheckInHistoryDetail(): Prisma.UserGymCheckInHistoryDetailDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    CheckIn: 'CheckIn',
    Gym: 'Gym',
    CheckInGym: 'CheckInGym',
    UserGym: 'UserGym',
    UserCheckIn: 'UserCheckIn',
    UserGymCheckIn: 'UserGymCheckIn',
    UserGymCheckInHistory: 'UserGymCheckInHistory',
    UserGymCheckInHistoryDetail: 'UserGymCheckInHistoryDetail'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "checkIn" | "gym" | "checkInGym" | "userGym" | "userCheckIn" | "userGymCheckIn" | "userGymCheckInHistory" | "userGymCheckInHistoryDetail"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      CheckIn: {
        payload: Prisma.$CheckInPayload<ExtArgs>
        fields: Prisma.CheckInFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CheckInFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CheckInFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>
          }
          findFirst: {
            args: Prisma.CheckInFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CheckInFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>
          }
          findMany: {
            args: Prisma.CheckInFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>[]
          }
          create: {
            args: Prisma.CheckInCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>
          }
          createMany: {
            args: Prisma.CheckInCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CheckInCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>[]
          }
          delete: {
            args: Prisma.CheckInDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>
          }
          update: {
            args: Prisma.CheckInUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>
          }
          deleteMany: {
            args: Prisma.CheckInDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CheckInUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CheckInUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>[]
          }
          upsert: {
            args: Prisma.CheckInUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>
          }
          aggregate: {
            args: Prisma.CheckInAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCheckIn>
          }
          groupBy: {
            args: Prisma.CheckInGroupByArgs<ExtArgs>
            result: $Utils.Optional<CheckInGroupByOutputType>[]
          }
          count: {
            args: Prisma.CheckInCountArgs<ExtArgs>
            result: $Utils.Optional<CheckInCountAggregateOutputType> | number
          }
        }
      }
      Gym: {
        payload: Prisma.$GymPayload<ExtArgs>
        fields: Prisma.GymFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GymFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GymFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPayload>
          }
          findFirst: {
            args: Prisma.GymFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GymFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPayload>
          }
          findMany: {
            args: Prisma.GymFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPayload>[]
          }
          create: {
            args: Prisma.GymCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPayload>
          }
          createMany: {
            args: Prisma.GymCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GymCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPayload>[]
          }
          delete: {
            args: Prisma.GymDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPayload>
          }
          update: {
            args: Prisma.GymUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPayload>
          }
          deleteMany: {
            args: Prisma.GymDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GymUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GymUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPayload>[]
          }
          upsert: {
            args: Prisma.GymUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GymPayload>
          }
          aggregate: {
            args: Prisma.GymAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGym>
          }
          groupBy: {
            args: Prisma.GymGroupByArgs<ExtArgs>
            result: $Utils.Optional<GymGroupByOutputType>[]
          }
          count: {
            args: Prisma.GymCountArgs<ExtArgs>
            result: $Utils.Optional<GymCountAggregateOutputType> | number
          }
        }
      }
      CheckInGym: {
        payload: Prisma.$CheckInGymPayload<ExtArgs>
        fields: Prisma.CheckInGymFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CheckInGymFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInGymPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CheckInGymFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInGymPayload>
          }
          findFirst: {
            args: Prisma.CheckInGymFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInGymPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CheckInGymFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInGymPayload>
          }
          findMany: {
            args: Prisma.CheckInGymFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInGymPayload>[]
          }
          create: {
            args: Prisma.CheckInGymCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInGymPayload>
          }
          createMany: {
            args: Prisma.CheckInGymCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CheckInGymCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInGymPayload>[]
          }
          delete: {
            args: Prisma.CheckInGymDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInGymPayload>
          }
          update: {
            args: Prisma.CheckInGymUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInGymPayload>
          }
          deleteMany: {
            args: Prisma.CheckInGymDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CheckInGymUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CheckInGymUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInGymPayload>[]
          }
          upsert: {
            args: Prisma.CheckInGymUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInGymPayload>
          }
          aggregate: {
            args: Prisma.CheckInGymAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCheckInGym>
          }
          groupBy: {
            args: Prisma.CheckInGymGroupByArgs<ExtArgs>
            result: $Utils.Optional<CheckInGymGroupByOutputType>[]
          }
          count: {
            args: Prisma.CheckInGymCountArgs<ExtArgs>
            result: $Utils.Optional<CheckInGymCountAggregateOutputType> | number
          }
        }
      }
      UserGym: {
        payload: Prisma.$UserGymPayload<ExtArgs>
        fields: Prisma.UserGymFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserGymFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGymPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserGymFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGymPayload>
          }
          findFirst: {
            args: Prisma.UserGymFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGymPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserGymFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGymPayload>
          }
          findMany: {
            args: Prisma.UserGymFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGymPayload>[]
          }
          create: {
            args: Prisma.UserGymCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGymPayload>
          }
          createMany: {
            args: Prisma.UserGymCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserGymCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGymPayload>[]
          }
          delete: {
            args: Prisma.UserGymDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGymPayload>
          }
          update: {
            args: Prisma.UserGymUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGymPayload>
          }
          deleteMany: {
            args: Prisma.UserGymDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserGymUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserGymUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGymPayload>[]
          }
          upsert: {
            args: Prisma.UserGymUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGymPayload>
          }
          aggregate: {
            args: Prisma.UserGymAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserGym>
          }
          groupBy: {
            args: Prisma.UserGymGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGymGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserGymCountArgs<ExtArgs>
            result: $Utils.Optional<UserGymCountAggregateOutputType> | number
          }
        }
      }
      UserCheckIn: {
        payload: Prisma.$UserCheckInPayload<ExtArgs>
        fields: Prisma.UserCheckInFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserCheckInFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCheckInPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserCheckInFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCheckInPayload>
          }
          findFirst: {
            args: Prisma.UserCheckInFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCheckInPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserCheckInFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCheckInPayload>
          }
          findMany: {
            args: Prisma.UserCheckInFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCheckInPayload>[]
          }
          create: {
            args: Prisma.UserCheckInCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCheckInPayload>
          }
          createMany: {
            args: Prisma.UserCheckInCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCheckInCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCheckInPayload>[]
          }
          delete: {
            args: Prisma.UserCheckInDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCheckInPayload>
          }
          update: {
            args: Prisma.UserCheckInUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCheckInPayload>
          }
          deleteMany: {
            args: Prisma.UserCheckInDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserCheckInUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserCheckInUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCheckInPayload>[]
          }
          upsert: {
            args: Prisma.UserCheckInUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCheckInPayload>
          }
          aggregate: {
            args: Prisma.UserCheckInAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserCheckIn>
          }
          groupBy: {
            args: Prisma.UserCheckInGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserCheckInGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCheckInCountArgs<ExtArgs>
            result: $Utils.Optional<UserCheckInCountAggregateOutputType> | number
          }
        }
      }
      UserGymCheckIn: {
        payload: Prisma.$UserGymCheckInPayload<ExtArgs>
        fields: Prisma.UserGymCheckInFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserGymCheckInFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGymCheckInPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserGymCheckInFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGymCheckInPayload>
          }
          findFirst: {
            args: Prisma.UserGymCheckInFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGymCheckInPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserGymCheckInFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGymCheckInPayload>
          }
          findMany: {
            args: Prisma.UserGymCheckInFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGymCheckInPayload>[]
          }
          create: {
            args: Prisma.UserGymCheckInCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGymCheckInPayload>
          }
          createMany: {
            args: Prisma.UserGymCheckInCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserGymCheckInCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGymCheckInPayload>[]
          }
          delete: {
            args: Prisma.UserGymCheckInDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGymCheckInPayload>
          }
          update: {
            args: Prisma.UserGymCheckInUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGymCheckInPayload>
          }
          deleteMany: {
            args: Prisma.UserGymCheckInDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserGymCheckInUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserGymCheckInUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGymCheckInPayload>[]
          }
          upsert: {
            args: Prisma.UserGymCheckInUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGymCheckInPayload>
          }
          aggregate: {
            args: Prisma.UserGymCheckInAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserGymCheckIn>
          }
          groupBy: {
            args: Prisma.UserGymCheckInGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGymCheckInGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserGymCheckInCountArgs<ExtArgs>
            result: $Utils.Optional<UserGymCheckInCountAggregateOutputType> | number
          }
        }
      }
      UserGymCheckInHistory: {
        payload: Prisma.$UserGymCheckInHistoryPayload<ExtArgs>
        fields: Prisma.UserGymCheckInHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserGymCheckInHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGymCheckInHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserGymCheckInHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGymCheckInHistoryPayload>
          }
          findFirst: {
            args: Prisma.UserGymCheckInHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGymCheckInHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserGymCheckInHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGymCheckInHistoryPayload>
          }
          findMany: {
            args: Prisma.UserGymCheckInHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGymCheckInHistoryPayload>[]
          }
          create: {
            args: Prisma.UserGymCheckInHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGymCheckInHistoryPayload>
          }
          createMany: {
            args: Prisma.UserGymCheckInHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserGymCheckInHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGymCheckInHistoryPayload>[]
          }
          delete: {
            args: Prisma.UserGymCheckInHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGymCheckInHistoryPayload>
          }
          update: {
            args: Prisma.UserGymCheckInHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGymCheckInHistoryPayload>
          }
          deleteMany: {
            args: Prisma.UserGymCheckInHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserGymCheckInHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserGymCheckInHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGymCheckInHistoryPayload>[]
          }
          upsert: {
            args: Prisma.UserGymCheckInHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGymCheckInHistoryPayload>
          }
          aggregate: {
            args: Prisma.UserGymCheckInHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserGymCheckInHistory>
          }
          groupBy: {
            args: Prisma.UserGymCheckInHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGymCheckInHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserGymCheckInHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<UserGymCheckInHistoryCountAggregateOutputType> | number
          }
        }
      }
      UserGymCheckInHistoryDetail: {
        payload: Prisma.$UserGymCheckInHistoryDetailPayload<ExtArgs>
        fields: Prisma.UserGymCheckInHistoryDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserGymCheckInHistoryDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGymCheckInHistoryDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserGymCheckInHistoryDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGymCheckInHistoryDetailPayload>
          }
          findFirst: {
            args: Prisma.UserGymCheckInHistoryDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGymCheckInHistoryDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserGymCheckInHistoryDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGymCheckInHistoryDetailPayload>
          }
          findMany: {
            args: Prisma.UserGymCheckInHistoryDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGymCheckInHistoryDetailPayload>[]
          }
          create: {
            args: Prisma.UserGymCheckInHistoryDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGymCheckInHistoryDetailPayload>
          }
          createMany: {
            args: Prisma.UserGymCheckInHistoryDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserGymCheckInHistoryDetailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGymCheckInHistoryDetailPayload>[]
          }
          delete: {
            args: Prisma.UserGymCheckInHistoryDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGymCheckInHistoryDetailPayload>
          }
          update: {
            args: Prisma.UserGymCheckInHistoryDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGymCheckInHistoryDetailPayload>
          }
          deleteMany: {
            args: Prisma.UserGymCheckInHistoryDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserGymCheckInHistoryDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserGymCheckInHistoryDetailUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGymCheckInHistoryDetailPayload>[]
          }
          upsert: {
            args: Prisma.UserGymCheckInHistoryDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGymCheckInHistoryDetailPayload>
          }
          aggregate: {
            args: Prisma.UserGymCheckInHistoryDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserGymCheckInHistoryDetail>
          }
          groupBy: {
            args: Prisma.UserGymCheckInHistoryDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGymCheckInHistoryDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserGymCheckInHistoryDetailCountArgs<ExtArgs>
            result: $Utils.Optional<UserGymCheckInHistoryDetailCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    checkIn?: CheckInOmit
    gym?: GymOmit
    checkInGym?: CheckInGymOmit
    userGym?: UserGymOmit
    userCheckIn?: UserCheckInOmit
    userGymCheckIn?: UserGymCheckInOmit
    userGymCheckInHistory?: UserGymCheckInHistoryOmit
    userGymCheckInHistoryDetail?: UserGymCheckInHistoryDetailOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password_hash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password_hash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password_hash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password_hash: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password_hash" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password_hash: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password_hash: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model CheckIn
   */

  export type AggregateCheckIn = {
    _count: CheckInCountAggregateOutputType | null
    _min: CheckInMinAggregateOutputType | null
    _max: CheckInMaxAggregateOutputType | null
  }

  export type CheckInMinAggregateOutputType = {
    id: string | null
    userId: string | null
    checkInAt: Date | null
    validatedAt: Date | null
  }

  export type CheckInMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    checkInAt: Date | null
    validatedAt: Date | null
  }

  export type CheckInCountAggregateOutputType = {
    id: number
    userId: number
    checkInAt: number
    validatedAt: number
    _all: number
  }


  export type CheckInMinAggregateInputType = {
    id?: true
    userId?: true
    checkInAt?: true
    validatedAt?: true
  }

  export type CheckInMaxAggregateInputType = {
    id?: true
    userId?: true
    checkInAt?: true
    validatedAt?: true
  }

  export type CheckInCountAggregateInputType = {
    id?: true
    userId?: true
    checkInAt?: true
    validatedAt?: true
    _all?: true
  }

  export type CheckInAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CheckIn to aggregate.
     */
    where?: CheckInWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckIns to fetch.
     */
    orderBy?: CheckInOrderByWithRelationInput | CheckInOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CheckInWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckIns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckIns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CheckIns
    **/
    _count?: true | CheckInCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CheckInMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CheckInMaxAggregateInputType
  }

  export type GetCheckInAggregateType<T extends CheckInAggregateArgs> = {
        [P in keyof T & keyof AggregateCheckIn]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCheckIn[P]>
      : GetScalarType<T[P], AggregateCheckIn[P]>
  }




  export type CheckInGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckInWhereInput
    orderBy?: CheckInOrderByWithAggregationInput | CheckInOrderByWithAggregationInput[]
    by: CheckInScalarFieldEnum[] | CheckInScalarFieldEnum
    having?: CheckInScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CheckInCountAggregateInputType | true
    _min?: CheckInMinAggregateInputType
    _max?: CheckInMaxAggregateInputType
  }

  export type CheckInGroupByOutputType = {
    id: string
    userId: string
    checkInAt: Date
    validatedAt: Date | null
    _count: CheckInCountAggregateOutputType | null
    _min: CheckInMinAggregateOutputType | null
    _max: CheckInMaxAggregateOutputType | null
  }

  type GetCheckInGroupByPayload<T extends CheckInGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CheckInGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CheckInGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CheckInGroupByOutputType[P]>
            : GetScalarType<T[P], CheckInGroupByOutputType[P]>
        }
      >
    >


  export type CheckInSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    checkInAt?: boolean
    validatedAt?: boolean
  }, ExtArgs["result"]["checkIn"]>

  export type CheckInSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    checkInAt?: boolean
    validatedAt?: boolean
  }, ExtArgs["result"]["checkIn"]>

  export type CheckInSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    checkInAt?: boolean
    validatedAt?: boolean
  }, ExtArgs["result"]["checkIn"]>

  export type CheckInSelectScalar = {
    id?: boolean
    userId?: boolean
    checkInAt?: boolean
    validatedAt?: boolean
  }

  export type CheckInOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "checkInAt" | "validatedAt", ExtArgs["result"]["checkIn"]>

  export type $CheckInPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CheckIn"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      checkInAt: Date
      validatedAt: Date | null
    }, ExtArgs["result"]["checkIn"]>
    composites: {}
  }

  type CheckInGetPayload<S extends boolean | null | undefined | CheckInDefaultArgs> = $Result.GetResult<Prisma.$CheckInPayload, S>

  type CheckInCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CheckInFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CheckInCountAggregateInputType | true
    }

  export interface CheckInDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CheckIn'], meta: { name: 'CheckIn' } }
    /**
     * Find zero or one CheckIn that matches the filter.
     * @param {CheckInFindUniqueArgs} args - Arguments to find a CheckIn
     * @example
     * // Get one CheckIn
     * const checkIn = await prisma.checkIn.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CheckInFindUniqueArgs>(args: SelectSubset<T, CheckInFindUniqueArgs<ExtArgs>>): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CheckIn that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CheckInFindUniqueOrThrowArgs} args - Arguments to find a CheckIn
     * @example
     * // Get one CheckIn
     * const checkIn = await prisma.checkIn.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CheckInFindUniqueOrThrowArgs>(args: SelectSubset<T, CheckInFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CheckIn that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInFindFirstArgs} args - Arguments to find a CheckIn
     * @example
     * // Get one CheckIn
     * const checkIn = await prisma.checkIn.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CheckInFindFirstArgs>(args?: SelectSubset<T, CheckInFindFirstArgs<ExtArgs>>): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CheckIn that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInFindFirstOrThrowArgs} args - Arguments to find a CheckIn
     * @example
     * // Get one CheckIn
     * const checkIn = await prisma.checkIn.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CheckInFindFirstOrThrowArgs>(args?: SelectSubset<T, CheckInFindFirstOrThrowArgs<ExtArgs>>): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CheckIns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CheckIns
     * const checkIns = await prisma.checkIn.findMany()
     * 
     * // Get first 10 CheckIns
     * const checkIns = await prisma.checkIn.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const checkInWithIdOnly = await prisma.checkIn.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CheckInFindManyArgs>(args?: SelectSubset<T, CheckInFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CheckIn.
     * @param {CheckInCreateArgs} args - Arguments to create a CheckIn.
     * @example
     * // Create one CheckIn
     * const CheckIn = await prisma.checkIn.create({
     *   data: {
     *     // ... data to create a CheckIn
     *   }
     * })
     * 
     */
    create<T extends CheckInCreateArgs>(args: SelectSubset<T, CheckInCreateArgs<ExtArgs>>): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CheckIns.
     * @param {CheckInCreateManyArgs} args - Arguments to create many CheckIns.
     * @example
     * // Create many CheckIns
     * const checkIn = await prisma.checkIn.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CheckInCreateManyArgs>(args?: SelectSubset<T, CheckInCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CheckIns and returns the data saved in the database.
     * @param {CheckInCreateManyAndReturnArgs} args - Arguments to create many CheckIns.
     * @example
     * // Create many CheckIns
     * const checkIn = await prisma.checkIn.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CheckIns and only return the `id`
     * const checkInWithIdOnly = await prisma.checkIn.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CheckInCreateManyAndReturnArgs>(args?: SelectSubset<T, CheckInCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CheckIn.
     * @param {CheckInDeleteArgs} args - Arguments to delete one CheckIn.
     * @example
     * // Delete one CheckIn
     * const CheckIn = await prisma.checkIn.delete({
     *   where: {
     *     // ... filter to delete one CheckIn
     *   }
     * })
     * 
     */
    delete<T extends CheckInDeleteArgs>(args: SelectSubset<T, CheckInDeleteArgs<ExtArgs>>): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CheckIn.
     * @param {CheckInUpdateArgs} args - Arguments to update one CheckIn.
     * @example
     * // Update one CheckIn
     * const checkIn = await prisma.checkIn.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CheckInUpdateArgs>(args: SelectSubset<T, CheckInUpdateArgs<ExtArgs>>): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CheckIns.
     * @param {CheckInDeleteManyArgs} args - Arguments to filter CheckIns to delete.
     * @example
     * // Delete a few CheckIns
     * const { count } = await prisma.checkIn.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CheckInDeleteManyArgs>(args?: SelectSubset<T, CheckInDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CheckIns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CheckIns
     * const checkIn = await prisma.checkIn.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CheckInUpdateManyArgs>(args: SelectSubset<T, CheckInUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CheckIns and returns the data updated in the database.
     * @param {CheckInUpdateManyAndReturnArgs} args - Arguments to update many CheckIns.
     * @example
     * // Update many CheckIns
     * const checkIn = await prisma.checkIn.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CheckIns and only return the `id`
     * const checkInWithIdOnly = await prisma.checkIn.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CheckInUpdateManyAndReturnArgs>(args: SelectSubset<T, CheckInUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CheckIn.
     * @param {CheckInUpsertArgs} args - Arguments to update or create a CheckIn.
     * @example
     * // Update or create a CheckIn
     * const checkIn = await prisma.checkIn.upsert({
     *   create: {
     *     // ... data to create a CheckIn
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CheckIn we want to update
     *   }
     * })
     */
    upsert<T extends CheckInUpsertArgs>(args: SelectSubset<T, CheckInUpsertArgs<ExtArgs>>): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CheckIns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInCountArgs} args - Arguments to filter CheckIns to count.
     * @example
     * // Count the number of CheckIns
     * const count = await prisma.checkIn.count({
     *   where: {
     *     // ... the filter for the CheckIns we want to count
     *   }
     * })
    **/
    count<T extends CheckInCountArgs>(
      args?: Subset<T, CheckInCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CheckInCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CheckIn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CheckInAggregateArgs>(args: Subset<T, CheckInAggregateArgs>): Prisma.PrismaPromise<GetCheckInAggregateType<T>>

    /**
     * Group by CheckIn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CheckInGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CheckInGroupByArgs['orderBy'] }
        : { orderBy?: CheckInGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CheckInGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCheckInGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CheckIn model
   */
  readonly fields: CheckInFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CheckIn.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CheckInClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CheckIn model
   */
  interface CheckInFieldRefs {
    readonly id: FieldRef<"CheckIn", 'String'>
    readonly userId: FieldRef<"CheckIn", 'String'>
    readonly checkInAt: FieldRef<"CheckIn", 'DateTime'>
    readonly validatedAt: FieldRef<"CheckIn", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CheckIn findUnique
   */
  export type CheckInFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null
    /**
     * Filter, which CheckIn to fetch.
     */
    where: CheckInWhereUniqueInput
  }

  /**
   * CheckIn findUniqueOrThrow
   */
  export type CheckInFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null
    /**
     * Filter, which CheckIn to fetch.
     */
    where: CheckInWhereUniqueInput
  }

  /**
   * CheckIn findFirst
   */
  export type CheckInFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null
    /**
     * Filter, which CheckIn to fetch.
     */
    where?: CheckInWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckIns to fetch.
     */
    orderBy?: CheckInOrderByWithRelationInput | CheckInOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CheckIns.
     */
    cursor?: CheckInWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckIns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckIns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CheckIns.
     */
    distinct?: CheckInScalarFieldEnum | CheckInScalarFieldEnum[]
  }

  /**
   * CheckIn findFirstOrThrow
   */
  export type CheckInFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null
    /**
     * Filter, which CheckIn to fetch.
     */
    where?: CheckInWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckIns to fetch.
     */
    orderBy?: CheckInOrderByWithRelationInput | CheckInOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CheckIns.
     */
    cursor?: CheckInWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckIns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckIns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CheckIns.
     */
    distinct?: CheckInScalarFieldEnum | CheckInScalarFieldEnum[]
  }

  /**
   * CheckIn findMany
   */
  export type CheckInFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null
    /**
     * Filter, which CheckIns to fetch.
     */
    where?: CheckInWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckIns to fetch.
     */
    orderBy?: CheckInOrderByWithRelationInput | CheckInOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CheckIns.
     */
    cursor?: CheckInWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckIns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckIns.
     */
    skip?: number
    distinct?: CheckInScalarFieldEnum | CheckInScalarFieldEnum[]
  }

  /**
   * CheckIn create
   */
  export type CheckInCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null
    /**
     * The data needed to create a CheckIn.
     */
    data: XOR<CheckInCreateInput, CheckInUncheckedCreateInput>
  }

  /**
   * CheckIn createMany
   */
  export type CheckInCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CheckIns.
     */
    data: CheckInCreateManyInput | CheckInCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CheckIn createManyAndReturn
   */
  export type CheckInCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null
    /**
     * The data used to create many CheckIns.
     */
    data: CheckInCreateManyInput | CheckInCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CheckIn update
   */
  export type CheckInUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null
    /**
     * The data needed to update a CheckIn.
     */
    data: XOR<CheckInUpdateInput, CheckInUncheckedUpdateInput>
    /**
     * Choose, which CheckIn to update.
     */
    where: CheckInWhereUniqueInput
  }

  /**
   * CheckIn updateMany
   */
  export type CheckInUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CheckIns.
     */
    data: XOR<CheckInUpdateManyMutationInput, CheckInUncheckedUpdateManyInput>
    /**
     * Filter which CheckIns to update
     */
    where?: CheckInWhereInput
    /**
     * Limit how many CheckIns to update.
     */
    limit?: number
  }

  /**
   * CheckIn updateManyAndReturn
   */
  export type CheckInUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null
    /**
     * The data used to update CheckIns.
     */
    data: XOR<CheckInUpdateManyMutationInput, CheckInUncheckedUpdateManyInput>
    /**
     * Filter which CheckIns to update
     */
    where?: CheckInWhereInput
    /**
     * Limit how many CheckIns to update.
     */
    limit?: number
  }

  /**
   * CheckIn upsert
   */
  export type CheckInUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null
    /**
     * The filter to search for the CheckIn to update in case it exists.
     */
    where: CheckInWhereUniqueInput
    /**
     * In case the CheckIn found by the `where` argument doesn't exist, create a new CheckIn with this data.
     */
    create: XOR<CheckInCreateInput, CheckInUncheckedCreateInput>
    /**
     * In case the CheckIn was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CheckInUpdateInput, CheckInUncheckedUpdateInput>
  }

  /**
   * CheckIn delete
   */
  export type CheckInDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null
    /**
     * Filter which CheckIn to delete.
     */
    where: CheckInWhereUniqueInput
  }

  /**
   * CheckIn deleteMany
   */
  export type CheckInDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CheckIns to delete
     */
    where?: CheckInWhereInput
    /**
     * Limit how many CheckIns to delete.
     */
    limit?: number
  }

  /**
   * CheckIn without action
   */
  export type CheckInDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null
  }


  /**
   * Model Gym
   */

  export type AggregateGym = {
    _count: GymCountAggregateOutputType | null
    _avg: GymAvgAggregateOutputType | null
    _sum: GymSumAggregateOutputType | null
    _min: GymMinAggregateOutputType | null
    _max: GymMaxAggregateOutputType | null
  }

  export type GymAvgAggregateOutputType = {
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type GymSumAggregateOutputType = {
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type GymMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    phone: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GymMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    phone: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GymCountAggregateOutputType = {
    id: number
    title: number
    description: number
    phone: number
    latitude: number
    longitude: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GymAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type GymSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type GymMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    phone?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GymMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    phone?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GymCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    phone?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GymAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gym to aggregate.
     */
    where?: GymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gyms to fetch.
     */
    orderBy?: GymOrderByWithRelationInput | GymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gyms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Gyms
    **/
    _count?: true | GymCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GymAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GymSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GymMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GymMaxAggregateInputType
  }

  export type GetGymAggregateType<T extends GymAggregateArgs> = {
        [P in keyof T & keyof AggregateGym]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGym[P]>
      : GetScalarType<T[P], AggregateGym[P]>
  }




  export type GymGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GymWhereInput
    orderBy?: GymOrderByWithAggregationInput | GymOrderByWithAggregationInput[]
    by: GymScalarFieldEnum[] | GymScalarFieldEnum
    having?: GymScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GymCountAggregateInputType | true
    _avg?: GymAvgAggregateInputType
    _sum?: GymSumAggregateInputType
    _min?: GymMinAggregateInputType
    _max?: GymMaxAggregateInputType
  }

  export type GymGroupByOutputType = {
    id: string
    title: string
    description: string | null
    phone: string | null
    latitude: Decimal
    longitude: Decimal
    createdAt: Date
    updatedAt: Date
    _count: GymCountAggregateOutputType | null
    _avg: GymAvgAggregateOutputType | null
    _sum: GymSumAggregateOutputType | null
    _min: GymMinAggregateOutputType | null
    _max: GymMaxAggregateOutputType | null
  }

  type GetGymGroupByPayload<T extends GymGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GymGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GymGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GymGroupByOutputType[P]>
            : GetScalarType<T[P], GymGroupByOutputType[P]>
        }
      >
    >


  export type GymSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    phone?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["gym"]>

  export type GymSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    phone?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["gym"]>

  export type GymSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    phone?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["gym"]>

  export type GymSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    phone?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GymOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "phone" | "latitude" | "longitude" | "createdAt" | "updatedAt", ExtArgs["result"]["gym"]>

  export type $GymPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Gym"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      phone: string | null
      latitude: Prisma.Decimal
      longitude: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["gym"]>
    composites: {}
  }

  type GymGetPayload<S extends boolean | null | undefined | GymDefaultArgs> = $Result.GetResult<Prisma.$GymPayload, S>

  type GymCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GymFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GymCountAggregateInputType | true
    }

  export interface GymDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Gym'], meta: { name: 'Gym' } }
    /**
     * Find zero or one Gym that matches the filter.
     * @param {GymFindUniqueArgs} args - Arguments to find a Gym
     * @example
     * // Get one Gym
     * const gym = await prisma.gym.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GymFindUniqueArgs>(args: SelectSubset<T, GymFindUniqueArgs<ExtArgs>>): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gym that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GymFindUniqueOrThrowArgs} args - Arguments to find a Gym
     * @example
     * // Get one Gym
     * const gym = await prisma.gym.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GymFindUniqueOrThrowArgs>(args: SelectSubset<T, GymFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gym that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymFindFirstArgs} args - Arguments to find a Gym
     * @example
     * // Get one Gym
     * const gym = await prisma.gym.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GymFindFirstArgs>(args?: SelectSubset<T, GymFindFirstArgs<ExtArgs>>): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gym that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymFindFirstOrThrowArgs} args - Arguments to find a Gym
     * @example
     * // Get one Gym
     * const gym = await prisma.gym.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GymFindFirstOrThrowArgs>(args?: SelectSubset<T, GymFindFirstOrThrowArgs<ExtArgs>>): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Gyms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gyms
     * const gyms = await prisma.gym.findMany()
     * 
     * // Get first 10 Gyms
     * const gyms = await prisma.gym.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gymWithIdOnly = await prisma.gym.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GymFindManyArgs>(args?: SelectSubset<T, GymFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gym.
     * @param {GymCreateArgs} args - Arguments to create a Gym.
     * @example
     * // Create one Gym
     * const Gym = await prisma.gym.create({
     *   data: {
     *     // ... data to create a Gym
     *   }
     * })
     * 
     */
    create<T extends GymCreateArgs>(args: SelectSubset<T, GymCreateArgs<ExtArgs>>): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Gyms.
     * @param {GymCreateManyArgs} args - Arguments to create many Gyms.
     * @example
     * // Create many Gyms
     * const gym = await prisma.gym.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GymCreateManyArgs>(args?: SelectSubset<T, GymCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Gyms and returns the data saved in the database.
     * @param {GymCreateManyAndReturnArgs} args - Arguments to create many Gyms.
     * @example
     * // Create many Gyms
     * const gym = await prisma.gym.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Gyms and only return the `id`
     * const gymWithIdOnly = await prisma.gym.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GymCreateManyAndReturnArgs>(args?: SelectSubset<T, GymCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Gym.
     * @param {GymDeleteArgs} args - Arguments to delete one Gym.
     * @example
     * // Delete one Gym
     * const Gym = await prisma.gym.delete({
     *   where: {
     *     // ... filter to delete one Gym
     *   }
     * })
     * 
     */
    delete<T extends GymDeleteArgs>(args: SelectSubset<T, GymDeleteArgs<ExtArgs>>): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gym.
     * @param {GymUpdateArgs} args - Arguments to update one Gym.
     * @example
     * // Update one Gym
     * const gym = await prisma.gym.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GymUpdateArgs>(args: SelectSubset<T, GymUpdateArgs<ExtArgs>>): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Gyms.
     * @param {GymDeleteManyArgs} args - Arguments to filter Gyms to delete.
     * @example
     * // Delete a few Gyms
     * const { count } = await prisma.gym.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GymDeleteManyArgs>(args?: SelectSubset<T, GymDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gyms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gyms
     * const gym = await prisma.gym.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GymUpdateManyArgs>(args: SelectSubset<T, GymUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gyms and returns the data updated in the database.
     * @param {GymUpdateManyAndReturnArgs} args - Arguments to update many Gyms.
     * @example
     * // Update many Gyms
     * const gym = await prisma.gym.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Gyms and only return the `id`
     * const gymWithIdOnly = await prisma.gym.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GymUpdateManyAndReturnArgs>(args: SelectSubset<T, GymUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Gym.
     * @param {GymUpsertArgs} args - Arguments to update or create a Gym.
     * @example
     * // Update or create a Gym
     * const gym = await prisma.gym.upsert({
     *   create: {
     *     // ... data to create a Gym
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gym we want to update
     *   }
     * })
     */
    upsert<T extends GymUpsertArgs>(args: SelectSubset<T, GymUpsertArgs<ExtArgs>>): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Gyms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymCountArgs} args - Arguments to filter Gyms to count.
     * @example
     * // Count the number of Gyms
     * const count = await prisma.gym.count({
     *   where: {
     *     // ... the filter for the Gyms we want to count
     *   }
     * })
    **/
    count<T extends GymCountArgs>(
      args?: Subset<T, GymCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GymCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gym.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GymAggregateArgs>(args: Subset<T, GymAggregateArgs>): Prisma.PrismaPromise<GetGymAggregateType<T>>

    /**
     * Group by Gym.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GymGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GymGroupByArgs['orderBy'] }
        : { orderBy?: GymGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GymGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGymGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Gym model
   */
  readonly fields: GymFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gym.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GymClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Gym model
   */
  interface GymFieldRefs {
    readonly id: FieldRef<"Gym", 'String'>
    readonly title: FieldRef<"Gym", 'String'>
    readonly description: FieldRef<"Gym", 'String'>
    readonly phone: FieldRef<"Gym", 'String'>
    readonly latitude: FieldRef<"Gym", 'Decimal'>
    readonly longitude: FieldRef<"Gym", 'Decimal'>
    readonly createdAt: FieldRef<"Gym", 'DateTime'>
    readonly updatedAt: FieldRef<"Gym", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Gym findUnique
   */
  export type GymFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * Filter, which Gym to fetch.
     */
    where: GymWhereUniqueInput
  }

  /**
   * Gym findUniqueOrThrow
   */
  export type GymFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * Filter, which Gym to fetch.
     */
    where: GymWhereUniqueInput
  }

  /**
   * Gym findFirst
   */
  export type GymFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * Filter, which Gym to fetch.
     */
    where?: GymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gyms to fetch.
     */
    orderBy?: GymOrderByWithRelationInput | GymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gyms.
     */
    cursor?: GymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gyms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gyms.
     */
    distinct?: GymScalarFieldEnum | GymScalarFieldEnum[]
  }

  /**
   * Gym findFirstOrThrow
   */
  export type GymFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * Filter, which Gym to fetch.
     */
    where?: GymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gyms to fetch.
     */
    orderBy?: GymOrderByWithRelationInput | GymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gyms.
     */
    cursor?: GymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gyms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gyms.
     */
    distinct?: GymScalarFieldEnum | GymScalarFieldEnum[]
  }

  /**
   * Gym findMany
   */
  export type GymFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * Filter, which Gyms to fetch.
     */
    where?: GymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gyms to fetch.
     */
    orderBy?: GymOrderByWithRelationInput | GymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Gyms.
     */
    cursor?: GymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gyms.
     */
    skip?: number
    distinct?: GymScalarFieldEnum | GymScalarFieldEnum[]
  }

  /**
   * Gym create
   */
  export type GymCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * The data needed to create a Gym.
     */
    data: XOR<GymCreateInput, GymUncheckedCreateInput>
  }

  /**
   * Gym createMany
   */
  export type GymCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Gyms.
     */
    data: GymCreateManyInput | GymCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gym createManyAndReturn
   */
  export type GymCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * The data used to create many Gyms.
     */
    data: GymCreateManyInput | GymCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gym update
   */
  export type GymUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * The data needed to update a Gym.
     */
    data: XOR<GymUpdateInput, GymUncheckedUpdateInput>
    /**
     * Choose, which Gym to update.
     */
    where: GymWhereUniqueInput
  }

  /**
   * Gym updateMany
   */
  export type GymUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Gyms.
     */
    data: XOR<GymUpdateManyMutationInput, GymUncheckedUpdateManyInput>
    /**
     * Filter which Gyms to update
     */
    where?: GymWhereInput
    /**
     * Limit how many Gyms to update.
     */
    limit?: number
  }

  /**
   * Gym updateManyAndReturn
   */
  export type GymUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * The data used to update Gyms.
     */
    data: XOR<GymUpdateManyMutationInput, GymUncheckedUpdateManyInput>
    /**
     * Filter which Gyms to update
     */
    where?: GymWhereInput
    /**
     * Limit how many Gyms to update.
     */
    limit?: number
  }

  /**
   * Gym upsert
   */
  export type GymUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * The filter to search for the Gym to update in case it exists.
     */
    where: GymWhereUniqueInput
    /**
     * In case the Gym found by the `where` argument doesn't exist, create a new Gym with this data.
     */
    create: XOR<GymCreateInput, GymUncheckedCreateInput>
    /**
     * In case the Gym was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GymUpdateInput, GymUncheckedUpdateInput>
  }

  /**
   * Gym delete
   */
  export type GymDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
    /**
     * Filter which Gym to delete.
     */
    where: GymWhereUniqueInput
  }

  /**
   * Gym deleteMany
   */
  export type GymDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gyms to delete
     */
    where?: GymWhereInput
    /**
     * Limit how many Gyms to delete.
     */
    limit?: number
  }

  /**
   * Gym without action
   */
  export type GymDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gym
     */
    omit?: GymOmit<ExtArgs> | null
  }


  /**
   * Model CheckInGym
   */

  export type AggregateCheckInGym = {
    _count: CheckInGymCountAggregateOutputType | null
    _min: CheckInGymMinAggregateOutputType | null
    _max: CheckInGymMaxAggregateOutputType | null
  }

  export type CheckInGymMinAggregateOutputType = {
    id: string | null
    checkInId: string | null
    gymId: string | null
    createdAt: Date | null
  }

  export type CheckInGymMaxAggregateOutputType = {
    id: string | null
    checkInId: string | null
    gymId: string | null
    createdAt: Date | null
  }

  export type CheckInGymCountAggregateOutputType = {
    id: number
    checkInId: number
    gymId: number
    createdAt: number
    _all: number
  }


  export type CheckInGymMinAggregateInputType = {
    id?: true
    checkInId?: true
    gymId?: true
    createdAt?: true
  }

  export type CheckInGymMaxAggregateInputType = {
    id?: true
    checkInId?: true
    gymId?: true
    createdAt?: true
  }

  export type CheckInGymCountAggregateInputType = {
    id?: true
    checkInId?: true
    gymId?: true
    createdAt?: true
    _all?: true
  }

  export type CheckInGymAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CheckInGym to aggregate.
     */
    where?: CheckInGymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckInGyms to fetch.
     */
    orderBy?: CheckInGymOrderByWithRelationInput | CheckInGymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CheckInGymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckInGyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckInGyms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CheckInGyms
    **/
    _count?: true | CheckInGymCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CheckInGymMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CheckInGymMaxAggregateInputType
  }

  export type GetCheckInGymAggregateType<T extends CheckInGymAggregateArgs> = {
        [P in keyof T & keyof AggregateCheckInGym]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCheckInGym[P]>
      : GetScalarType<T[P], AggregateCheckInGym[P]>
  }




  export type CheckInGymGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckInGymWhereInput
    orderBy?: CheckInGymOrderByWithAggregationInput | CheckInGymOrderByWithAggregationInput[]
    by: CheckInGymScalarFieldEnum[] | CheckInGymScalarFieldEnum
    having?: CheckInGymScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CheckInGymCountAggregateInputType | true
    _min?: CheckInGymMinAggregateInputType
    _max?: CheckInGymMaxAggregateInputType
  }

  export type CheckInGymGroupByOutputType = {
    id: string
    checkInId: string
    gymId: string
    createdAt: Date
    _count: CheckInGymCountAggregateOutputType | null
    _min: CheckInGymMinAggregateOutputType | null
    _max: CheckInGymMaxAggregateOutputType | null
  }

  type GetCheckInGymGroupByPayload<T extends CheckInGymGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CheckInGymGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CheckInGymGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CheckInGymGroupByOutputType[P]>
            : GetScalarType<T[P], CheckInGymGroupByOutputType[P]>
        }
      >
    >


  export type CheckInGymSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    checkInId?: boolean
    gymId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["checkInGym"]>

  export type CheckInGymSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    checkInId?: boolean
    gymId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["checkInGym"]>

  export type CheckInGymSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    checkInId?: boolean
    gymId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["checkInGym"]>

  export type CheckInGymSelectScalar = {
    id?: boolean
    checkInId?: boolean
    gymId?: boolean
    createdAt?: boolean
  }

  export type CheckInGymOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "checkInId" | "gymId" | "createdAt", ExtArgs["result"]["checkInGym"]>

  export type $CheckInGymPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CheckInGym"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      checkInId: string
      gymId: string
      createdAt: Date
    }, ExtArgs["result"]["checkInGym"]>
    composites: {}
  }

  type CheckInGymGetPayload<S extends boolean | null | undefined | CheckInGymDefaultArgs> = $Result.GetResult<Prisma.$CheckInGymPayload, S>

  type CheckInGymCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CheckInGymFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CheckInGymCountAggregateInputType | true
    }

  export interface CheckInGymDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CheckInGym'], meta: { name: 'CheckInGym' } }
    /**
     * Find zero or one CheckInGym that matches the filter.
     * @param {CheckInGymFindUniqueArgs} args - Arguments to find a CheckInGym
     * @example
     * // Get one CheckInGym
     * const checkInGym = await prisma.checkInGym.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CheckInGymFindUniqueArgs>(args: SelectSubset<T, CheckInGymFindUniqueArgs<ExtArgs>>): Prisma__CheckInGymClient<$Result.GetResult<Prisma.$CheckInGymPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CheckInGym that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CheckInGymFindUniqueOrThrowArgs} args - Arguments to find a CheckInGym
     * @example
     * // Get one CheckInGym
     * const checkInGym = await prisma.checkInGym.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CheckInGymFindUniqueOrThrowArgs>(args: SelectSubset<T, CheckInGymFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CheckInGymClient<$Result.GetResult<Prisma.$CheckInGymPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CheckInGym that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInGymFindFirstArgs} args - Arguments to find a CheckInGym
     * @example
     * // Get one CheckInGym
     * const checkInGym = await prisma.checkInGym.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CheckInGymFindFirstArgs>(args?: SelectSubset<T, CheckInGymFindFirstArgs<ExtArgs>>): Prisma__CheckInGymClient<$Result.GetResult<Prisma.$CheckInGymPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CheckInGym that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInGymFindFirstOrThrowArgs} args - Arguments to find a CheckInGym
     * @example
     * // Get one CheckInGym
     * const checkInGym = await prisma.checkInGym.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CheckInGymFindFirstOrThrowArgs>(args?: SelectSubset<T, CheckInGymFindFirstOrThrowArgs<ExtArgs>>): Prisma__CheckInGymClient<$Result.GetResult<Prisma.$CheckInGymPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CheckInGyms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInGymFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CheckInGyms
     * const checkInGyms = await prisma.checkInGym.findMany()
     * 
     * // Get first 10 CheckInGyms
     * const checkInGyms = await prisma.checkInGym.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const checkInGymWithIdOnly = await prisma.checkInGym.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CheckInGymFindManyArgs>(args?: SelectSubset<T, CheckInGymFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckInGymPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CheckInGym.
     * @param {CheckInGymCreateArgs} args - Arguments to create a CheckInGym.
     * @example
     * // Create one CheckInGym
     * const CheckInGym = await prisma.checkInGym.create({
     *   data: {
     *     // ... data to create a CheckInGym
     *   }
     * })
     * 
     */
    create<T extends CheckInGymCreateArgs>(args: SelectSubset<T, CheckInGymCreateArgs<ExtArgs>>): Prisma__CheckInGymClient<$Result.GetResult<Prisma.$CheckInGymPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CheckInGyms.
     * @param {CheckInGymCreateManyArgs} args - Arguments to create many CheckInGyms.
     * @example
     * // Create many CheckInGyms
     * const checkInGym = await prisma.checkInGym.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CheckInGymCreateManyArgs>(args?: SelectSubset<T, CheckInGymCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CheckInGyms and returns the data saved in the database.
     * @param {CheckInGymCreateManyAndReturnArgs} args - Arguments to create many CheckInGyms.
     * @example
     * // Create many CheckInGyms
     * const checkInGym = await prisma.checkInGym.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CheckInGyms and only return the `id`
     * const checkInGymWithIdOnly = await prisma.checkInGym.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CheckInGymCreateManyAndReturnArgs>(args?: SelectSubset<T, CheckInGymCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckInGymPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CheckInGym.
     * @param {CheckInGymDeleteArgs} args - Arguments to delete one CheckInGym.
     * @example
     * // Delete one CheckInGym
     * const CheckInGym = await prisma.checkInGym.delete({
     *   where: {
     *     // ... filter to delete one CheckInGym
     *   }
     * })
     * 
     */
    delete<T extends CheckInGymDeleteArgs>(args: SelectSubset<T, CheckInGymDeleteArgs<ExtArgs>>): Prisma__CheckInGymClient<$Result.GetResult<Prisma.$CheckInGymPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CheckInGym.
     * @param {CheckInGymUpdateArgs} args - Arguments to update one CheckInGym.
     * @example
     * // Update one CheckInGym
     * const checkInGym = await prisma.checkInGym.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CheckInGymUpdateArgs>(args: SelectSubset<T, CheckInGymUpdateArgs<ExtArgs>>): Prisma__CheckInGymClient<$Result.GetResult<Prisma.$CheckInGymPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CheckInGyms.
     * @param {CheckInGymDeleteManyArgs} args - Arguments to filter CheckInGyms to delete.
     * @example
     * // Delete a few CheckInGyms
     * const { count } = await prisma.checkInGym.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CheckInGymDeleteManyArgs>(args?: SelectSubset<T, CheckInGymDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CheckInGyms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInGymUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CheckInGyms
     * const checkInGym = await prisma.checkInGym.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CheckInGymUpdateManyArgs>(args: SelectSubset<T, CheckInGymUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CheckInGyms and returns the data updated in the database.
     * @param {CheckInGymUpdateManyAndReturnArgs} args - Arguments to update many CheckInGyms.
     * @example
     * // Update many CheckInGyms
     * const checkInGym = await prisma.checkInGym.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CheckInGyms and only return the `id`
     * const checkInGymWithIdOnly = await prisma.checkInGym.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CheckInGymUpdateManyAndReturnArgs>(args: SelectSubset<T, CheckInGymUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckInGymPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CheckInGym.
     * @param {CheckInGymUpsertArgs} args - Arguments to update or create a CheckInGym.
     * @example
     * // Update or create a CheckInGym
     * const checkInGym = await prisma.checkInGym.upsert({
     *   create: {
     *     // ... data to create a CheckInGym
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CheckInGym we want to update
     *   }
     * })
     */
    upsert<T extends CheckInGymUpsertArgs>(args: SelectSubset<T, CheckInGymUpsertArgs<ExtArgs>>): Prisma__CheckInGymClient<$Result.GetResult<Prisma.$CheckInGymPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CheckInGyms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInGymCountArgs} args - Arguments to filter CheckInGyms to count.
     * @example
     * // Count the number of CheckInGyms
     * const count = await prisma.checkInGym.count({
     *   where: {
     *     // ... the filter for the CheckInGyms we want to count
     *   }
     * })
    **/
    count<T extends CheckInGymCountArgs>(
      args?: Subset<T, CheckInGymCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CheckInGymCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CheckInGym.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInGymAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CheckInGymAggregateArgs>(args: Subset<T, CheckInGymAggregateArgs>): Prisma.PrismaPromise<GetCheckInGymAggregateType<T>>

    /**
     * Group by CheckInGym.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInGymGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CheckInGymGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CheckInGymGroupByArgs['orderBy'] }
        : { orderBy?: CheckInGymGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CheckInGymGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCheckInGymGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CheckInGym model
   */
  readonly fields: CheckInGymFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CheckInGym.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CheckInGymClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CheckInGym model
   */
  interface CheckInGymFieldRefs {
    readonly id: FieldRef<"CheckInGym", 'String'>
    readonly checkInId: FieldRef<"CheckInGym", 'String'>
    readonly gymId: FieldRef<"CheckInGym", 'String'>
    readonly createdAt: FieldRef<"CheckInGym", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CheckInGym findUnique
   */
  export type CheckInGymFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckInGym
     */
    select?: CheckInGymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckInGym
     */
    omit?: CheckInGymOmit<ExtArgs> | null
    /**
     * Filter, which CheckInGym to fetch.
     */
    where: CheckInGymWhereUniqueInput
  }

  /**
   * CheckInGym findUniqueOrThrow
   */
  export type CheckInGymFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckInGym
     */
    select?: CheckInGymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckInGym
     */
    omit?: CheckInGymOmit<ExtArgs> | null
    /**
     * Filter, which CheckInGym to fetch.
     */
    where: CheckInGymWhereUniqueInput
  }

  /**
   * CheckInGym findFirst
   */
  export type CheckInGymFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckInGym
     */
    select?: CheckInGymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckInGym
     */
    omit?: CheckInGymOmit<ExtArgs> | null
    /**
     * Filter, which CheckInGym to fetch.
     */
    where?: CheckInGymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckInGyms to fetch.
     */
    orderBy?: CheckInGymOrderByWithRelationInput | CheckInGymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CheckInGyms.
     */
    cursor?: CheckInGymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckInGyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckInGyms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CheckInGyms.
     */
    distinct?: CheckInGymScalarFieldEnum | CheckInGymScalarFieldEnum[]
  }

  /**
   * CheckInGym findFirstOrThrow
   */
  export type CheckInGymFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckInGym
     */
    select?: CheckInGymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckInGym
     */
    omit?: CheckInGymOmit<ExtArgs> | null
    /**
     * Filter, which CheckInGym to fetch.
     */
    where?: CheckInGymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckInGyms to fetch.
     */
    orderBy?: CheckInGymOrderByWithRelationInput | CheckInGymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CheckInGyms.
     */
    cursor?: CheckInGymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckInGyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckInGyms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CheckInGyms.
     */
    distinct?: CheckInGymScalarFieldEnum | CheckInGymScalarFieldEnum[]
  }

  /**
   * CheckInGym findMany
   */
  export type CheckInGymFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckInGym
     */
    select?: CheckInGymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckInGym
     */
    omit?: CheckInGymOmit<ExtArgs> | null
    /**
     * Filter, which CheckInGyms to fetch.
     */
    where?: CheckInGymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckInGyms to fetch.
     */
    orderBy?: CheckInGymOrderByWithRelationInput | CheckInGymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CheckInGyms.
     */
    cursor?: CheckInGymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckInGyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckInGyms.
     */
    skip?: number
    distinct?: CheckInGymScalarFieldEnum | CheckInGymScalarFieldEnum[]
  }

  /**
   * CheckInGym create
   */
  export type CheckInGymCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckInGym
     */
    select?: CheckInGymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckInGym
     */
    omit?: CheckInGymOmit<ExtArgs> | null
    /**
     * The data needed to create a CheckInGym.
     */
    data: XOR<CheckInGymCreateInput, CheckInGymUncheckedCreateInput>
  }

  /**
   * CheckInGym createMany
   */
  export type CheckInGymCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CheckInGyms.
     */
    data: CheckInGymCreateManyInput | CheckInGymCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CheckInGym createManyAndReturn
   */
  export type CheckInGymCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckInGym
     */
    select?: CheckInGymSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CheckInGym
     */
    omit?: CheckInGymOmit<ExtArgs> | null
    /**
     * The data used to create many CheckInGyms.
     */
    data: CheckInGymCreateManyInput | CheckInGymCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CheckInGym update
   */
  export type CheckInGymUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckInGym
     */
    select?: CheckInGymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckInGym
     */
    omit?: CheckInGymOmit<ExtArgs> | null
    /**
     * The data needed to update a CheckInGym.
     */
    data: XOR<CheckInGymUpdateInput, CheckInGymUncheckedUpdateInput>
    /**
     * Choose, which CheckInGym to update.
     */
    where: CheckInGymWhereUniqueInput
  }

  /**
   * CheckInGym updateMany
   */
  export type CheckInGymUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CheckInGyms.
     */
    data: XOR<CheckInGymUpdateManyMutationInput, CheckInGymUncheckedUpdateManyInput>
    /**
     * Filter which CheckInGyms to update
     */
    where?: CheckInGymWhereInput
    /**
     * Limit how many CheckInGyms to update.
     */
    limit?: number
  }

  /**
   * CheckInGym updateManyAndReturn
   */
  export type CheckInGymUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckInGym
     */
    select?: CheckInGymSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CheckInGym
     */
    omit?: CheckInGymOmit<ExtArgs> | null
    /**
     * The data used to update CheckInGyms.
     */
    data: XOR<CheckInGymUpdateManyMutationInput, CheckInGymUncheckedUpdateManyInput>
    /**
     * Filter which CheckInGyms to update
     */
    where?: CheckInGymWhereInput
    /**
     * Limit how many CheckInGyms to update.
     */
    limit?: number
  }

  /**
   * CheckInGym upsert
   */
  export type CheckInGymUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckInGym
     */
    select?: CheckInGymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckInGym
     */
    omit?: CheckInGymOmit<ExtArgs> | null
    /**
     * The filter to search for the CheckInGym to update in case it exists.
     */
    where: CheckInGymWhereUniqueInput
    /**
     * In case the CheckInGym found by the `where` argument doesn't exist, create a new CheckInGym with this data.
     */
    create: XOR<CheckInGymCreateInput, CheckInGymUncheckedCreateInput>
    /**
     * In case the CheckInGym was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CheckInGymUpdateInput, CheckInGymUncheckedUpdateInput>
  }

  /**
   * CheckInGym delete
   */
  export type CheckInGymDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckInGym
     */
    select?: CheckInGymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckInGym
     */
    omit?: CheckInGymOmit<ExtArgs> | null
    /**
     * Filter which CheckInGym to delete.
     */
    where: CheckInGymWhereUniqueInput
  }

  /**
   * CheckInGym deleteMany
   */
  export type CheckInGymDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CheckInGyms to delete
     */
    where?: CheckInGymWhereInput
    /**
     * Limit how many CheckInGyms to delete.
     */
    limit?: number
  }

  /**
   * CheckInGym without action
   */
  export type CheckInGymDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckInGym
     */
    select?: CheckInGymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckInGym
     */
    omit?: CheckInGymOmit<ExtArgs> | null
  }


  /**
   * Model UserGym
   */

  export type AggregateUserGym = {
    _count: UserGymCountAggregateOutputType | null
    _min: UserGymMinAggregateOutputType | null
    _max: UserGymMaxAggregateOutputType | null
  }

  export type UserGymMinAggregateOutputType = {
    id: string | null
    userId: string | null
    gymId: string | null
    createdAt: Date | null
  }

  export type UserGymMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    gymId: string | null
    createdAt: Date | null
  }

  export type UserGymCountAggregateOutputType = {
    id: number
    userId: number
    gymId: number
    createdAt: number
    _all: number
  }


  export type UserGymMinAggregateInputType = {
    id?: true
    userId?: true
    gymId?: true
    createdAt?: true
  }

  export type UserGymMaxAggregateInputType = {
    id?: true
    userId?: true
    gymId?: true
    createdAt?: true
  }

  export type UserGymCountAggregateInputType = {
    id?: true
    userId?: true
    gymId?: true
    createdAt?: true
    _all?: true
  }

  export type UserGymAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGym to aggregate.
     */
    where?: UserGymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGyms to fetch.
     */
    orderBy?: UserGymOrderByWithRelationInput | UserGymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserGymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGyms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserGyms
    **/
    _count?: true | UserGymCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserGymMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserGymMaxAggregateInputType
  }

  export type GetUserGymAggregateType<T extends UserGymAggregateArgs> = {
        [P in keyof T & keyof AggregateUserGym]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserGym[P]>
      : GetScalarType<T[P], AggregateUserGym[P]>
  }




  export type UserGymGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGymWhereInput
    orderBy?: UserGymOrderByWithAggregationInput | UserGymOrderByWithAggregationInput[]
    by: UserGymScalarFieldEnum[] | UserGymScalarFieldEnum
    having?: UserGymScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserGymCountAggregateInputType | true
    _min?: UserGymMinAggregateInputType
    _max?: UserGymMaxAggregateInputType
  }

  export type UserGymGroupByOutputType = {
    id: string
    userId: string
    gymId: string
    createdAt: Date
    _count: UserGymCountAggregateOutputType | null
    _min: UserGymMinAggregateOutputType | null
    _max: UserGymMaxAggregateOutputType | null
  }

  type GetUserGymGroupByPayload<T extends UserGymGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGymGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGymGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGymGroupByOutputType[P]>
            : GetScalarType<T[P], UserGymGroupByOutputType[P]>
        }
      >
    >


  export type UserGymSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gymId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userGym"]>

  export type UserGymSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gymId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userGym"]>

  export type UserGymSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gymId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userGym"]>

  export type UserGymSelectScalar = {
    id?: boolean
    userId?: boolean
    gymId?: boolean
    createdAt?: boolean
  }

  export type UserGymOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "gymId" | "createdAt", ExtArgs["result"]["userGym"]>

  export type $UserGymPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserGym"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      gymId: string
      createdAt: Date
    }, ExtArgs["result"]["userGym"]>
    composites: {}
  }

  type UserGymGetPayload<S extends boolean | null | undefined | UserGymDefaultArgs> = $Result.GetResult<Prisma.$UserGymPayload, S>

  type UserGymCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserGymFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserGymCountAggregateInputType | true
    }

  export interface UserGymDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserGym'], meta: { name: 'UserGym' } }
    /**
     * Find zero or one UserGym that matches the filter.
     * @param {UserGymFindUniqueArgs} args - Arguments to find a UserGym
     * @example
     * // Get one UserGym
     * const userGym = await prisma.userGym.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserGymFindUniqueArgs>(args: SelectSubset<T, UserGymFindUniqueArgs<ExtArgs>>): Prisma__UserGymClient<$Result.GetResult<Prisma.$UserGymPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserGym that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserGymFindUniqueOrThrowArgs} args - Arguments to find a UserGym
     * @example
     * // Get one UserGym
     * const userGym = await prisma.userGym.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserGymFindUniqueOrThrowArgs>(args: SelectSubset<T, UserGymFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserGymClient<$Result.GetResult<Prisma.$UserGymPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserGym that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGymFindFirstArgs} args - Arguments to find a UserGym
     * @example
     * // Get one UserGym
     * const userGym = await prisma.userGym.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserGymFindFirstArgs>(args?: SelectSubset<T, UserGymFindFirstArgs<ExtArgs>>): Prisma__UserGymClient<$Result.GetResult<Prisma.$UserGymPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserGym that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGymFindFirstOrThrowArgs} args - Arguments to find a UserGym
     * @example
     * // Get one UserGym
     * const userGym = await prisma.userGym.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserGymFindFirstOrThrowArgs>(args?: SelectSubset<T, UserGymFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserGymClient<$Result.GetResult<Prisma.$UserGymPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserGyms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGymFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserGyms
     * const userGyms = await prisma.userGym.findMany()
     * 
     * // Get first 10 UserGyms
     * const userGyms = await prisma.userGym.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userGymWithIdOnly = await prisma.userGym.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserGymFindManyArgs>(args?: SelectSubset<T, UserGymFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGymPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserGym.
     * @param {UserGymCreateArgs} args - Arguments to create a UserGym.
     * @example
     * // Create one UserGym
     * const UserGym = await prisma.userGym.create({
     *   data: {
     *     // ... data to create a UserGym
     *   }
     * })
     * 
     */
    create<T extends UserGymCreateArgs>(args: SelectSubset<T, UserGymCreateArgs<ExtArgs>>): Prisma__UserGymClient<$Result.GetResult<Prisma.$UserGymPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserGyms.
     * @param {UserGymCreateManyArgs} args - Arguments to create many UserGyms.
     * @example
     * // Create many UserGyms
     * const userGym = await prisma.userGym.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserGymCreateManyArgs>(args?: SelectSubset<T, UserGymCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserGyms and returns the data saved in the database.
     * @param {UserGymCreateManyAndReturnArgs} args - Arguments to create many UserGyms.
     * @example
     * // Create many UserGyms
     * const userGym = await prisma.userGym.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserGyms and only return the `id`
     * const userGymWithIdOnly = await prisma.userGym.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserGymCreateManyAndReturnArgs>(args?: SelectSubset<T, UserGymCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGymPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserGym.
     * @param {UserGymDeleteArgs} args - Arguments to delete one UserGym.
     * @example
     * // Delete one UserGym
     * const UserGym = await prisma.userGym.delete({
     *   where: {
     *     // ... filter to delete one UserGym
     *   }
     * })
     * 
     */
    delete<T extends UserGymDeleteArgs>(args: SelectSubset<T, UserGymDeleteArgs<ExtArgs>>): Prisma__UserGymClient<$Result.GetResult<Prisma.$UserGymPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserGym.
     * @param {UserGymUpdateArgs} args - Arguments to update one UserGym.
     * @example
     * // Update one UserGym
     * const userGym = await prisma.userGym.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserGymUpdateArgs>(args: SelectSubset<T, UserGymUpdateArgs<ExtArgs>>): Prisma__UserGymClient<$Result.GetResult<Prisma.$UserGymPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserGyms.
     * @param {UserGymDeleteManyArgs} args - Arguments to filter UserGyms to delete.
     * @example
     * // Delete a few UserGyms
     * const { count } = await prisma.userGym.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserGymDeleteManyArgs>(args?: SelectSubset<T, UserGymDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserGyms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGymUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserGyms
     * const userGym = await prisma.userGym.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserGymUpdateManyArgs>(args: SelectSubset<T, UserGymUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserGyms and returns the data updated in the database.
     * @param {UserGymUpdateManyAndReturnArgs} args - Arguments to update many UserGyms.
     * @example
     * // Update many UserGyms
     * const userGym = await prisma.userGym.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserGyms and only return the `id`
     * const userGymWithIdOnly = await prisma.userGym.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserGymUpdateManyAndReturnArgs>(args: SelectSubset<T, UserGymUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGymPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserGym.
     * @param {UserGymUpsertArgs} args - Arguments to update or create a UserGym.
     * @example
     * // Update or create a UserGym
     * const userGym = await prisma.userGym.upsert({
     *   create: {
     *     // ... data to create a UserGym
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserGym we want to update
     *   }
     * })
     */
    upsert<T extends UserGymUpsertArgs>(args: SelectSubset<T, UserGymUpsertArgs<ExtArgs>>): Prisma__UserGymClient<$Result.GetResult<Prisma.$UserGymPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserGyms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGymCountArgs} args - Arguments to filter UserGyms to count.
     * @example
     * // Count the number of UserGyms
     * const count = await prisma.userGym.count({
     *   where: {
     *     // ... the filter for the UserGyms we want to count
     *   }
     * })
    **/
    count<T extends UserGymCountArgs>(
      args?: Subset<T, UserGymCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserGymCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserGym.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGymAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserGymAggregateArgs>(args: Subset<T, UserGymAggregateArgs>): Prisma.PrismaPromise<GetUserGymAggregateType<T>>

    /**
     * Group by UserGym.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGymGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGymGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGymGroupByArgs['orderBy'] }
        : { orderBy?: UserGymGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGymGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGymGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserGym model
   */
  readonly fields: UserGymFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserGym.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserGymClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserGym model
   */
  interface UserGymFieldRefs {
    readonly id: FieldRef<"UserGym", 'String'>
    readonly userId: FieldRef<"UserGym", 'String'>
    readonly gymId: FieldRef<"UserGym", 'String'>
    readonly createdAt: FieldRef<"UserGym", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserGym findUnique
   */
  export type UserGymFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGym
     */
    select?: UserGymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGym
     */
    omit?: UserGymOmit<ExtArgs> | null
    /**
     * Filter, which UserGym to fetch.
     */
    where: UserGymWhereUniqueInput
  }

  /**
   * UserGym findUniqueOrThrow
   */
  export type UserGymFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGym
     */
    select?: UserGymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGym
     */
    omit?: UserGymOmit<ExtArgs> | null
    /**
     * Filter, which UserGym to fetch.
     */
    where: UserGymWhereUniqueInput
  }

  /**
   * UserGym findFirst
   */
  export type UserGymFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGym
     */
    select?: UserGymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGym
     */
    omit?: UserGymOmit<ExtArgs> | null
    /**
     * Filter, which UserGym to fetch.
     */
    where?: UserGymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGyms to fetch.
     */
    orderBy?: UserGymOrderByWithRelationInput | UserGymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGyms.
     */
    cursor?: UserGymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGyms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGyms.
     */
    distinct?: UserGymScalarFieldEnum | UserGymScalarFieldEnum[]
  }

  /**
   * UserGym findFirstOrThrow
   */
  export type UserGymFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGym
     */
    select?: UserGymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGym
     */
    omit?: UserGymOmit<ExtArgs> | null
    /**
     * Filter, which UserGym to fetch.
     */
    where?: UserGymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGyms to fetch.
     */
    orderBy?: UserGymOrderByWithRelationInput | UserGymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGyms.
     */
    cursor?: UserGymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGyms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGyms.
     */
    distinct?: UserGymScalarFieldEnum | UserGymScalarFieldEnum[]
  }

  /**
   * UserGym findMany
   */
  export type UserGymFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGym
     */
    select?: UserGymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGym
     */
    omit?: UserGymOmit<ExtArgs> | null
    /**
     * Filter, which UserGyms to fetch.
     */
    where?: UserGymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGyms to fetch.
     */
    orderBy?: UserGymOrderByWithRelationInput | UserGymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserGyms.
     */
    cursor?: UserGymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGyms.
     */
    skip?: number
    distinct?: UserGymScalarFieldEnum | UserGymScalarFieldEnum[]
  }

  /**
   * UserGym create
   */
  export type UserGymCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGym
     */
    select?: UserGymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGym
     */
    omit?: UserGymOmit<ExtArgs> | null
    /**
     * The data needed to create a UserGym.
     */
    data: XOR<UserGymCreateInput, UserGymUncheckedCreateInput>
  }

  /**
   * UserGym createMany
   */
  export type UserGymCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserGyms.
     */
    data: UserGymCreateManyInput | UserGymCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserGym createManyAndReturn
   */
  export type UserGymCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGym
     */
    select?: UserGymSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserGym
     */
    omit?: UserGymOmit<ExtArgs> | null
    /**
     * The data used to create many UserGyms.
     */
    data: UserGymCreateManyInput | UserGymCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserGym update
   */
  export type UserGymUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGym
     */
    select?: UserGymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGym
     */
    omit?: UserGymOmit<ExtArgs> | null
    /**
     * The data needed to update a UserGym.
     */
    data: XOR<UserGymUpdateInput, UserGymUncheckedUpdateInput>
    /**
     * Choose, which UserGym to update.
     */
    where: UserGymWhereUniqueInput
  }

  /**
   * UserGym updateMany
   */
  export type UserGymUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserGyms.
     */
    data: XOR<UserGymUpdateManyMutationInput, UserGymUncheckedUpdateManyInput>
    /**
     * Filter which UserGyms to update
     */
    where?: UserGymWhereInput
    /**
     * Limit how many UserGyms to update.
     */
    limit?: number
  }

  /**
   * UserGym updateManyAndReturn
   */
  export type UserGymUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGym
     */
    select?: UserGymSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserGym
     */
    omit?: UserGymOmit<ExtArgs> | null
    /**
     * The data used to update UserGyms.
     */
    data: XOR<UserGymUpdateManyMutationInput, UserGymUncheckedUpdateManyInput>
    /**
     * Filter which UserGyms to update
     */
    where?: UserGymWhereInput
    /**
     * Limit how many UserGyms to update.
     */
    limit?: number
  }

  /**
   * UserGym upsert
   */
  export type UserGymUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGym
     */
    select?: UserGymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGym
     */
    omit?: UserGymOmit<ExtArgs> | null
    /**
     * The filter to search for the UserGym to update in case it exists.
     */
    where: UserGymWhereUniqueInput
    /**
     * In case the UserGym found by the `where` argument doesn't exist, create a new UserGym with this data.
     */
    create: XOR<UserGymCreateInput, UserGymUncheckedCreateInput>
    /**
     * In case the UserGym was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserGymUpdateInput, UserGymUncheckedUpdateInput>
  }

  /**
   * UserGym delete
   */
  export type UserGymDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGym
     */
    select?: UserGymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGym
     */
    omit?: UserGymOmit<ExtArgs> | null
    /**
     * Filter which UserGym to delete.
     */
    where: UserGymWhereUniqueInput
  }

  /**
   * UserGym deleteMany
   */
  export type UserGymDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGyms to delete
     */
    where?: UserGymWhereInput
    /**
     * Limit how many UserGyms to delete.
     */
    limit?: number
  }

  /**
   * UserGym without action
   */
  export type UserGymDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGym
     */
    select?: UserGymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGym
     */
    omit?: UserGymOmit<ExtArgs> | null
  }


  /**
   * Model UserCheckIn
   */

  export type AggregateUserCheckIn = {
    _count: UserCheckInCountAggregateOutputType | null
    _min: UserCheckInMinAggregateOutputType | null
    _max: UserCheckInMaxAggregateOutputType | null
  }

  export type UserCheckInMinAggregateOutputType = {
    id: string | null
    userId: string | null
    checkInId: string | null
    createdAt: Date | null
  }

  export type UserCheckInMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    checkInId: string | null
    createdAt: Date | null
  }

  export type UserCheckInCountAggregateOutputType = {
    id: number
    userId: number
    checkInId: number
    createdAt: number
    _all: number
  }


  export type UserCheckInMinAggregateInputType = {
    id?: true
    userId?: true
    checkInId?: true
    createdAt?: true
  }

  export type UserCheckInMaxAggregateInputType = {
    id?: true
    userId?: true
    checkInId?: true
    createdAt?: true
  }

  export type UserCheckInCountAggregateInputType = {
    id?: true
    userId?: true
    checkInId?: true
    createdAt?: true
    _all?: true
  }

  export type UserCheckInAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCheckIn to aggregate.
     */
    where?: UserCheckInWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCheckIns to fetch.
     */
    orderBy?: UserCheckInOrderByWithRelationInput | UserCheckInOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserCheckInWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCheckIns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCheckIns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserCheckIns
    **/
    _count?: true | UserCheckInCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserCheckInMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserCheckInMaxAggregateInputType
  }

  export type GetUserCheckInAggregateType<T extends UserCheckInAggregateArgs> = {
        [P in keyof T & keyof AggregateUserCheckIn]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserCheckIn[P]>
      : GetScalarType<T[P], AggregateUserCheckIn[P]>
  }




  export type UserCheckInGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCheckInWhereInput
    orderBy?: UserCheckInOrderByWithAggregationInput | UserCheckInOrderByWithAggregationInput[]
    by: UserCheckInScalarFieldEnum[] | UserCheckInScalarFieldEnum
    having?: UserCheckInScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCheckInCountAggregateInputType | true
    _min?: UserCheckInMinAggregateInputType
    _max?: UserCheckInMaxAggregateInputType
  }

  export type UserCheckInGroupByOutputType = {
    id: string
    userId: string
    checkInId: string
    createdAt: Date
    _count: UserCheckInCountAggregateOutputType | null
    _min: UserCheckInMinAggregateOutputType | null
    _max: UserCheckInMaxAggregateOutputType | null
  }

  type GetUserCheckInGroupByPayload<T extends UserCheckInGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserCheckInGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserCheckInGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserCheckInGroupByOutputType[P]>
            : GetScalarType<T[P], UserCheckInGroupByOutputType[P]>
        }
      >
    >


  export type UserCheckInSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    checkInId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userCheckIn"]>

  export type UserCheckInSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    checkInId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userCheckIn"]>

  export type UserCheckInSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    checkInId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userCheckIn"]>

  export type UserCheckInSelectScalar = {
    id?: boolean
    userId?: boolean
    checkInId?: boolean
    createdAt?: boolean
  }

  export type UserCheckInOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "checkInId" | "createdAt", ExtArgs["result"]["userCheckIn"]>

  export type $UserCheckInPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserCheckIn"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      checkInId: string
      createdAt: Date
    }, ExtArgs["result"]["userCheckIn"]>
    composites: {}
  }

  type UserCheckInGetPayload<S extends boolean | null | undefined | UserCheckInDefaultArgs> = $Result.GetResult<Prisma.$UserCheckInPayload, S>

  type UserCheckInCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserCheckInFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCheckInCountAggregateInputType | true
    }

  export interface UserCheckInDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserCheckIn'], meta: { name: 'UserCheckIn' } }
    /**
     * Find zero or one UserCheckIn that matches the filter.
     * @param {UserCheckInFindUniqueArgs} args - Arguments to find a UserCheckIn
     * @example
     * // Get one UserCheckIn
     * const userCheckIn = await prisma.userCheckIn.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserCheckInFindUniqueArgs>(args: SelectSubset<T, UserCheckInFindUniqueArgs<ExtArgs>>): Prisma__UserCheckInClient<$Result.GetResult<Prisma.$UserCheckInPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserCheckIn that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserCheckInFindUniqueOrThrowArgs} args - Arguments to find a UserCheckIn
     * @example
     * // Get one UserCheckIn
     * const userCheckIn = await prisma.userCheckIn.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserCheckInFindUniqueOrThrowArgs>(args: SelectSubset<T, UserCheckInFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserCheckInClient<$Result.GetResult<Prisma.$UserCheckInPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCheckIn that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCheckInFindFirstArgs} args - Arguments to find a UserCheckIn
     * @example
     * // Get one UserCheckIn
     * const userCheckIn = await prisma.userCheckIn.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserCheckInFindFirstArgs>(args?: SelectSubset<T, UserCheckInFindFirstArgs<ExtArgs>>): Prisma__UserCheckInClient<$Result.GetResult<Prisma.$UserCheckInPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCheckIn that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCheckInFindFirstOrThrowArgs} args - Arguments to find a UserCheckIn
     * @example
     * // Get one UserCheckIn
     * const userCheckIn = await prisma.userCheckIn.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserCheckInFindFirstOrThrowArgs>(args?: SelectSubset<T, UserCheckInFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserCheckInClient<$Result.GetResult<Prisma.$UserCheckInPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserCheckIns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCheckInFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserCheckIns
     * const userCheckIns = await prisma.userCheckIn.findMany()
     * 
     * // Get first 10 UserCheckIns
     * const userCheckIns = await prisma.userCheckIn.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userCheckInWithIdOnly = await prisma.userCheckIn.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserCheckInFindManyArgs>(args?: SelectSubset<T, UserCheckInFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCheckInPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserCheckIn.
     * @param {UserCheckInCreateArgs} args - Arguments to create a UserCheckIn.
     * @example
     * // Create one UserCheckIn
     * const UserCheckIn = await prisma.userCheckIn.create({
     *   data: {
     *     // ... data to create a UserCheckIn
     *   }
     * })
     * 
     */
    create<T extends UserCheckInCreateArgs>(args: SelectSubset<T, UserCheckInCreateArgs<ExtArgs>>): Prisma__UserCheckInClient<$Result.GetResult<Prisma.$UserCheckInPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserCheckIns.
     * @param {UserCheckInCreateManyArgs} args - Arguments to create many UserCheckIns.
     * @example
     * // Create many UserCheckIns
     * const userCheckIn = await prisma.userCheckIn.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCheckInCreateManyArgs>(args?: SelectSubset<T, UserCheckInCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserCheckIns and returns the data saved in the database.
     * @param {UserCheckInCreateManyAndReturnArgs} args - Arguments to create many UserCheckIns.
     * @example
     * // Create many UserCheckIns
     * const userCheckIn = await prisma.userCheckIn.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserCheckIns and only return the `id`
     * const userCheckInWithIdOnly = await prisma.userCheckIn.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCheckInCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCheckInCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCheckInPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserCheckIn.
     * @param {UserCheckInDeleteArgs} args - Arguments to delete one UserCheckIn.
     * @example
     * // Delete one UserCheckIn
     * const UserCheckIn = await prisma.userCheckIn.delete({
     *   where: {
     *     // ... filter to delete one UserCheckIn
     *   }
     * })
     * 
     */
    delete<T extends UserCheckInDeleteArgs>(args: SelectSubset<T, UserCheckInDeleteArgs<ExtArgs>>): Prisma__UserCheckInClient<$Result.GetResult<Prisma.$UserCheckInPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserCheckIn.
     * @param {UserCheckInUpdateArgs} args - Arguments to update one UserCheckIn.
     * @example
     * // Update one UserCheckIn
     * const userCheckIn = await prisma.userCheckIn.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserCheckInUpdateArgs>(args: SelectSubset<T, UserCheckInUpdateArgs<ExtArgs>>): Prisma__UserCheckInClient<$Result.GetResult<Prisma.$UserCheckInPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserCheckIns.
     * @param {UserCheckInDeleteManyArgs} args - Arguments to filter UserCheckIns to delete.
     * @example
     * // Delete a few UserCheckIns
     * const { count } = await prisma.userCheckIn.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserCheckInDeleteManyArgs>(args?: SelectSubset<T, UserCheckInDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCheckIns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCheckInUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserCheckIns
     * const userCheckIn = await prisma.userCheckIn.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserCheckInUpdateManyArgs>(args: SelectSubset<T, UserCheckInUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCheckIns and returns the data updated in the database.
     * @param {UserCheckInUpdateManyAndReturnArgs} args - Arguments to update many UserCheckIns.
     * @example
     * // Update many UserCheckIns
     * const userCheckIn = await prisma.userCheckIn.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserCheckIns and only return the `id`
     * const userCheckInWithIdOnly = await prisma.userCheckIn.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserCheckInUpdateManyAndReturnArgs>(args: SelectSubset<T, UserCheckInUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCheckInPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserCheckIn.
     * @param {UserCheckInUpsertArgs} args - Arguments to update or create a UserCheckIn.
     * @example
     * // Update or create a UserCheckIn
     * const userCheckIn = await prisma.userCheckIn.upsert({
     *   create: {
     *     // ... data to create a UserCheckIn
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserCheckIn we want to update
     *   }
     * })
     */
    upsert<T extends UserCheckInUpsertArgs>(args: SelectSubset<T, UserCheckInUpsertArgs<ExtArgs>>): Prisma__UserCheckInClient<$Result.GetResult<Prisma.$UserCheckInPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserCheckIns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCheckInCountArgs} args - Arguments to filter UserCheckIns to count.
     * @example
     * // Count the number of UserCheckIns
     * const count = await prisma.userCheckIn.count({
     *   where: {
     *     // ... the filter for the UserCheckIns we want to count
     *   }
     * })
    **/
    count<T extends UserCheckInCountArgs>(
      args?: Subset<T, UserCheckInCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCheckInCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserCheckIn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCheckInAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserCheckInAggregateArgs>(args: Subset<T, UserCheckInAggregateArgs>): Prisma.PrismaPromise<GetUserCheckInAggregateType<T>>

    /**
     * Group by UserCheckIn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCheckInGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserCheckInGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserCheckInGroupByArgs['orderBy'] }
        : { orderBy?: UserCheckInGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserCheckInGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserCheckInGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserCheckIn model
   */
  readonly fields: UserCheckInFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserCheckIn.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserCheckInClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserCheckIn model
   */
  interface UserCheckInFieldRefs {
    readonly id: FieldRef<"UserCheckIn", 'String'>
    readonly userId: FieldRef<"UserCheckIn", 'String'>
    readonly checkInId: FieldRef<"UserCheckIn", 'String'>
    readonly createdAt: FieldRef<"UserCheckIn", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserCheckIn findUnique
   */
  export type UserCheckInFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCheckIn
     */
    select?: UserCheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCheckIn
     */
    omit?: UserCheckInOmit<ExtArgs> | null
    /**
     * Filter, which UserCheckIn to fetch.
     */
    where: UserCheckInWhereUniqueInput
  }

  /**
   * UserCheckIn findUniqueOrThrow
   */
  export type UserCheckInFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCheckIn
     */
    select?: UserCheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCheckIn
     */
    omit?: UserCheckInOmit<ExtArgs> | null
    /**
     * Filter, which UserCheckIn to fetch.
     */
    where: UserCheckInWhereUniqueInput
  }

  /**
   * UserCheckIn findFirst
   */
  export type UserCheckInFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCheckIn
     */
    select?: UserCheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCheckIn
     */
    omit?: UserCheckInOmit<ExtArgs> | null
    /**
     * Filter, which UserCheckIn to fetch.
     */
    where?: UserCheckInWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCheckIns to fetch.
     */
    orderBy?: UserCheckInOrderByWithRelationInput | UserCheckInOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCheckIns.
     */
    cursor?: UserCheckInWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCheckIns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCheckIns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCheckIns.
     */
    distinct?: UserCheckInScalarFieldEnum | UserCheckInScalarFieldEnum[]
  }

  /**
   * UserCheckIn findFirstOrThrow
   */
  export type UserCheckInFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCheckIn
     */
    select?: UserCheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCheckIn
     */
    omit?: UserCheckInOmit<ExtArgs> | null
    /**
     * Filter, which UserCheckIn to fetch.
     */
    where?: UserCheckInWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCheckIns to fetch.
     */
    orderBy?: UserCheckInOrderByWithRelationInput | UserCheckInOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCheckIns.
     */
    cursor?: UserCheckInWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCheckIns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCheckIns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCheckIns.
     */
    distinct?: UserCheckInScalarFieldEnum | UserCheckInScalarFieldEnum[]
  }

  /**
   * UserCheckIn findMany
   */
  export type UserCheckInFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCheckIn
     */
    select?: UserCheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCheckIn
     */
    omit?: UserCheckInOmit<ExtArgs> | null
    /**
     * Filter, which UserCheckIns to fetch.
     */
    where?: UserCheckInWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCheckIns to fetch.
     */
    orderBy?: UserCheckInOrderByWithRelationInput | UserCheckInOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserCheckIns.
     */
    cursor?: UserCheckInWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCheckIns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCheckIns.
     */
    skip?: number
    distinct?: UserCheckInScalarFieldEnum | UserCheckInScalarFieldEnum[]
  }

  /**
   * UserCheckIn create
   */
  export type UserCheckInCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCheckIn
     */
    select?: UserCheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCheckIn
     */
    omit?: UserCheckInOmit<ExtArgs> | null
    /**
     * The data needed to create a UserCheckIn.
     */
    data: XOR<UserCheckInCreateInput, UserCheckInUncheckedCreateInput>
  }

  /**
   * UserCheckIn createMany
   */
  export type UserCheckInCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserCheckIns.
     */
    data: UserCheckInCreateManyInput | UserCheckInCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserCheckIn createManyAndReturn
   */
  export type UserCheckInCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCheckIn
     */
    select?: UserCheckInSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserCheckIn
     */
    omit?: UserCheckInOmit<ExtArgs> | null
    /**
     * The data used to create many UserCheckIns.
     */
    data: UserCheckInCreateManyInput | UserCheckInCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserCheckIn update
   */
  export type UserCheckInUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCheckIn
     */
    select?: UserCheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCheckIn
     */
    omit?: UserCheckInOmit<ExtArgs> | null
    /**
     * The data needed to update a UserCheckIn.
     */
    data: XOR<UserCheckInUpdateInput, UserCheckInUncheckedUpdateInput>
    /**
     * Choose, which UserCheckIn to update.
     */
    where: UserCheckInWhereUniqueInput
  }

  /**
   * UserCheckIn updateMany
   */
  export type UserCheckInUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserCheckIns.
     */
    data: XOR<UserCheckInUpdateManyMutationInput, UserCheckInUncheckedUpdateManyInput>
    /**
     * Filter which UserCheckIns to update
     */
    where?: UserCheckInWhereInput
    /**
     * Limit how many UserCheckIns to update.
     */
    limit?: number
  }

  /**
   * UserCheckIn updateManyAndReturn
   */
  export type UserCheckInUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCheckIn
     */
    select?: UserCheckInSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserCheckIn
     */
    omit?: UserCheckInOmit<ExtArgs> | null
    /**
     * The data used to update UserCheckIns.
     */
    data: XOR<UserCheckInUpdateManyMutationInput, UserCheckInUncheckedUpdateManyInput>
    /**
     * Filter which UserCheckIns to update
     */
    where?: UserCheckInWhereInput
    /**
     * Limit how many UserCheckIns to update.
     */
    limit?: number
  }

  /**
   * UserCheckIn upsert
   */
  export type UserCheckInUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCheckIn
     */
    select?: UserCheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCheckIn
     */
    omit?: UserCheckInOmit<ExtArgs> | null
    /**
     * The filter to search for the UserCheckIn to update in case it exists.
     */
    where: UserCheckInWhereUniqueInput
    /**
     * In case the UserCheckIn found by the `where` argument doesn't exist, create a new UserCheckIn with this data.
     */
    create: XOR<UserCheckInCreateInput, UserCheckInUncheckedCreateInput>
    /**
     * In case the UserCheckIn was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserCheckInUpdateInput, UserCheckInUncheckedUpdateInput>
  }

  /**
   * UserCheckIn delete
   */
  export type UserCheckInDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCheckIn
     */
    select?: UserCheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCheckIn
     */
    omit?: UserCheckInOmit<ExtArgs> | null
    /**
     * Filter which UserCheckIn to delete.
     */
    where: UserCheckInWhereUniqueInput
  }

  /**
   * UserCheckIn deleteMany
   */
  export type UserCheckInDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCheckIns to delete
     */
    where?: UserCheckInWhereInput
    /**
     * Limit how many UserCheckIns to delete.
     */
    limit?: number
  }

  /**
   * UserCheckIn without action
   */
  export type UserCheckInDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCheckIn
     */
    select?: UserCheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCheckIn
     */
    omit?: UserCheckInOmit<ExtArgs> | null
  }


  /**
   * Model UserGymCheckIn
   */

  export type AggregateUserGymCheckIn = {
    _count: UserGymCheckInCountAggregateOutputType | null
    _min: UserGymCheckInMinAggregateOutputType | null
    _max: UserGymCheckInMaxAggregateOutputType | null
  }

  export type UserGymCheckInMinAggregateOutputType = {
    id: string | null
    userId: string | null
    gymId: string | null
    checkInId: string | null
    createdAt: Date | null
  }

  export type UserGymCheckInMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    gymId: string | null
    checkInId: string | null
    createdAt: Date | null
  }

  export type UserGymCheckInCountAggregateOutputType = {
    id: number
    userId: number
    gymId: number
    checkInId: number
    createdAt: number
    _all: number
  }


  export type UserGymCheckInMinAggregateInputType = {
    id?: true
    userId?: true
    gymId?: true
    checkInId?: true
    createdAt?: true
  }

  export type UserGymCheckInMaxAggregateInputType = {
    id?: true
    userId?: true
    gymId?: true
    checkInId?: true
    createdAt?: true
  }

  export type UserGymCheckInCountAggregateInputType = {
    id?: true
    userId?: true
    gymId?: true
    checkInId?: true
    createdAt?: true
    _all?: true
  }

  export type UserGymCheckInAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGymCheckIn to aggregate.
     */
    where?: UserGymCheckInWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGymCheckIns to fetch.
     */
    orderBy?: UserGymCheckInOrderByWithRelationInput | UserGymCheckInOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserGymCheckInWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGymCheckIns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGymCheckIns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserGymCheckIns
    **/
    _count?: true | UserGymCheckInCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserGymCheckInMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserGymCheckInMaxAggregateInputType
  }

  export type GetUserGymCheckInAggregateType<T extends UserGymCheckInAggregateArgs> = {
        [P in keyof T & keyof AggregateUserGymCheckIn]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserGymCheckIn[P]>
      : GetScalarType<T[P], AggregateUserGymCheckIn[P]>
  }




  export type UserGymCheckInGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGymCheckInWhereInput
    orderBy?: UserGymCheckInOrderByWithAggregationInput | UserGymCheckInOrderByWithAggregationInput[]
    by: UserGymCheckInScalarFieldEnum[] | UserGymCheckInScalarFieldEnum
    having?: UserGymCheckInScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserGymCheckInCountAggregateInputType | true
    _min?: UserGymCheckInMinAggregateInputType
    _max?: UserGymCheckInMaxAggregateInputType
  }

  export type UserGymCheckInGroupByOutputType = {
    id: string
    userId: string
    gymId: string
    checkInId: string
    createdAt: Date
    _count: UserGymCheckInCountAggregateOutputType | null
    _min: UserGymCheckInMinAggregateOutputType | null
    _max: UserGymCheckInMaxAggregateOutputType | null
  }

  type GetUserGymCheckInGroupByPayload<T extends UserGymCheckInGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGymCheckInGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGymCheckInGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGymCheckInGroupByOutputType[P]>
            : GetScalarType<T[P], UserGymCheckInGroupByOutputType[P]>
        }
      >
    >


  export type UserGymCheckInSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gymId?: boolean
    checkInId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userGymCheckIn"]>

  export type UserGymCheckInSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gymId?: boolean
    checkInId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userGymCheckIn"]>

  export type UserGymCheckInSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gymId?: boolean
    checkInId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userGymCheckIn"]>

  export type UserGymCheckInSelectScalar = {
    id?: boolean
    userId?: boolean
    gymId?: boolean
    checkInId?: boolean
    createdAt?: boolean
  }

  export type UserGymCheckInOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "gymId" | "checkInId" | "createdAt", ExtArgs["result"]["userGymCheckIn"]>

  export type $UserGymCheckInPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserGymCheckIn"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      gymId: string
      checkInId: string
      createdAt: Date
    }, ExtArgs["result"]["userGymCheckIn"]>
    composites: {}
  }

  type UserGymCheckInGetPayload<S extends boolean | null | undefined | UserGymCheckInDefaultArgs> = $Result.GetResult<Prisma.$UserGymCheckInPayload, S>

  type UserGymCheckInCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserGymCheckInFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserGymCheckInCountAggregateInputType | true
    }

  export interface UserGymCheckInDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserGymCheckIn'], meta: { name: 'UserGymCheckIn' } }
    /**
     * Find zero or one UserGymCheckIn that matches the filter.
     * @param {UserGymCheckInFindUniqueArgs} args - Arguments to find a UserGymCheckIn
     * @example
     * // Get one UserGymCheckIn
     * const userGymCheckIn = await prisma.userGymCheckIn.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserGymCheckInFindUniqueArgs>(args: SelectSubset<T, UserGymCheckInFindUniqueArgs<ExtArgs>>): Prisma__UserGymCheckInClient<$Result.GetResult<Prisma.$UserGymCheckInPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserGymCheckIn that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserGymCheckInFindUniqueOrThrowArgs} args - Arguments to find a UserGymCheckIn
     * @example
     * // Get one UserGymCheckIn
     * const userGymCheckIn = await prisma.userGymCheckIn.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserGymCheckInFindUniqueOrThrowArgs>(args: SelectSubset<T, UserGymCheckInFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserGymCheckInClient<$Result.GetResult<Prisma.$UserGymCheckInPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserGymCheckIn that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGymCheckInFindFirstArgs} args - Arguments to find a UserGymCheckIn
     * @example
     * // Get one UserGymCheckIn
     * const userGymCheckIn = await prisma.userGymCheckIn.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserGymCheckInFindFirstArgs>(args?: SelectSubset<T, UserGymCheckInFindFirstArgs<ExtArgs>>): Prisma__UserGymCheckInClient<$Result.GetResult<Prisma.$UserGymCheckInPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserGymCheckIn that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGymCheckInFindFirstOrThrowArgs} args - Arguments to find a UserGymCheckIn
     * @example
     * // Get one UserGymCheckIn
     * const userGymCheckIn = await prisma.userGymCheckIn.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserGymCheckInFindFirstOrThrowArgs>(args?: SelectSubset<T, UserGymCheckInFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserGymCheckInClient<$Result.GetResult<Prisma.$UserGymCheckInPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserGymCheckIns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGymCheckInFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserGymCheckIns
     * const userGymCheckIns = await prisma.userGymCheckIn.findMany()
     * 
     * // Get first 10 UserGymCheckIns
     * const userGymCheckIns = await prisma.userGymCheckIn.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userGymCheckInWithIdOnly = await prisma.userGymCheckIn.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserGymCheckInFindManyArgs>(args?: SelectSubset<T, UserGymCheckInFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGymCheckInPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserGymCheckIn.
     * @param {UserGymCheckInCreateArgs} args - Arguments to create a UserGymCheckIn.
     * @example
     * // Create one UserGymCheckIn
     * const UserGymCheckIn = await prisma.userGymCheckIn.create({
     *   data: {
     *     // ... data to create a UserGymCheckIn
     *   }
     * })
     * 
     */
    create<T extends UserGymCheckInCreateArgs>(args: SelectSubset<T, UserGymCheckInCreateArgs<ExtArgs>>): Prisma__UserGymCheckInClient<$Result.GetResult<Prisma.$UserGymCheckInPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserGymCheckIns.
     * @param {UserGymCheckInCreateManyArgs} args - Arguments to create many UserGymCheckIns.
     * @example
     * // Create many UserGymCheckIns
     * const userGymCheckIn = await prisma.userGymCheckIn.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserGymCheckInCreateManyArgs>(args?: SelectSubset<T, UserGymCheckInCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserGymCheckIns and returns the data saved in the database.
     * @param {UserGymCheckInCreateManyAndReturnArgs} args - Arguments to create many UserGymCheckIns.
     * @example
     * // Create many UserGymCheckIns
     * const userGymCheckIn = await prisma.userGymCheckIn.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserGymCheckIns and only return the `id`
     * const userGymCheckInWithIdOnly = await prisma.userGymCheckIn.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserGymCheckInCreateManyAndReturnArgs>(args?: SelectSubset<T, UserGymCheckInCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGymCheckInPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserGymCheckIn.
     * @param {UserGymCheckInDeleteArgs} args - Arguments to delete one UserGymCheckIn.
     * @example
     * // Delete one UserGymCheckIn
     * const UserGymCheckIn = await prisma.userGymCheckIn.delete({
     *   where: {
     *     // ... filter to delete one UserGymCheckIn
     *   }
     * })
     * 
     */
    delete<T extends UserGymCheckInDeleteArgs>(args: SelectSubset<T, UserGymCheckInDeleteArgs<ExtArgs>>): Prisma__UserGymCheckInClient<$Result.GetResult<Prisma.$UserGymCheckInPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserGymCheckIn.
     * @param {UserGymCheckInUpdateArgs} args - Arguments to update one UserGymCheckIn.
     * @example
     * // Update one UserGymCheckIn
     * const userGymCheckIn = await prisma.userGymCheckIn.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserGymCheckInUpdateArgs>(args: SelectSubset<T, UserGymCheckInUpdateArgs<ExtArgs>>): Prisma__UserGymCheckInClient<$Result.GetResult<Prisma.$UserGymCheckInPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserGymCheckIns.
     * @param {UserGymCheckInDeleteManyArgs} args - Arguments to filter UserGymCheckIns to delete.
     * @example
     * // Delete a few UserGymCheckIns
     * const { count } = await prisma.userGymCheckIn.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserGymCheckInDeleteManyArgs>(args?: SelectSubset<T, UserGymCheckInDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserGymCheckIns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGymCheckInUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserGymCheckIns
     * const userGymCheckIn = await prisma.userGymCheckIn.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserGymCheckInUpdateManyArgs>(args: SelectSubset<T, UserGymCheckInUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserGymCheckIns and returns the data updated in the database.
     * @param {UserGymCheckInUpdateManyAndReturnArgs} args - Arguments to update many UserGymCheckIns.
     * @example
     * // Update many UserGymCheckIns
     * const userGymCheckIn = await prisma.userGymCheckIn.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserGymCheckIns and only return the `id`
     * const userGymCheckInWithIdOnly = await prisma.userGymCheckIn.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserGymCheckInUpdateManyAndReturnArgs>(args: SelectSubset<T, UserGymCheckInUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGymCheckInPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserGymCheckIn.
     * @param {UserGymCheckInUpsertArgs} args - Arguments to update or create a UserGymCheckIn.
     * @example
     * // Update or create a UserGymCheckIn
     * const userGymCheckIn = await prisma.userGymCheckIn.upsert({
     *   create: {
     *     // ... data to create a UserGymCheckIn
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserGymCheckIn we want to update
     *   }
     * })
     */
    upsert<T extends UserGymCheckInUpsertArgs>(args: SelectSubset<T, UserGymCheckInUpsertArgs<ExtArgs>>): Prisma__UserGymCheckInClient<$Result.GetResult<Prisma.$UserGymCheckInPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserGymCheckIns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGymCheckInCountArgs} args - Arguments to filter UserGymCheckIns to count.
     * @example
     * // Count the number of UserGymCheckIns
     * const count = await prisma.userGymCheckIn.count({
     *   where: {
     *     // ... the filter for the UserGymCheckIns we want to count
     *   }
     * })
    **/
    count<T extends UserGymCheckInCountArgs>(
      args?: Subset<T, UserGymCheckInCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserGymCheckInCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserGymCheckIn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGymCheckInAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserGymCheckInAggregateArgs>(args: Subset<T, UserGymCheckInAggregateArgs>): Prisma.PrismaPromise<GetUserGymCheckInAggregateType<T>>

    /**
     * Group by UserGymCheckIn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGymCheckInGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGymCheckInGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGymCheckInGroupByArgs['orderBy'] }
        : { orderBy?: UserGymCheckInGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGymCheckInGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGymCheckInGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserGymCheckIn model
   */
  readonly fields: UserGymCheckInFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserGymCheckIn.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserGymCheckInClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserGymCheckIn model
   */
  interface UserGymCheckInFieldRefs {
    readonly id: FieldRef<"UserGymCheckIn", 'String'>
    readonly userId: FieldRef<"UserGymCheckIn", 'String'>
    readonly gymId: FieldRef<"UserGymCheckIn", 'String'>
    readonly checkInId: FieldRef<"UserGymCheckIn", 'String'>
    readonly createdAt: FieldRef<"UserGymCheckIn", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserGymCheckIn findUnique
   */
  export type UserGymCheckInFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGymCheckIn
     */
    select?: UserGymCheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGymCheckIn
     */
    omit?: UserGymCheckInOmit<ExtArgs> | null
    /**
     * Filter, which UserGymCheckIn to fetch.
     */
    where: UserGymCheckInWhereUniqueInput
  }

  /**
   * UserGymCheckIn findUniqueOrThrow
   */
  export type UserGymCheckInFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGymCheckIn
     */
    select?: UserGymCheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGymCheckIn
     */
    omit?: UserGymCheckInOmit<ExtArgs> | null
    /**
     * Filter, which UserGymCheckIn to fetch.
     */
    where: UserGymCheckInWhereUniqueInput
  }

  /**
   * UserGymCheckIn findFirst
   */
  export type UserGymCheckInFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGymCheckIn
     */
    select?: UserGymCheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGymCheckIn
     */
    omit?: UserGymCheckInOmit<ExtArgs> | null
    /**
     * Filter, which UserGymCheckIn to fetch.
     */
    where?: UserGymCheckInWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGymCheckIns to fetch.
     */
    orderBy?: UserGymCheckInOrderByWithRelationInput | UserGymCheckInOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGymCheckIns.
     */
    cursor?: UserGymCheckInWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGymCheckIns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGymCheckIns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGymCheckIns.
     */
    distinct?: UserGymCheckInScalarFieldEnum | UserGymCheckInScalarFieldEnum[]
  }

  /**
   * UserGymCheckIn findFirstOrThrow
   */
  export type UserGymCheckInFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGymCheckIn
     */
    select?: UserGymCheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGymCheckIn
     */
    omit?: UserGymCheckInOmit<ExtArgs> | null
    /**
     * Filter, which UserGymCheckIn to fetch.
     */
    where?: UserGymCheckInWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGymCheckIns to fetch.
     */
    orderBy?: UserGymCheckInOrderByWithRelationInput | UserGymCheckInOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGymCheckIns.
     */
    cursor?: UserGymCheckInWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGymCheckIns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGymCheckIns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGymCheckIns.
     */
    distinct?: UserGymCheckInScalarFieldEnum | UserGymCheckInScalarFieldEnum[]
  }

  /**
   * UserGymCheckIn findMany
   */
  export type UserGymCheckInFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGymCheckIn
     */
    select?: UserGymCheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGymCheckIn
     */
    omit?: UserGymCheckInOmit<ExtArgs> | null
    /**
     * Filter, which UserGymCheckIns to fetch.
     */
    where?: UserGymCheckInWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGymCheckIns to fetch.
     */
    orderBy?: UserGymCheckInOrderByWithRelationInput | UserGymCheckInOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserGymCheckIns.
     */
    cursor?: UserGymCheckInWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGymCheckIns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGymCheckIns.
     */
    skip?: number
    distinct?: UserGymCheckInScalarFieldEnum | UserGymCheckInScalarFieldEnum[]
  }

  /**
   * UserGymCheckIn create
   */
  export type UserGymCheckInCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGymCheckIn
     */
    select?: UserGymCheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGymCheckIn
     */
    omit?: UserGymCheckInOmit<ExtArgs> | null
    /**
     * The data needed to create a UserGymCheckIn.
     */
    data: XOR<UserGymCheckInCreateInput, UserGymCheckInUncheckedCreateInput>
  }

  /**
   * UserGymCheckIn createMany
   */
  export type UserGymCheckInCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserGymCheckIns.
     */
    data: UserGymCheckInCreateManyInput | UserGymCheckInCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserGymCheckIn createManyAndReturn
   */
  export type UserGymCheckInCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGymCheckIn
     */
    select?: UserGymCheckInSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserGymCheckIn
     */
    omit?: UserGymCheckInOmit<ExtArgs> | null
    /**
     * The data used to create many UserGymCheckIns.
     */
    data: UserGymCheckInCreateManyInput | UserGymCheckInCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserGymCheckIn update
   */
  export type UserGymCheckInUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGymCheckIn
     */
    select?: UserGymCheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGymCheckIn
     */
    omit?: UserGymCheckInOmit<ExtArgs> | null
    /**
     * The data needed to update a UserGymCheckIn.
     */
    data: XOR<UserGymCheckInUpdateInput, UserGymCheckInUncheckedUpdateInput>
    /**
     * Choose, which UserGymCheckIn to update.
     */
    where: UserGymCheckInWhereUniqueInput
  }

  /**
   * UserGymCheckIn updateMany
   */
  export type UserGymCheckInUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserGymCheckIns.
     */
    data: XOR<UserGymCheckInUpdateManyMutationInput, UserGymCheckInUncheckedUpdateManyInput>
    /**
     * Filter which UserGymCheckIns to update
     */
    where?: UserGymCheckInWhereInput
    /**
     * Limit how many UserGymCheckIns to update.
     */
    limit?: number
  }

  /**
   * UserGymCheckIn updateManyAndReturn
   */
  export type UserGymCheckInUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGymCheckIn
     */
    select?: UserGymCheckInSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserGymCheckIn
     */
    omit?: UserGymCheckInOmit<ExtArgs> | null
    /**
     * The data used to update UserGymCheckIns.
     */
    data: XOR<UserGymCheckInUpdateManyMutationInput, UserGymCheckInUncheckedUpdateManyInput>
    /**
     * Filter which UserGymCheckIns to update
     */
    where?: UserGymCheckInWhereInput
    /**
     * Limit how many UserGymCheckIns to update.
     */
    limit?: number
  }

  /**
   * UserGymCheckIn upsert
   */
  export type UserGymCheckInUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGymCheckIn
     */
    select?: UserGymCheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGymCheckIn
     */
    omit?: UserGymCheckInOmit<ExtArgs> | null
    /**
     * The filter to search for the UserGymCheckIn to update in case it exists.
     */
    where: UserGymCheckInWhereUniqueInput
    /**
     * In case the UserGymCheckIn found by the `where` argument doesn't exist, create a new UserGymCheckIn with this data.
     */
    create: XOR<UserGymCheckInCreateInput, UserGymCheckInUncheckedCreateInput>
    /**
     * In case the UserGymCheckIn was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserGymCheckInUpdateInput, UserGymCheckInUncheckedUpdateInput>
  }

  /**
   * UserGymCheckIn delete
   */
  export type UserGymCheckInDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGymCheckIn
     */
    select?: UserGymCheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGymCheckIn
     */
    omit?: UserGymCheckInOmit<ExtArgs> | null
    /**
     * Filter which UserGymCheckIn to delete.
     */
    where: UserGymCheckInWhereUniqueInput
  }

  /**
   * UserGymCheckIn deleteMany
   */
  export type UserGymCheckInDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGymCheckIns to delete
     */
    where?: UserGymCheckInWhereInput
    /**
     * Limit how many UserGymCheckIns to delete.
     */
    limit?: number
  }

  /**
   * UserGymCheckIn without action
   */
  export type UserGymCheckInDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGymCheckIn
     */
    select?: UserGymCheckInSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGymCheckIn
     */
    omit?: UserGymCheckInOmit<ExtArgs> | null
  }


  /**
   * Model UserGymCheckInHistory
   */

  export type AggregateUserGymCheckInHistory = {
    _count: UserGymCheckInHistoryCountAggregateOutputType | null
    _min: UserGymCheckInHistoryMinAggregateOutputType | null
    _max: UserGymCheckInHistoryMaxAggregateOutputType | null
  }

  export type UserGymCheckInHistoryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    gymId: string | null
    checkInId: string | null
    createdAt: Date | null
  }

  export type UserGymCheckInHistoryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    gymId: string | null
    checkInId: string | null
    createdAt: Date | null
  }

  export type UserGymCheckInHistoryCountAggregateOutputType = {
    id: number
    userId: number
    gymId: number
    checkInId: number
    createdAt: number
    _all: number
  }


  export type UserGymCheckInHistoryMinAggregateInputType = {
    id?: true
    userId?: true
    gymId?: true
    checkInId?: true
    createdAt?: true
  }

  export type UserGymCheckInHistoryMaxAggregateInputType = {
    id?: true
    userId?: true
    gymId?: true
    checkInId?: true
    createdAt?: true
  }

  export type UserGymCheckInHistoryCountAggregateInputType = {
    id?: true
    userId?: true
    gymId?: true
    checkInId?: true
    createdAt?: true
    _all?: true
  }

  export type UserGymCheckInHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGymCheckInHistory to aggregate.
     */
    where?: UserGymCheckInHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGymCheckInHistories to fetch.
     */
    orderBy?: UserGymCheckInHistoryOrderByWithRelationInput | UserGymCheckInHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserGymCheckInHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGymCheckInHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGymCheckInHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserGymCheckInHistories
    **/
    _count?: true | UserGymCheckInHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserGymCheckInHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserGymCheckInHistoryMaxAggregateInputType
  }

  export type GetUserGymCheckInHistoryAggregateType<T extends UserGymCheckInHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateUserGymCheckInHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserGymCheckInHistory[P]>
      : GetScalarType<T[P], AggregateUserGymCheckInHistory[P]>
  }




  export type UserGymCheckInHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGymCheckInHistoryWhereInput
    orderBy?: UserGymCheckInHistoryOrderByWithAggregationInput | UserGymCheckInHistoryOrderByWithAggregationInput[]
    by: UserGymCheckInHistoryScalarFieldEnum[] | UserGymCheckInHistoryScalarFieldEnum
    having?: UserGymCheckInHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserGymCheckInHistoryCountAggregateInputType | true
    _min?: UserGymCheckInHistoryMinAggregateInputType
    _max?: UserGymCheckInHistoryMaxAggregateInputType
  }

  export type UserGymCheckInHistoryGroupByOutputType = {
    id: string
    userId: string
    gymId: string
    checkInId: string
    createdAt: Date
    _count: UserGymCheckInHistoryCountAggregateOutputType | null
    _min: UserGymCheckInHistoryMinAggregateOutputType | null
    _max: UserGymCheckInHistoryMaxAggregateOutputType | null
  }

  type GetUserGymCheckInHistoryGroupByPayload<T extends UserGymCheckInHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGymCheckInHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGymCheckInHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGymCheckInHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], UserGymCheckInHistoryGroupByOutputType[P]>
        }
      >
    >


  export type UserGymCheckInHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gymId?: boolean
    checkInId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userGymCheckInHistory"]>

  export type UserGymCheckInHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gymId?: boolean
    checkInId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userGymCheckInHistory"]>

  export type UserGymCheckInHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gymId?: boolean
    checkInId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userGymCheckInHistory"]>

  export type UserGymCheckInHistorySelectScalar = {
    id?: boolean
    userId?: boolean
    gymId?: boolean
    checkInId?: boolean
    createdAt?: boolean
  }

  export type UserGymCheckInHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "gymId" | "checkInId" | "createdAt", ExtArgs["result"]["userGymCheckInHistory"]>

  export type $UserGymCheckInHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserGymCheckInHistory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      gymId: string
      checkInId: string
      createdAt: Date
    }, ExtArgs["result"]["userGymCheckInHistory"]>
    composites: {}
  }

  type UserGymCheckInHistoryGetPayload<S extends boolean | null | undefined | UserGymCheckInHistoryDefaultArgs> = $Result.GetResult<Prisma.$UserGymCheckInHistoryPayload, S>

  type UserGymCheckInHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserGymCheckInHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserGymCheckInHistoryCountAggregateInputType | true
    }

  export interface UserGymCheckInHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserGymCheckInHistory'], meta: { name: 'UserGymCheckInHistory' } }
    /**
     * Find zero or one UserGymCheckInHistory that matches the filter.
     * @param {UserGymCheckInHistoryFindUniqueArgs} args - Arguments to find a UserGymCheckInHistory
     * @example
     * // Get one UserGymCheckInHistory
     * const userGymCheckInHistory = await prisma.userGymCheckInHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserGymCheckInHistoryFindUniqueArgs>(args: SelectSubset<T, UserGymCheckInHistoryFindUniqueArgs<ExtArgs>>): Prisma__UserGymCheckInHistoryClient<$Result.GetResult<Prisma.$UserGymCheckInHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserGymCheckInHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserGymCheckInHistoryFindUniqueOrThrowArgs} args - Arguments to find a UserGymCheckInHistory
     * @example
     * // Get one UserGymCheckInHistory
     * const userGymCheckInHistory = await prisma.userGymCheckInHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserGymCheckInHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, UserGymCheckInHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserGymCheckInHistoryClient<$Result.GetResult<Prisma.$UserGymCheckInHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserGymCheckInHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGymCheckInHistoryFindFirstArgs} args - Arguments to find a UserGymCheckInHistory
     * @example
     * // Get one UserGymCheckInHistory
     * const userGymCheckInHistory = await prisma.userGymCheckInHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserGymCheckInHistoryFindFirstArgs>(args?: SelectSubset<T, UserGymCheckInHistoryFindFirstArgs<ExtArgs>>): Prisma__UserGymCheckInHistoryClient<$Result.GetResult<Prisma.$UserGymCheckInHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserGymCheckInHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGymCheckInHistoryFindFirstOrThrowArgs} args - Arguments to find a UserGymCheckInHistory
     * @example
     * // Get one UserGymCheckInHistory
     * const userGymCheckInHistory = await prisma.userGymCheckInHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserGymCheckInHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, UserGymCheckInHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserGymCheckInHistoryClient<$Result.GetResult<Prisma.$UserGymCheckInHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserGymCheckInHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGymCheckInHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserGymCheckInHistories
     * const userGymCheckInHistories = await prisma.userGymCheckInHistory.findMany()
     * 
     * // Get first 10 UserGymCheckInHistories
     * const userGymCheckInHistories = await prisma.userGymCheckInHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userGymCheckInHistoryWithIdOnly = await prisma.userGymCheckInHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserGymCheckInHistoryFindManyArgs>(args?: SelectSubset<T, UserGymCheckInHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGymCheckInHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserGymCheckInHistory.
     * @param {UserGymCheckInHistoryCreateArgs} args - Arguments to create a UserGymCheckInHistory.
     * @example
     * // Create one UserGymCheckInHistory
     * const UserGymCheckInHistory = await prisma.userGymCheckInHistory.create({
     *   data: {
     *     // ... data to create a UserGymCheckInHistory
     *   }
     * })
     * 
     */
    create<T extends UserGymCheckInHistoryCreateArgs>(args: SelectSubset<T, UserGymCheckInHistoryCreateArgs<ExtArgs>>): Prisma__UserGymCheckInHistoryClient<$Result.GetResult<Prisma.$UserGymCheckInHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserGymCheckInHistories.
     * @param {UserGymCheckInHistoryCreateManyArgs} args - Arguments to create many UserGymCheckInHistories.
     * @example
     * // Create many UserGymCheckInHistories
     * const userGymCheckInHistory = await prisma.userGymCheckInHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserGymCheckInHistoryCreateManyArgs>(args?: SelectSubset<T, UserGymCheckInHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserGymCheckInHistories and returns the data saved in the database.
     * @param {UserGymCheckInHistoryCreateManyAndReturnArgs} args - Arguments to create many UserGymCheckInHistories.
     * @example
     * // Create many UserGymCheckInHistories
     * const userGymCheckInHistory = await prisma.userGymCheckInHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserGymCheckInHistories and only return the `id`
     * const userGymCheckInHistoryWithIdOnly = await prisma.userGymCheckInHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserGymCheckInHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, UserGymCheckInHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGymCheckInHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserGymCheckInHistory.
     * @param {UserGymCheckInHistoryDeleteArgs} args - Arguments to delete one UserGymCheckInHistory.
     * @example
     * // Delete one UserGymCheckInHistory
     * const UserGymCheckInHistory = await prisma.userGymCheckInHistory.delete({
     *   where: {
     *     // ... filter to delete one UserGymCheckInHistory
     *   }
     * })
     * 
     */
    delete<T extends UserGymCheckInHistoryDeleteArgs>(args: SelectSubset<T, UserGymCheckInHistoryDeleteArgs<ExtArgs>>): Prisma__UserGymCheckInHistoryClient<$Result.GetResult<Prisma.$UserGymCheckInHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserGymCheckInHistory.
     * @param {UserGymCheckInHistoryUpdateArgs} args - Arguments to update one UserGymCheckInHistory.
     * @example
     * // Update one UserGymCheckInHistory
     * const userGymCheckInHistory = await prisma.userGymCheckInHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserGymCheckInHistoryUpdateArgs>(args: SelectSubset<T, UserGymCheckInHistoryUpdateArgs<ExtArgs>>): Prisma__UserGymCheckInHistoryClient<$Result.GetResult<Prisma.$UserGymCheckInHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserGymCheckInHistories.
     * @param {UserGymCheckInHistoryDeleteManyArgs} args - Arguments to filter UserGymCheckInHistories to delete.
     * @example
     * // Delete a few UserGymCheckInHistories
     * const { count } = await prisma.userGymCheckInHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserGymCheckInHistoryDeleteManyArgs>(args?: SelectSubset<T, UserGymCheckInHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserGymCheckInHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGymCheckInHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserGymCheckInHistories
     * const userGymCheckInHistory = await prisma.userGymCheckInHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserGymCheckInHistoryUpdateManyArgs>(args: SelectSubset<T, UserGymCheckInHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserGymCheckInHistories and returns the data updated in the database.
     * @param {UserGymCheckInHistoryUpdateManyAndReturnArgs} args - Arguments to update many UserGymCheckInHistories.
     * @example
     * // Update many UserGymCheckInHistories
     * const userGymCheckInHistory = await prisma.userGymCheckInHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserGymCheckInHistories and only return the `id`
     * const userGymCheckInHistoryWithIdOnly = await prisma.userGymCheckInHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserGymCheckInHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, UserGymCheckInHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGymCheckInHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserGymCheckInHistory.
     * @param {UserGymCheckInHistoryUpsertArgs} args - Arguments to update or create a UserGymCheckInHistory.
     * @example
     * // Update or create a UserGymCheckInHistory
     * const userGymCheckInHistory = await prisma.userGymCheckInHistory.upsert({
     *   create: {
     *     // ... data to create a UserGymCheckInHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserGymCheckInHistory we want to update
     *   }
     * })
     */
    upsert<T extends UserGymCheckInHistoryUpsertArgs>(args: SelectSubset<T, UserGymCheckInHistoryUpsertArgs<ExtArgs>>): Prisma__UserGymCheckInHistoryClient<$Result.GetResult<Prisma.$UserGymCheckInHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserGymCheckInHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGymCheckInHistoryCountArgs} args - Arguments to filter UserGymCheckInHistories to count.
     * @example
     * // Count the number of UserGymCheckInHistories
     * const count = await prisma.userGymCheckInHistory.count({
     *   where: {
     *     // ... the filter for the UserGymCheckInHistories we want to count
     *   }
     * })
    **/
    count<T extends UserGymCheckInHistoryCountArgs>(
      args?: Subset<T, UserGymCheckInHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserGymCheckInHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserGymCheckInHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGymCheckInHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserGymCheckInHistoryAggregateArgs>(args: Subset<T, UserGymCheckInHistoryAggregateArgs>): Prisma.PrismaPromise<GetUserGymCheckInHistoryAggregateType<T>>

    /**
     * Group by UserGymCheckInHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGymCheckInHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGymCheckInHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGymCheckInHistoryGroupByArgs['orderBy'] }
        : { orderBy?: UserGymCheckInHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGymCheckInHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGymCheckInHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserGymCheckInHistory model
   */
  readonly fields: UserGymCheckInHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserGymCheckInHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserGymCheckInHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserGymCheckInHistory model
   */
  interface UserGymCheckInHistoryFieldRefs {
    readonly id: FieldRef<"UserGymCheckInHistory", 'String'>
    readonly userId: FieldRef<"UserGymCheckInHistory", 'String'>
    readonly gymId: FieldRef<"UserGymCheckInHistory", 'String'>
    readonly checkInId: FieldRef<"UserGymCheckInHistory", 'String'>
    readonly createdAt: FieldRef<"UserGymCheckInHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserGymCheckInHistory findUnique
   */
  export type UserGymCheckInHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGymCheckInHistory
     */
    select?: UserGymCheckInHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGymCheckInHistory
     */
    omit?: UserGymCheckInHistoryOmit<ExtArgs> | null
    /**
     * Filter, which UserGymCheckInHistory to fetch.
     */
    where: UserGymCheckInHistoryWhereUniqueInput
  }

  /**
   * UserGymCheckInHistory findUniqueOrThrow
   */
  export type UserGymCheckInHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGymCheckInHistory
     */
    select?: UserGymCheckInHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGymCheckInHistory
     */
    omit?: UserGymCheckInHistoryOmit<ExtArgs> | null
    /**
     * Filter, which UserGymCheckInHistory to fetch.
     */
    where: UserGymCheckInHistoryWhereUniqueInput
  }

  /**
   * UserGymCheckInHistory findFirst
   */
  export type UserGymCheckInHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGymCheckInHistory
     */
    select?: UserGymCheckInHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGymCheckInHistory
     */
    omit?: UserGymCheckInHistoryOmit<ExtArgs> | null
    /**
     * Filter, which UserGymCheckInHistory to fetch.
     */
    where?: UserGymCheckInHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGymCheckInHistories to fetch.
     */
    orderBy?: UserGymCheckInHistoryOrderByWithRelationInput | UserGymCheckInHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGymCheckInHistories.
     */
    cursor?: UserGymCheckInHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGymCheckInHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGymCheckInHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGymCheckInHistories.
     */
    distinct?: UserGymCheckInHistoryScalarFieldEnum | UserGymCheckInHistoryScalarFieldEnum[]
  }

  /**
   * UserGymCheckInHistory findFirstOrThrow
   */
  export type UserGymCheckInHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGymCheckInHistory
     */
    select?: UserGymCheckInHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGymCheckInHistory
     */
    omit?: UserGymCheckInHistoryOmit<ExtArgs> | null
    /**
     * Filter, which UserGymCheckInHistory to fetch.
     */
    where?: UserGymCheckInHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGymCheckInHistories to fetch.
     */
    orderBy?: UserGymCheckInHistoryOrderByWithRelationInput | UserGymCheckInHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGymCheckInHistories.
     */
    cursor?: UserGymCheckInHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGymCheckInHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGymCheckInHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGymCheckInHistories.
     */
    distinct?: UserGymCheckInHistoryScalarFieldEnum | UserGymCheckInHistoryScalarFieldEnum[]
  }

  /**
   * UserGymCheckInHistory findMany
   */
  export type UserGymCheckInHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGymCheckInHistory
     */
    select?: UserGymCheckInHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGymCheckInHistory
     */
    omit?: UserGymCheckInHistoryOmit<ExtArgs> | null
    /**
     * Filter, which UserGymCheckInHistories to fetch.
     */
    where?: UserGymCheckInHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGymCheckInHistories to fetch.
     */
    orderBy?: UserGymCheckInHistoryOrderByWithRelationInput | UserGymCheckInHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserGymCheckInHistories.
     */
    cursor?: UserGymCheckInHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGymCheckInHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGymCheckInHistories.
     */
    skip?: number
    distinct?: UserGymCheckInHistoryScalarFieldEnum | UserGymCheckInHistoryScalarFieldEnum[]
  }

  /**
   * UserGymCheckInHistory create
   */
  export type UserGymCheckInHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGymCheckInHistory
     */
    select?: UserGymCheckInHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGymCheckInHistory
     */
    omit?: UserGymCheckInHistoryOmit<ExtArgs> | null
    /**
     * The data needed to create a UserGymCheckInHistory.
     */
    data: XOR<UserGymCheckInHistoryCreateInput, UserGymCheckInHistoryUncheckedCreateInput>
  }

  /**
   * UserGymCheckInHistory createMany
   */
  export type UserGymCheckInHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserGymCheckInHistories.
     */
    data: UserGymCheckInHistoryCreateManyInput | UserGymCheckInHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserGymCheckInHistory createManyAndReturn
   */
  export type UserGymCheckInHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGymCheckInHistory
     */
    select?: UserGymCheckInHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserGymCheckInHistory
     */
    omit?: UserGymCheckInHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many UserGymCheckInHistories.
     */
    data: UserGymCheckInHistoryCreateManyInput | UserGymCheckInHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserGymCheckInHistory update
   */
  export type UserGymCheckInHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGymCheckInHistory
     */
    select?: UserGymCheckInHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGymCheckInHistory
     */
    omit?: UserGymCheckInHistoryOmit<ExtArgs> | null
    /**
     * The data needed to update a UserGymCheckInHistory.
     */
    data: XOR<UserGymCheckInHistoryUpdateInput, UserGymCheckInHistoryUncheckedUpdateInput>
    /**
     * Choose, which UserGymCheckInHistory to update.
     */
    where: UserGymCheckInHistoryWhereUniqueInput
  }

  /**
   * UserGymCheckInHistory updateMany
   */
  export type UserGymCheckInHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserGymCheckInHistories.
     */
    data: XOR<UserGymCheckInHistoryUpdateManyMutationInput, UserGymCheckInHistoryUncheckedUpdateManyInput>
    /**
     * Filter which UserGymCheckInHistories to update
     */
    where?: UserGymCheckInHistoryWhereInput
    /**
     * Limit how many UserGymCheckInHistories to update.
     */
    limit?: number
  }

  /**
   * UserGymCheckInHistory updateManyAndReturn
   */
  export type UserGymCheckInHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGymCheckInHistory
     */
    select?: UserGymCheckInHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserGymCheckInHistory
     */
    omit?: UserGymCheckInHistoryOmit<ExtArgs> | null
    /**
     * The data used to update UserGymCheckInHistories.
     */
    data: XOR<UserGymCheckInHistoryUpdateManyMutationInput, UserGymCheckInHistoryUncheckedUpdateManyInput>
    /**
     * Filter which UserGymCheckInHistories to update
     */
    where?: UserGymCheckInHistoryWhereInput
    /**
     * Limit how many UserGymCheckInHistories to update.
     */
    limit?: number
  }

  /**
   * UserGymCheckInHistory upsert
   */
  export type UserGymCheckInHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGymCheckInHistory
     */
    select?: UserGymCheckInHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGymCheckInHistory
     */
    omit?: UserGymCheckInHistoryOmit<ExtArgs> | null
    /**
     * The filter to search for the UserGymCheckInHistory to update in case it exists.
     */
    where: UserGymCheckInHistoryWhereUniqueInput
    /**
     * In case the UserGymCheckInHistory found by the `where` argument doesn't exist, create a new UserGymCheckInHistory with this data.
     */
    create: XOR<UserGymCheckInHistoryCreateInput, UserGymCheckInHistoryUncheckedCreateInput>
    /**
     * In case the UserGymCheckInHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserGymCheckInHistoryUpdateInput, UserGymCheckInHistoryUncheckedUpdateInput>
  }

  /**
   * UserGymCheckInHistory delete
   */
  export type UserGymCheckInHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGymCheckInHistory
     */
    select?: UserGymCheckInHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGymCheckInHistory
     */
    omit?: UserGymCheckInHistoryOmit<ExtArgs> | null
    /**
     * Filter which UserGymCheckInHistory to delete.
     */
    where: UserGymCheckInHistoryWhereUniqueInput
  }

  /**
   * UserGymCheckInHistory deleteMany
   */
  export type UserGymCheckInHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGymCheckInHistories to delete
     */
    where?: UserGymCheckInHistoryWhereInput
    /**
     * Limit how many UserGymCheckInHistories to delete.
     */
    limit?: number
  }

  /**
   * UserGymCheckInHistory without action
   */
  export type UserGymCheckInHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGymCheckInHistory
     */
    select?: UserGymCheckInHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGymCheckInHistory
     */
    omit?: UserGymCheckInHistoryOmit<ExtArgs> | null
  }


  /**
   * Model UserGymCheckInHistoryDetail
   */

  export type AggregateUserGymCheckInHistoryDetail = {
    _count: UserGymCheckInHistoryDetailCountAggregateOutputType | null
    _min: UserGymCheckInHistoryDetailMinAggregateOutputType | null
    _max: UserGymCheckInHistoryDetailMaxAggregateOutputType | null
  }

  export type UserGymCheckInHistoryDetailMinAggregateOutputType = {
    id: string | null
    userId: string | null
    gymId: string | null
    checkInId: string | null
    createdAt: Date | null
  }

  export type UserGymCheckInHistoryDetailMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    gymId: string | null
    checkInId: string | null
    createdAt: Date | null
  }

  export type UserGymCheckInHistoryDetailCountAggregateOutputType = {
    id: number
    userId: number
    gymId: number
    checkInId: number
    createdAt: number
    _all: number
  }


  export type UserGymCheckInHistoryDetailMinAggregateInputType = {
    id?: true
    userId?: true
    gymId?: true
    checkInId?: true
    createdAt?: true
  }

  export type UserGymCheckInHistoryDetailMaxAggregateInputType = {
    id?: true
    userId?: true
    gymId?: true
    checkInId?: true
    createdAt?: true
  }

  export type UserGymCheckInHistoryDetailCountAggregateInputType = {
    id?: true
    userId?: true
    gymId?: true
    checkInId?: true
    createdAt?: true
    _all?: true
  }

  export type UserGymCheckInHistoryDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGymCheckInHistoryDetail to aggregate.
     */
    where?: UserGymCheckInHistoryDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGymCheckInHistoryDetails to fetch.
     */
    orderBy?: UserGymCheckInHistoryDetailOrderByWithRelationInput | UserGymCheckInHistoryDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserGymCheckInHistoryDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGymCheckInHistoryDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGymCheckInHistoryDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserGymCheckInHistoryDetails
    **/
    _count?: true | UserGymCheckInHistoryDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserGymCheckInHistoryDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserGymCheckInHistoryDetailMaxAggregateInputType
  }

  export type GetUserGymCheckInHistoryDetailAggregateType<T extends UserGymCheckInHistoryDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateUserGymCheckInHistoryDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserGymCheckInHistoryDetail[P]>
      : GetScalarType<T[P], AggregateUserGymCheckInHistoryDetail[P]>
  }




  export type UserGymCheckInHistoryDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGymCheckInHistoryDetailWhereInput
    orderBy?: UserGymCheckInHistoryDetailOrderByWithAggregationInput | UserGymCheckInHistoryDetailOrderByWithAggregationInput[]
    by: UserGymCheckInHistoryDetailScalarFieldEnum[] | UserGymCheckInHistoryDetailScalarFieldEnum
    having?: UserGymCheckInHistoryDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserGymCheckInHistoryDetailCountAggregateInputType | true
    _min?: UserGymCheckInHistoryDetailMinAggregateInputType
    _max?: UserGymCheckInHistoryDetailMaxAggregateInputType
  }

  export type UserGymCheckInHistoryDetailGroupByOutputType = {
    id: string
    userId: string
    gymId: string
    checkInId: string
    createdAt: Date
    _count: UserGymCheckInHistoryDetailCountAggregateOutputType | null
    _min: UserGymCheckInHistoryDetailMinAggregateOutputType | null
    _max: UserGymCheckInHistoryDetailMaxAggregateOutputType | null
  }

  type GetUserGymCheckInHistoryDetailGroupByPayload<T extends UserGymCheckInHistoryDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGymCheckInHistoryDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGymCheckInHistoryDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGymCheckInHistoryDetailGroupByOutputType[P]>
            : GetScalarType<T[P], UserGymCheckInHistoryDetailGroupByOutputType[P]>
        }
      >
    >


  export type UserGymCheckInHistoryDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gymId?: boolean
    checkInId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userGymCheckInHistoryDetail"]>

  export type UserGymCheckInHistoryDetailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gymId?: boolean
    checkInId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userGymCheckInHistoryDetail"]>

  export type UserGymCheckInHistoryDetailSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gymId?: boolean
    checkInId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userGymCheckInHistoryDetail"]>

  export type UserGymCheckInHistoryDetailSelectScalar = {
    id?: boolean
    userId?: boolean
    gymId?: boolean
    checkInId?: boolean
    createdAt?: boolean
  }

  export type UserGymCheckInHistoryDetailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "gymId" | "checkInId" | "createdAt", ExtArgs["result"]["userGymCheckInHistoryDetail"]>

  export type $UserGymCheckInHistoryDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserGymCheckInHistoryDetail"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      gymId: string
      checkInId: string
      createdAt: Date
    }, ExtArgs["result"]["userGymCheckInHistoryDetail"]>
    composites: {}
  }

  type UserGymCheckInHistoryDetailGetPayload<S extends boolean | null | undefined | UserGymCheckInHistoryDetailDefaultArgs> = $Result.GetResult<Prisma.$UserGymCheckInHistoryDetailPayload, S>

  type UserGymCheckInHistoryDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserGymCheckInHistoryDetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserGymCheckInHistoryDetailCountAggregateInputType | true
    }

  export interface UserGymCheckInHistoryDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserGymCheckInHistoryDetail'], meta: { name: 'UserGymCheckInHistoryDetail' } }
    /**
     * Find zero or one UserGymCheckInHistoryDetail that matches the filter.
     * @param {UserGymCheckInHistoryDetailFindUniqueArgs} args - Arguments to find a UserGymCheckInHistoryDetail
     * @example
     * // Get one UserGymCheckInHistoryDetail
     * const userGymCheckInHistoryDetail = await prisma.userGymCheckInHistoryDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserGymCheckInHistoryDetailFindUniqueArgs>(args: SelectSubset<T, UserGymCheckInHistoryDetailFindUniqueArgs<ExtArgs>>): Prisma__UserGymCheckInHistoryDetailClient<$Result.GetResult<Prisma.$UserGymCheckInHistoryDetailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserGymCheckInHistoryDetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserGymCheckInHistoryDetailFindUniqueOrThrowArgs} args - Arguments to find a UserGymCheckInHistoryDetail
     * @example
     * // Get one UserGymCheckInHistoryDetail
     * const userGymCheckInHistoryDetail = await prisma.userGymCheckInHistoryDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserGymCheckInHistoryDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, UserGymCheckInHistoryDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserGymCheckInHistoryDetailClient<$Result.GetResult<Prisma.$UserGymCheckInHistoryDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserGymCheckInHistoryDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGymCheckInHistoryDetailFindFirstArgs} args - Arguments to find a UserGymCheckInHistoryDetail
     * @example
     * // Get one UserGymCheckInHistoryDetail
     * const userGymCheckInHistoryDetail = await prisma.userGymCheckInHistoryDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserGymCheckInHistoryDetailFindFirstArgs>(args?: SelectSubset<T, UserGymCheckInHistoryDetailFindFirstArgs<ExtArgs>>): Prisma__UserGymCheckInHistoryDetailClient<$Result.GetResult<Prisma.$UserGymCheckInHistoryDetailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserGymCheckInHistoryDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGymCheckInHistoryDetailFindFirstOrThrowArgs} args - Arguments to find a UserGymCheckInHistoryDetail
     * @example
     * // Get one UserGymCheckInHistoryDetail
     * const userGymCheckInHistoryDetail = await prisma.userGymCheckInHistoryDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserGymCheckInHistoryDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, UserGymCheckInHistoryDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserGymCheckInHistoryDetailClient<$Result.GetResult<Prisma.$UserGymCheckInHistoryDetailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserGymCheckInHistoryDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGymCheckInHistoryDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserGymCheckInHistoryDetails
     * const userGymCheckInHistoryDetails = await prisma.userGymCheckInHistoryDetail.findMany()
     * 
     * // Get first 10 UserGymCheckInHistoryDetails
     * const userGymCheckInHistoryDetails = await prisma.userGymCheckInHistoryDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userGymCheckInHistoryDetailWithIdOnly = await prisma.userGymCheckInHistoryDetail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserGymCheckInHistoryDetailFindManyArgs>(args?: SelectSubset<T, UserGymCheckInHistoryDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGymCheckInHistoryDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserGymCheckInHistoryDetail.
     * @param {UserGymCheckInHistoryDetailCreateArgs} args - Arguments to create a UserGymCheckInHistoryDetail.
     * @example
     * // Create one UserGymCheckInHistoryDetail
     * const UserGymCheckInHistoryDetail = await prisma.userGymCheckInHistoryDetail.create({
     *   data: {
     *     // ... data to create a UserGymCheckInHistoryDetail
     *   }
     * })
     * 
     */
    create<T extends UserGymCheckInHistoryDetailCreateArgs>(args: SelectSubset<T, UserGymCheckInHistoryDetailCreateArgs<ExtArgs>>): Prisma__UserGymCheckInHistoryDetailClient<$Result.GetResult<Prisma.$UserGymCheckInHistoryDetailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserGymCheckInHistoryDetails.
     * @param {UserGymCheckInHistoryDetailCreateManyArgs} args - Arguments to create many UserGymCheckInHistoryDetails.
     * @example
     * // Create many UserGymCheckInHistoryDetails
     * const userGymCheckInHistoryDetail = await prisma.userGymCheckInHistoryDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserGymCheckInHistoryDetailCreateManyArgs>(args?: SelectSubset<T, UserGymCheckInHistoryDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserGymCheckInHistoryDetails and returns the data saved in the database.
     * @param {UserGymCheckInHistoryDetailCreateManyAndReturnArgs} args - Arguments to create many UserGymCheckInHistoryDetails.
     * @example
     * // Create many UserGymCheckInHistoryDetails
     * const userGymCheckInHistoryDetail = await prisma.userGymCheckInHistoryDetail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserGymCheckInHistoryDetails and only return the `id`
     * const userGymCheckInHistoryDetailWithIdOnly = await prisma.userGymCheckInHistoryDetail.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserGymCheckInHistoryDetailCreateManyAndReturnArgs>(args?: SelectSubset<T, UserGymCheckInHistoryDetailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGymCheckInHistoryDetailPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserGymCheckInHistoryDetail.
     * @param {UserGymCheckInHistoryDetailDeleteArgs} args - Arguments to delete one UserGymCheckInHistoryDetail.
     * @example
     * // Delete one UserGymCheckInHistoryDetail
     * const UserGymCheckInHistoryDetail = await prisma.userGymCheckInHistoryDetail.delete({
     *   where: {
     *     // ... filter to delete one UserGymCheckInHistoryDetail
     *   }
     * })
     * 
     */
    delete<T extends UserGymCheckInHistoryDetailDeleteArgs>(args: SelectSubset<T, UserGymCheckInHistoryDetailDeleteArgs<ExtArgs>>): Prisma__UserGymCheckInHistoryDetailClient<$Result.GetResult<Prisma.$UserGymCheckInHistoryDetailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserGymCheckInHistoryDetail.
     * @param {UserGymCheckInHistoryDetailUpdateArgs} args - Arguments to update one UserGymCheckInHistoryDetail.
     * @example
     * // Update one UserGymCheckInHistoryDetail
     * const userGymCheckInHistoryDetail = await prisma.userGymCheckInHistoryDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserGymCheckInHistoryDetailUpdateArgs>(args: SelectSubset<T, UserGymCheckInHistoryDetailUpdateArgs<ExtArgs>>): Prisma__UserGymCheckInHistoryDetailClient<$Result.GetResult<Prisma.$UserGymCheckInHistoryDetailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserGymCheckInHistoryDetails.
     * @param {UserGymCheckInHistoryDetailDeleteManyArgs} args - Arguments to filter UserGymCheckInHistoryDetails to delete.
     * @example
     * // Delete a few UserGymCheckInHistoryDetails
     * const { count } = await prisma.userGymCheckInHistoryDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserGymCheckInHistoryDetailDeleteManyArgs>(args?: SelectSubset<T, UserGymCheckInHistoryDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserGymCheckInHistoryDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGymCheckInHistoryDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserGymCheckInHistoryDetails
     * const userGymCheckInHistoryDetail = await prisma.userGymCheckInHistoryDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserGymCheckInHistoryDetailUpdateManyArgs>(args: SelectSubset<T, UserGymCheckInHistoryDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserGymCheckInHistoryDetails and returns the data updated in the database.
     * @param {UserGymCheckInHistoryDetailUpdateManyAndReturnArgs} args - Arguments to update many UserGymCheckInHistoryDetails.
     * @example
     * // Update many UserGymCheckInHistoryDetails
     * const userGymCheckInHistoryDetail = await prisma.userGymCheckInHistoryDetail.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserGymCheckInHistoryDetails and only return the `id`
     * const userGymCheckInHistoryDetailWithIdOnly = await prisma.userGymCheckInHistoryDetail.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserGymCheckInHistoryDetailUpdateManyAndReturnArgs>(args: SelectSubset<T, UserGymCheckInHistoryDetailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGymCheckInHistoryDetailPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserGymCheckInHistoryDetail.
     * @param {UserGymCheckInHistoryDetailUpsertArgs} args - Arguments to update or create a UserGymCheckInHistoryDetail.
     * @example
     * // Update or create a UserGymCheckInHistoryDetail
     * const userGymCheckInHistoryDetail = await prisma.userGymCheckInHistoryDetail.upsert({
     *   create: {
     *     // ... data to create a UserGymCheckInHistoryDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserGymCheckInHistoryDetail we want to update
     *   }
     * })
     */
    upsert<T extends UserGymCheckInHistoryDetailUpsertArgs>(args: SelectSubset<T, UserGymCheckInHistoryDetailUpsertArgs<ExtArgs>>): Prisma__UserGymCheckInHistoryDetailClient<$Result.GetResult<Prisma.$UserGymCheckInHistoryDetailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserGymCheckInHistoryDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGymCheckInHistoryDetailCountArgs} args - Arguments to filter UserGymCheckInHistoryDetails to count.
     * @example
     * // Count the number of UserGymCheckInHistoryDetails
     * const count = await prisma.userGymCheckInHistoryDetail.count({
     *   where: {
     *     // ... the filter for the UserGymCheckInHistoryDetails we want to count
     *   }
     * })
    **/
    count<T extends UserGymCheckInHistoryDetailCountArgs>(
      args?: Subset<T, UserGymCheckInHistoryDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserGymCheckInHistoryDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserGymCheckInHistoryDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGymCheckInHistoryDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserGymCheckInHistoryDetailAggregateArgs>(args: Subset<T, UserGymCheckInHistoryDetailAggregateArgs>): Prisma.PrismaPromise<GetUserGymCheckInHistoryDetailAggregateType<T>>

    /**
     * Group by UserGymCheckInHistoryDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGymCheckInHistoryDetailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGymCheckInHistoryDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGymCheckInHistoryDetailGroupByArgs['orderBy'] }
        : { orderBy?: UserGymCheckInHistoryDetailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGymCheckInHistoryDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGymCheckInHistoryDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserGymCheckInHistoryDetail model
   */
  readonly fields: UserGymCheckInHistoryDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserGymCheckInHistoryDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserGymCheckInHistoryDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserGymCheckInHistoryDetail model
   */
  interface UserGymCheckInHistoryDetailFieldRefs {
    readonly id: FieldRef<"UserGymCheckInHistoryDetail", 'String'>
    readonly userId: FieldRef<"UserGymCheckInHistoryDetail", 'String'>
    readonly gymId: FieldRef<"UserGymCheckInHistoryDetail", 'String'>
    readonly checkInId: FieldRef<"UserGymCheckInHistoryDetail", 'String'>
    readonly createdAt: FieldRef<"UserGymCheckInHistoryDetail", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserGymCheckInHistoryDetail findUnique
   */
  export type UserGymCheckInHistoryDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGymCheckInHistoryDetail
     */
    select?: UserGymCheckInHistoryDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGymCheckInHistoryDetail
     */
    omit?: UserGymCheckInHistoryDetailOmit<ExtArgs> | null
    /**
     * Filter, which UserGymCheckInHistoryDetail to fetch.
     */
    where: UserGymCheckInHistoryDetailWhereUniqueInput
  }

  /**
   * UserGymCheckInHistoryDetail findUniqueOrThrow
   */
  export type UserGymCheckInHistoryDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGymCheckInHistoryDetail
     */
    select?: UserGymCheckInHistoryDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGymCheckInHistoryDetail
     */
    omit?: UserGymCheckInHistoryDetailOmit<ExtArgs> | null
    /**
     * Filter, which UserGymCheckInHistoryDetail to fetch.
     */
    where: UserGymCheckInHistoryDetailWhereUniqueInput
  }

  /**
   * UserGymCheckInHistoryDetail findFirst
   */
  export type UserGymCheckInHistoryDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGymCheckInHistoryDetail
     */
    select?: UserGymCheckInHistoryDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGymCheckInHistoryDetail
     */
    omit?: UserGymCheckInHistoryDetailOmit<ExtArgs> | null
    /**
     * Filter, which UserGymCheckInHistoryDetail to fetch.
     */
    where?: UserGymCheckInHistoryDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGymCheckInHistoryDetails to fetch.
     */
    orderBy?: UserGymCheckInHistoryDetailOrderByWithRelationInput | UserGymCheckInHistoryDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGymCheckInHistoryDetails.
     */
    cursor?: UserGymCheckInHistoryDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGymCheckInHistoryDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGymCheckInHistoryDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGymCheckInHistoryDetails.
     */
    distinct?: UserGymCheckInHistoryDetailScalarFieldEnum | UserGymCheckInHistoryDetailScalarFieldEnum[]
  }

  /**
   * UserGymCheckInHistoryDetail findFirstOrThrow
   */
  export type UserGymCheckInHistoryDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGymCheckInHistoryDetail
     */
    select?: UserGymCheckInHistoryDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGymCheckInHistoryDetail
     */
    omit?: UserGymCheckInHistoryDetailOmit<ExtArgs> | null
    /**
     * Filter, which UserGymCheckInHistoryDetail to fetch.
     */
    where?: UserGymCheckInHistoryDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGymCheckInHistoryDetails to fetch.
     */
    orderBy?: UserGymCheckInHistoryDetailOrderByWithRelationInput | UserGymCheckInHistoryDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGymCheckInHistoryDetails.
     */
    cursor?: UserGymCheckInHistoryDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGymCheckInHistoryDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGymCheckInHistoryDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGymCheckInHistoryDetails.
     */
    distinct?: UserGymCheckInHistoryDetailScalarFieldEnum | UserGymCheckInHistoryDetailScalarFieldEnum[]
  }

  /**
   * UserGymCheckInHistoryDetail findMany
   */
  export type UserGymCheckInHistoryDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGymCheckInHistoryDetail
     */
    select?: UserGymCheckInHistoryDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGymCheckInHistoryDetail
     */
    omit?: UserGymCheckInHistoryDetailOmit<ExtArgs> | null
    /**
     * Filter, which UserGymCheckInHistoryDetails to fetch.
     */
    where?: UserGymCheckInHistoryDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGymCheckInHistoryDetails to fetch.
     */
    orderBy?: UserGymCheckInHistoryDetailOrderByWithRelationInput | UserGymCheckInHistoryDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserGymCheckInHistoryDetails.
     */
    cursor?: UserGymCheckInHistoryDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGymCheckInHistoryDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGymCheckInHistoryDetails.
     */
    skip?: number
    distinct?: UserGymCheckInHistoryDetailScalarFieldEnum | UserGymCheckInHistoryDetailScalarFieldEnum[]
  }

  /**
   * UserGymCheckInHistoryDetail create
   */
  export type UserGymCheckInHistoryDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGymCheckInHistoryDetail
     */
    select?: UserGymCheckInHistoryDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGymCheckInHistoryDetail
     */
    omit?: UserGymCheckInHistoryDetailOmit<ExtArgs> | null
    /**
     * The data needed to create a UserGymCheckInHistoryDetail.
     */
    data: XOR<UserGymCheckInHistoryDetailCreateInput, UserGymCheckInHistoryDetailUncheckedCreateInput>
  }

  /**
   * UserGymCheckInHistoryDetail createMany
   */
  export type UserGymCheckInHistoryDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserGymCheckInHistoryDetails.
     */
    data: UserGymCheckInHistoryDetailCreateManyInput | UserGymCheckInHistoryDetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserGymCheckInHistoryDetail createManyAndReturn
   */
  export type UserGymCheckInHistoryDetailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGymCheckInHistoryDetail
     */
    select?: UserGymCheckInHistoryDetailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserGymCheckInHistoryDetail
     */
    omit?: UserGymCheckInHistoryDetailOmit<ExtArgs> | null
    /**
     * The data used to create many UserGymCheckInHistoryDetails.
     */
    data: UserGymCheckInHistoryDetailCreateManyInput | UserGymCheckInHistoryDetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserGymCheckInHistoryDetail update
   */
  export type UserGymCheckInHistoryDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGymCheckInHistoryDetail
     */
    select?: UserGymCheckInHistoryDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGymCheckInHistoryDetail
     */
    omit?: UserGymCheckInHistoryDetailOmit<ExtArgs> | null
    /**
     * The data needed to update a UserGymCheckInHistoryDetail.
     */
    data: XOR<UserGymCheckInHistoryDetailUpdateInput, UserGymCheckInHistoryDetailUncheckedUpdateInput>
    /**
     * Choose, which UserGymCheckInHistoryDetail to update.
     */
    where: UserGymCheckInHistoryDetailWhereUniqueInput
  }

  /**
   * UserGymCheckInHistoryDetail updateMany
   */
  export type UserGymCheckInHistoryDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserGymCheckInHistoryDetails.
     */
    data: XOR<UserGymCheckInHistoryDetailUpdateManyMutationInput, UserGymCheckInHistoryDetailUncheckedUpdateManyInput>
    /**
     * Filter which UserGymCheckInHistoryDetails to update
     */
    where?: UserGymCheckInHistoryDetailWhereInput
    /**
     * Limit how many UserGymCheckInHistoryDetails to update.
     */
    limit?: number
  }

  /**
   * UserGymCheckInHistoryDetail updateManyAndReturn
   */
  export type UserGymCheckInHistoryDetailUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGymCheckInHistoryDetail
     */
    select?: UserGymCheckInHistoryDetailSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserGymCheckInHistoryDetail
     */
    omit?: UserGymCheckInHistoryDetailOmit<ExtArgs> | null
    /**
     * The data used to update UserGymCheckInHistoryDetails.
     */
    data: XOR<UserGymCheckInHistoryDetailUpdateManyMutationInput, UserGymCheckInHistoryDetailUncheckedUpdateManyInput>
    /**
     * Filter which UserGymCheckInHistoryDetails to update
     */
    where?: UserGymCheckInHistoryDetailWhereInput
    /**
     * Limit how many UserGymCheckInHistoryDetails to update.
     */
    limit?: number
  }

  /**
   * UserGymCheckInHistoryDetail upsert
   */
  export type UserGymCheckInHistoryDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGymCheckInHistoryDetail
     */
    select?: UserGymCheckInHistoryDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGymCheckInHistoryDetail
     */
    omit?: UserGymCheckInHistoryDetailOmit<ExtArgs> | null
    /**
     * The filter to search for the UserGymCheckInHistoryDetail to update in case it exists.
     */
    where: UserGymCheckInHistoryDetailWhereUniqueInput
    /**
     * In case the UserGymCheckInHistoryDetail found by the `where` argument doesn't exist, create a new UserGymCheckInHistoryDetail with this data.
     */
    create: XOR<UserGymCheckInHistoryDetailCreateInput, UserGymCheckInHistoryDetailUncheckedCreateInput>
    /**
     * In case the UserGymCheckInHistoryDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserGymCheckInHistoryDetailUpdateInput, UserGymCheckInHistoryDetailUncheckedUpdateInput>
  }

  /**
   * UserGymCheckInHistoryDetail delete
   */
  export type UserGymCheckInHistoryDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGymCheckInHistoryDetail
     */
    select?: UserGymCheckInHistoryDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGymCheckInHistoryDetail
     */
    omit?: UserGymCheckInHistoryDetailOmit<ExtArgs> | null
    /**
     * Filter which UserGymCheckInHistoryDetail to delete.
     */
    where: UserGymCheckInHistoryDetailWhereUniqueInput
  }

  /**
   * UserGymCheckInHistoryDetail deleteMany
   */
  export type UserGymCheckInHistoryDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGymCheckInHistoryDetails to delete
     */
    where?: UserGymCheckInHistoryDetailWhereInput
    /**
     * Limit how many UserGymCheckInHistoryDetails to delete.
     */
    limit?: number
  }

  /**
   * UserGymCheckInHistoryDetail without action
   */
  export type UserGymCheckInHistoryDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGymCheckInHistoryDetail
     */
    select?: UserGymCheckInHistoryDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGymCheckInHistoryDetail
     */
    omit?: UserGymCheckInHistoryDetailOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password_hash: 'password_hash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CheckInScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    checkInAt: 'checkInAt',
    validatedAt: 'validatedAt'
  };

  export type CheckInScalarFieldEnum = (typeof CheckInScalarFieldEnum)[keyof typeof CheckInScalarFieldEnum]


  export const GymScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    phone: 'phone',
    latitude: 'latitude',
    longitude: 'longitude',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GymScalarFieldEnum = (typeof GymScalarFieldEnum)[keyof typeof GymScalarFieldEnum]


  export const CheckInGymScalarFieldEnum: {
    id: 'id',
    checkInId: 'checkInId',
    gymId: 'gymId',
    createdAt: 'createdAt'
  };

  export type CheckInGymScalarFieldEnum = (typeof CheckInGymScalarFieldEnum)[keyof typeof CheckInGymScalarFieldEnum]


  export const UserGymScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    gymId: 'gymId',
    createdAt: 'createdAt'
  };

  export type UserGymScalarFieldEnum = (typeof UserGymScalarFieldEnum)[keyof typeof UserGymScalarFieldEnum]


  export const UserCheckInScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    checkInId: 'checkInId',
    createdAt: 'createdAt'
  };

  export type UserCheckInScalarFieldEnum = (typeof UserCheckInScalarFieldEnum)[keyof typeof UserCheckInScalarFieldEnum]


  export const UserGymCheckInScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    gymId: 'gymId',
    checkInId: 'checkInId',
    createdAt: 'createdAt'
  };

  export type UserGymCheckInScalarFieldEnum = (typeof UserGymCheckInScalarFieldEnum)[keyof typeof UserGymCheckInScalarFieldEnum]


  export const UserGymCheckInHistoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    gymId: 'gymId',
    checkInId: 'checkInId',
    createdAt: 'createdAt'
  };

  export type UserGymCheckInHistoryScalarFieldEnum = (typeof UserGymCheckInHistoryScalarFieldEnum)[keyof typeof UserGymCheckInHistoryScalarFieldEnum]


  export const UserGymCheckInHistoryDetailScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    gymId: 'gymId',
    checkInId: 'checkInId',
    createdAt: 'createdAt'
  };

  export type UserGymCheckInHistoryDetailScalarFieldEnum = (typeof UserGymCheckInHistoryDetailScalarFieldEnum)[keyof typeof UserGymCheckInHistoryDetailScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password_hash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password_hash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password_hash?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CheckInWhereInput = {
    AND?: CheckInWhereInput | CheckInWhereInput[]
    OR?: CheckInWhereInput[]
    NOT?: CheckInWhereInput | CheckInWhereInput[]
    id?: StringFilter<"CheckIn"> | string
    userId?: StringFilter<"CheckIn"> | string
    checkInAt?: DateTimeFilter<"CheckIn"> | Date | string
    validatedAt?: DateTimeNullableFilter<"CheckIn"> | Date | string | null
  }

  export type CheckInOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    checkInAt?: SortOrder
    validatedAt?: SortOrderInput | SortOrder
  }

  export type CheckInWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CheckInWhereInput | CheckInWhereInput[]
    OR?: CheckInWhereInput[]
    NOT?: CheckInWhereInput | CheckInWhereInput[]
    userId?: StringFilter<"CheckIn"> | string
    checkInAt?: DateTimeFilter<"CheckIn"> | Date | string
    validatedAt?: DateTimeNullableFilter<"CheckIn"> | Date | string | null
  }, "id">

  export type CheckInOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    checkInAt?: SortOrder
    validatedAt?: SortOrderInput | SortOrder
    _count?: CheckInCountOrderByAggregateInput
    _max?: CheckInMaxOrderByAggregateInput
    _min?: CheckInMinOrderByAggregateInput
  }

  export type CheckInScalarWhereWithAggregatesInput = {
    AND?: CheckInScalarWhereWithAggregatesInput | CheckInScalarWhereWithAggregatesInput[]
    OR?: CheckInScalarWhereWithAggregatesInput[]
    NOT?: CheckInScalarWhereWithAggregatesInput | CheckInScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CheckIn"> | string
    userId?: StringWithAggregatesFilter<"CheckIn"> | string
    checkInAt?: DateTimeWithAggregatesFilter<"CheckIn"> | Date | string
    validatedAt?: DateTimeNullableWithAggregatesFilter<"CheckIn"> | Date | string | null
  }

  export type GymWhereInput = {
    AND?: GymWhereInput | GymWhereInput[]
    OR?: GymWhereInput[]
    NOT?: GymWhereInput | GymWhereInput[]
    id?: StringFilter<"Gym"> | string
    title?: StringFilter<"Gym"> | string
    description?: StringNullableFilter<"Gym"> | string | null
    phone?: StringNullableFilter<"Gym"> | string | null
    latitude?: DecimalFilter<"Gym"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"Gym"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Gym"> | Date | string
    updatedAt?: DateTimeFilter<"Gym"> | Date | string
  }

  export type GymOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GymWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GymWhereInput | GymWhereInput[]
    OR?: GymWhereInput[]
    NOT?: GymWhereInput | GymWhereInput[]
    title?: StringFilter<"Gym"> | string
    description?: StringNullableFilter<"Gym"> | string | null
    phone?: StringNullableFilter<"Gym"> | string | null
    latitude?: DecimalFilter<"Gym"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"Gym"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Gym"> | Date | string
    updatedAt?: DateTimeFilter<"Gym"> | Date | string
  }, "id">

  export type GymOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GymCountOrderByAggregateInput
    _avg?: GymAvgOrderByAggregateInput
    _max?: GymMaxOrderByAggregateInput
    _min?: GymMinOrderByAggregateInput
    _sum?: GymSumOrderByAggregateInput
  }

  export type GymScalarWhereWithAggregatesInput = {
    AND?: GymScalarWhereWithAggregatesInput | GymScalarWhereWithAggregatesInput[]
    OR?: GymScalarWhereWithAggregatesInput[]
    NOT?: GymScalarWhereWithAggregatesInput | GymScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Gym"> | string
    title?: StringWithAggregatesFilter<"Gym"> | string
    description?: StringNullableWithAggregatesFilter<"Gym"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Gym"> | string | null
    latitude?: DecimalWithAggregatesFilter<"Gym"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalWithAggregatesFilter<"Gym"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"Gym"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Gym"> | Date | string
  }

  export type CheckInGymWhereInput = {
    AND?: CheckInGymWhereInput | CheckInGymWhereInput[]
    OR?: CheckInGymWhereInput[]
    NOT?: CheckInGymWhereInput | CheckInGymWhereInput[]
    id?: StringFilter<"CheckInGym"> | string
    checkInId?: StringFilter<"CheckInGym"> | string
    gymId?: StringFilter<"CheckInGym"> | string
    createdAt?: DateTimeFilter<"CheckInGym"> | Date | string
  }

  export type CheckInGymOrderByWithRelationInput = {
    id?: SortOrder
    checkInId?: SortOrder
    gymId?: SortOrder
    createdAt?: SortOrder
  }

  export type CheckInGymWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CheckInGymWhereInput | CheckInGymWhereInput[]
    OR?: CheckInGymWhereInput[]
    NOT?: CheckInGymWhereInput | CheckInGymWhereInput[]
    checkInId?: StringFilter<"CheckInGym"> | string
    gymId?: StringFilter<"CheckInGym"> | string
    createdAt?: DateTimeFilter<"CheckInGym"> | Date | string
  }, "id">

  export type CheckInGymOrderByWithAggregationInput = {
    id?: SortOrder
    checkInId?: SortOrder
    gymId?: SortOrder
    createdAt?: SortOrder
    _count?: CheckInGymCountOrderByAggregateInput
    _max?: CheckInGymMaxOrderByAggregateInput
    _min?: CheckInGymMinOrderByAggregateInput
  }

  export type CheckInGymScalarWhereWithAggregatesInput = {
    AND?: CheckInGymScalarWhereWithAggregatesInput | CheckInGymScalarWhereWithAggregatesInput[]
    OR?: CheckInGymScalarWhereWithAggregatesInput[]
    NOT?: CheckInGymScalarWhereWithAggregatesInput | CheckInGymScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CheckInGym"> | string
    checkInId?: StringWithAggregatesFilter<"CheckInGym"> | string
    gymId?: StringWithAggregatesFilter<"CheckInGym"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CheckInGym"> | Date | string
  }

  export type UserGymWhereInput = {
    AND?: UserGymWhereInput | UserGymWhereInput[]
    OR?: UserGymWhereInput[]
    NOT?: UserGymWhereInput | UserGymWhereInput[]
    id?: StringFilter<"UserGym"> | string
    userId?: StringFilter<"UserGym"> | string
    gymId?: StringFilter<"UserGym"> | string
    createdAt?: DateTimeFilter<"UserGym"> | Date | string
  }

  export type UserGymOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    gymId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserGymWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserGymWhereInput | UserGymWhereInput[]
    OR?: UserGymWhereInput[]
    NOT?: UserGymWhereInput | UserGymWhereInput[]
    userId?: StringFilter<"UserGym"> | string
    gymId?: StringFilter<"UserGym"> | string
    createdAt?: DateTimeFilter<"UserGym"> | Date | string
  }, "id">

  export type UserGymOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    gymId?: SortOrder
    createdAt?: SortOrder
    _count?: UserGymCountOrderByAggregateInput
    _max?: UserGymMaxOrderByAggregateInput
    _min?: UserGymMinOrderByAggregateInput
  }

  export type UserGymScalarWhereWithAggregatesInput = {
    AND?: UserGymScalarWhereWithAggregatesInput | UserGymScalarWhereWithAggregatesInput[]
    OR?: UserGymScalarWhereWithAggregatesInput[]
    NOT?: UserGymScalarWhereWithAggregatesInput | UserGymScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserGym"> | string
    userId?: StringWithAggregatesFilter<"UserGym"> | string
    gymId?: StringWithAggregatesFilter<"UserGym"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserGym"> | Date | string
  }

  export type UserCheckInWhereInput = {
    AND?: UserCheckInWhereInput | UserCheckInWhereInput[]
    OR?: UserCheckInWhereInput[]
    NOT?: UserCheckInWhereInput | UserCheckInWhereInput[]
    id?: StringFilter<"UserCheckIn"> | string
    userId?: StringFilter<"UserCheckIn"> | string
    checkInId?: StringFilter<"UserCheckIn"> | string
    createdAt?: DateTimeFilter<"UserCheckIn"> | Date | string
  }

  export type UserCheckInOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    checkInId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserCheckInWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserCheckInWhereInput | UserCheckInWhereInput[]
    OR?: UserCheckInWhereInput[]
    NOT?: UserCheckInWhereInput | UserCheckInWhereInput[]
    userId?: StringFilter<"UserCheckIn"> | string
    checkInId?: StringFilter<"UserCheckIn"> | string
    createdAt?: DateTimeFilter<"UserCheckIn"> | Date | string
  }, "id">

  export type UserCheckInOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    checkInId?: SortOrder
    createdAt?: SortOrder
    _count?: UserCheckInCountOrderByAggregateInput
    _max?: UserCheckInMaxOrderByAggregateInput
    _min?: UserCheckInMinOrderByAggregateInput
  }

  export type UserCheckInScalarWhereWithAggregatesInput = {
    AND?: UserCheckInScalarWhereWithAggregatesInput | UserCheckInScalarWhereWithAggregatesInput[]
    OR?: UserCheckInScalarWhereWithAggregatesInput[]
    NOT?: UserCheckInScalarWhereWithAggregatesInput | UserCheckInScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserCheckIn"> | string
    userId?: StringWithAggregatesFilter<"UserCheckIn"> | string
    checkInId?: StringWithAggregatesFilter<"UserCheckIn"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserCheckIn"> | Date | string
  }

  export type UserGymCheckInWhereInput = {
    AND?: UserGymCheckInWhereInput | UserGymCheckInWhereInput[]
    OR?: UserGymCheckInWhereInput[]
    NOT?: UserGymCheckInWhereInput | UserGymCheckInWhereInput[]
    id?: StringFilter<"UserGymCheckIn"> | string
    userId?: StringFilter<"UserGymCheckIn"> | string
    gymId?: StringFilter<"UserGymCheckIn"> | string
    checkInId?: StringFilter<"UserGymCheckIn"> | string
    createdAt?: DateTimeFilter<"UserGymCheckIn"> | Date | string
  }

  export type UserGymCheckInOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    gymId?: SortOrder
    checkInId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserGymCheckInWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserGymCheckInWhereInput | UserGymCheckInWhereInput[]
    OR?: UserGymCheckInWhereInput[]
    NOT?: UserGymCheckInWhereInput | UserGymCheckInWhereInput[]
    userId?: StringFilter<"UserGymCheckIn"> | string
    gymId?: StringFilter<"UserGymCheckIn"> | string
    checkInId?: StringFilter<"UserGymCheckIn"> | string
    createdAt?: DateTimeFilter<"UserGymCheckIn"> | Date | string
  }, "id">

  export type UserGymCheckInOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    gymId?: SortOrder
    checkInId?: SortOrder
    createdAt?: SortOrder
    _count?: UserGymCheckInCountOrderByAggregateInput
    _max?: UserGymCheckInMaxOrderByAggregateInput
    _min?: UserGymCheckInMinOrderByAggregateInput
  }

  export type UserGymCheckInScalarWhereWithAggregatesInput = {
    AND?: UserGymCheckInScalarWhereWithAggregatesInput | UserGymCheckInScalarWhereWithAggregatesInput[]
    OR?: UserGymCheckInScalarWhereWithAggregatesInput[]
    NOT?: UserGymCheckInScalarWhereWithAggregatesInput | UserGymCheckInScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserGymCheckIn"> | string
    userId?: StringWithAggregatesFilter<"UserGymCheckIn"> | string
    gymId?: StringWithAggregatesFilter<"UserGymCheckIn"> | string
    checkInId?: StringWithAggregatesFilter<"UserGymCheckIn"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserGymCheckIn"> | Date | string
  }

  export type UserGymCheckInHistoryWhereInput = {
    AND?: UserGymCheckInHistoryWhereInput | UserGymCheckInHistoryWhereInput[]
    OR?: UserGymCheckInHistoryWhereInput[]
    NOT?: UserGymCheckInHistoryWhereInput | UserGymCheckInHistoryWhereInput[]
    id?: StringFilter<"UserGymCheckInHistory"> | string
    userId?: StringFilter<"UserGymCheckInHistory"> | string
    gymId?: StringFilter<"UserGymCheckInHistory"> | string
    checkInId?: StringFilter<"UserGymCheckInHistory"> | string
    createdAt?: DateTimeFilter<"UserGymCheckInHistory"> | Date | string
  }

  export type UserGymCheckInHistoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    gymId?: SortOrder
    checkInId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserGymCheckInHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserGymCheckInHistoryWhereInput | UserGymCheckInHistoryWhereInput[]
    OR?: UserGymCheckInHistoryWhereInput[]
    NOT?: UserGymCheckInHistoryWhereInput | UserGymCheckInHistoryWhereInput[]
    userId?: StringFilter<"UserGymCheckInHistory"> | string
    gymId?: StringFilter<"UserGymCheckInHistory"> | string
    checkInId?: StringFilter<"UserGymCheckInHistory"> | string
    createdAt?: DateTimeFilter<"UserGymCheckInHistory"> | Date | string
  }, "id">

  export type UserGymCheckInHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    gymId?: SortOrder
    checkInId?: SortOrder
    createdAt?: SortOrder
    _count?: UserGymCheckInHistoryCountOrderByAggregateInput
    _max?: UserGymCheckInHistoryMaxOrderByAggregateInput
    _min?: UserGymCheckInHistoryMinOrderByAggregateInput
  }

  export type UserGymCheckInHistoryScalarWhereWithAggregatesInput = {
    AND?: UserGymCheckInHistoryScalarWhereWithAggregatesInput | UserGymCheckInHistoryScalarWhereWithAggregatesInput[]
    OR?: UserGymCheckInHistoryScalarWhereWithAggregatesInput[]
    NOT?: UserGymCheckInHistoryScalarWhereWithAggregatesInput | UserGymCheckInHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserGymCheckInHistory"> | string
    userId?: StringWithAggregatesFilter<"UserGymCheckInHistory"> | string
    gymId?: StringWithAggregatesFilter<"UserGymCheckInHistory"> | string
    checkInId?: StringWithAggregatesFilter<"UserGymCheckInHistory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserGymCheckInHistory"> | Date | string
  }

  export type UserGymCheckInHistoryDetailWhereInput = {
    AND?: UserGymCheckInHistoryDetailWhereInput | UserGymCheckInHistoryDetailWhereInput[]
    OR?: UserGymCheckInHistoryDetailWhereInput[]
    NOT?: UserGymCheckInHistoryDetailWhereInput | UserGymCheckInHistoryDetailWhereInput[]
    id?: StringFilter<"UserGymCheckInHistoryDetail"> | string
    userId?: StringFilter<"UserGymCheckInHistoryDetail"> | string
    gymId?: StringFilter<"UserGymCheckInHistoryDetail"> | string
    checkInId?: StringFilter<"UserGymCheckInHistoryDetail"> | string
    createdAt?: DateTimeFilter<"UserGymCheckInHistoryDetail"> | Date | string
  }

  export type UserGymCheckInHistoryDetailOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    gymId?: SortOrder
    checkInId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserGymCheckInHistoryDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserGymCheckInHistoryDetailWhereInput | UserGymCheckInHistoryDetailWhereInput[]
    OR?: UserGymCheckInHistoryDetailWhereInput[]
    NOT?: UserGymCheckInHistoryDetailWhereInput | UserGymCheckInHistoryDetailWhereInput[]
    userId?: StringFilter<"UserGymCheckInHistoryDetail"> | string
    gymId?: StringFilter<"UserGymCheckInHistoryDetail"> | string
    checkInId?: StringFilter<"UserGymCheckInHistoryDetail"> | string
    createdAt?: DateTimeFilter<"UserGymCheckInHistoryDetail"> | Date | string
  }, "id">

  export type UserGymCheckInHistoryDetailOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    gymId?: SortOrder
    checkInId?: SortOrder
    createdAt?: SortOrder
    _count?: UserGymCheckInHistoryDetailCountOrderByAggregateInput
    _max?: UserGymCheckInHistoryDetailMaxOrderByAggregateInput
    _min?: UserGymCheckInHistoryDetailMinOrderByAggregateInput
  }

  export type UserGymCheckInHistoryDetailScalarWhereWithAggregatesInput = {
    AND?: UserGymCheckInHistoryDetailScalarWhereWithAggregatesInput | UserGymCheckInHistoryDetailScalarWhereWithAggregatesInput[]
    OR?: UserGymCheckInHistoryDetailScalarWhereWithAggregatesInput[]
    NOT?: UserGymCheckInHistoryDetailScalarWhereWithAggregatesInput | UserGymCheckInHistoryDetailScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserGymCheckInHistoryDetail"> | string
    userId?: StringWithAggregatesFilter<"UserGymCheckInHistoryDetail"> | string
    gymId?: StringWithAggregatesFilter<"UserGymCheckInHistoryDetail"> | string
    checkInId?: StringWithAggregatesFilter<"UserGymCheckInHistoryDetail"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserGymCheckInHistoryDetail"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckInCreateInput = {
    id?: string
    userId: string
    checkInAt?: Date | string
    validatedAt?: Date | string | null
  }

  export type CheckInUncheckedCreateInput = {
    id?: string
    userId: string
    checkInAt?: Date | string
    validatedAt?: Date | string | null
  }

  export type CheckInUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    checkInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CheckInUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    checkInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CheckInCreateManyInput = {
    id?: string
    userId: string
    checkInAt?: Date | string
    validatedAt?: Date | string | null
  }

  export type CheckInUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    checkInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CheckInUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    checkInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GymCreateInput = {
    id?: string
    title: string
    description?: string | null
    phone?: string | null
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GymUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    phone?: string | null
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GymUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GymUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GymCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    phone?: string | null
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GymUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GymUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckInGymCreateInput = {
    id?: string
    checkInId: string
    gymId: string
    createdAt?: Date | string
  }

  export type CheckInGymUncheckedCreateInput = {
    id?: string
    checkInId: string
    gymId: string
    createdAt?: Date | string
  }

  export type CheckInGymUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkInId?: StringFieldUpdateOperationsInput | string
    gymId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckInGymUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkInId?: StringFieldUpdateOperationsInput | string
    gymId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckInGymCreateManyInput = {
    id?: string
    checkInId: string
    gymId: string
    createdAt?: Date | string
  }

  export type CheckInGymUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkInId?: StringFieldUpdateOperationsInput | string
    gymId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckInGymUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkInId?: StringFieldUpdateOperationsInput | string
    gymId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGymCreateInput = {
    id?: string
    userId: string
    gymId: string
    createdAt?: Date | string
  }

  export type UserGymUncheckedCreateInput = {
    id?: string
    userId: string
    gymId: string
    createdAt?: Date | string
  }

  export type UserGymUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gymId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGymUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gymId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGymCreateManyInput = {
    id?: string
    userId: string
    gymId: string
    createdAt?: Date | string
  }

  export type UserGymUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gymId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGymUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gymId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCheckInCreateInput = {
    id?: string
    userId: string
    checkInId: string
    createdAt?: Date | string
  }

  export type UserCheckInUncheckedCreateInput = {
    id?: string
    userId: string
    checkInId: string
    createdAt?: Date | string
  }

  export type UserCheckInUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    checkInId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCheckInUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    checkInId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCheckInCreateManyInput = {
    id?: string
    userId: string
    checkInId: string
    createdAt?: Date | string
  }

  export type UserCheckInUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    checkInId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCheckInUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    checkInId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGymCheckInCreateInput = {
    id?: string
    userId: string
    gymId: string
    checkInId: string
    createdAt?: Date | string
  }

  export type UserGymCheckInUncheckedCreateInput = {
    id?: string
    userId: string
    gymId: string
    checkInId: string
    createdAt?: Date | string
  }

  export type UserGymCheckInUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gymId?: StringFieldUpdateOperationsInput | string
    checkInId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGymCheckInUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gymId?: StringFieldUpdateOperationsInput | string
    checkInId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGymCheckInCreateManyInput = {
    id?: string
    userId: string
    gymId: string
    checkInId: string
    createdAt?: Date | string
  }

  export type UserGymCheckInUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gymId?: StringFieldUpdateOperationsInput | string
    checkInId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGymCheckInUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gymId?: StringFieldUpdateOperationsInput | string
    checkInId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGymCheckInHistoryCreateInput = {
    id?: string
    userId: string
    gymId: string
    checkInId: string
    createdAt?: Date | string
  }

  export type UserGymCheckInHistoryUncheckedCreateInput = {
    id?: string
    userId: string
    gymId: string
    checkInId: string
    createdAt?: Date | string
  }

  export type UserGymCheckInHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gymId?: StringFieldUpdateOperationsInput | string
    checkInId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGymCheckInHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gymId?: StringFieldUpdateOperationsInput | string
    checkInId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGymCheckInHistoryCreateManyInput = {
    id?: string
    userId: string
    gymId: string
    checkInId: string
    createdAt?: Date | string
  }

  export type UserGymCheckInHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gymId?: StringFieldUpdateOperationsInput | string
    checkInId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGymCheckInHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gymId?: StringFieldUpdateOperationsInput | string
    checkInId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGymCheckInHistoryDetailCreateInput = {
    id?: string
    userId: string
    gymId: string
    checkInId: string
    createdAt?: Date | string
  }

  export type UserGymCheckInHistoryDetailUncheckedCreateInput = {
    id?: string
    userId: string
    gymId: string
    checkInId: string
    createdAt?: Date | string
  }

  export type UserGymCheckInHistoryDetailUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gymId?: StringFieldUpdateOperationsInput | string
    checkInId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGymCheckInHistoryDetailUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gymId?: StringFieldUpdateOperationsInput | string
    checkInId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGymCheckInHistoryDetailCreateManyInput = {
    id?: string
    userId: string
    gymId: string
    checkInId: string
    createdAt?: Date | string
  }

  export type UserGymCheckInHistoryDetailUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gymId?: StringFieldUpdateOperationsInput | string
    checkInId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGymCheckInHistoryDetailUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gymId?: StringFieldUpdateOperationsInput | string
    checkInId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CheckInCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    checkInAt?: SortOrder
    validatedAt?: SortOrder
  }

  export type CheckInMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    checkInAt?: SortOrder
    validatedAt?: SortOrder
  }

  export type CheckInMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    checkInAt?: SortOrder
    validatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type GymCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    phone?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GymAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type GymMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    phone?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GymMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    phone?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GymSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type CheckInGymCountOrderByAggregateInput = {
    id?: SortOrder
    checkInId?: SortOrder
    gymId?: SortOrder
    createdAt?: SortOrder
  }

  export type CheckInGymMaxOrderByAggregateInput = {
    id?: SortOrder
    checkInId?: SortOrder
    gymId?: SortOrder
    createdAt?: SortOrder
  }

  export type CheckInGymMinOrderByAggregateInput = {
    id?: SortOrder
    checkInId?: SortOrder
    gymId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserGymCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gymId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserGymMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gymId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserGymMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gymId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserCheckInCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    checkInId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserCheckInMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    checkInId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserCheckInMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    checkInId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserGymCheckInCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gymId?: SortOrder
    checkInId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserGymCheckInMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gymId?: SortOrder
    checkInId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserGymCheckInMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gymId?: SortOrder
    checkInId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserGymCheckInHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gymId?: SortOrder
    checkInId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserGymCheckInHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gymId?: SortOrder
    checkInId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserGymCheckInHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gymId?: SortOrder
    checkInId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserGymCheckInHistoryDetailCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gymId?: SortOrder
    checkInId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserGymCheckInHistoryDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gymId?: SortOrder
    checkInId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserGymCheckInHistoryDetailMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gymId?: SortOrder
    checkInId?: SortOrder
    createdAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}