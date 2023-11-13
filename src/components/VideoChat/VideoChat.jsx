import "@livekit/components-styles";
import {
  ControlBar,
  GridLayout,
  LiveKitRoom,
  ParticipantTile,
  RoomAudioRenderer,
  VideoConference,
} from "@livekit/components-react";
import MyVideoConference from "./MyVideoConference";

const serverUrl = "wss://redux-start-up-igfrow0j.livekit.cloud";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTk5OTE0MzIsImlzcyI6IkFQSTVzeUR1WnB6dlI2OCIsIm5iZiI6MTY5OTkwNTAzMiwic3ViIjoicXVpY2tzdGFydCB1c2VyIHpuZHgxdSIsInZpZGVvIjp7ImNhblB1Ymxpc2giOnRydWUsImNhblB1Ymxpc2hEYXRhIjp0cnVlLCJjYW5TdWJzY3JpYmUiOnRydWUsInJvb20iOiJxdWlja3N0YXJ0IHJvb20iLCJyb29tSm9pbiI6dHJ1ZX19.SmXYjuGJJe-brOyWfpD9i3UE8UMOiS4PPHLHt6MIkXo";

export default function App() {
  return (
    <LiveKitRoom
      video={true}
      audio={true}
      token={token}
      connectOptions={{ autoSubscribe: false }}
      serverUrl={process.env.NEXT_PUBLIC_LK_SERVER_URL}
      data-lk-theme="default"
      style={{ height: "100vh" }}
    >
      <MyVideoConference />
      <RoomAudioRenderer />

      <ControlBar />
    </LiveKitRoom>
  );
}
