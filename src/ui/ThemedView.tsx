import { View as NativeView, type ViewProps } from 'react-native';
import { useTheme } from '../hooks/useTheme';


export function View({ style, ...otherProps }: ViewProps) {
  const theme = useTheme()

  return <NativeView style={[{ backgroundColor:theme.colors.background }, style]} {...otherProps} />;
}