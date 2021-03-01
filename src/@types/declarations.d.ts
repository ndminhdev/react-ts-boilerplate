declare module "*.scss" {
  const content: { [className: string]: string };
  export = content;
}

declare module "*.less" {
  const content: { [className: string]: string };
  export = content;
}

declare module "*.svg" {
  import React = require("react");
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module "*.png";
declare module "*.gif";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.ico";

declare const IS_PROD: boolean;
declare const IS_DEV: boolean;
declare const IS_DEV_SERVER: boolean;
