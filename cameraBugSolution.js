import * as React from 'react';
import { Camera, useCameraDevices } from 'expo-camera';

export default function CameraScreen() {
  const devices = useCameraDevices();
  const [hasPermission, setHasPermission] = React.useState(null);
  const [isCameraLoaded, setIsCameraLoaded] = React.useState(false);
  const [type, setType] = React.useState(Camera.Constants.Type.back);

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleCameraLoaded = () => setIsCameraLoaded(true);

  if (hasPermission === null) {
    return <View />; // Show loading indicator if needed
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  if (!isCameraLoaded) {
    return <View><Text>Camera is loading</Text></View>;
  }

  return (
    <Camera style={{ flex: 1 }} type={type} onCameraReady={handleCameraLoaded}>
      {/* Camera controls here */}
    </Camera>
  );
}
