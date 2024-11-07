import React, { Fragment } from "react";

import Header from "../../_components/_common/Header";
import DarkModetoggle from "@/components/settings/dark-mode";
import BillingSettings from "@/components/settings/billing-settings";

const Settings = () => {
  return (
    <Fragment>
      <Header label="Settings" showBackArrow />
      <BillingSettings />
      <DarkModetoggle />
    </Fragment>
  );
};

export default Settings;
