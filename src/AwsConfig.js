import { AwsRum } from 'aws-rum-web';


  const config = {
    sessionSampleRate: 1,
    guestRoleArn: "arn:aws:iam::381492146406:role/RUM-Monitor-eu-west-1-381492146406-2282744964071-Unauth",
    identityPoolId: "eu-west-1:a54e1a89-6160-4029-bf94-a39dea8e0549",
    endpoint: "https://dataplane.rum.eu-west-1.amazonaws.com",
    telemetries: ["performance","errors","http"],
    allowCookies: true,
    enableXRay: false
  };

  const APPLICATION_ID = '0151d31b-3476-45a2-9bf0-4d14bc7ad14f';
  const APPLICATION_VERSION = '1.0.0';
  const APPLICATION_REGION = 'eu-west-1';

  const awsRum = new AwsRum(
    APPLICATION_ID,
    APPLICATION_VERSION,
    APPLICATION_REGION,
    config
  );
export default awsRum