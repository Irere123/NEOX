import React from "react";
import dayjs from "dayjs";

import { useMessagesQuery } from "../../generated/graphql";
import { MessagesLoadingScreen } from "../../shared-components/LoadingScreens";
import { SolidHashTag } from "../../icons";

interface Props {
  room: any;
}

const MessagesContainer: React.FC<Props> = ({ room }) => {
  const { data, loading } = useMessagesQuery({
    variables: {
      roomId: room?.id,
    },
  });

  if (loading) {
    return <MessagesLoadingScreen />;
  }

  return (
    <>
      {data?.messages.map((message) => (
        <div className="MessageContainer__message" key={message.id}>
          <div className="MessageContainer__messageAvatar">
            <img src={message.user.pictureUrl!} alt={message.user.username} />
          </div>
          <div className="MessageContainer__messageContent">
            <div>
              <p>{message.user.username}</p>
              <p>{dayjs(message.createdAt).format("DD/MM/YY")}</p>
            </div>
            <p>{message.text}</p>
          </div>
        </div>
      ))}
      {!data?.messages.length! ? (
        <div>
          <span
            style={{
              backgroundColor: "var(--color-primary-300)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
            }}
          >
            <SolidHashTag />
          </span>
          <h3 style={{ margin: "0" }}>Welcome to #{room?.name}</h3>
          <p style={{ margin: "0" }}>
            This is the beginning of the #{room?.name} channel
          </p>
        </div>
      ) : null}
    </>
  );
};

export default MessagesContainer;
