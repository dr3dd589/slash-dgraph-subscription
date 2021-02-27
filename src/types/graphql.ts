export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The Int64 scalar type represents a signed 64‐bit numeric non‐fractional value.
   * Int64 can represent values in range [-(2^63),(2^63 - 1)].
   */
  Int64: any;
  /**
   * The DateTime scalar type represents date and time as a string in RFC3339 format.
   * For example: "1985-04-12T23:20:50.52Z" represents 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC.
   */
  DateTime: any;
};














export type AuthRule = {
  and?: Maybe<Array<Maybe<AuthRule>>>;
  or?: Maybe<Array<Maybe<AuthRule>>>;
  not?: Maybe<AuthRule>;
  rule?: Maybe<Scalars['String']>;
};

export enum InfoOrderable {
  Name = 'name',
  Email = 'email',
  Number = 'Number'
}

export type AddInfoInput = {
  name: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  Number?: Maybe<Scalars['String']>;
};

export type Int64Range = {
  min: Scalars['Int64'];
  max: Scalars['Int64'];
};

export type PointRef = {
  longitude: Scalars['Float'];
  latitude: Scalars['Float'];
};

export enum DgraphIndex {
  Int = 'int',
  Int64 = 'int64',
  Float = 'float',
  Bool = 'bool',
  Hash = 'hash',
  Exact = 'exact',
  Term = 'term',
  Fulltext = 'fulltext',
  Trigram = 'trigram',
  Regexp = 'regexp',
  Year = 'year',
  Month = 'month',
  Day = 'day',
  Hour = 'hour',
  Geo = 'geo'
}

export type MultiPolygonRef = {
  polygons: Array<PolygonRef>;
};

export type GenerateQueryParams = {
  get?: Maybe<Scalars['Boolean']>;
  query?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['Boolean']>;
  aggregate?: Maybe<Scalars['Boolean']>;
};

export type InfoOrder = {
  asc?: Maybe<InfoOrderable>;
  desc?: Maybe<InfoOrderable>;
  then?: Maybe<InfoOrder>;
};

export type PointList = {
  __typename?: 'PointList';
  points: Array<Point>;
};

export type ContainsFilter = {
  point?: Maybe<PointRef>;
  polygon?: Maybe<PolygonRef>;
};

export type DateTimeFilter = {
  eq?: Maybe<Scalars['DateTime']>;
  le?: Maybe<Scalars['DateTime']>;
  lt?: Maybe<Scalars['DateTime']>;
  ge?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  between?: Maybe<DateTimeRange>;
};


export type DateTimeRange = {
  min: Scalars['DateTime'];
  max: Scalars['DateTime'];
};

export type WithinFilter = {
  polygon: PolygonRef;
};

export type IntersectsFilter = {
  polygon?: Maybe<PolygonRef>;
  multiPolygon?: Maybe<MultiPolygonRef>;
};

export type PolygonGeoFilter = {
  near?: Maybe<NearFilter>;
  within?: Maybe<WithinFilter>;
  contains?: Maybe<ContainsFilter>;
  intersects?: Maybe<IntersectsFilter>;
};

