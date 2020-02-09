import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Icon } from "@ui-kitten/components";
import { getSquads } from "../actions/soccer.action";
import { ListEntities } from "./ListEntities";
import { SvgUri } from "react-native-svg";
import { Image } from "react-native";

export const Squads = ({ route, navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const { teamId } = route.params;
    dispatch(getSquads(teamId));
  }, [dispatch, route.params, route.params.teamId]);

  const squadReducer = useSelector(state => state.squadReducer, shallowEqual);

  const onPlayerSelect = team => {
    console.log(team);
  };

  const iconImage = (style, item) => {
    return <Icon {...style} name="person" />;
  };

  return (
    <ListEntities
      data={squadReducer.squad}
      onPress={onPlayerSelect}
      iconComponent={iconImage}
    />
  );
};

export default Squads;
