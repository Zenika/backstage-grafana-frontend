/// <reference types="react" />
import { Entity } from '@backstage/catalog-model';
export declare const znkGrafanaPlugin: import("@backstage/core-plugin-api").BackstagePlugin<{}, {}, {}>;
export declare const ZnkGrafanaDashboard: () => import("react").JSX.Element;
export declare const ZNK_GRANAFA_LOCATION = "znk.io/grafana";
export declare const getZnkGrafanaConfiguration: (entity: Entity) => string;
export declare const isZnkGrafanaAvailable: (entity: Entity) => boolean;
