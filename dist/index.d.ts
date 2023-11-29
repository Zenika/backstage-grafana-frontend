/// <reference types="react" />
import * as react from 'react';
import * as _backstage_core_plugin_api from '@backstage/core-plugin-api';
import { Entity } from '@backstage/catalog-model';

declare const znkGrafanaPlugin: _backstage_core_plugin_api.BackstagePlugin<{}, {}, {}>;
declare const ZnkGrafanaDashboard: () => react.JSX.Element;
declare const ZNK_GRANAFA_LOCATION = "znk.io/grafana";
declare const getZnkGrafanaConfiguration: (entity: Entity) => string;
declare const isZnkGrafanaAvailable: (entity: Entity) => boolean;

export { ZNK_GRANAFA_LOCATION, ZnkGrafanaDashboard, getZnkGrafanaConfiguration, isZnkGrafanaAvailable, znkGrafanaPlugin };
