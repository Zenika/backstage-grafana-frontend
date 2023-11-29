import React, { useState, useEffect } from 'react';
import { Progress, WarningPanel, InfoCard } from '@backstage/core-components';
import { makeStyles } from '@material-ui/core';
import { useEntity } from '@backstage/plugin-catalog-react';
import { useApi, configApiRef } from '@backstage/core-plugin-api';
import { getZnkGrafanaConfiguration } from '../index.esm.js';

const useStyles = makeStyles((theme) => ({
  infoCard: {
    marginBottom: theme.spacing(3)
  }
}));
const Dashboard = () => {
  const classes = useStyles();
  const { entity } = useEntity();
  const [dash, setDash] = useState(/* @__PURE__ */ React.createElement(Progress, null));
  const config = useApi(configApiRef);
  useEffect(() => {
    fetch(
      `${config.getString(
        "backend.baseUrl"
      )}/api/znkGrafana/snap?${new URLSearchParams({
        conf: getZnkGrafanaConfiguration(entity)
      })}`
    ).then((response) => response.json()).then((json) => {
      if (json.snapshots)
        setDash(
          /* @__PURE__ */ React.createElement(React.Fragment, null, json.snapshots.map((i, c) => /* @__PURE__ */ React.createElement(
            "img",
            {
              key: `snap${c}`,
              src: `data:image/png;base64,${i}`,
              alt: `snap${c}`
            }
          )))
        );
      else
        setDash(
          /* @__PURE__ */ React.createElement(
            WarningPanel,
            {
              title: "Failed to fetch snapshots",
              message: json.message
            }
          )
        );
    });
  }, [config, entity]);
  return /* @__PURE__ */ React.createElement(InfoCard, { title: "Grafana", className: classes.infoCard }, dash);
};

export { Dashboard };
//# sourceMappingURL=Dashboard-9c922ad6.esm.js.map
