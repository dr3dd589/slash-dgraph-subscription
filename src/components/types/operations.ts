import * as Types from '../../types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type AddInfoMutationVariables = Types.Exact<{
  var: Types.AddInfoInput;
}>;


export type AddInfoMutation = (
  { __typename?: 'Mutation' }
  & { addInfo?: Types.Maybe<(
    { __typename?: 'AddInfoPayload' }
    & { info?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Info' }
      & Pick<Types.Info, 'id' | 'name' | 'email' | 'emailSent'>
    )>>> }
  )> }
);


export const AddInfoDocument = gql`
    mutation addInfo($var: AddInfoInput!) {
  addInfo(input: [$var]) {
    info {
      id
      name
      email
      emailSent
    }
  }
}
    `;
export type AddInfoMutationFn = Apollo.MutationFunction<AddInfoMutation, AddInfoMutationVariables>;

/**
 * __useAddInfoMutation__
 *
 * To run a mutation, you first call `useAddInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addInfoMutation, { data, loading, error }] = useAddInfoMutation({
 *   variables: {
 *      var: // value for 'var'
 *   },
 * });
 */
export function useAddInfoMutation(baseOptions?: Apollo.MutationHookOptions<AddInfoMutation, AddInfoMutationVariables>) {
        return Apollo.useMutation<AddInfoMutation, AddInfoMutationVariables>(AddInfoDocument, baseOptions);
      }
export type AddInfoMutationHookResult = ReturnType<typeof useAddInfoMutation>;
export type AddInfoMutationResult = Apollo.MutationResult<AddInfoMutation>;
export type AddInfoMutationOptions = Apollo.BaseMutationOptions<AddInfoMutation, AddInfoMutationVariables>;

export const namedOperations = {
  Mutation: {
    addInfo: 'addInfo',
    deleteInfo: 'deleteInfo'
  }
}