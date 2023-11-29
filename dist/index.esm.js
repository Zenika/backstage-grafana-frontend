import { createPlugin, createComponentExtension } from '@backstage/core-plugin-api';

const znkGrafanaPlugin = createPlugin({
  id: "znk-grafana"
});
const ZnkGrafanaDashboard = znkGrafanaPlugin.provide(
  createComponentExtension({
    name: "ZnkGrafanaDashboard",
    component: {
      lazy: () => import('./esm/Dashboard-9c922ad6.esm.js').then((c) => c.Dashboard)
    }
  })
);
const ZNK_GRANAFA_LOCATION = "znk.io/grafana";
const getZnkGrafanaConfiguration = (entity) => {
  var _a, _b;
  return ((_b = (_a = entity.metadata.annotations) == null ? void 0 : _a[ZNK_GRANAFA_LOCATION]) == null ? void 0 : _b.trim()) || "";
};
const isZnkGrafanaAvailable = (entity) => Boolean(getZnkGrafanaConfiguration(entity));

export { ZNK_GRANAFA_LOCATION, ZnkGrafanaDashboard, getZnkGrafanaConfiguration, isZnkGrafanaAvailable, znkGrafanaPlugin };
//# sourceMappingURL=index.esm.js.map
