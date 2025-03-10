import {Image, View} from 'react-native';
import React, {useMemo} from 'react';

export default function MediaPage({route}): React.ReactElement {
  const {path, type} = route.params;

  const source = useMemo(() => ({uri: `file://${path}`}), [path]);

  return (
    <View>
      {type === 'photo' && (
        <Image
          source={source}
          style={{width: '90%', height: 500}}
          resizeMode="cover"
        />
      )}
    </View>
  );
}
