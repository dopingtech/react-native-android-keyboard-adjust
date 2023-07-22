import { NativeModules } from 'react-native';

export type AndroidKeyboardAdjustType = {
    setAdjustNothing(): void,
    setAdjustPan(): void,
    setAdjustResize(): void,
    setAdjustUnspecified(): void,
    setAlwaysVisible(): void,
    setAlwaysHidden(): void,
    setVisible(): void,
    setHidden(): void,
    setUnchanged(): void,
}

const AndroidKeyboardAdjust: AndroidKeyboardAdjustType = NativeModules.AndroidKeyboardAdjust;

export default AndroidKeyboardAdjust;
