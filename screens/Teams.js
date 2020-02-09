import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Icon } from "@ui-kitten/components";
import { getTeams } from "../actions/soccer.action";
import { ListEntities } from "./ListEntities";
import { SvgUri } from "react-native-svg";
import { Image } from "react-native";

export const Teams = ({ route, navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const { leagueId } = route.params;
    dispatch(getTeams(leagueId));
  }, [dispatch, route.params, route.params.leagueId]);

  const teamsReducer = useSelector(state => state.teamsReducer, shallowEqual);

  const onTeamSelect = team => {
    navigation.navigate("Squads", {
      teamId: team.id
    });
  };

  const iconImage = (style, item) => {
    const ext = item.crestUrl.substr(item.crestUrl.lastIndexOf(".") + 1);
    switch (ext) {
      case "svg":
        return <SvgUri {...style} uri={item.crestUrl} />;
      case "png":
        return <Image {...style} source={item.crestUrl} />;
      default:
        return <Icon {...style} name="people-outline" />;
    }
  };

  return (
    <ListEntities
      data={teamsReducer.teams}
      onPress={onTeamSelect}
      iconComponent={iconImage}
    />
  );
};

export default Teams;