export type GenerateMutationParams = {
  add?: Maybe<Scalars['Boolean']>;
  update?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type Int64Filter = {
  eq?: Maybe<Scalars['Int64']>;
  le?: Maybe<Scalars['Int64']>;
  lt?: Maybe<Scalars['Int64']>;
  ge?: Maybe<Scalars['Int64']>;
  gt?: Maybe<Scalars['Int64']>;
  between?: Maybe<Int64Range>;
};

export type StringTermFilter = {
  allofterms?: Maybe<Scalars['String']>;
  anyofterms?: Maybe<Scalars['String']>;
};

export type CustomHttp = {
  url: Scalars['String'];
  method: HttpMethod;
  body?: Maybe<Scalars['String']>;
  graphql?: Maybe<Scalars['String']>;
  mode?: Maybe<Mode>;
  forwardHeaders?: Maybe<Array<Scalars['String']>>;
  secretHeaders?: Maybe<Array<Scalars['String']>>;
  introspectionHeaders?: Maybe<Array<Scalars['String']>>;
  skipIntrospection?: Maybe<Scalars['Boolean']>;
};

export type PointGeoFilter = {
  near?: Maybe<NearFilter>;
  within?: Maybe<WithinFilter>;
};

export type Polygon = {
  __typename?: 'Polygon';
  coordinates: Array<PointList>;
};

export type PolygonRef = {
  coordinates: Array<PointListRef>;
};

export type FloatFilter = {
  eq?: Maybe<Scalars['Float']>;
  le?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  ge?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  between?: Maybe<FloatRange>;
};

export type StringHashFilter = {
  eq?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UpdateInfoPayload = {
  __typename?: 'UpdateInfoPayload';
  info?: Maybe<Array<Maybe<Info>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateInfoPayloadInfoArgs = {
  filter?: Maybe<InfoFilter>;
  order?: Maybe<InfoOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type StringExactFilter = {
  eq?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  le?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  ge?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  between?: Maybe<StringRange>;
};

export type FloatRange = {
  min: Scalars['Float'];
  max: Scalars['Float'];
};

export type InfoRef = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  Number?: Maybe<Scalars['String']>;
};

export type StringRange = {
  min: Scalars['String'];
  max: Scalars['String'];
};

export enum Mode {
  Batch = 'BATCH',
  Single = 'SINGLE'
}

export type Point = {
  __typename?: 'Point';
  longitude: Scalars['Float'];
  latitude: Scalars['Float'];
};

export type NearFilter = {
  distance: Scalars['Float'];
  coordinate: PointRef;
};

export type InfoPatch = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  Number?: Maybe<Scalars['String']>;
};


export type Info = {
  __typename?: 'Info';
  id: Scalars['ID'];
  name: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  Number?: Maybe<Scalars['String']>;
  emailSent?: Maybe<Scalars['Boolean']>;
};

export enum HttpMethod {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Patch = 'PATCH',
  Delete = 'DELETE'
}

export type MultiPolygon = {
  __typename?: 'MultiPolygon';
  polygons: Array<Polygon>;
};

export type IntFilter = {
  eq?: Maybe<Scalars['Int']>;
  le?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  ge?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  between?: Maybe<IntRange>;
};

export type DeleteInfoPayload = {
  __typename?: 'DeleteInfoPayload';
  info?: Maybe<Array<Maybe<Info>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteInfoPayloadInfoArgs = {
  filter?: Maybe<InfoFilter>;
  order?: Maybe<InfoOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type PointListRef = {
  points: Array<PointRef>;
};

export type AddInfoPayload = {
  __typename?: 'AddInfoPayload';
  info?: Maybe<Array<Maybe<Info>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddInfoPayloadInfoArgs = {
  filter?: Maybe<InfoFilter>;
  order?: Maybe<InfoOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type InfoAggregateResult = {
  __typename?: 'InfoAggregateResult';
  count?: Maybe<Scalars['Int']>;
  nameMin?: Maybe<Scalars['String']>;
  nameMax?: Maybe<Scalars['String']>;
  emailMin?: Maybe<Scalars['String']>;
  emailMax?: Maybe<Scalars['String']>;
  NumberMin?: Maybe<Scalars['String']>;
  NumberMax?: Maybe<Scalars['String']>;
};

export type UpdateInfoInput = {
  filter: InfoFilter;
  set?: Maybe<InfoPatch>;
  remove?: Maybe<InfoPatch>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addInfo?: Maybe<AddInfoPayload>;
  updateInfo?: Maybe<UpdateInfoPayload>;
  deleteInfo?: Maybe<DeleteInfoPayload>;
};


export type MutationAddInfoArgs = {
  input: Array<AddInfoInput>;
};


export type MutationUpdateInfoArgs = {
  input: UpdateInfoInput;
};


export type MutationDeleteInfoArgs = {
  filter: InfoFilter;
};

export type StringRegExpFilter = {
  regexp?: Maybe<Scalars['String']>;
};

export enum InfoHasFilter {
  Name = 'name',
  Email = 'email',
  Number = 'Number'
}

export type InfoFilter = {
  id?: Maybe<Array<Scalars['ID']>>;
  name?: Maybe<StringTermFilter>;
  has?: Maybe<InfoHasFilter>;
  and?: Maybe<Array<Maybe<InfoFilter>>>;
  or?: Maybe<Array<Maybe<InfoFilter>>>;
  not?: Maybe<InfoFilter>;
};

export type Query = {
  __typename?: 'Query';
  getInfo?: Maybe<Info>;
  queryInfo?: Maybe<Array<Maybe<Info>>>;
  aggregateInfo?: Maybe<InfoAggregateResult>;
};


export type QueryGetInfoArgs = {
  id: Scalars['ID'];
};


export type QueryQueryInfoArgs = {
  filter?: Maybe<InfoFilter>;
  order?: Maybe<InfoOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryAggregateInfoArgs = {
  filter?: Maybe<InfoFilter>;
};

export type IntRange = {
  min: Scalars['Int'];
  max: Scalars['Int'];
};

export type StringFullTextFilter = {
  alloftext?: Maybe<Scalars['String']>;
  anyoftext?: Maybe<Scalars['String']>;
};
