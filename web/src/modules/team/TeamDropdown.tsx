import React from "react";
import { Link } from "react-router-dom";

import { useTypeSafeTranslation } from "../../hooks/useTypeSafeTranslation";
import { NeoxNitro, FriendsAdd, SettingsIcon, PlusIcon } from "../../icons";

interface Props {
  teamName: string;
  isOwner: boolean;
  setOpenInviteModal: () => void;
  setOpenChannelModal: () => void;
}

const TeamDropDown: React.FC<Props> = ({
  teamName,
  isOwner,
  setOpenChannelModal,
  setOpenInviteModal,
}) => {
  const { t } = useTypeSafeTranslation();
  return (
    <div className="teamDropDown__overlay">
      <div className="teamDropDown__overlay__btn">
        <p>{t("overlays.teamOverlay.team_boost")}</p>
        <span>
          <NeoxNitro />
        </span>
      </div>
      <div
        className="teamDropDown__overlay__btn marked"
        onClick={setOpenInviteModal}
      >
        <p>{t("overlays.teamOverlay.invite_people")}</p>
        <span>
          <FriendsAdd fill="var(--color-accent-disabled)" />
        </span>
      </div>
      <Link to={`/${teamName}/settings`}>
        <div className="teamDropDown__overlay__btn">
          <p>{t("overlays.teamOverlay.team_settings")}</p>
          <span>
            <SettingsIcon />
          </span>
        </div>
      </Link>
      <div className="teamDropDown__overlay__btn" onClick={setOpenChannelModal}>
        <p>{t("overlays.teamOverlay.create_channel")}</p>
        <span>
          <PlusIcon />
        </span>
      </div>
      {!isOwner && (
        <div>
          <button>Leave team</button>
        </div>
      )}
    </div>
  );
};

export default TeamDropDown;
