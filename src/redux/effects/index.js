import { combineEpics } from "redux-observable";
import * as actions from "../actions";
import * as types from "../actions/types";
import { ofType } from "redux-observable";
import { mergeMap, catchError } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { of } from "rxjs";

const fetchDataEffect = (action$, state$) =>
  action$.pipe(
    ofType(types.FETCH_DATA),
    mergeMap(() =>
      ajax.get("https://fakestoreapi.com/products").pipe(
        mergeMap((ajaxResponse) =>
          of(actions.fetchDataSuccess(ajaxResponse.response))
        ),
        catchError((error) => of(actions.fetchDataError(error)))
      )
    )
  );

const rootEffect = combineEpics(fetchDataEffect);

export default rootEffect;
