import { View as RNView, Text as RNText, Pressable as RNPressable, StyleProp, ViewStyle, TextStyle } from 'react-native';

// Type definitions
type ViewProps = {
  style?: StyleProp<ViewStyle>;
  children?: any;
};

type TextProps = {
  style?: StyleProp<TextStyle>;
  children?: any;
};

type PressableProps = {
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  children?: any;
};

// Simple wrapper components
export function View(props: ViewProps) {
  return <RNView {...props} />;
}

export function Text(props: TextProps) {
  return <RNText {...props} />;
}

export function Pressable(props: PressableProps) {
  return <RNPressable {...props} />;
} 