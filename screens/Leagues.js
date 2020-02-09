import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getLeagues } from '../actions/soccer.action';
import { ListEntities } from './ListEntities';
import { SvgUri } from "react-native-svg";

export const Leagues = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLeagues());
  }, [dispatch]);

  const leaguesReducer = useSelector(
    state => state.leaguesReducer,
    shallowEqual
  );

  const onLeagueSelect = league => {
    navigation.navigate("Teams", {
      leagueId: league.id,
    });
  };

  const iconImage = (style, item) => {
    return (
      <SvgUri
        width={style.width}
        height={style.height}
        uri={item.area.ensignUrl || null}
      />
    );
  };

  return (
    <ListEntities
      data={leaguesReducer.leagues}
      onPress={onLeagueSelect}
      iconComponent={iconImage}
    />
  );
};

export default Leagues;
